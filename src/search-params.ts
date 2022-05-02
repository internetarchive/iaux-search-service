export interface AggregateSearchParam {
  field: string;
  size?: number;
}

export interface AggregateSearchParams {
  advancedParams?: AggregateSearchParam[];

  simpleParams?: string[];
}

export type SortDirection = 'asc' | 'desc';

export interface SortParam {
  field: string;
  direction: SortDirection;
}

/**
 * SearchParams provides an encapsulation to all of the search parameters
 * available for searching.
 *
 * It also provides an `asUrlSearchParams` method for converting the
 * parameters to an IA-style query string. ie. it converts the `fields` array
 * to `fl=identifier,collection` and `sort` to `sort=date+desc,downloads+asc`
 */
export interface SearchParams {
  query: string;

  sort?: SortParam[];

  rows?: number;

  page?: number;

  fields?: string[];

  aggregations?: AggregateSearchParams;
}
