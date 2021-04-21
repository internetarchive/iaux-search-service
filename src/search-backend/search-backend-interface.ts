/* eslint-disable @typescript-eslint/no-explicit-any */
import { Result } from '@internetarchive/result-type';
import { SearchParams } from '../search-params';
import { SearchServiceError } from '../search-service-error';

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
  performSearch(params: SearchParams): Promise<Result<any, SearchServiceError>>;
  fetchMetadata(identifier: string): Promise<Result<any, SearchServiceError>>;
}
