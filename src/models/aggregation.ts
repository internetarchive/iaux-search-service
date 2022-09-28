import { Memoize } from 'typescript-memoize';

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

export enum AggregationSortType {
  /**
   * Sort descending numerically by count/frequency
   */
  COUNT,
  /**
   * Sort ascending alphabetically by key
   */
  ALPHABETICAL,
  /**
   * Sort ascending numerically by key
   */
  NUMERIC,
}

export interface AggregationOptions {
  buckets: Bucket[] | number[];
  doc_count_error_upper_bound?: number;
  sum_other_doc_count?: number;
  first_bucket_key?: number;
  last_bucket_key?: number;
  number_buckets?: number;
  interval?: number;
}

/**
 * Aggregations are the datasource for facets and histograms
 */
export class Aggregation {
  /**
   * The year_histogram returns a `number` array, and
   * other facets return a `Bucket` array.
   */
  readonly buckets: Bucket[] | number[];
  readonly doc_count_error_upper_bound?: number;
  readonly sum_other_doc_count?: number;
  readonly first_bucket_key?: number;
  readonly last_bucket_key?: number;
  readonly number_buckets?: number;
  readonly interval?: number;

  constructor(options: AggregationOptions) {
    this.buckets = options.buckets;
    this.doc_count_error_upper_bound = options.doc_count_error_upper_bound;
    this.sum_other_doc_count = options.sum_other_doc_count;
    this.first_bucket_key = options.first_bucket_key;
    this.last_bucket_key = options.last_bucket_key;
    this.number_buckets = options.number_buckets;
    this.interval = options.interval;
  }

  /**
   * Returns a sorted copy of this aggregation's buckets, according to the given sort option.
   * This method is memoized and repeat calls should not incur a performance cost for a given
   * sort type after the first such call per instance.
   *
   * Purely numeric buckets (e.g., year_histogram) are not sorted by this method and are
   * returned as-is.
   *
   * @param sortType What to sort the buckets on.
   * Accepted values are 
   *  - `AggregationSortType.COUNT` (descending order)
   *  - `AggregationSortType.ALPHABETICAL` (ascending order)
   *  - `AggregationSortType.NUMERIC` (ascending order)
   */
  @Memoize()
  getSortedBuckets(sortType?: AggregationSortType): Bucket[] | number[] {
    // Don't apply sorts to purely numeric buckets (i.e., year_histogram).
    // Assumption here is that all the buckets have the same type as the
    // first bucket (which should be true in principle).
    if (typeof this.buckets[0] === 'number') {
      return [...(this.buckets as number[])];
    }

    // Default locale options
    const collator = new Intl.Collator();

    const bucketsClone = [...(this.buckets as Bucket[])];
    switch (sortType) {
      case AggregationSortType.ALPHABETICAL: // Ascending
        return bucketsClone.sort((a, b) => {
          return collator.compare(a.key.toString(), b.key.toString());
        });
      case AggregationSortType.NUMERIC: // Ascending
        return bucketsClone.sort((a, b) => Number(a) - Number(b));
      case AggregationSortType.COUNT: // Descending
      default:
        // Sorted by count by default
        return bucketsClone;
    }
  }
}
