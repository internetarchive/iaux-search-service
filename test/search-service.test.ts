/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect } from '@open-wc/testing';

import { SearchService } from '../src/search-service';
import { SearchParams } from '../src/search-params';

import { MockResponseGenerator } from './mock-response-generator';
import { SearchResponse } from '../src/responses/search/search-response';
import { MetadataResponse } from '../src/responses/metadata/metadata-response';
import { Result } from '@internetarchive/result-type';
import {
  SearchServiceError,
  SearchServiceErrorType,
} from '../src/search-service-error';
import { SearchBackendInterface } from '../src/search-backend/search-backend-interface';

describe('SearchService', () => {
  it('can search when requested', async () => {
    class MockSearchBackend implements SearchBackendInterface {
      async fetchMetadata(
        identifier: string
      ): Promise<Result<MetadataResponse, SearchServiceError>> {
        throw new Error('Method not implemented.');
      }

      async performSearch(
        params: SearchParams
      ): Promise<Result<SearchResponse, SearchServiceError>> {
        const responseGenerator = new MockResponseGenerator();
        const mockResponse = responseGenerator.generateMockSearchResponse(
          params
        );
        return { success: mockResponse };
      }
    }

    const query = 'title:foo AND collection:bar';
    const params = new SearchParams({ query });
    const backend = new MockSearchBackend();
    const service = new SearchService(backend);
    const result = await service.search(params);
    expect(result.success?.responseHeader.params.query).to.equal(query);
  });

  it('can request metadata when requested', async () => {
    class MockSearchBackend implements SearchBackendInterface {
      performSearch(
        params: SearchParams
      ): Promise<Result<SearchResponse, SearchServiceError>> {
        throw new Error('Method not implemented.');
      }
      async fetchMetadata(
        identifier: string
      ): Promise<Result<MetadataResponse, SearchServiceError>> {
        const responseGenerator = new MockResponseGenerator();
        const mockResponse = responseGenerator.generateMockMetadataResponse(
          identifier
        );
        return { success: mockResponse };
      }
    }

    const backend = new MockSearchBackend();
    const service = new SearchService(backend);
    const result = await service.fetchMetadata('foo');
    expect(result.success?.metadata.identifier).to.equal('foo');
  });

  it('returns an error result if the item is not found', async () => {
    class MockSearchBackend implements SearchBackendInterface {
      performSearch(
        params: SearchParams
      ): Promise<Result<SearchResponse, SearchServiceError>> {
        throw new Error('Method not implemented.');
      }
      async fetchMetadata(
        identifier: string
      ): Promise<Result<MetadataResponse, SearchServiceError>> {
        // this is unfortunate.. instead of getting an http 404 error,
        // we get an empty JSON object when an item is not found
        return { success: {} as any };
      }
    }

    const backend = new MockSearchBackend();
    const service = new SearchService(backend);
    const result = await service.fetchMetadata('foo');
    expect(result.error).to.not.equal(undefined);
    expect(result.error?.type).to.equal(SearchServiceErrorType.itemNotFound);
  });

  it('returns the search backend network error if one occurs', async () => {
    class MockSearchBackend implements SearchBackendInterface {
      async performSearch(
        params: SearchParams
      ): Promise<Result<SearchResponse, SearchServiceError>> {
        const error = new SearchServiceError(
          SearchServiceErrorType.networkError,
          'network error'
        );
        return { error };
      }
      async fetchMetadata(
        identifier: string
      ): Promise<Result<MetadataResponse, SearchServiceError>> {
        const error = new SearchServiceError(
          SearchServiceErrorType.networkError,
          'network error'
        );
        return { error };
      }
    }

    const backend = new MockSearchBackend();
    const service = new SearchService(backend);
    const metadataResult = await service.fetchMetadata('foo');
    expect(metadataResult.error).to.not.equal(undefined);
    expect(metadataResult.error?.type).to.equal(
      SearchServiceErrorType.networkError
    );
    expect(metadataResult.error?.message).to.equal('network error');

    const params = new SearchParams({ query: 'boop' });
    const searchResult = await service.search(params);
    expect(searchResult.error).to.not.equal(undefined);
    expect(searchResult.error?.type).to.equal(
      SearchServiceErrorType.networkError
    );
    expect(searchResult.error?.message).to.equal('network error');
  });

  it('returns the search backend decoding error if one occurs', async () => {
    class MockSearchBackend implements SearchBackendInterface {
      async performSearch(
        params: SearchParams
      ): Promise<Result<SearchResponse, SearchServiceError>> {
        const error = new SearchServiceError(
          SearchServiceErrorType.decodingError,
          'decoding error'
        );
        return { error };
      }
      async fetchMetadata(
        identifier: string
      ): Promise<Result<MetadataResponse, SearchServiceError>> {
        const error = new SearchServiceError(
          SearchServiceErrorType.decodingError,
          'decoding error'
        );
        return { error };
      }
    }

    const backend = new MockSearchBackend();
    const service = new SearchService(backend);
    const metadataResult = await service.fetchMetadata('foo');
    expect(metadataResult.error).to.not.equal(undefined);
    expect(metadataResult.error?.type).to.equal(
      SearchServiceErrorType.decodingError
    );
    expect(metadataResult.error?.message).to.equal('decoding error');

    const params = new SearchParams({ query: 'boop' });
    const searchResult = await service.search(params);
    expect(searchResult.error).to.not.equal(undefined);
    expect(searchResult.error?.type).to.equal(
      SearchServiceErrorType.decodingError
    );
    expect(searchResult.error?.message).to.equal('decoding error');
  });
});
