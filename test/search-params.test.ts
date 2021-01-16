import { expect } from '@open-wc/testing';

import { SearchParams, SortDirection, SortParam } from '../src/search-params';

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

  it('can return the fields as a string', async () => {
    const fields = ['identifier', 'foo', 'bar'];
    const fieldsAsString = fields.join(',');
    expect(fieldsAsString).to.equal('identifier,foo,bar');
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
      'q=title%3Afoo+AND+collection%3Abar&output=json&fl%5B%5D=identifier&fl%5B%5D=foo&fl%5B%5D=bar';
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
      'q=title%3Afoo+AND+collection%3Abar&output=json&rows=53&page=27&fl%5B%5D=identifier&fl%5B%5D=foo&fl%5B%5D=bar&sort%5B%5D=downloads+desc';
    expect(queryAsString).to.equal(expected);
  });
});
