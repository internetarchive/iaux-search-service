/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Aggregation } from '../models/aggregation';
import { SearchResult, HitType } from '../models/hit-types/hit';
import { ItemHit } from '../models/hit-types/item-hit';
import { TextHit } from '../models/hit-types/text-hit';
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
  results: SearchResult[];

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
      body?.hits?.hits?.map((hit: SearchResult) =>
        SearchResponseDetails.createResult(hitType, hit)
      ) ?? [];
    this.aggregations = body?.aggregations;
  }

  /**
   * Returns a correctly-typed search result depending on the schema's hit_type.
   */
  private static createResult(type: HitType, result: SearchResult): SearchResult {
    switch (type) {
      case 'item':
        return new ItemHit(result);
      case 'text':
        return new TextHit(result);
      default:
        // The hit type doesn't tell us what to construct, so just return the input as-is
        return result;
    }
  }
}
