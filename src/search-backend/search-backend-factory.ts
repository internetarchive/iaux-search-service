import { FulltextSearchBackend } from "./fulltext-search-backend";
import { MetadataSearchBackend } from "./metadata-search-backend";
import { SearchType } from "../search-type";

export class SearchBackendFactory {
  private constructor () {}

  static getBackendForSearchType(type: SearchType) {
    switch (type) {
      case SearchType.FULLTEXT:
      case SearchType.TV:
      case SearchType.RADIO:
        return new FulltextSearchBackend();
      case SearchType.METADATA:
      default:
        return new MetadataSearchBackend();
    }
  }
}