import { ResponseFactory } from './responses/response-factory';
import { SearchResponse } from './responses/search/search-response';
import { SearchParams } from './search-params';
import { MetadataResponse } from './responses/metadata/metadata-response';
import { DefaultSearchBackend } from './search-backend/default-search-backend';
import { AlphaSearchBackend } from './search-backend/alpha-search-backend';
import { AlphaFullTextSearchBackend } from './search-backend/alpha-full-text-search-backend';
import {
  SearchServiceError,
  SearchServiceErrorType,
} from './search-service-error';
import { SearchServiceInterface } from './search-service-interface';
import {
  SearchBackendInterface,
  SearchBackendType,
} from './search-backend/search-backend-interface';
import { Result } from '@internetarchive/result-type';

/**
 * The Search Service is responsible for taking the raw response provided by
 * the Search Backend and modeling it as a `SearchResponse` or `MetadataResponse`
 * object, depending on the type of response.
 */
export class SearchService implements SearchServiceInterface {
  public static default: SearchServiceInterface = new SearchService(
    new DefaultSearchBackend()
  );

  public static alpha: SearchServiceInterface = new SearchService(
    new AlphaSearchBackend()
  );

  public static alphaFullText: SearchServiceInterface = new SearchService(
    new AlphaFullTextSearchBackend()
  );

  private searchBackend: SearchBackendInterface;

  private searchBackendType: SearchBackendType;

  constructor(searchBackend: SearchBackendInterface) {
    this.searchBackend = searchBackend;
    this.searchBackendType = searchBackend.serviceParam.name;
  }

  /** @inheritdoc */
  async search(
    params: SearchParams
  ): Promise<Result<SearchResponse, SearchServiceError>> {
    const rawResponse = await this.searchBackend.performSearch(params);
    if (rawResponse.error) {
      return rawResponse;
    }
    const modeledResponse = ResponseFactory.create(
      this.searchBackendType,
      rawResponse.success
    );
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
