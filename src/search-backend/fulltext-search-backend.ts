/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchBackendInterface } from './search-backend-interface';
import { SearchParams } from '../search-params';
import { Result } from '@internetarchive/result-type';
import {
  SearchServiceError,
  SearchServiceErrorType,
} from '../search-service-error';
import { SearchParamURLGenerator } from '../search-param-url-generator';

/**
 * The FulltextSearchBackend performs a `window.fetch` request to archive.org
 */
export class FulltextSearchBackend implements SearchBackendInterface {
  private baseUrl: string;

  private servicePath: string;

  private includeCredentials: boolean;

  private requestScope?: string;

  constructor(options?: {
    baseUrl?: string;
    servicePath?: string;
    includeCredentials?: boolean;
    scope?: string;
  }) {
    this.baseUrl = options?.baseUrl ?? 'archive.org';
    this.servicePath = options?.servicePath ?? '/services/search/beta/page_production';

    if (options?.includeCredentials !== undefined) {
      this.includeCredentials = options.includeCredentials;
    } else {
      // include credentials if the request is coming from an archive.org domain
      // since credentialed requests are only allowed from archive.org domains
      // due to CORS restrictions, see
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials
      this.includeCredentials =
        window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/) !==
        null;
    }

    if (options?.scope !== undefined) {
      this.requestScope = options.scope;
    } else {
      const currentUrl = new URL(window.location.href);
      const scope = currentUrl.searchParams.get('scope');
      if (scope) {
        this.requestScope = scope;
      }
    }
  }

  /** @inheritdoc */
  async performSearch(
    params: SearchParams
  ): Promise<Result<any, SearchServiceError>> {
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const url = `https://${this.baseUrl}${this.servicePath}/?service_backend=fts&${queryAsString}`;
    return this.fetchUrl(url);
  }

  private async fetchUrl(
    url: string,
    options?: {
      requestOptions?: RequestInit;
    }
  ): Promise<Result<any, SearchServiceError>> {
    const finalUrl = new URL(url);
    if (this.requestScope) {
      finalUrl.searchParams.set('scope', this.requestScope);
    }

    let response: Response;
    // first try the fetch and return a networkError if it fails
    try {
      const fetchOptions = options?.requestOptions ?? {
        credentials: this.includeCredentials ? 'include' : 'same-origin',
      };
      response = await fetch(finalUrl.href, fetchOptions);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === 'string'
          ? err
          : 'Unknown error';
      return this.getErrorResult(SearchServiceErrorType.networkError, message);
    }

    // then try json decoding and return a decodingError if it fails
    try {
      const json = await response.json();
      // the advanced search endpoint doesn't return an HTTP Error 400
      // and instead returns an HTTP 200 with an `error` key in the payload
      const error = json['error'];
      if (error) {
        const forensics = json['forensics'];
        return this.getErrorResult(
          SearchServiceErrorType.searchEngineError,
          error,
          forensics
        );
      } else {
        // success
        return { success: json };
      }
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === 'string'
          ? err
          : 'Unknown error';
      return this.getErrorResult(SearchServiceErrorType.decodingError, message);
    }
  }

  private getErrorResult(
    errorType: SearchServiceErrorType,
    message?: string,
    details?: any
  ): Result<any, SearchServiceError> {
    const error = new SearchServiceError(errorType, message, details);
    const result = { error };
    return result;
  }
}
