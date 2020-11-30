import { MetadataResponse } from './responses/metadata/metadata-response';
import { Result } from './responses/result';
import { SearchResponse } from './responses/search/search-response';
import { SearchParams } from './search-params';
import { SearchServiceError } from './search-service-error';

export interface SearchServiceInterface {
  search(
    params: SearchParams
  ): Promise<Result<SearchResponse, SearchServiceError>>;
  fetchMetadata(
    identifier: string
  ): Promise<Result<MetadataResponse, SearchServiceError>>;
}
