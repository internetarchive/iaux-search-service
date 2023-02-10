import { expect } from '@open-wc/testing';
import { Aggregation } from '../../src/models/aggregation';
import { HitType } from '../../src/models/hit-types/hit';
import { ItemHit } from '../../src/models/hit-types/item-hit';
import { TextHit } from '../../src/models/hit-types/text-hit';
import {
  SearchResponseBody,
  SearchResponseDetails,
} from '../../src/responses/search-response-details';

const responseBody: SearchResponseBody = {
  hits: {
    total: 2,
    returned: 2,
    hits: [
      {
        fields: {
          identifier: 'foo',
          mediatype: 'texts',
        },
      },
      {
        fields: {
          identifier: 'bar',
          collection: ['baz'],
        },
      },
    ],
  },
  collection_titles: {
    baz: 'Baz Collection',
  },
};

describe('SearchResponseDetails', () => {
  it('constructs item hits', () => {
    const responseSchema = {
      hit_type: 'item' as HitType,
      field_properties: {},
    };

    const details = new SearchResponseDetails(responseBody, responseSchema);
    expect(details.results[0]).to.be.instanceOf(ItemHit);
    expect(details.results[0].identifier).to.equal('foo');
    expect(details.results[0].mediatype?.value).to.equal('texts');
    expect(details.results[0].creator?.value).to.be.undefined;
    expect(details.results[1].identifier).to.equal('bar');
    expect(details.results[1].collection?.value).to.equal('baz');
  });

  it('constructs text hits', () => {
    const responseSchema = {
      hit_type: 'text' as HitType,
      field_properties: {},
    };

    const details = new SearchResponseDetails(responseBody, responseSchema);
    expect(details.results[0]).to.be.instanceOf(TextHit);
    expect(details.results[0].identifier).to.equal('foo');
    expect(details.results[0].mediatype?.value).to.equal('texts');
    expect(details.results[0].creator?.value).to.be.undefined;
    expect(details.results[1].identifier).to.equal('bar');
    expect(details.results[1].collection?.value).to.equal('baz');
  });

  it('includes aggregations', () => {
    const aggsResponseBody: SearchResponseBody = {
      hits: {
        total: 0,
        returned: 0,
        hits: [],
      },
      aggregations: {
        foo: new Aggregation({
          buckets: [
            {
              key: 'bar',
              doc_count: 10,
            },
          ],
        }),
      },
    };

    const responseSchema = {
      hit_type: 'item' as HitType,
      field_properties: {},
    };

    const details = new SearchResponseDetails(aggsResponseBody, responseSchema);
    expect(details.results.length).to.equal(0);
    expect(details.aggregations).to.deep.equal({
      foo: new Aggregation({
        buckets: [
          {
            key: 'bar',
            doc_count: 10,
          },
        ],
      }),
    });
  });

  it('provides access to collection titles map', () => {
    const responseSchema = {
      hit_type: 'item' as HitType,
      field_properties: {},
    };

    const details = new SearchResponseDetails(responseBody, responseSchema);
    expect(details.results.length).to.equal(2);
    expect(details.collectionTitles).to.deep.equal({ baz: 'Baz Collection' });
  });

  it('collection titles map is optional', () => {
    const responseBodyWithoutTitles = Object.assign(
      {},
      responseBody
    ) as SearchResponseBody;
    delete responseBodyWithoutTitles.collection_titles;

    const responseSchema = {
      hit_type: 'item' as HitType,
      field_properties: {},
    };

    const details = new SearchResponseDetails(
      responseBodyWithoutTitles,
      responseSchema
    );
    expect(details.results.length).to.equal(2);
    expect(details.collectionTitles).to.be.undefined;
  });
});
