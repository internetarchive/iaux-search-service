import { SearchResponse } from './responses/search/search-response';
import { SearchParams } from './search-params';
import { MetadataResponse } from './responses/metadata/metadata-response';
import {
  SearchServiceError,
  SearchServiceErrorType,
} from './search-service-error';
import { SearchServiceInterface } from './search-service-interface';
import { Result } from '@internetarchive/result-type';
import { SearchType } from './search-type';
import { SearchBackendFactory } from './search-backend/search-backend-factory';

/**
 * The Search Service is responsible for taking the raw response provided by
 * the Search Backend and modeling it as a `SearchResponse` or `MetadataResponse`
 * object, depending on the type of response.
 */
export class SearchService implements SearchServiceInterface {
  public static default: SearchServiceInterface = new SearchService();

  constructor() {
    //this.searchBackend = searchBackend;
  }

  /** @inheritdoc */
  async search(
    params: SearchParams,
    searchType: SearchType = SearchType.METADATA
  ): Promise<Result<SearchResponse, SearchServiceError>> {
    const searchBackend = SearchBackendFactory.getBackendForSearchType(searchType);

    const rawResponse = await searchBackend.performSearch(params);
    if (rawResponse.error) {
      return rawResponse;
    }

    const modeledResponse = new SearchResponse(rawResponse.success);
    return { success: modeledResponse };
  }

  /** @inheritdoc */
  async fetchMetadata(
    identifier: string
  ): Promise<Result<MetadataResponse, SearchServiceError>> {
    const searchBackend = SearchBackendFactory.getBackendForSearchType(SearchType.METADATA);

    const rawResponse = await searchBackend.fetchMetadata(identifier);
    if (rawResponse.error) {
      return rawResponse;
    }

    if (rawResponse.success?.metadata === undefined) {
      return {
        error: new SearchServiceError(SearchServiceErrorType.itemNotFound),
      };
    }

    const modeledResponse = new MetadataResponse(rawResponse.success);
    return { success: modeledResponse };
  }

  /** @inheritdoc */
  async fetchMetadataValue<T>(
    identifier: string,
    keypath: string
  ): Promise<Result<T, SearchServiceError>> {
    const searchBackend = SearchBackendFactory.getBackendForSearchType(SearchType.METADATA);

    const result = await searchBackend.fetchMetadata(identifier, keypath);
    if (result.error) {
      return result;
    }

    if (result.success?.result === undefined) {
      return {
        error: new SearchServiceError(SearchServiceErrorType.itemNotFound),
      };
    }

    return { success: result.success.result };
  }
}
