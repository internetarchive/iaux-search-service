export interface AggregateSearchParam {
  field: string;
  size?: number;
}

export class AggregateSearchParams {
  private advancedParams?: AggregateSearchParam[];

  private simpleParams?: string[];

  constructor(options: {
    simpleParams?: string[];
    advancedParams?: AggregateSearchParam[];
  }) {
    this.advancedParams = options.advancedParams;
    this.simpleParams = options.simpleParams;
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
   * @returns string | undefined}
   * @memberof AggregateSearchParams
   */
  get asSearchParams(): string | undefined {
    if (this.advancedParams) {
      const params = this.advancedParams.map(param => {
        return {
          terms: param,
        };
      });
      const stringified = JSON.stringify(params);
      return stringified;
    }

    if (this.simpleParams) {
      return this.simpleParams.join(',');
    }
  }
}

export type SortDirection = 'asc' | 'desc';

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
export interface SearchParams {
  query: string;

  sort?: SortParam[];

  rows?: number;

  page?: number;

  fields?: string[];

  aggregations?: AggregateSearchParams;
}
