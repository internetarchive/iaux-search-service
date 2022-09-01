/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect } from '@open-wc/testing';
import { FulltextSearchBackend } from '../src/search-backend/fulltext-search-backend';
import { MetadataSearchBackend } from '../src/search-backend/metadata-search-backend';
import { SearchBackendFactory } from '../src/search-backend/search-backend-factory';
import { SearchType } from '../src/search-type';

describe('SearchBackendFactory', () => {
  it('gets metadata backend', async () => {
    expect(
      SearchBackendFactory.getBackendForSearchType(SearchType.METADATA)
    ).to.be.instanceOf(MetadataSearchBackend);
  });

  it('gets fulltext backend', async () => {
    expect(
      SearchBackendFactory.getBackendForSearchType(SearchType.FULLTEXT)
    ).to.be.instanceOf(FulltextSearchBackend);
  });
});
