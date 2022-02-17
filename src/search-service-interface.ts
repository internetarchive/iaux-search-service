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

  search(options: {
    query: string;
  }): Promise<Result<SearchResponse, SearchServiceError>>;

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

  /**
   * Fetch the metadata value for a given identifier and keypath
   *
   * The response from this request can take any form, object, array, string, etc.
   * depending on the query. You can provide return typing in the response by
   * specifying the type. Note, there is no automatic type conversion since it can be anything.
   *
   * For example:
   *
   * ```ts
   * const collection = await searchService.fetchMetadataValue<string>('goody', 'metadata/collection/0');
   * console.debug('collection:', collection); => 'Goody Collection'
   *
   * const files_count = await searchService.fetchMetadataValue<number>('goody', 'files_count');
   * console.debug('files_count:', files_count); => 12
   * ```
   *
   * Keypath examples:
   *
   * /metadata/:identifier/metadata // returns the entire metadata object
   * /metadata/:identifier/server // returns the server for the given identifier
   * /metadata/:identifier/files_count
   * /metadata/:identifier/files?start=1&count=2 // query for files
   * /metadata/:identifier/metadata/collection // all collections
   * /metadata/:identifier/metadata/collection/0 // first collection
   * /metadata/:identifier/metadata/title
   * /metadata/:identifier/files/0/name // first file name
   *
   * @param identifier
   * @param keypath
   */
  fetchMetadataValue<T>(
    identifier: string,
    keypath: string
  ): Promise<Result<T, SearchServiceError>>;
}
