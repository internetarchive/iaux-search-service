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
    const params = { query, includeClientUrl: false };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const expected = 'user_query=title%3Afoo+AND+collection%3Abar';
    expect(queryAsString).to.equal(expected);
  });

  it('properly generates a URLSearchParam with a query and fields', async () => {
    const query = 'title:foo AND collection:bar';
    const fields = ['identifier', 'foo', 'bar'];
    const params = {
      query,
      fields,
      includeClientUrl: false,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const expected =
      'user_query=title%3Afoo+AND+collection%3Abar&fields=identifier%2Cfoo%2Cbar';
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
      includeClientUrl: false,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const expected =
      'user_query=title%3Afoo+AND+collection%3Abar&hits_per_page=53&page=27&fields=identifier%2Cfoo%2Cbar&sort=downloads%3Adesc';
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
      includeClientUrl: false,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const expected =
      'user_query=title%3Afoo+AND+collection%3Abar&hits_per_page=53&page=27&sort=downloads%3Adesc%2Cfoo%3Aasc';
    expect(queryAsString).to.equal(expected);
  });

  it('properly generates a URLSearchParam with a page_type', async () => {
    const query = 'title:foo AND collection:bar';
    const params = {
      query,
      pageType: 'foo',
      includeClientUrl: false,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const expected =
      'user_query=title%3Afoo+AND+collection%3Abar&page_type=foo';
    expect(queryAsString).to.equal(expected);
  });

  it('properly generates a URLSearchParam with a page_type and page_target', async () => {
    const query = 'title:foo AND collection:bar';
    const params = {
      query,
      pageType: 'foo',
      pageTarget: 'bar',
      includeClientUrl: false,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const expected =
      'user_query=title%3Afoo+AND+collection%3Abar&page_type=foo&page_target=bar';
    expect(queryAsString).to.equal(expected);
  });

  it('properly generates a URLSearchParam with aggregations omitted', async () => {
    const query = 'title:foo AND collection:bar';
    const params = {
      query,
      aggregations: {
        omit: true,
      },
      includeClientUrl: false,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const expected =
      'user_query=title%3Afoo+AND+collection%3Abar&aggregations=false';
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
      includeClientUrl: false,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const expected =
      'user_query=title%3Afoo+AND+collection%3Abar&aggregations=%5B%7B%22terms%22%3A%7B%22field%22%3A%22foo%22%2C%22size%22%3A10%7D%7D%2C%7B%22terms%22%3A%7B%22field%22%3A%22bar%22%2C%22size%22%3A7%7D%7D%5D';
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
      includeClientUrl: false,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const expected =
      'user_query=title%3Afoo+AND+collection%3Abar&aggregations=year%2Ccollection%2Csubject';
    expect(queryAsString).to.equal(expected);
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
      includeClientUrl: false,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const expected =
      'user_query=title%3Afoo+AND+collection%3Abar&aggregations=year%2Ccollection%2Csubject&aggregations_size=3';
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
      includeClientUrl: false,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const expected =
      'user_query=title%3Afoo+AND+collection%3Abar&aggregations=%5B%7B%22terms%22%3A%7B%22field%22%3A%22foo%22%2C%22size%22%3A10%7D%7D%2C%7B%22terms%22%3A%7B%22field%22%3A%22bar%22%2C%22size%22%3A7%7D%7D%5D';
    expect(queryAsString).to.equal(expected);
  });

  it('properly generates a URLSearchParam with debugging enabled', async () => {
    const query = 'title:foo';
    const params = {
      query,
      debugging: true,
      includeClientUrl: false,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const expected = 'user_query=title%3Afoo&debugging=true';
    expect(queryAsString).to.equal(expected);
  });

  it('properly generates a URLSearchParam with a uid', async () => {
    const query = 'title:foo';
    const params = {
      query,
      uid: 'foobar',
      includeClientUrl: false,
    };
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const expected = 'user_query=title%3Afoo&uid=foobar';
    expect(queryAsString).to.equal(expected);
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
    const expectedPrefix = 'user_query=title%3Afoo&client_url=http';
    expect(queryAsString).to.satisfy((str: string) =>
      str.startsWith(expectedPrefix)
    );
  });
});
