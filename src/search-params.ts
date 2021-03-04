export interface AggregateSearchParam {
  field: string;
  size: number;
}

export class AggregateSearchParams {
  searchParams: AggregateSearchParam[];

  constructor(searchParams: AggregateSearchParam[]) {
    this.searchParams = searchParams;
  }

  /**
   * Generates a query parameter from the given aggregate search params
   *
   * Example:
   *
   * [
   *  {
   *    "terms": {
   *      "field": "collection",
   *      "size":10
   *    }
   *  },
   *  {
   *    "terms": {
   *      "field": "subjectSorter",
   *      "size": 10
   *    }
   *  }
   * ]
   *
   * @returns {Record<string, AggregateSearchParam>[]}
   * @memberof AggregateSearchParams
   */
  get asSearchParams(): Record<string, AggregateSearchParam>[] {
    return this.searchParams.map(param => {
      return {
        terms: param,
      };
    });
  }
}

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export class SortParam {
  field: string;
  direction: SortDirection;

  constructor(field: string, direction: SortDirection) {
    this.field = field;
    this.direction = direction;
  }

  get asString(): string {
    return `${this.field} ${this.direction}`;
  }
}

/**
 * SearchParams provides an encapsulation to all of the search parameters
 * available for searching.
 *
 * It also provides an `asUrlSearchParams` method for converting the
 * parameters to an IA-style query string. ie. it converts the `fields` array
 * to `fl=identifier,collection` and `sort` to `sort=date+desc,downloads+asc`
 */
export class SearchParams {
  query: string;

  sort?: SortParam[];

  rows?: number;

  page?: number;

  fields?: string[];

  aggregations?: AggregateSearchParams;

  constructor(options: {
    query: string;
    sort?: SortParam[];
    rows?: number;
    page?: number;
    fields?: string[];
    aggregations?: AggregateSearchParams;
  }) {
    this.query = options.query;
    this.sort = options.sort;
    this.rows = options.rows;
    this.page = options.page;
    this.fields = options.fields;
    this.aggregations = options.aggregations;
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

    if (this.fields) {
      params.append('fl', this.fields.join(','));
    }

    if (this.sort) {
      const sortStrings = this.sort.map(sort => sort.asString);
      params.append('sort', sortStrings.join(','));
    }

    if (this.aggregations) {
      const searchParams = this.aggregations.asSearchParams;
      const stringified = JSON.stringify(searchParams);
      params.append('user_aggs', stringified);
    }

    return params;
  }
}
