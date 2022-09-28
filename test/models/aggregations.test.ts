import { expect } from '@open-wc/testing';

import { Aggregation, AggregationSortType } from '../../src/models/aggregation';

describe('Aggregations', () => {
  it('properly instantiates aggregation from json', async () => {
    const json = {
      number_buckets: 2,
      doc_count_error_upper_bound: 3,
      sum_other_doc_count: 4,
      first_bucket_key: 5,
      last_bucket_key: 6,
      interval: 7,
      buckets: [
        {
          key: 'foo',
          doc_count: 5,
        },
        {
          key: 'bar',
          doc_count: 10,
        },
      ],
    };
    const aggregation = new Aggregation(json);

    expect(aggregation.number_buckets).to.equal(2);
    expect(aggregation.doc_count_error_upper_bound).to.equal(3);
    expect(aggregation.sum_other_doc_count).to.equal(4);
    expect(aggregation.first_bucket_key).to.equal(5);
    expect(aggregation.last_bucket_key).to.equal(6);
    expect(aggregation.interval).to.equal(7);
    expect(aggregation.buckets).to.deep.equal(json.buckets);
  });

  it('returns alphabetically sorted buckets', async () => {
    const json = {
      buckets: [
        {
          key: 'foo',
          doc_count: 5,
        },
        {
          key: 'bar',
          doc_count: 10,
        },
        {
          key: 'baz',
          doc_count: 3,
        },
        {
          key: 'boop',
          doc_count: 2,
        },
      ],
    };
    const aggregation = new Aggregation(json);

    expect(
      aggregation.getSortedBuckets(AggregationSortType.ALPHABETICAL)
    ).to.deep.equal([
      {
        key: 'bar',
        doc_count: 10,
      },
      {
        key: 'baz',
        doc_count: 3,
      },
      {
        key: 'boop',
        doc_count: 2,
      },
      {
        key: 'foo',
        doc_count: 5,
      },
    ]);
  });

  it('returns count-sorted buckets', async () => {
    const json = {
      buckets: [
        {
          key: 'foo',
          doc_count: 5,
        },
        {
          key: 'bar',
          doc_count: 10,
        },
        {
          key: 'baz',
          doc_count: 3,
        },
        {
          key: 'boop',
          doc_count: 2,
        },
      ],
    };
    const aggregation = new Aggregation(json);

    expect(
      aggregation.getSortedBuckets(AggregationSortType.COUNT)
    ).to.deep.equal([
      {
        key: 'bar',
        doc_count: 10,
      },
      {
        key: 'foo',
        doc_count: 5,
      },
      {
        key: 'baz',
        doc_count: 3,
      },
      {
        key: 'boop',
        doc_count: 2,
      },
    ]);
  });

  it('returns numerically sorted buckets', async () => {
    const json = {
      buckets: [
        {
          key: '1970',
          doc_count: 5,
        },
        {
          key: '1985',
          doc_count: 10,
        },
        {
          key: '750',
          doc_count: 3,
        },
        {
          key: '1960',
          doc_count: 2,
        },
      ],
    };
    const aggregation = new Aggregation(json);

    expect(
      aggregation.getSortedBuckets(AggregationSortType.NUMERIC)
    ).to.deep.equal([
      {
        key: '750',
        doc_count: 3,
      },
      {
        key: '1960',
        doc_count: 2,
      },
      {
        key: '1970',
        doc_count: 5,
      },
      {
        key: '1985',
        doc_count: 10,
      },
    ]);
  });
});
