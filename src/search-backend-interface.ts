/* eslint-disable @typescript-eslint/no-explicit-any */
import { Result } from './responses/result';
import { SearchParams } from './search-params';
import { SearchServiceError } from './search-service-error';

/**
 * An interface to provide the network layer to the `SearchService`.
 *
 * Objects implementing this interface are responsible for making calls to the Internet Archive
 * `advangedsearch` and `metadata` endpoints or otherwise providing a similar reponse in JSON
 * format.
 *
 * @export
 * @interface SearchBackendInterface
 */
export interface SearchBackendInterface {
  performSearch(params: SearchParams): Promise<Result<any, SearchServiceError>>;
  fetchMetadata(identifier: string): Promise<Result<any, SearchServiceError>>;
}
