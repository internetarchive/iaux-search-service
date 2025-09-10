export { ItemHit } from './src/models/hit-types/item-hit';
export { TextHit } from './src/models/hit-types/text-hit';
export { SearchResult, HitType } from './src/models/hit-types/hit';
export {
  Aggregation,
  AggregationSortType,
  Bucket,
} from './src/models/aggregation';

export { SearchMetadata } from './src/models/search-metadata';
export { SearchResponse } from './src/responses/search-response';
export { SearchResponseHeader } from './src/responses/search-response-header';
export { SearchResponseSessionContext } from './src/responses/search-response-session-context';
export { SearchResponseParams } from './src/responses/search-response-params';
export {
  CollectionExtraInfo,
  RelatedCollection,
} from './src/responses/collection-extra-info';
export { UserDetails } from './src/responses/user-details';
export { AccountExtraInfo } from './src/responses/account-extra-info';
export { ExtraInfo } from './src/responses/extra-info';
export {
  PageElementMap,
  PageElementName,
  Review,
  ForumPost,
  WebArchiveEntry,
  LendingPageElement,
  LendingSubElement,
  LENDING_SUB_ELEMENTS,
} from './src/responses/page-elements';

export { MetadataSearchBackend } from './src/search-backend/metadata-search-backend';
export { FulltextSearchBackend } from './src/search-backend/fulltext-search-backend';
export { RadioSearchBackend } from './src/search-backend/radio-search-backend';

export { SearchServiceInterface } from './src/search-service-interface';
export { SearchService } from './src/search-service';
export { SearchBackendOptionsInterface } from './src/search-backend/search-backend-options';
export { SearchType } from './src/search-type';
export {
  SearchParams,
  PageType,
  SortParam,
  SortDirection,
  AggregateSearchParams,
  AggregateSearchParam,
  FilterMap,
  FieldFilter,
  FilterConstraint,
} from './src/search-params';
export { FederatedResults } from './src/responses/search-response-details';
export { FilterMapBuilder } from './src/filter-map-builder';
export { SearchServiceError } from './src/search-service-error';
