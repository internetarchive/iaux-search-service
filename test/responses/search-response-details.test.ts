import { expect } from '@open-wc/testing';
import { Aggregation } from '../../src/models/aggregation';
import { HitType } from '../../src/models/hit-types/hit';
import { ItemHit } from '../../src/models/hit-types/item-hit';
import { TextHit } from '../../src/models/hit-types/text-hit';
import {
  SearchResponseBody,
  SearchResponseDetails,
} from '../../src/responses/search-response-details';
import { SearchHitSchema } from '../../src/responses/search-hit-schema';
import { FavoritedSearchHit } from '../../src/models/hit-types/favorited-search-hit';

const itemSchema: SearchHitSchema = {
  hit_type: 'item' as HitType,
  field_properties: {},
};

const textSchema: SearchHitSchema = {
  hit_type: 'text' as HitType,
  field_properties: {},
};

const favSearchSchema: SearchHitSchema = {
  hit_type: 'favorited_search' as HitType,
  field_properties: {},
};

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
  collection_extra_info: {
    thumbnail_url: 'foo',
  },
};

const radioResponseBody: SearchResponseBody = {
  hits: {
    total: 2,
    returned: 2,
    hits: [
      {
        hit_type: 'asr_text',
        fields: {
          identifier: 'foo',
          mediatype: 'audio',
        },
      },
      {
        hit_type: 'asr_text',
        fields: {
          identifier: 'bar',
          collection: ['baz'],
        },
      },
    ],
  },
};

const favSearchResponseBody: SearchResponseBody = {
  hits: {
    total: 1,
    returned: 1,
    hits: [
      {
        hit_type: 'favorited_search',
        fields: {
          query: 'foo',
          mediatype: 'search',
          title: 'Foo',
        },
      },
    ],
  },
};

const accountUploadsResponseBody: SearchResponseBody = {
  page_elements: {
    uploads: {
      hits: {
        total: 2,
        returned: 2,
        hits: [
          {
            hit_type: 'item',
            fields: {
              identifier: 'foo',
              mediatype: 'texts',
            },
          },
          {
            hit_type: 'item',
            fields: {
              identifier: 'bar',
              collection: ['baz'],
            },
          },
        ],
      },
      aggregations: {
        subject: new Aggregation({
          buckets: [{ key: 'foo', doc_count: 1 }],
        }),
      },
    },
  },
  account_extra_info: {
    account_details: {
      screenname: 'Foobar',
      user_item_identifier: '@foobar',
      user_since: '2010-01-02T03:04:05Z',
    },
    policy_settings: {
      is_archive_user: true,
      preferences: [],
      privileges: [],
    },
    user_item_metadata: {
      title: 'Foobar',
      description: 'Foo bar baz',
    },
  },
};

const accountReviewsResponseBody: SearchResponseBody = {
  page_elements: {
    reviews: {
      hits: {
        total: 1,
        returned: 1,
        hits: [
          {
            hit_type: 'item',
            fields: {
              identifier: 'foo',
              mediatype: 'texts',
            },
            review: {
              reviewbody: 'foo bar baz',
              reviewtitle: 'Foo Bar',
              reviewer: 'Baz Quux',
              reviewer_itemname: '@bazquux',
              reviewdate: '2010-01-02 03:04:05',
              createdate: '2011-02-03 04:05:06',
              stars: '0',
              __href__: 'https://example.com?reviewid=123',
            },
          },
        ],
      },
    },
  },
};

const accountLendingResponseBody: SearchResponseBody = {
  page_elements: {
    lending: {
      loans: [
        {
          fields: {
            identifier: 'foo',
            mediatype: 'texts',
          },
        },
      ],
      waitlist: [
        {
          hit_type: 'item',
          fields: {
            identifier: 'bar',
            mediatype: 'texts',
          },
        },
      ],
      loan_history: [
        {
          hit_type: 'item',
          fields: {
            identifier: 'baz',
            mediatype: 'texts',
          },
        },
      ],
    },
  },
};

