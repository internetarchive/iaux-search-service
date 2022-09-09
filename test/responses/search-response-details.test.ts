import { expect } from '@open-wc/testing';
import { HitType } from '../../src/models/hit-types/hit';
import { ItemHit } from '../../src/models/hit-types/item-hit';
import { TextHit } from '../../src/models/hit-types/text-hit';
import { SearchResponseDetails } from '../../src/responses/search-response-details';

describe('SearchResponseDetails', () => {
  it('constructs item hits', () => {
    const responseBody = {
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
    };

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
    const responseBody = {
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
    };

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
});
