import { FulltextSearchBackend } from "./fulltext-search-backend";
import { MetadataSearchBackend } from "./metadata-search-backend";
import { SearchType } from "../search-type";
import type { SearchBackendInterface } from "./search-backend-interface";
import type { SearchBackendOptions } from "./search-backend-options";

/**
 * A factory to obtain the correct search backend 
 */
export class SearchBackendFactory {
  private constructor() {}

  static getBackendForSearchType(type: SearchType, options: SearchBackendOptions = {}): SearchBackendInterface {
    switch (type) {
      case SearchType.FULLTEXT:
      case SearchType.TV:
      case SearchType.RADIO:
        return new FulltextSearchBackend(options);
      case SearchType.METADATA:
      default:
        return new MetadataSearchBackend(options);
    }
  }
}