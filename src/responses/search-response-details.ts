/* eslint-disable @typescript-eslint/no-explicit-any */
import { Aggregation } from '../models/aggregation';
import { SearchResult, HitType } from '../models/hit-types/hit';
import { ItemHit } from '../models/hit-types/item-hit';
import { TextHit } from '../models/hit-types/text-hit';
import { CollectionExtraInfo } from './collection-extra-info';
import type { SearchHitSchema } from './search-hit-schema';

/**
 * The structure of the response body returned from the PPS endpoint.
 */
export interface SearchResponseBody {
  hits: SearchResponseHits;
  aggregations?: Record<string, Aggregation>;
  collection_titles?: Record<string, string>;
  collection_extra_info?: CollectionExtraInfo;
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
   * A map from collection identifiers (those present on the hits/aggregations)
   * to their titles.
   */
  collectionTitles?: Record<string, string>;

  /**
   * Extra info about the target collection, returned when the page type is
   * `collection_details`.
   */
  collectionExtraInfo?: CollectionExtraInfo;

  /**
   * The hit schema for this response
   */
  schema?: SearchHitSchema;

  constructor(body: SearchResponseBody, schema: SearchHitSchema) {
    this.schema = schema;
    const schemaHitType = schema?.hit_type;

    this.totalResults = body?.hits?.total ?? 0;
    this.returnedCount = body?.hits?.returned ?? 0;
    this.results =
      body?.hits?.hits?.map((hit: SearchResult) =>
        SearchResponseDetails.createResult(hit.hit_type ?? schemaHitType, hit)
      ) ?? [];

    // Construct Aggregation objects
    if (body?.aggregations) {
      this.aggregations = Object.entries(body.aggregations).reduce(
        (acc, [key, val]) => {
          acc[key] = new Aggregation(val);
          return acc;
        },
        {} as Record<string, Aggregation>
      );
    }

    if (body?.collection_titles) {
      this.collectionTitles = body.collection_titles;
    }

    if (body?.collection_extra_info) {
      this.collectionExtraInfo = body.collection_extra_info;
    }
  }

  /**
   * Returns a correctly-typed search result depending on the schema's hit_type.
   */
  private static createResult(
    type: HitType,
    result: SearchResult
  ): SearchResult {
    switch (type) {
      case 'item':
        return new ItemHit(result);
      case 'text':
        return new TextHit(result);
      default:
        // The hit type doesn't tell us what to construct, so just construct an ItemHit
        return new ItemHit(result);
    }
  }
}
