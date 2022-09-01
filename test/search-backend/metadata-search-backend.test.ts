/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect } from '@open-wc/testing';
import { MetadataSearchBackend } from '../../src/search-backend/metadata-search-backend';

describe('MetadataSearchBackend', () => {
  it('can perform a search', async () => {
    const fetchBackup = window.fetch;
    window.fetch = (): Promise<Response> => {
      return new Promise(resolve => {
        const response = new Response('{ "foo": "bar" }');
        resolve(response);
      });
    };

    const backend = new MetadataSearchBackend();
    const params = { query: 'foo' };
    const result = await backend.performSearch(params);
    expect(result.success?.foo).to.equal('bar');
    window.fetch = fetchBackup;
  });

  it('sets the metadata service backend', async () => {
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

    const backend = new MetadataSearchBackend();
    await backend.performSearch({ query: 'foo' });
    expect(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      new URL(urlCalled!.toString()).searchParams.get('service_backend')
    ).to.equal('metadata');
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

    const backend = new MetadataSearchBackend({
      scope: 'foo',
      includeCredentials: true,
    });
    await backend.performSearch({ query: 'foo' });
    expect(urlConfig?.credentials).to.equal('include');
    window.fetch = fetchBackup;
  });
});
