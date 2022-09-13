/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect } from '@open-wc/testing';

import { SearchService } from '../src/search-service';
import { SearchParams } from '../src/search-params';

import { MockResponseGenerator } from './mock-response-generator';
import { SearchResponse } from '../src/responses/search-response';
import { Result } from '@internetarchive/result-type';
import {
  SearchServiceError,
  SearchServiceErrorType,
} from '../src/search-service-error';
import { SearchBackendInterface } from '../src/search-backend/search-backend-interface';
import { SearchType } from '../src/search-type';
import { MetadataSearchBackend } from '../src/search-backend/metadata-search-backend';
import { FulltextSearchBackend } from '../src/search-backend/fulltext-search-backend';

describe('SearchService', () => {
  it('can search when requested', async () => {
    class MockSearchBackend implements SearchBackendInterface {
      async performSearch(
        params: SearchParams
      ): Promise<Result<SearchResponse, SearchServiceError>> {
        const responseGenerator = new MockResponseGenerator();
        const mockResponse = responseGenerator.generateMockMetadataSearchResponse(
          params
        );
        return { success: mockResponse };
      }
    }

    const backend = new MockSearchBackend();
    const realFactoryMethod = SearchService.getBackendForSearchType;
    SearchService.getBackendForSearchType = () => {
      return backend;
    };

    const query = 'title:foo AND collection:bar';
    const service = new SearchService();
    const result = await service.search({ query });
    expect(result.success?.request.finalizedParameters.user_query).to.equal(
      query
    );

    SearchService.getBackendForSearchType = realFactoryMethod;
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
    }

    const backend = new MockSearchBackend();
    const realFactoryMethod = SearchService.getBackendForSearchType;
    SearchService.getBackendForSearchType = () => {
      return backend;
    };

    const service = new SearchService();

    const searchResult = await service.search({ query: 'boop' });
    expect(searchResult.error).to.not.equal(undefined);
    expect(searchResult.error?.type).to.equal(
      SearchServiceErrorType.networkError
    );
    expect(searchResult.error?.message).to.equal('network error');

    SearchService.getBackendForSearchType = realFactoryMethod;
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
    }

    const backend = new MockSearchBackend();
    const realFactoryMethod = SearchService.getBackendForSearchType;
    SearchService.getBackendForSearchType = () => {
      return backend;
    };

    const service = new SearchService();

    const searchResult = await service.search({ query: 'boop' });
    expect(searchResult.error).to.not.equal(undefined);
    expect(searchResult.error?.type).to.equal(
      SearchServiceErrorType.decodingError
    );
    expect(searchResult.error?.message).to.equal('decoding error');

    SearchService.getBackendForSearchType = realFactoryMethod;
  });

  it('factory method gets metadata backend', async () => {
    expect(
      SearchService.getBackendForSearchType(SearchType.METADATA)
    ).to.be.instanceOf(MetadataSearchBackend);
  });

  it('factory method gets fulltext backend', async () => {
    expect(
      SearchService.getBackendForSearchType(SearchType.FULLTEXT)
    ).to.be.instanceOf(FulltextSearchBackend);
  });
});
