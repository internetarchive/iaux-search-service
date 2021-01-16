/**
 * SearchParams provides an encapsulation to all of the search parameters
 * available for searching.
 *
 * It also provides an `asUrlSearchParams` helper method for converting the
 * parameters to an IA-style query string. ie. it converts the `fields` array
 * to `fl[]=identifier&fl[]=collection` and `sort` to `sort[]=date+desc&sort[]=downloads+asc`
 */
export class SearchParams {
  query: string;

  sort?: string[];

  rows?: number;

  page?: number;

  fields?: string[];

  constructor(options: {
    query: string;
    sort?: string[];
    rows?: number;
    page?: number;
    fields?: string[];
  }) {
    this.query = options.query;
    this.sort = options.sort;
    this.rows = options.rows;
    this.page = options.page;
    this.fields = options.fields;
  }

  /**
   * Return a URLSearchParams representation of the parameters for use in network requests.
   *
   * @readonly
   * @type {URLSearchParams}
   * @memberof SearchParams
   */
  get asUrlSearchParams(): URLSearchParams {
    const params: URLSearchParams = new URLSearchParams();
    params.append('q', this.query);
    params.append('output', 'json');

    if (this.rows) {
      params.append('rows', String(this.rows));
    }
    if (this.page) {
      params.append('page', String(this.page));
    }
    this.fields?.forEach(field => {
      params.append('fl[]', field);
    });
    this.sort?.forEach(sort => {
      params.append('sort[]', sort);
    });

    return params;
  }
}
