import { SearchResponse } from './responses/search-response';
import type { SearchParams } from './search-params';
import { SearchServiceError } from './search-service-error';
import type { SearchServiceInterface } from './search-service-interface';
import type { Result } from '@internetarchive/result-type';
import { SearchType } from './search-type';
import { SearchBackendOptionsInterface } from './search-backend/search-backend-options';
import { SearchBackendInterface } from './search-backend/search-backend-interface';
import { FulltextSearchBackend } from './search-backend/fulltext-search-backend';
import { MetadataSearchBackend } from './search-backend/metadata-search-backend';
import { Memoize } from 'typescript-memoize';

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
    const searchBackend = SearchService.getBackendForSearchType(searchType);

    const rawResponse = await searchBackend.performSearch(params);
    if (rawResponse.error) {
      return rawResponse;
    }

    const modeledResponse = new SearchResponse(rawResponse.success);
    return { success: modeledResponse };
  }

  /**
   * Retrieve a search backend that can handle the given type of search.
   * @param type The type of search that the backend needs to handle.
   * @param options Options to pass to the search backend.
   */
  @Memoize((type: SearchType, options: SearchBackendOptionsInterface = {}) => {
    // We can memoize backends based on their params, to avoid constructing redundant backends
    const { includeCredentials = '', scope = '', baseUrl = '' } = options;
    return `${type};${includeCredentials};${scope};${baseUrl}`;
  })
  private static getBackendForSearchType(
    type: SearchType,
    options: SearchBackendOptionsInterface = {}
  ): SearchBackendInterface {
    switch (type) {
      case SearchType.TV: // Will eventually have its own service backend
      case SearchType.RADIO: // Will eventually have its own service backend
      case SearchType.FULLTEXT:
        return new FulltextSearchBackend(options);
      case SearchType.METADATA:
      default:
        return new MetadataSearchBackend(options);
    }
  }
}
