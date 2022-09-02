import { FulltextSearchBackend } from './fulltext-search-backend';
import { MetadataSearchBackend } from './metadata-search-backend';
import { SearchType } from '../search-type';
import type { SearchBackendInterface } from './search-backend-interface';
import type { SearchBackendOptions } from './search-backend-options';
import { Memoize } from 'typescript-memoize';

/**
 * A factory to obtain the correct search backend for a given search type.
 */
export class SearchBackendFactory {
  private constructor() {
    //
  }

  /**
   * Retrieve a search backend that can handle the given type of search.
   * @param type The type of search that the backend needs to handle.
   * @param options Options to pass to the search backend.
   */
  @Memoize((type: SearchType, options: SearchBackendOptions = {}) => {
    // We can memoize backends based on their params, to avoid constructing redundant backends
    return `${type};${options.includeCredentials ?? ''};${options.scope ?? ''};${options.baseUrl ?? ''}`;
  })
  static getBackendForSearchType(
    type: SearchType,
    options: SearchBackendOptions = {}
  ): SearchBackendInterface {
    switch (type) {
      case SearchType.FULLTEXT:
      case SearchType.TV: // Will eventually have its own service backend
      case SearchType.RADIO: // Will eventually have its own service backend
        return new FulltextSearchBackend(options);
      case SearchType.METADATA:
      default:
        return new MetadataSearchBackend(options);
    }
  }
}
