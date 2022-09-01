/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect } from '@open-wc/testing';
import { FulltextSearchBackend } from '../../src/search-backend/fulltext-search-backend';

describe('FulltextSearchBackend', () => {
  it('can perform a search', async () => {
    const fetchBackup = window.fetch;
    window.fetch = (): Promise<Response> => {
      return new Promise(resolve => {
        const response = new Response('{ "foo": "bar" }');
        resolve(response);
      });
    };

    const backend = new FulltextSearchBackend();
    const params = { query: 'foo' };
    const result = await backend.performSearch(params);
    expect(result.success?.foo).to.equal('bar');
    window.fetch = fetchBackup;
  });

  it('sets the fts service backend', async () => {
    const fetchBackup = window.fetch;
    let urlCalled: RequestInfo | URL;
    let urlConfig: RequestInit | undefined;
    window.fetch = (
      url: RequestInfo | URL,
      config?: RequestInit
    ): Promise<Response> => {
      urlCalled = url;
      urlConfig = config;
      const response = new Response('boop');
      return new Promise(resolve => resolve(response));
    };

    const backend = new FulltextSearchBackend();
    await backend.performSearch({ query: 'foo' });
    expect(
      new URL(urlCalled!.toString()).searchParams.get('service_backend')
    ).to.equal('fts');
    window.fetch = fetchBackup;
  });

  it('includes credentials for search endpoint if requested', async () => {
    const fetchBackup = window.fetch;
    let urlCalled: RequestInfo | URL;
    let urlConfig: RequestInit | undefined;
    window.fetch = (
      url: RequestInfo | URL,
      config?: RequestInit
    ): Promise<Response> => {
      urlCalled = url;
      urlConfig = config;
      const response = new Response('boop');
      return new Promise(resolve => resolve(response));
    };

    const backend = new FulltextSearchBackend({
      scope: 'foo',
      includeCredentials: true,
    });
    await backend.performSearch({ query: 'foo' });
    expect(urlConfig?.credentials).to.equal('include');
    window.fetch = fetchBackup;
  });
});
