/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect } from '@open-wc/testing';

import { SearchParams } from '../src/search-params';

import { SearchServiceErrorType } from '../src/search-service-error';
import { DefaultSearchBackend } from '../src/search-backend/default-search-backend';

describe('DefaultSearchBackend', () => {
  it('can fetch metadata', async () => {
    const fetchBackup = window.fetch;
    window.fetch = (): Promise<Response> => {
      return new Promise(resolve => {
        const response = new Response('{ "foo": "bar" }');
        resolve(response);
      });
    };

    const backend = new DefaultSearchBackend();
    const result = await backend.fetchMetadata('foo');
    expect(result.success?.foo).to.equal('bar');
    window.fetch = fetchBackup;
  });

  it('can perform a search', async () => {
    const fetchBackup = window.fetch;
    window.fetch = (): Promise<Response> => {
      return new Promise(resolve => {
        const response = new Response('{ "foo": "bar" }');
        resolve(response);
      });
    };

    const backend = new DefaultSearchBackend();
    const params = new SearchParams({ query: 'foo' });
    const result = await backend.performSearch(params);
    expect(result.success?.foo).to.equal('bar');
    window.fetch = fetchBackup;
  });

  it('returns a networkError if theres a problem fetching using String type', async () => {
    const fetchBackup = window.fetch;
    window.fetch = (): Promise<Response> => {
      throw 'network error';
    };

    const backend = new DefaultSearchBackend();
    const result = await backend.fetchMetadata('foo');
    expect(result.error?.type).to.equal(SearchServiceErrorType.networkError);
    expect(result.error?.message).to.equal('network error');
    window.fetch = fetchBackup;
  });

  it('returns a networkError if theres a problem fetching using Error type', async () => {
    const fetchBackup = window.fetch;
    window.fetch = (): Promise<Response> => {
      throw new Error('network error');
    };

    const backend = new DefaultSearchBackend();
    const result = await backend.fetchMetadata('foo');
    expect(result.error?.type).to.equal(SearchServiceErrorType.networkError);
    expect(result.error?.message).to.equal('network error');
    window.fetch = fetchBackup;
  });

  it('returns a decodingError if theres a problem decoding the json', async () => {
    const fetchBackup = window.fetch;
    window.fetch = (): Promise<Response> => {
      const response = new Response('boop');
      return new Promise(resolve => resolve(response));
    };

    const backend = new DefaultSearchBackend();
    const result = await backend.fetchMetadata('foo');
    expect(result.error?.type).to.equal(SearchServiceErrorType.decodingError);
    window.fetch = fetchBackup;
  });
});
