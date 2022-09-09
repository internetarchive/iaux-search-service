/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Aggregation } from '../models/aggregation';
import { Result, HitFactory } from '../models/hit-types/hit';
import type { SearchHitSchema } from './search-hit-schema';

/**
 * The structure of the response body returned from the PPS endpoint.
 */
export interface SearchResponseBody {
  hits: SearchResponseHits;
  aggregations?: Record<string, Aggregation>;
}

/**
 * The structure of the response body `hits` object returned from the PPS endpoint.
 */
export interface SearchResponseHits {
  total: number;
  returned: number;
  hits: Record<string, any>[];
}

/**
 * This is the search response details inside the SearchResponse object that contains
 * the search results, under the `results` key.
 *
 * @export
 */
export class SearchResponseDetails {
  /**
   * Total number of results found
   */
  totalResults: number;

  /**
   * Number of returned hits in this response
   */
  returnedCount: number;

  /**
   * The array of search results
   */
  results: Result[];

  /**
   * Requested aggregations such as facets or histogram data
   *
   * @type {Record<string, Aggregation>}
   * @memberof SearchResponseDetails
   */
  aggregations?: Record<string, Aggregation>;

  /**
   * The hit schema for this response
   */
  schema?: SearchHitSchema;

  constructor(body: SearchResponseBody, schema: SearchHitSchema) {
    this.schema = schema;
    const hitType = schema?.hit_type;

    this.totalResults = body?.hits?.total ?? 0;
    this.returnedCount = body?.hits?.returned ?? 0;
    this.results =
      body?.hits?.hits?.map((hit: Result) =>
        HitFactory.createFromType(hitType, hit)
      ) ?? [];
    this.aggregations = body?.aggregations;
  }
}
