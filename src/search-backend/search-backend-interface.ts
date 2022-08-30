/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Result } from '@internetarchive/result-type';
import type { SearchParams } from '../search-params';
import type { SearchServiceError } from '../search-service-error';

/**
 * An interface to provide the network layer to the `SearchService`.
 *
 * Objects implementing this interface are responsible for making calls to the Internet Archive
 * `advancedsearch` and `metadata` endpoints or otherwise providing a similar reponse in JSON
 * format.
 *
 * This allows for projects like the DWeb project to provide
 * alternative datasources for a request.
 *
 * @export
 * @interface SearchBackendInterface
 */
export interface SearchBackendInterface {
  /**
   * Perform a search for the given parameters.
   *
   * @param params
   */
  performSearch(params: SearchParams): Promise<Result<any, SearchServiceError>>;

  /**
   * Fetch metadata for a single item with an optional keypath
   *
   * @deprecated
   * @param identifier
   * @param keypath
   */
  fetchMetadata(
    identifier: string,
    keypath?: string
  ): Promise<Result<any, SearchServiceError>>;
}