const accountWebArchivesResponseBody: SearchResponseBody = {
  page_elements: {
    web_archives: [
      {
        url: 'https://example.com/',
        captures: ['20100102030405', '20110203040506'],
      },
      {
        url: 'https://web.archive.org/save/',
        captures: [], // This one will be skipped due to empty captures
      },
    ],
  },
};

describe('SearchResponseDetails', () => {
  it('constructs item hits', () => {
    const details = new SearchResponseDetails(responseBody, itemSchema);
    expect(details.results[0]).to.be.instanceOf(ItemHit);
    expect(details.results[0].identifier).to.equal('foo');
    expect(details.results[0].mediatype?.value).to.equal('texts');
    expect(details.results[0].creator?.value).to.be.undefined;
    expect(details.results[1].identifier).to.equal('bar');
    expect(details.results[1].collection?.value).to.equal('baz');
  });

  it('constructs text hits', () => {
    const details = new SearchResponseDetails(responseBody, textSchema);
    expect(details.results[0]).to.be.instanceOf(TextHit);
    expect(details.results[0].identifier).to.equal('foo');
    expect(details.results[0].mediatype?.value).to.equal('texts');
    expect(details.results[0].creator?.value).to.be.undefined;
    expect(details.results[1].identifier).to.equal('bar');
    expect(details.results[1].collection?.value).to.equal('baz');
  });

  it('constructs favorited search hits', () => {
    const details = new SearchResponseDetails(
      favSearchResponseBody,
      favSearchSchema
    );
    expect(details.results[0]).to.be.instanceOf(FavoritedSearchHit);
    expect(details.results[0].query?.value).to.equal('foo');
    expect(details.results[0].title?.value).to.equal('Foo');
  });

  it('prefers hit-type specified on hit itself over schema hit-type', () => {
    const responseBodyWithTextHit = { ...responseBody } as SearchResponseBody;
    responseBodyWithTextHit.hits = {
      total: 2,
      returned: 2,
      hits: [
        {
          hit_type: 'text',
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
    };

    const details = new SearchResponseDetails(
      responseBodyWithTextHit,
      itemSchema
    );
    expect(details.results[0]).to.be.instanceOf(TextHit); // From hit, not schema
    expect(details.results[0].identifier).to.equal('foo');
    expect(details.results[0].mediatype?.value).to.equal('texts');
    expect(details.results[0].creator?.value).to.be.undefined;
    expect(details.results[1]).to.be.instanceOf(ItemHit); // From schema
    expect(details.results[1].identifier).to.equal('bar');
    expect(details.results[1].collection?.value).to.equal('baz');
  });

  it('constructs item hits when hit type unspecified', () => {
    const details = new SearchResponseDetails(
      responseBody,
      {} as SearchHitSchema
    );
    expect(details.results[0]).to.be.instanceOf(ItemHit);
    expect(details.results[0].identifier).to.equal('foo');
  });

  it("constructs text hits for 'asr_text' hit type", () => {
    const details = new SearchResponseDetails(
      radioResponseBody,
      {} as SearchHitSchema
    );
    expect(details.results[0]).to.be.instanceOf(TextHit);
    expect(details.results[0].identifier).to.equal('foo');
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

    const details = new SearchResponseDetails(aggsResponseBody, itemSchema);
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
    const details = new SearchResponseDetails(responseBody, itemSchema);
    expect(details.results.length).to.equal(2);
    expect(details.collectionTitles).to.deep.equal({ baz: 'Baz Collection' });
  });

  it('collection titles map is optional', () => {
    const responseBodyWithoutTitles = { ...responseBody } as SearchResponseBody;
    delete responseBodyWithoutTitles.collection_titles;

    const details = new SearchResponseDetails(
      responseBodyWithoutTitles,
      itemSchema
    );
    expect(details.results.length).to.equal(2);
    expect(details.collectionTitles).to.be.undefined;
  });

  it('provides access to collection extra info', () => {
    const details = new SearchResponseDetails(responseBody, itemSchema);
    expect(details.results.length).to.equal(2);
    expect(details.collectionExtraInfo).to.deep.equal({ thumbnail_url: 'foo' });
  });

  it('collection extra info is optional', () => {
    const responseBodyWithoutExtraInfo = {
      ...responseBody,
    } as SearchResponseBody;
    delete responseBodyWithoutExtraInfo.collection_extra_info;

    const details = new SearchResponseDetails(
      responseBodyWithoutExtraInfo,
      itemSchema
    );
    expect(details.results.length).to.equal(2);
    expect(details.collectionExtraInfo).to.be.undefined;
  });

  it('provides access to account extra info', () => {
    const details = new SearchResponseDetails(
      accountUploadsResponseBody,
      itemSchema
    );
    expect(details.accountExtraInfo?.user_item_metadata?.description).to.equal(
      'Foo bar baz'
    );
  });

  it('account extra info is optional', () => {
    const accountBodyWithoutExtraInfo = {
      ...accountUploadsResponseBody,
    } as SearchResponseBody;
    delete accountBodyWithoutExtraInfo.account_extra_info;

    const details = new SearchResponseDetails(
      accountBodyWithoutExtraInfo,
      itemSchema
    );
    expect(details.results.length).to.equal(2);
    expect(details.accountExtraInfo).to.be.undefined;
  });

  it('provides access to hits from page element', () => {
    const details = new SearchResponseDetails(
      accountUploadsResponseBody,
      itemSchema
    );
    expect(details.results.length).to.equal(2);
    expect(details.results[0].identifier).to.equal('foo');
  });

  it('provides access to aggregations from page element', () => {
    const details = new SearchResponseDetails(
      accountUploadsResponseBody,
      itemSchema
    );
    expect(details.aggregations).to.exist;
    expect(details.aggregations?.subject?.buckets[0]).to.deep.equal({
      key: 'foo',
      doc_count: 1,
    });
  });

  it('provides access to hit reviews from reviews page element', () => {
    const details = new SearchResponseDetails(
      accountReviewsResponseBody,
      itemSchema
    );
    expect(details.results.length).to.equal(1);
    expect(details.results[0].identifier).to.equal('foo');
    expect(details.results[0].review?.body).to.equal('foo bar baz');
    expect(details.results[0].review?.title).to.equal('Foo Bar');
    expect(details.results[0].review?.author).to.equal('Baz Quux');
    expect(details.results[0].review?.authorItem).to.equal('@bazquux');
    expect(details.results[0].review?.stars).to.equal(0);
    expect(details.results[0].review?.__href__).to.equal(
      'https://example.com?reviewid=123'
    );
  });

  it('provides access to lending page elements', () => {
    const details = new SearchResponseDetails(
      accountLendingResponseBody,
      itemSchema
    );
    expect(details.results.length, 'results length').to.equal(1);
    expect(details.totalResults, 'total').to.equal(1);
    expect(details.returnedCount, 'returned').to.equal(1);

    expect(details.pageElements?.lending?.loans?.[0]?.identifier).to.equal(
      'foo'
    );
    expect(details.pageElements?.lending?.waitlist?.[0]?.identifier).to.equal(
      'bar'
    );
    expect(
      details.pageElements?.lending?.loan_history?.[0]?.identifier
    ).to.equal('baz');
  });

  it('provides access to web archive page elements', () => {
    const details = new SearchResponseDetails(
      accountWebArchivesResponseBody,
      itemSchema
    );
    expect(details.results.length, 'results length').to.equal(1);
    expect(details.totalResults, 'total').to.equal(1);
    expect(details.returnedCount, 'returned').to.equal(1);

    const webArchiveResult = details.results[0];
    expect(webArchiveResult.title?.value).to.equal('https://example.com/');
    expect(webArchiveResult.capture_dates?.values?.length).to.equal(2);
    expect(webArchiveResult.__href__?.value).to.equal(
      'https://web.archive.org/web/20100102030405/https%3A%2F%2Fexample.com%2F'
    );
  });
});
