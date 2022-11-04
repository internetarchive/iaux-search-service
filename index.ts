export { Metadata } from './src/models/metadata';
export { ItemHit } from './src/models/hit-types/item-hit';
export { TextHit } from './src/models/hit-types/text-hit';
export { SearchResult, HitType } from './src/models/hit-types/hit';
export {
  Aggregation,
  AggregationSortType,
  Bucket,
} from './src/models/aggregation';

export { DateField } from './src/models/metadata-fields/field-types/date';

export { NumberField } from './src/models/metadata-fields/field-types/number';

export { StringField } from './src/models/metadata-fields/field-types/string';

export { BooleanField } from './src/models/metadata-fields/field-types/boolean';

export { ByteField } from './src/models/metadata-fields/field-types/byte';

export { DurationField } from './src/models/metadata-fields/field-types/duration';

export { PageProgressionField } from './src/models/metadata-fields/field-types/page-progression';

export { MediaTypeField } from './src/models/metadata-fields/field-types/mediatype';

export {
  MetadataFieldInterface,
  MetadataField,
} from './src/models/metadata-fields/metadata-field';

export { SearchResponse } from './src/responses/search-response';
export { SearchResponseHeader } from './src/responses/search-response-header';
export { SearchResponseParams } from './src/responses/search-response-params';

export { MetadataSearchBackend } from './src/search-backend/metadata-search-backend';
export { FulltextSearchBackend } from './src/search-backend/fulltext-search-backend';

export { SearchServiceInterface } from './src/search-service-interface';
export { SearchService } from './src/search-service';
export { SearchBackendOptionsInterface } from './src/search-backend/search-backend-options';
export { SearchType } from './src/search-type';
export {
  SearchParams,
  SortParam,
  SortDirection,
  AggregateSearchParams,
  AggregateSearchParam,
  FilterParam,
} from './src/search-params';
export { SearchServiceError } from './src/search-service-error';
