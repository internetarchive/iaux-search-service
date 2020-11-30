import { SearchResponse } from './responses/search/search-response';
import { SearchBackendInterface } from './search-backend-interface';
import { SearchParams } from './search-params';
import { MetadataResponse } from './responses/metadata/metadata-response';
import { DefaultSearchBackend } from './default-search-backend';
import { Result } from './responses/result';
import {
  SearchServiceError,
  SearchServiceErrorType,
} from './search-service-error';
import { SearchServiceInterface } from './search-service-interface';

/**
 * The Search Service is responsible for taking the raw response provided by
 * the Search Backend and modeling it as a `SearchResponse` or `MetadataResponse`
 * object, depending on the type of response.
 */
export class SearchService implements SearchServiceInterface {
  public static default: SearchServiceInterface = new SearchService(
    new DefaultSearchBackend()
  );

  private searchBackend: SearchBackendInterface;

  constructor(searchBackend: SearchBackendInterface) {
    this.searchBackend = searchBackend;
  }

  /**
   * Perform a search with the given parameters.
   *
   * @param params SearchParams
   */
  async search(
    params: SearchParams
  ): Promise<Result<SearchResponse, SearchServiceError>> {
    const rawResponse = await this.searchBackend.performSearch(params);
    if (rawResponse.error) {
      return rawResponse;
    }

    const modeledResponse = new SearchResponse(rawResponse.success);
    return new Result<SearchResponse, SearchServiceError>(modeledResponse);
  }

  /**
   * Fetch the item's metadata.
   *
   * @param identifier string
   */
  async fetchMetadata(
    identifier: string
  ): Promise<Result<MetadataResponse, SearchServiceError>> {
    const rawResponse = await this.searchBackend.fetchMetadata(identifier);
    if (rawResponse.error) {
      return rawResponse;
    }

    if (rawResponse.success?.metadata === undefined) {
      return new Result<MetadataResponse, SearchServiceError>(
        undefined,
        new SearchServiceError(SearchServiceErrorType.itemNotFound)
      );
    }

    const modeledResponse = new MetadataResponse(rawResponse.success);
    return new Result<MetadataResponse, SearchServiceError>(modeledResponse);
  }
}
