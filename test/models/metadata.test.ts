import { expect } from '@open-wc/testing';

import { Metadata } from '../../src/models/metadata';
import { DateParser } from '@internetarchive/field-parsers';
import { DateField } from '../../src/models/metadata-fields/field-types/date';

// Grab the names of all the getter fields on Metadata objects
// (with the exception of `identifier`, which is just a raw string rather
// than a field-type like the others).
const fieldNames: (keyof Metadata)[] = (Object.keys(
  Object.getOwnPropertyDescriptors(Metadata.prototype)
) as (keyof Metadata)[]).filter(
  field => !['constructor', 'identifier'].includes(field)
);

describe('Metadata', () => {
  it('properly instantiates metadata with identifier', async () => {
    const json = { identifier: 'foo', collection: 'bar' };
    const metadata = new Metadata(json);
    expect(metadata.identifier).to.equal('foo');
    expect(metadata.collection?.value).to.equal('bar');
  });

  it('handles missing data gracefully', () => {
    const metadata = new Metadata({});
    for (const key of fieldNames) {
      expect(metadata[key]).to.be.undefined;
    }
  });

  it('constructs metadata with partial fields', async () => {
    const json = {
      identifier: 'foo',
      title: 'foo-title',
      description: 'foo-description',
      subject: ['foo-subject1', 'foo-subject2'],
      creator: ['foo-creator'],
      collection: ['foo-collection'],
      date: '2011-07-20T00:00:00Z',
      mediatype: 'movies',
      item_size: 123456,
      files_count: 5,
      downloads: 123,
      week: 2,
      month: 15,
    };

    const metadata = new Metadata(json);
    expect(metadata.rawMetadata).to.deep.equal(json);
    expect(metadata.identifier).to.equal(json.identifier);

    // Ensure all existing fields are present
    for (const key of Object.keys(json)) {
      if (key === 'identifier') continue;
      const fieldName = key as Exclude<keyof typeof json, 'identifier'>;

      if (Array.isArray(json[fieldName])) {
        expect(metadata[fieldName]?.values).to.deep.equal(json[fieldName]);
      } else if (metadata[fieldName] instanceof DateField) {
        expect(metadata[fieldName]?.value).to.deep.equal(
          DateParser.shared.parseValue(json[fieldName].toString())
        );
      } else {
        expect(metadata[fieldName]?.value).to.equal(json[fieldName]);
      }
    }

    // Other fields should all be undefined
    expect(metadata.addeddate?.value).to.be.undefined;
    expect(metadata.avg_rating?.value).to.be.undefined;
    expect(metadata.collection_size?.value).to.be.undefined;
    expect(metadata.issue?.value).to.be.undefined;
    expect(metadata.item_count?.value).to.be.undefined;
    expect(metadata.language?.value).to.be.undefined;
    expect(metadata.noindex?.value).to.be.undefined;
    expect(metadata.num_favorites?.value).to.be.undefined;
    expect(metadata.num_reviews?.value).to.be.undefined;
    expect(metadata.publicdate?.value).to.be.undefined;
    expect(metadata.reviewdate?.value).to.be.undefined;
    expect(metadata.source?.value).to.be.undefined;
    expect(metadata.type?.value).to.be.undefined;
    expect(metadata.volume?.value).to.be.undefined;
  });
});
