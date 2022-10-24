export interface AggregateSearchParam {
  field: string;
  size?: number;
}

/**
 * An object specifying which aggregation types should be returned with
 * a search query.
 */
export interface AggregateSearchParams {
  /**
   * An array of objects each specifying both a field name for which
   * aggregations should be returned and the number of "buckets" that
   * should be returned for it.
   *
   * Note: this format may not be supported by all backends. Run some
   * test queries with advanced aggregation objects before relying on this.
   */
  advancedParams?: AggregateSearchParam[];

  /**
   * An array of field names for which aggregations should be returned.
   */
  simpleParams?: string[];

  /**
   * A flag to indicate that aggregations should be omitted entirely
   * from the response (e.g., to retrieve only search results without
   * the added time cost of generating aggregations for them).
   *
   * Setting this to `true` in a search call will result in a response
   * with `undefined` aggregations.
   */
  omit?: boolean;
}

export type SortDirection = 'asc' | 'desc';

export interface SortParam {
  /**
   * The name of the field to sort on (e.g., 'title').
   */
  field: string;

  /**
   * Which direction to sort in ('asc' or 'desc').
   */
  direction: SortDirection;
}

/**
 * SearchParams provides an encapsulation to all of the search parameters
 * available for searching.
 *
 * We use `SearchParamURLGenerator.generateUrlSearchParams` to convert the
 * parameters to a PPS-conforming query string -- i.e., it converts the
 * `fields` array to `fields=identifier,collection` and `sort` to
 * `sort=date:desc,downloads:asc`
 */
export interface SearchParams {
  /**
   * The query string to search for.
   */
  query: string;

  /**
   * The page type to generate results for (e.g., 'search_results').
   *
   * Defaults to 'search_results' in the PPS. Meant to allow different
   * backend defaults to be used depending on the needs of certain pages.
   */
  pageType?: string;

  /**
   * For collection details pages, specifies the name of the collection
   * that is to be retrieved (e.g., 'prelinger').
   */
  pageTarget?: string;

  /**
   * One or more parameters specifying how the search results should be
   * sorted. Each parameter should include the field name and sort direction,
   * e.g.: `{ field: 'title', sort: 'desc' }`
   */
  sort?: SortParam[];

  /**
   * The number of results to be retrieved per page.
   */
  rows?: number;

  /**
   * The page number to be retrieved (beginning from page 1).
   *
   * Note that the _size_ of each page is determined by the `rows` parameter.
   */
  page?: number;

  /**
   * A list of fields that should be retrieved for each search result. In most
   * cases it should be unnecessary to specify the fields parameter as it is
   * defaulted by the PPS depending on the page_type. However, it may be useful
   * in some cases to restrict which fields are returned to a smaller subset of
   * the defaults.
   */
  fields?: string[];

  /**
   * An object specifying which aggregation types should be returned with
   * a search query.
   */
  aggregations?: AggregateSearchParams;

  /**
   * The number of buckets that should be returned for each aggregation type.
   * This defaults to 6 in the PPS (the number of facets displayed for each
   * facet type by default in the sidebar).
   */
  aggregationsSize?: number;

  /**
   * Whether to include debugging info in the returned PPS response.
   */
  debugging?: boolean;

  /**
   * A unique request ID to pass to the service.
   * Will be returned unmodified in the response, for ease of tracking responses,
   * e.g., to quickly determine whether a given response has obsolete data.
   */
  uid?: string;

  /**
   * Whether to include the client URL in the request.
   * This is useful for PPS debugging as it allows the backend folks to compare
   * any PPS response issues with the client URLs that generated them,
   * especially for issues related to parameter parsing & normalization.
   *
   * This defaults to true, as these should be sent on every request unless
   * there is a specific need not to include them for certain request types. Thus:
   *  * `includeClientUrl: undefined` causes `client_url` param to be included in the request, by default.
   *  * `includeClientUrl: true` causes `client_url` param to be included, explicitly.
   *  * `includeClientUrl: false` causes `client_url` param to _not_ be included in the request.
   */
  includeClientUrl?: boolean;
}
