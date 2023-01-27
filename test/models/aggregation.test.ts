import { expect } from '@open-wc/testing';
import {
  Aggregation,
  AggregationSortType,
  Bucket,
} from '../../src/models/aggregation';

describe('Aggregation model', () => {
  it('constructs with options', () => {
    const buckets = [1, 2, 3, 4];
    const doc_count_error_upper_bound = 10;
    const sum_other_doc_count = 20;
    const first_bucket_key = 0;
    const last_bucket_key = 3;
    const number_buckets = 4;
    const interval = 1;

    const agg = new Aggregation({
      buckets,
      doc_count_error_upper_bound,
      sum_other_doc_count,
      first_bucket_key,
      last_bucket_key,
      number_buckets,
      interval,
    });

    expect(agg.buckets).to.equal(buckets);
    expect(agg.doc_count_error_upper_bound).to.equal(
      doc_count_error_upper_bound
    );
    expect(agg.sum_other_doc_count).to.equal(sum_other_doc_count);
    expect(agg.first_bucket_key).to.equal(first_bucket_key);
    expect(agg.last_bucket_key).to.equal(last_bucket_key);
    expect(agg.number_buckets).to.equal(number_buckets);
    expect(agg.interval).to.equal(interval);
  });

  it('expects default sorted buckets by count', async () => {
    const buckets: Bucket[] = [
      { key: 'a', doc_count: 5 },
      { key: 'e', doc_count: 4 },
      { key: 'b', doc_count: 3 },
      { key: 'c', doc_count: 2 },
      { key: 'd', doc_count: 1 },
    ];
    const agg = new Aggregation({ buckets });

    expect(agg.getSortedBuckets(AggregationSortType.COUNT)).to.deep.equal(
      buckets
    );
  });

  it('sorts buckets alphabetically', async () => {
    const buckets: Bucket[] = [
      { key: 'e', doc_count: 4 },
      { key: 'c', doc_count: 2 },
      { key: 'b', doc_count: 3 },
      { key: 'd', doc_count: 1 },
      { key: 'a', doc_count: 5 },
    ];
    const agg = new Aggregation({ buckets });

    expect(
      agg.getSortedBuckets(AggregationSortType.ALPHABETICAL)
    ).to.deep.equal([
      { key: 'a', doc_count: 5 },
      { key: 'b', doc_count: 3 },
      { key: 'c', doc_count: 2 },
      { key: 'd', doc_count: 1 },
      { key: 'e', doc_count: 4 },
    ]);
  });

  it('sorts buckets numerically', async () => {
    const buckets: Bucket[] = [
      { key: 400, doc_count: 4 },
      { key: 1999, doc_count: 2 },
      { key: 1001, doc_count: 3 },
      { key: 1900, doc_count: 1 },
      { key: 2005, doc_count: 5 },
    ];
    const agg = new Aggregation({ buckets });

    expect(agg.getSortedBuckets(AggregationSortType.NUMERIC)).to.deep.equal([
      { key: 2005, doc_count: 5 },
      { key: 1999, doc_count: 2 },
      { key: 1900, doc_count: 1 },
      { key: 1001, doc_count: 3 },
      { key: 400, doc_count: 4 },
    ]);
  });

  it('does not sort raw number buckets', async () => {
    const buckets: number[] = [3, 5, 2, 4, 1];
    const agg = new Aggregation({ buckets });
    expect(agg.getSortedBuckets(AggregationSortType.COUNT)).to.deep.equal(
      buckets
    );
  });
});
