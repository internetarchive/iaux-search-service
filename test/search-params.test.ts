import { expect } from '@open-wc/testing';
import { SearchParamURLGenerator } from '../src/search-param-url-generator';

import { SortParam } from '../src/search-params';

describe('SearchParams', () => {
  it('can be instantiated with just a query', async () => {
    const query = 'title:foo AND collection:bar';
    const params = { query };
    expect(params.query).to.equal(query);
  });

  it('can be instantiated with query params and fields', async () => {
    const query = 'title:foo AND collection:bar';
    const fields = ['identifier', 'foo', 'bar'];
    const params = {
      query,
      fields,
    };
    expect(params.fields).to.deep.equal(fields);
  });

  it('properly generates a URLSearchParam with just a query', async () => {
    const query = 'title:foo AND collection:bar';
    const params = { query };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const queryParams = new URL(`https://foo.bar/?${queryAsString}`)
      .searchParams;
    expect(queryParams.get('user_query')).to.equal(query);
  });

  it('properly generates a URLSearchParam with a query and fields', async () => {
    const query = 'title:foo AND collection:bar';
    const fields = ['identifier', 'foo', 'bar'];
    const params = {
      query,
      fields,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const queryParams = new URL(`https://foo.bar/?${queryAsString}`)
      .searchParams;
    expect(queryParams.get('user_query')).to.equal(query);
    expect(queryParams.get('fields')).to.equal('identifier,foo,bar');
  });

  it('properly generates a URLSearchParam with a query, sort, rows, page, and fields', async () => {
    const query = 'title:foo AND collection:bar';
    const fields = ['identifier', 'foo', 'bar'];
    const sort: SortParam[] = [{ field: 'downloads', direction: 'desc' }];
    const params = {
      query,
      sort,
      rows: 53,
      page: 27,
      fields,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const queryParams = new URL(`https://foo.bar/?${queryAsString}`)
      .searchParams;
    expect(queryParams.get('user_query')).to.equal(query);
    expect(queryParams.get('hits_per_page')).to.equal('53');
    expect(queryParams.get('page')).to.equal('27');
    expect(queryParams.get('fields')).to.equal('identifier,foo,bar');
    expect(queryParams.get('sort')).to.equal('downloads:desc');
  });

  it('properly generates a URLSearchParam multiple sort params', async () => {
    const query = 'title:foo AND collection:bar';
    const sort: SortParam[] = [
      { field: 'downloads', direction: 'desc' },
      { field: 'foo', direction: 'asc' },
    ];
    const params = {
      query,
      sort,
      rows: 53,
      page: 27,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const queryParams = new URL(`https://foo.bar/?${queryAsString}`)
      .searchParams;
    expect(queryParams.get('user_query')).to.equal(query);
    expect(queryParams.get('hits_per_page')).to.equal('53');
    expect(queryParams.get('page')).to.equal('27');
    expect(queryParams.get('sort')).to.equal('downloads:desc,foo:asc');
  });

  it('properly generates a URLSearchParam with a page_type', async () => {
    const query = 'title:foo AND collection:bar';
    const params = {
      query,
      pageType: 'foo',
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const queryParams = new URL(`https://foo.bar/?${queryAsString}`)
      .searchParams;
    expect(queryParams.get('user_query')).to.equal(query);
    expect(queryParams.get('page_type')).to.equal('foo');
  });

  it('properly generates a URLSearchParam with a page_type and page_target', async () => {
    const query = 'title:foo AND collection:bar';
    const params = {
      query,
      pageType: 'foo',
      pageTarget: 'bar',
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const queryParams = new URL(`https://foo.bar/?${queryAsString}`)
      .searchParams;
    expect(queryParams.get('user_query')).to.equal(query);
    expect(queryParams.get('page_type')).to.equal('foo');
    expect(queryParams.get('page_target')).to.equal('bar');
  });

  it('properly generates a URLSearchParam with aggregations omitted', async () => {
    const query = 'title:foo AND collection:bar';
    const params = {
      query,
      aggregations: {
        omit: true,
      },
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const queryParams = new URL(`https://foo.bar/?${queryAsString}`)
      .searchParams;
    expect(queryParams.get('user_query')).to.equal(query);
    expect(queryParams.get('aggregations')).to.equal('false');
  });

  it('properly generates a URLSearchParam with advanced aggregations', async () => {
    const query = 'title:foo AND collection:bar';
    const aggregations = {
      advancedParams: [
        {
          field: 'foo',
          size: 10,
        },
        {
          field: 'bar',
          size: 7,
        },
      ],
    };
    const params = {
      query,
      aggregations,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const queryParams = new URL(`https://foo.bar/?${queryAsString}`)
      .searchParams;
    expect(queryParams.get('user_query')).to.equal(query);

    const expectedAggregationsParam =
      '[{"terms":{"field":"foo","size":10}},{"terms":{"field":"bar","size":7}}]';
    expect(queryParams.get('aggregations')).to.equal(expectedAggregationsParam);
  });

  it('properly generates a URLSearchParam with simple aggregations', async () => {
    const query = 'title:foo AND collection:bar';
    const aggregations = {
      simpleParams: ['year', 'collection', 'subject'],
    };
    const params = {
      query,
      aggregations,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const queryParams = new URL(`https://foo.bar/?${queryAsString}`)
      .searchParams;
    expect(queryParams.get('user_query')).to.equal(query);
    expect(queryParams.get('aggregations')).to.equal('year,collection,subject');
  });

  it('properly generates a URLSearchParam with an aggregations_size param', async () => {
    const query = 'title:foo AND collection:bar';
    const aggregations = {
      simpleParams: ['year', 'collection', 'subject'],
    };
    const params = {
      query,
      aggregations,
      aggregationsSize: 3,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const queryParams = new URL(`https://foo.bar/?${queryAsString}`)
      .searchParams;
    expect(queryParams.get('user_query')).to.equal(query);
    expect(queryParams.get('aggregations')).to.equal('year,collection,subject');
    expect(queryParams.get('aggregations_size')).to.equal('3');
  });

  it('advanced aggregations take precedence if both simple and advanced provided', async () => {
    const query = 'title:foo AND collection:bar';
    const aggregations = {
      advancedParams: [
        {
          field: 'foo',
          size: 10,
        },
        {
          field: 'bar',
          size: 7,
        },
      ],
      simpleParams: ['year'],
    };
    const params = {
      query,
      aggregations,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const queryParams = new URL(`https://foo.bar/?${queryAsString}`)
      .searchParams;
    expect(queryParams.get('user_query')).to.equal(query);

    const expectedAggregationsParam =
      '[{"terms":{"field":"foo","size":10}},{"terms":{"field":"bar","size":7}}]';
    expect(queryParams.get('aggregations')).to.equal(expectedAggregationsParam);
  });

  it('properly generates a URLSearchParam with debugging enabled', async () => {
    const query = 'title:foo';
    const params = {
      query,
      debugging: true,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const queryParams = new URL(`https://foo.bar/?${queryAsString}`)
      .searchParams;
    expect(queryParams.get('user_query')).to.equal('title:foo');
    expect(queryParams.get('debugging')).to.equal('true');
  });

  it('properly generates a URLSearchParam with a uid', async () => {
    const query = 'title:foo';
    const params = {
      query,
      uid: 'boop',
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const queryParams = new URL(`https://foo.bar/?${queryAsString}`)
      .searchParams;
    expect(queryParams.get('user_query')).to.equal(query);
    expect(queryParams.get('uid')).to.equal('boop');
  });

  it('properly generates a URLSearchParam with the client url by default', async () => {
    const query = 'title:foo';
    const params = {
      query,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const queryParams = new URL(`https://foo.bar/?${queryAsString}`)
      .searchParams;
    expect(queryParams.get('user_query')).to.equal(query);

    // Don't rely on exact web-test-runner URLs, just verify the param was added and is a valid URL
    expect(queryParams.get('client_url')).to.exist;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(new URL(queryParams.get('client_url')!)).not.to.throw;
  });

  it('does not include client url when includeClientURL=false', async () => {
    const query = 'title:foo';
    const params = {
      query,
      includeClientUrl: false,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const queryParams = new URL(`https://foo.bar/?${queryAsString}`)
      .searchParams;
    expect(queryParams.get('user_query')).to.equal(query);
    expect(queryParams.get('client_url')).to.be.null;
  });

  it('does include client url when includeClientURL=true', async () => {
    const query = 'title:foo';
    const params = {
      query,
      includeClientUrl: true,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const queryParams = new URL(`https://foo.bar/?${queryAsString}`)
      .searchParams;
    expect(queryParams.get('user_query')).to.equal(query);

    // Don't rely on exact web-test-runner URLs, just verify the param was added and is a valid URL
    expect(queryParams.get('client_url')).to.exist;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(new URL(queryParams.get('client_url')!)).not.to.throw;
  });
});
