/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchBackendInterface } from './search-backend-interface';
import type { SearchParams } from '../search-params';
import type { Result } from '@internetarchive/result-type';
import {
  SearchServiceError,
  SearchServiceErrorType,
} from '../search-service-error';
import type { SearchBackendOptionsInterface } from './search-backend-options';

/**
 * An abstract base class for search backends.
 */
export abstract class BaseSearchBackend implements SearchBackendInterface {
  /**
   * The base URL / host this backend should use for its requests.
   * Defaults to 'archive.org'.
   */
  protected baseUrl: string;

  protected includeCredentials: boolean;

  protected requestScope?: string;

  constructor(options?: SearchBackendOptionsInterface) {
    this.baseUrl = options?.baseUrl ?? 'archive.org';

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
  abstract performSearch(
    params: SearchParams
  ): Promise<Result<any, SearchServiceError>>;

  /**
   * Fires a request to the URL (with this backend's options applied) and
   * asynchronously returns a Result object containing either the raw response
   * JSON or a SearchServiceError.
   */
  protected async fetchUrl(
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
      
      if (json['debugging']) {
        this.printDebuggingInfo(json);
      }

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

  private printDebuggingInfo(json: Record<string, any>) {
    const debugInfo = json.debugging?.debugging; // PPS debugging info is doubly-nested, not sure why
    const messages = debugInfo?.messages;
    const data = debugInfo?.data;

    console.group('debugging info');

    console.group('messages');
    for (const message of messages) {
      console.log(message);
    }
    console.groupEnd(); // end messages

    console.group('data');
    console.log(data);
    console.groupEnd(); // end data

    console.groupEnd(); // end debugging info
  }
}
