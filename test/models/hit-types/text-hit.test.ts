import { expect } from '@open-wc/testing';
import { TextHit } from '../../../src/models/hit-types/text-hit';

describe('TextHit', () => {
  it('constructs basic text hit', () => {
    const hit = new TextHit({ fields: {} });
    expect(hit.rawMetadata).to.deep.equal({ fields: {} });
    expect(hit.creator).to.be.undefined;
  });

  it('constructs text hit with partial fields', () => {
    const json = {
      fields: {
        identifier: 'foo',
        mediatype: 'texts',
        filename: 'foo-file.txt',
        file_basename: 'foo-file',
        file_creation_mtime: 1161893250,
        updated_on: '2022-04-06T08:34:38Z',
        created_on: '2016-10-09T16:51:05Z',
        page_num: 462,
        title: 'foo-title',
        creator: ['foo-creator'],
        subject: ['foo-subject1', 'foo-subject2'],
        date: '1904-01-01T00:00:00Z',
        publicdate: '2006-10-11T08:19:20Z',
        downloads: 1234,
        collection: ['foo-collection'],
        year: 2011,
        result_in_subfile: false,
        description: 'foo-description',
        __href__: '/details/foo?q=bar',
      },
      highlight: {
        text: ['foo {{{bar}}} baz'],
      },
      _score: 1,
    };

    const hit = new TextHit(json);
    expect(hit.rawMetadata).to.deep.equal(json);
    expect(hit.identifier).to.equal(json.fields.identifier);
    expect(hit.mediatype?.value).to.equal(json.fields.mediatype);
    expect(hit.filename?.value).to.equal(json.fields.filename);
    expect(hit.file_basename?.value).to.equal(json.fields.file_basename);
    expect(hit.file_creation_mtime?.value).to.equal(
      json.fields.file_creation_mtime
    );
    expect(hit.page_num?.value).to.equal(json.fields.page_num);
    expect(hit.title?.value).to.equal(json.fields.title);
    expect(hit.creator?.values).to.deep.equal(json.fields.creator);
    expect(hit.subject?.values).to.deep.equal(json.fields.subject);
    expect(hit.downloads?.value).to.equal(json.fields.downloads);
    expect(hit.collection?.values).to.deep.equal(json.fields.collection);
    expect(hit.year?.value).to.equal(json.fields.year);
    expect(hit.result_in_subfile?.value).to.equal(
      json.fields.result_in_subfile
    );
    expect(hit.description?.value).to.equal(json.fields.description);
    expect(hit.__href__?.value).to.equal(json.fields.__href__);
    expect(hit.highlight?.values).to.deep.equal(json.highlight.text);
  });
});
