/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect } from '@open-wc/testing';

import { SearchService } from '../src/search-service';
import { SearchParams, ParamType } from '../src/search-params';

import { MockResponseGenerator } from './mock-response-generator';
import { SearchResponse } from '../src/responses/search/search-response';
import { MetadataResponse } from '../src/responses/metadata/metadata-response';
import { Result } from '@internetarchive/result-type';
import {
  SearchServiceError,
  SearchServiceErrorType,
} from '../src/search-service-error';
import {
  SearchBackendInterface,
  ServiceParam,
} from '../src/search-backend/search-backend-interface';

describe('SearchService', () => {
  it('can search when requested', async () => {
    class MockSearchBackend implements SearchBackendInterface {
      readonly serviceParam: ServiceParam = {
        name: 'default',
        param: '',
      };

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

      readonly querystringParams: Record<ParamType, string> = {
        query: 'q',
        sort: 'sort',
        rows: 'rows',
        page: 'page',
        fields: 'fl',
        aggregations: 'user_aggs',
        aggregations_size: 'user_aggs_size',
        service: '',
      };
    }

    const query = 'title:foo AND collection:bar';
    const backend = new MockSearchBackend();
    const service = new SearchService(backend);
    const result = await service.search({ query });
    expect(result.success?.responseHeader.params.query).to.equal(query);
  });

  it('can request metadata when requested', async () => {
    class MockSearchBackend implements SearchBackendInterface {
      readonly serviceParam: ServiceParam = {
        name: 'default',
        param: '',
      };

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

      readonly querystringParams: Record<ParamType, string> = {
        query: 'q',
        sort: 'sort',
        rows: 'rows',
        page: 'page',
        fields: 'fl',
        aggregations: 'user_aggs',
        aggregations_size: 'aggregations_size',
        service: '',
      };
    }

    const backend = new MockSearchBackend();
    const service = new SearchService(backend);
    const result = await service.fetchMetadata('foo');
    expect(result.success?.metadata.identifier).to.equal('foo');
  });

  describe('requestMetadataValue', async () => {
    class MockSearchBackend implements SearchBackendInterface {
      response: any;

      readonly serviceParam: ServiceParam = {
        name: 'default',
        param: '',
      };

      performSearch(
        params: SearchParams
      ): Promise<Result<SearchResponse, SearchServiceError>> {
        throw new Error('Method not implemented.');
      }

      async fetchMetadata(
        identifier: string,
        keypath?: string
      ): Promise<Result<any, SearchServiceError>> {
        return {
          success: {
            result: this.response,
          },
        };
      }

      readonly querystringParams: Record<ParamType, string> = {
        query: 'q',
        sort: 'sort',
        rows: 'rows',
        page: 'page',
        fields: 'fl',
        aggregations: 'user_aggs',
        aggregations_size: 'user_aggs_size',
        service: '',
      };
    }

    it('can request a metadata value', async () => {
      const backend = new MockSearchBackend();
      const service = new SearchService(backend);

      let expectedResult: any = 'foo';
      backend.response = expectedResult;

      let result = await service.fetchMetadataValue<typeof expectedResult>(
        'foo',
        'metadata'
      );
      expect(result.success).to.equal(expectedResult);

      expectedResult = { foo: 'bar' };
      backend.response = expectedResult;

      result = await service.fetchMetadataValue<typeof expectedResult>(
        'foo',
        'metadata'
      );
      expect(result.success).to.equal(expectedResult);
      expect(result.success.foo).to.equal('bar');
    });
  });

  it('returns an error result if the item is not found', async () => {
    class MockSearchBackend implements SearchBackendInterface {
      readonly serviceParam: ServiceParam = {
        name: 'default',
        param: '',
      };

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

      readonly querystringParams: Record<ParamType, string> = {
        query: 'q',
        sort: 'sort',
        rows: 'rows',
        page: 'page',
        fields: 'fl',
        aggregations: 'user_aggs',
        aggregations_size: 'user_aggs_size',
        service: '',
      };
    }

    const backend = new MockSearchBackend();
    const service = new SearchService(backend);
    const result = await service.fetchMetadata('foo');
    expect(result.error).to.not.equal(undefined);
    expect(result.error?.type).to.equal(SearchServiceErrorType.itemNotFound);

    const valueResult = await service.fetchMetadataValue('foo', 'metadata');
    expect(valueResult.error).to.not.equal(undefined);
    expect(valueResult.error?.type).to.equal(
      SearchServiceErrorType.itemNotFound
    );
  });

  it('returns the search backend network error if one occurs', async () => {
    class MockSearchBackend implements SearchBackendInterface {
      readonly serviceParam: ServiceParam = {
        name: 'default',
        param: '',
      };

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

      readonly querystringParams: Record<ParamType, string> = {
        query: 'q',
        sort: 'sort',
        rows: 'rows',
        page: 'page',
        fields: 'fl',
        aggregations: 'user_aggs',
        aggregations_size: 'aggregations_size',
        service: '',
      };
    }

    const backend = new MockSearchBackend();
    const service = new SearchService(backend);
    const metadataResult = await service.fetchMetadata('foo');
    expect(metadataResult.error).to.not.equal(undefined);
    expect(metadataResult.error?.type).to.equal(
      SearchServiceErrorType.networkError
    );
    expect(metadataResult.error?.message).to.equal('network error');

    const metadataValueResult = await service.fetchMetadataValue('foo', 'bar');
    expect(metadataValueResult.error).to.not.equal(undefined);
    expect(metadataValueResult.error?.type).to.equal(
      SearchServiceErrorType.networkError
    );
    expect(metadataValueResult.error?.message).to.equal('network error');

    const searchResult = await service.search({ query: 'boop' });
    expect(searchResult.error).to.not.equal(undefined);
    expect(searchResult.error?.type).to.equal(
      SearchServiceErrorType.networkError
    );
    expect(searchResult.error?.message).to.equal('network error');
  });

  it('returns the search backend decoding error if one occurs', async () => {
    class MockSearchBackend implements SearchBackendInterface {
      readonly serviceParam: ServiceParam = {
        name: 'default',
        param: '',
      };

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

      readonly querystringParams: Record<ParamType, string> = {
        query: 'q',
        sort: 'sort',
        rows: 'rows',
        page: 'page',
        fields: 'fl',
        aggregations: 'user_aggs',
        aggregations_size: 'user_aggs_size',
        service: '',
      };
    }

    const backend = new MockSearchBackend();
    const service = new SearchService(backend);
    const metadataResult = await service.fetchMetadata('foo');
    expect(metadataResult.error).to.not.equal(undefined);
    expect(metadataResult.error?.type).to.equal(
      SearchServiceErrorType.decodingError
    );
    expect(metadataResult.error?.message).to.equal('decoding error');

    const searchResult = await service.search({ query: 'boop' });
    expect(searchResult.error).to.not.equal(undefined);
    expect(searchResult.error?.type).to.equal(
      SearchServiceErrorType.decodingError
    );
    expect(searchResult.error?.message).to.equal('decoding error');
  });
});
