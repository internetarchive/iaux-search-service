import {
  AggregateSearchParams,
  SearchParams,
  SortParam,
  ParamType,
} from './search-params';
export class SearchParamURLGenerator {
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
  static aggregateSearchParamsAsString(
    aggregateSearchParams: AggregateSearchParams
  ): string | undefined {
    if (aggregateSearchParams.advancedParams) {
      const params = aggregateSearchParams.advancedParams.map(param => {
        return {
          terms: param,
        };
      });
      const stringified = JSON.stringify(params);
      return stringified;
    }

    if (aggregateSearchParams.simpleParams) {
      return aggregateSearchParams.simpleParams.join(',');
    }
  }

  static sortParamsAsString(sortParams: SortParam): string {
    return `${sortParams.field} ${sortParams.direction}`;
  }

  /**
   * Generates query parameters from the search parameters
   * @param searchParams
   * @param queryParams
   * @returns URLSearchParams
   */
  static generateURLSearchParams(
    searchParams: SearchParams,
    queryParams: Record<ParamType, string>
  ): URLSearchParams {
    const params: URLSearchParams = new URLSearchParams();
    params.append(queryParams.query, searchParams.query);
    params.append('output', 'json');

    if (searchParams.rows) {
      params.append(queryParams.rows, String(searchParams.rows));
    }

    if (searchParams.page) {
      params.append(queryParams.page, String(searchParams.page));
    }

    if (searchParams.fields) {
      params.append(queryParams.fields, searchParams.fields.join(','));
    }

    if (searchParams.sort) {
      const sortStrings = searchParams.sort.map(sort =>
        this.sortParamsAsString(sort)
      );
      params.append(queryParams.sort, sortStrings.join(','));
    }

    const aggregations = searchParams.aggregations;
    if (aggregations) {
      const aggString = this.aggregateSearchParamsAsString(aggregations);
      if (aggString) {
        params.append(queryParams.aggregations, aggString);
      }
    }

    if (searchParams.service?.param) {
      params.append(queryParams.service, searchParams.service.param);
    }

    return params;
  }
}
