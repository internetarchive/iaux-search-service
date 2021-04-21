import { MetadataResponse } from './responses/metadata/metadata-response';
import { Result } from '@internetarchive/result-type';
import { SearchResponse } from './responses/search/search-response';
import { SearchParams } from './search-params';
import { SearchServiceError } from './search-service-error';

export interface SearchServiceInterface {
  /**
   * Perform a search for given search params
   *
   * @param {SearchParams} params
   * @returns {Promise<Result<SearchResponse, SearchServiceError>>}
   * @memberof SearchServiceInterface
   */
  search(
    params: SearchParams
  ): Promise<Result<SearchResponse, SearchServiceError>>;

  /**
   * Fetch metadata for a given identifier
   *
   * @param {string} identifier
   * @returns {Promise<Result<MetadataResponse, SearchServiceError>>}
   * @memberof SearchServiceInterface
   */
  fetchMetadata(
    identifier: string
  ): Promise<Result<MetadataResponse, SearchServiceError>>;
}
