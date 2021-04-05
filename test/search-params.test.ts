import { expect } from '@open-wc/testing';

import {
  AggregateSearchParams,
  SearchParams,
  SortDirection,
  SortParam,
} from '../src/search-params';

describe('SearchParams', () => {
  it('can be instantiated with just a query', async () => {
    const query = 'title:foo AND collection:bar';
    const params = new SearchParams({ query });
    expect(params.query).to.equal(query);
  });

  it('can be instantiated with query params and fields', async () => {
    const query = 'title:foo AND collection:bar';
    const fields = ['identifier', 'foo', 'bar'];
    const params = new SearchParams({
      query,
      fields,
    });
    expect(params.fields).to.deep.equal(fields);
  });

  it('properly generates a URLSearchParam with just a query', async () => {
    const query = 'title:foo AND collection:bar';
    const params = new SearchParams({ query });
    const urlSearchParam = params.asUrlSearchParams;
    const queryAsString = urlSearchParam.toString();
    const expected = 'q=title%3Afoo+AND+collection%3Abar&output=json';
    expect(queryAsString).to.equal(expected);
  });

  it('properly generates a URLSearchParam with a query and fields', async () => {
    const query = 'title:foo AND collection:bar';
    const fields = ['identifier', 'foo', 'bar'];
    const params = new SearchParams({
      query,
      fields,
    });
    const urlSearchParam = params.asUrlSearchParams;
    const queryAsString = urlSearchParam.toString();
    const expected =
      'q=title%3Afoo+AND+collection%3Abar&output=json&fl=identifier%2Cfoo%2Cbar';
    expect(queryAsString).to.equal(expected);
  });

  it('properly generates a URLSearchParam with a query, sort, row, start, and fields', async () => {
    const query = 'title:foo AND collection:bar';
    const fields = ['identifier', 'foo', 'bar'];
    const sort = [new SortParam('downloads', SortDirection.Desc)];
    const params = new SearchParams({
      query,
      sort,
      rows: 53,
      page: 27,
      fields,
    });
    const urlSearchParam = params.asUrlSearchParams;
    const queryAsString = urlSearchParam.toString();
    const expected =
      'q=title%3Afoo+AND+collection%3Abar&output=json&rows=53&page=27&fl=identifier%2Cfoo%2Cbar&sort=downloads+desc';
    expect(queryAsString).to.equal(expected);
  });

  it('properly generates a URLSearchParam multiple sort params', async () => {
    const query = 'title:foo AND collection:bar';
    const sort = [
      new SortParam('downloads', SortDirection.Desc),
      new SortParam('foo', SortDirection.Asc),
    ];
    const params = new SearchParams({
      query,
      sort,
      rows: 53,
      page: 27,
    });
    const urlSearchParam = params.asUrlSearchParams;
    const queryAsString = urlSearchParam.toString();
    const expected =
      'q=title%3Afoo+AND+collection%3Abar&output=json&rows=53&page=27&sort=downloads+desc%2Cfoo+asc';
    expect(queryAsString).to.equal(expected);
  });

  it('properly generates a URLSearchParam with aggregations', async () => {
    const query = 'title:foo AND collection:bar';
    const aggregations = new AggregateSearchParams([
      {
        field: 'foo',
        size: 10,
      },
      {
        field: 'bar',
        size: 7,
      },
    ]);
    const params = new SearchParams({
      query,
      aggregations,
    });
    const urlSearchParam = params.asUrlSearchParams;
    const queryAsString = urlSearchParam.toString();
    const expected =
      'q=title%3Afoo+AND+collection%3Abar&output=json&user_aggs=%5B%7B%22terms%22%3A%7B%22field%22%3A%22foo%22%2C%22size%22%3A10%7D%7D%2C%7B%22terms%22%3A%7B%22field%22%3A%22bar%22%2C%22size%22%3A7%7D%7D%5D';
    expect(queryAsString).to.equal(expected);
  });
});
