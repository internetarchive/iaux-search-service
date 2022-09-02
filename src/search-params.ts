export interface AggregateSearchParam {
  field: string;
  size?: number;
}

export interface AggregateSearchParams {
  advancedParams?: AggregateSearchParam[];

  simpleParams?: string[];

  omit?: boolean;
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
 * The `SearchParamURLGenerator.generateUrlSearchParams` method can be used
 * for converting the parameters to an IA-style query string -- i.e., it 
 * converts the `fields` array to `fields=identifier,collection` and `sort` to 
 * `sort=date:desc,downloads:asc`
 */
export interface SearchParams {
  query: string;

  pageType: string;

  pageTarget: string;

  sort?: SortParam[];

  rows?: number;

  page?: number;

  fields?: string[];

  aggregations?: AggregateSearchParams;
}
