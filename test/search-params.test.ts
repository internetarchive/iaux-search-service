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
    const expected = 'q=title%3Afoo+AND+collection%3Abar&output=json';
    expect(queryAsString).to.equal(expected);
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
    const expected =
      'q=title%3Afoo+AND+collection%3Abar&output=json&fields=identifier%2Cfoo%2Cbar';
    expect(queryAsString).to.equal(expected);
  });

  it('properly generates a URLSearchParam with a query, sort, row, start, and fields', async () => {
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
    const expected =
      'q=title%3Afoo+AND+collection%3Abar&output=json&rows=53&page=27&fields=identifier%2Cfoo%2Cbar&sort=downloads+desc';
    expect(queryAsString).to.equal(expected);
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
    const expected =
      'q=title%3Afoo+AND+collection%3Abar&output=json&rows=53&page=27&sort=downloads+desc%2Cfoo+asc';
    expect(queryAsString).to.equal(expected);
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
    const expected =
      'q=title%3Afoo+AND+collection%3Abar&output=json&user_aggs=%5B%7B%22terms%22%3A%7B%22field%22%3A%22foo%22%2C%22size%22%3A10%7D%7D%2C%7B%22terms%22%3A%7B%22field%22%3A%22bar%22%2C%22size%22%3A7%7D%7D%5D';
    expect(queryAsString).to.equal(expected);
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
    const expected =
      'q=title%3Afoo+AND+collection%3Abar&output=json&user_aggs=year%2Ccollection%2Csubject';
    expect(queryAsString).to.equal(expected);
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
    const expected =
      'q=title%3Afoo+AND+collection%3Abar&output=json&user_aggs=%5B%7B%22terms%22%3A%7B%22field%22%3A%22foo%22%2C%22size%22%3A10%7D%7D%2C%7B%22terms%22%3A%7B%22field%22%3A%22bar%22%2C%22size%22%3A7%7D%7D%5D';
    expect(queryAsString).to.equal(expected);
  });
});
