/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect } from '@open-wc/testing';
import Sinon from 'sinon';
import { FulltextSearchBackend } from '../../src/search-backend/fulltext-search-backend';
import {
  SearchServiceError,
  SearchServiceErrorType,
} from '../../src/search-service-error';

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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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

  it('returns a network error result upon fetch errors', async () => {
    const fetchBackup = window.fetch;
    window.fetch = async () => {
      throw new Error();
    };

    const backend = new FulltextSearchBackend();
    const response = await backend.performSearch({ query: 'foo' });
    expect(response).to.exist; // No error thrown
    expect(response.error).to.be.instanceof(SearchServiceError);
    expect(response.error?.type).to.equal(SearchServiceErrorType.networkError);

    window.fetch = fetchBackup;
  });

  it('outputs debugging information if present', async () => {
    const fetchBackup = window.fetch;
    let urlCalled: RequestInfo | URL = '';
    window.fetch = async (url: RequestInfo | URL) => {
      urlCalled = url;
      return new Response(
        JSON.stringify({
          debugging: {
            debugging: {
              messages: ['boop'],
              data: {
                bar: 'baz',
              },
            },
          },
        })
      );
    };

    const logBackup = console.log;
    const logSpy = Sinon.spy();
    console.log = logSpy;

    const backend = new FulltextSearchBackend();
    await backend.performSearch({ query: 'foo', debugging: true });
    expect(urlCalled).to.include('debugging=true');
    expect(logSpy.calledWithExactly('boop')).to.be.true;
    expect(logSpy.calledWithExactly('bar', 'baz')).to.be.true;

    window.fetch = fetchBackup;
    console.log = logBackup;
  });

  it('handles incomplete debugging information gracefully', async () => {
    const fetchBackup = window.fetch;
    window.fetch = async () => {
      return new Response(
        JSON.stringify({
          debugging: {},
        })
      );
    };

    const logBackup = console.log;
    const logSpy = Sinon.spy();
    console.log = logSpy;

    const backend = new FulltextSearchBackend();
    const response = await backend.performSearch({
      query: 'foo',
      debugging: true,
    });
    expect(response).to.exist; // No error thrown

    window.fetch = fetchBackup;
    console.log = logBackup;
  });
});
