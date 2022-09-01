import { SearchResponse } from './responses/search-response';
import type { SearchParams } from './search-params';
import { SearchServiceError } from './search-service-error';
import type { SearchServiceInterface } from './search-service-interface';
import type { Result } from '@internetarchive/result-type';
import { SearchType } from './search-type';
import { SearchBackendFactory } from './search-backend/search-backend-factory';

/**
 * The Search Service is responsible for taking the raw response provided by
 * the Search Backend and modeling it as a `SearchResponse` object.
 */
export class SearchService implements SearchServiceInterface {
  public static default: SearchServiceInterface = new SearchService();

  constructor() {
    //
  }

  /** @inheritdoc */
  async search(
    params: SearchParams,
    searchType: SearchType = SearchType.METADATA
  ): Promise<Result<SearchResponse, SearchServiceError>> {
    const searchBackend = SearchBackendFactory.getBackendForSearchType(
      searchType
    );

    const rawResponse = await searchBackend.performSearch(params);
    if (rawResponse.error) {
      return rawResponse;
    }

    const modeledResponse = new SearchResponse(rawResponse.success);
    return { success: modeledResponse };
  }
}
