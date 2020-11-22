/* eslint-disable @typescript-eslint/no-explicit-any */
import { MetadataResponse } from './responses/metadata/metadata-response';
import { SearchResponse } from './responses/search/search-response';
import { SearchParams } from './search-params';

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
  performSearch(params: SearchParams): Promise<SearchResponse>;
  fetchMetadata(identifier: string): Promise<MetadataResponse>;
}
