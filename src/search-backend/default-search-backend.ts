/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchBackendInterface } from './search-backend-interface';
import { SearchParams } from '../search-params';
import { Result } from '@internetarchive/result-type';
import {
  SearchServiceError,
  SearchServiceErrorType,
} from '../search-service-error';

/**
 * The DefaultSearchBackend performs a `window.fetch` request to archive.org
 */
export class DefaultSearchBackend implements SearchBackendInterface {
  private baseUrl: string;

  constructor(baseUrl = 'archive.org') {
    this.baseUrl = baseUrl;
  }

  async performSearch(
    params: SearchParams
  ): Promise<Result<any, SearchServiceError>> {
    const urlSearchParam = params.asUrlSearchParams;
    const queryAsString = urlSearchParam.toString();
    const url = `https://${this.baseUrl}/advancedsearch.php?${queryAsString}`;
    return this.fetchUrl(url);
  }

  async fetchMetadata(
    identifier: string
  ): Promise<Result<any, SearchServiceError>> {
    const url = `https://${this.baseUrl}/metadata/${identifier}`;
    return this.fetchUrl(url);
  }

  private async fetchUrl(
    url: string
  ): Promise<Result<any, SearchServiceError>> {
    let response: Response;
    // first try the fetch and return a networkError if it fails
    try {
      response = await fetch(url);
    } catch (err) {
      const message = err instanceof Error ? err.message : err;
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
      const message = err instanceof Error ? err.message : err;
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
