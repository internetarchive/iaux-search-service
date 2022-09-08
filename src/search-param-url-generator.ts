import {
  AggregateSearchParams,
  SearchParams,
  SortParam,
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
   * @returns {string | undefined}
   * @memberof AggregateSearchParams
   */
  static aggregateSearchParamsAsString(
    aggregateSearchParams: AggregateSearchParams
  ): string | undefined {
    if (aggregateSearchParams.omit) {
      return 'false';
    }

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
    return `${sortParams.field}:${sortParams.direction}`;
  }

  static generateURLSearchParams(searchParams: SearchParams): URLSearchParams {
    const params: URLSearchParams = new URLSearchParams();
    params.append('user_query', searchParams.query);

    if (searchParams.pageType != null) {
      params.append('page_type', String(searchParams.pageType));
    }

    if (searchParams.pageTarget != null) {
      params.append('page_target', String(searchParams.pageTarget));
    }

    if (searchParams.rows != null) {
      params.append('hits_per_page', String(searchParams.rows));
    }

    if (searchParams.page != null) {
      params.append('page', String(searchParams.page));
    }

    if (searchParams.fields) {
      params.append('fields', searchParams.fields.join(','));
    }

    if (searchParams.sort) {
      const sortStrings = searchParams.sort.map(sort =>
        this.sortParamsAsString(sort)
      );
      params.append('sort', sortStrings.join(','));
    }

    const aggregations = searchParams.aggregations;
    if (aggregations) {
      const aggString = this.aggregateSearchParamsAsString(aggregations);
      if (aggString) {
        params.append('aggregations', aggString);
      }
    }

    if (searchParams.aggregationsSize != null) {
      params.append('aggregations_size', String(searchParams.aggregationsSize));
    }

    return params;
  }
}
