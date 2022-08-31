import type { Result } from '@internetarchive/result-type';
import type { SearchResponse } from './responses/search/search-response';
import type { SearchParams } from './search-params';
import type { SearchServiceError } from './search-service-error';
import type { SearchType } from './search-type';

export interface SearchServiceInterface {
  /**
   * Perform a search for given search params
   *
   * @param {SearchParams} params
   * @returns {Promise<Result<SearchResponse, SearchServiceError>>}
   * @memberof SearchServiceInterface
   */
  search(
    params: SearchParams,
    searchType?: SearchType
  ): Promise<Result<SearchResponse, SearchServiceError>>;
}
