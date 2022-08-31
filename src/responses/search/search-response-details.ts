/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Aggregation } from '../../models/aggregation';
import { Hit, HitFactory } from '../../models/hit-types/hit';
import type { SearchHitSchema } from './search-hit-schema';

export interface SearchResponseBody {
  hits: SearchResponseHits,
  aggregations?: Record<string, Aggregation>
}

export interface SearchResponseHits {
  total: number,
  returned: number,
  hits: Hit[]
}

/**
 * This is the search response details inside the SearchResponse object that contains
 * the search results, under the `docs` key.
 *
 * @export
 */
export class SearchResponseDetails {
  /**
   * Total number of results found
   */
  totalHits: number;

  /**
   * Number of returned hits in this response
   */
  returnedHits: number;

  /**
   * The array of search results
   */
  hits: Hit[];

  /**
   * Requested aggregations such as facets or histogram data
   *
   * @type {Record<string, Aggregation>}
   * @memberof SearchResponseDetails
   */
  aggregations?: Record<string, Aggregation>;

  constructor(body: SearchResponseBody, schema: SearchHitSchema) {
    const hitType = schema.hit_type;

    this.totalHits = body.hits.total;
    this.returnedHits = body.hits.returned;
    this.hits = body.hits.hits.map((hit: Hit) => HitFactory.createFromType(hitType, hit));
    this.aggregations = body.aggregations;
  }
}
