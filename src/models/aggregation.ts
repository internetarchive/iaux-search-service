/**
 * A Bucket is an individual entry for a facet or bin for a histogram
 *
 * @export
 * @interface Bucket
 */
export interface Bucket {
  key: string | number;
  doc_count: number;
}

/**
 * Aggregations are the datasource for facets and histograms
 *
 * @export
 * @interface Aggregation
 */
export interface Aggregation {
  doc_count_error_upper_bound?: number;
  sum_other_doc_count?: number;
  buckets: Bucket[];
}
