import { SearchResponse } from './responses/search/search-response';
import { SearchParams } from './search-params';
import { MetadataResponse } from './responses/metadata/metadata-response';
import { DefaultSearchBackend } from './search-backend/default-search-backend';
import {
  SearchServiceError,
  SearchServiceErrorType,
} from './search-service-error';
import { SearchServiceInterface } from './search-service-interface';
import { SearchBackendInterface } from './search-backend/search-backend-interface';
import { Result } from '@internetarchive/result-type';
import { MetadataSearchBackend } from './search-backend/metadata-search-backend';

/**
 * The Search Service is responsible for taking the raw response provided by
 * the Search Backend and modeling it as a `SearchResponse` or `MetadataResponse`
 * object, depending on the type of response.
 */
export class SearchService implements SearchServiceInterface {
  public static default: SearchServiceInterface = new SearchService(
    new MetadataSearchBackend()
  );

  private searchBackend: SearchBackendInterface;

  constructor(searchBackend: SearchBackendInterface) {
    this.searchBackend = searchBackend;
  }

  /** @inheritdoc */
  async search(
    params: SearchParams
  ): Promise<Result<SearchResponse, SearchServiceError>> {
    const rawResponse = await this.searchBackend.performSearch(params);
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
    const rawResponse = await this.searchBackend.fetchMetadata(identifier);
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
    const result = await this.searchBackend.fetchMetadata(identifier, keypath);
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
