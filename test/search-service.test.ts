import { expect } from '@open-wc/testing';

import { SearchService } from '../src/search-service';
import { SearchParams } from '../src/search-params';

import { MockResponseGenerator } from './mock-response-generator';
import { SearchBackendInterface } from '../src/search-backend-interface';
import { SearchResponse } from '../src/responses/search/search-response';
import { MetadataResponse } from '../src/responses/metadata/metadata-response';

describe('SearchService', () => {
  it('can search when requested', async () => {
    class MockSearchBackend implements SearchBackendInterface {
      async fetchMetadata(identifier: string): Promise<MetadataResponse> {
        throw new Error('Method not implemented.');
      }

      async performSearch(params: any): Promise<SearchResponse> {
        const responseGenerator = new MockResponseGenerator()
        const mockResponse = responseGenerator.generateMockSearchResponse(params);
        return new Promise(resolve => resolve(mockResponse));
      }
    }

    const query = "title:foo AND collection:bar"
    const params = new SearchParams(query)
    const backend = new MockSearchBackend();
    const service = new SearchService(backend);
    const result = await service.search(params);
    expect(result.responseHeader.params.query).to.equal(query);
  });

  it('can request metadata when requested', async () => {
    class MockSearchBackend implements SearchBackendInterface {
      performSearch(params: SearchParams): Promise<SearchResponse> {
        throw new Error('Method not implemented.');
      }
      async fetchMetadata(identifier: string): Promise<MetadataResponse> {
        const responseGenerator = new MockResponseGenerator()
        const mockResponse = responseGenerator.generateMockMetadataResponse(identifier);
        return new Promise(resolve => resolve(mockResponse));
      }
    }

    const backend = new MockSearchBackend();
    const service = new SearchService(backend);
    const result = await service.fetchMetadata('foo');
    expect(result.metadata.identifier).to.equal('foo');
  });
});
