/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchBackendInterface } from './search-backend-interface';
import { SearchParams } from '../search-params';
import { Result } from '../responses/result';
import {
  SearchServiceError,
  SearchServiceErrorType,
} from '../search-service-error';

/**
 * The DefaultSearchBackend performs a `window.fetch` request to archive.org
 */
export class DefaultSearchBackend implements SearchBackendInterface {
  private baseUrl: string;

  private cacheHandler: CacheStorage;

  constructor(
    baseUrl = 'archive.org',
    cacheHandler: CacheStorage = window.caches
  ) {
    this.baseUrl = baseUrl;
    this.cacheHandler = cacheHandler;
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
    const cachedResponse = await this.getCachedResponse(url);
    if (cachedResponse) {
      const json = await cachedResponse.json();
      return this.getSuccessResult(json);
    }

    let response: Response | undefined;
    // first try the fetch and return a networkError if it fails
    try {
      await this.cacheResponse(url);
      response = await this.getCachedResponse(url);
    } catch (err) {
      const message = err instanceof Error ? err.message : err;
      return this.getErrorResult(SearchServiceErrorType.networkError, message);
    }

    // then try json decoding and return a decodingError if it fails
    try {
      const json = await response?.json();
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
        return this.getSuccessResult(json);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : err;
      return this.getErrorResult(SearchServiceErrorType.decodingError, message);
    }
  }

  private readonly CACHE_NAME = 'default-search-backend-cache';

  private async cacheResponse(url: string): Promise<void> {
    const cache = await this.cacheHandler.open(this.CACHE_NAME);
    await cache.add(url);
  }

  private async getCachedResponse(url: string): Promise<Response | undefined> {
    const cache = await this.cacheHandler.open(this.CACHE_NAME);
    return cache.match(url);
  }

  private getSuccessResult(json: any): Result<any, SearchServiceError> {
    return new Result<any, SearchServiceError>(json, undefined);
  }

  private getErrorResult(
    errorType: SearchServiceErrorType,
    message?: string,
    details?: any
  ): Result<any, SearchServiceError> {
    const error = new SearchServiceError(errorType, message, details);
    const result = new Result<any, SearchServiceError>(undefined, error);
    return result;
  }
}
