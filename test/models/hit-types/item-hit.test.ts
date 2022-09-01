import { expect } from '@open-wc/testing';
import { ItemHit } from '../../../src/models/hit-types/item-hit';

describe('ItemHit', () => {
  it('constructs basic item hit', () => {
    const hit = new ItemHit({ fields: {} });
    expect(hit.rawMetadata).to.deep.equal({ fields: {} });
    expect(hit.creator).to.be.undefined;
  });

  it('constructs item hit with partial fields', () => {
    const json = {
      fields: {
        identifier: 'foo',
        title: 'foo-title',
        description: 'foo-description',
        subject: ['foo-subject1', 'foo-subject2'],
        creator: ['foo-creator'],
        collection: ['foo-collection'],
        date: '2011-07-20T00:00:00Z',
        year: 2011,
        mediatype: 'movies',
        item_size: 123456,
        files_count: 5,
        downloads: 123,
        week: 2,
        month: 15,
        indexflag: ['index', 'nonoindex'],
        lending___available_to_borrow: false,
        lending___available_to_browse: false,
        lending___available_to_waitlist: false,
      },
      highlight: null,
      _score: 1,
    };

    const hit = new ItemHit(json);
    expect(hit.rawMetadata).to.deep.equal(json);
    expect(hit.identifier).to.equal(json.fields.identifier);
    expect(hit.title?.value).to.equal(json.fields.title);
    expect(hit.description?.value).to.equal(json.fields.description);
    expect(hit.subject?.values).to.deep.equal(json.fields.subject);
    expect(hit.creator?.values).to.deep.equal(json.fields.creator);
    expect(hit.collection?.values).to.deep.equal(json.fields.collection);
    expect(hit.year?.value).to.equal(json.fields.year);
    expect(hit.mediatype?.value).to.equal(json.fields.mediatype);
    expect(hit.item_size?.value).to.equal(json.fields.item_size);
    expect(hit.files_count?.value).to.equal(json.fields.files_count);
    expect(hit.downloads?.value).to.equal(json.fields.downloads);
    expect(hit.week?.value).to.equal(json.fields.week);
    expect(hit.month?.value).to.equal(json.fields.month);
    expect(hit.indexflag?.values).to.deep.equal(json.fields.indexflag);
    expect(hit.lending___available_to_borrow?.value).to.equal(
      json.fields.lending___available_to_borrow
    );
    expect(hit.lending___available_to_browse?.value).to.equal(
      json.fields.lending___available_to_browse
    );
    expect(hit.lending___available_to_waitlist?.value).to.equal(
      json.fields.lending___available_to_waitlist
    );

    expect(hit.collection_files_count?.value).to.be.undefined;
    expect(hit.collection_size?.value).to.be.undefined;
    expect(hit.genre?.value).to.be.undefined;
    expect(hit.language?.value).to.be.undefined;
    expect(hit.lending___status?.value).to.be.undefined;
    expect(hit.licenseurl?.value).to.be.undefined;
    expect(hit.noindex?.value).to.be.undefined;
    expect(hit.num_favorites?.value).to.be.undefined;
    expect(hit.num_reviews?.value).to.be.undefined;
    expect(hit.type?.value).to.be.undefined;
    expect(hit.volume?.value).to.be.undefined;
  });
});
