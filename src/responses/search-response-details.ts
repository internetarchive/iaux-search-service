/* eslint-disable @typescript-eslint/no-explicit-any */
import { Aggregation } from '../models/aggregation';
import { SearchResult, HitType } from '../models/hit-types/hit';
import { ItemHit } from '../models/hit-types/item-hit';
import { TextHit } from '../models/hit-types/text-hit';
import { FavoritedSearchHit } from '../models/hit-types/favorited-search-hit';
import { CollectionExtraInfo } from './collection-extra-info';
import type { SearchHitSchema } from './search-hit-schema';
import { AccountExtraInfo } from './account-extra-info';
import { PageElementMap, SearchResponseHits, convertWebArchivesToSearchHits } from './page-elements';
import { WebArchiveHit } from '../models/hit-types/web-archive-hit';

/**
 * The structure of the response body returned from the PPS endpoint.
 */
export interface SearchResponseBody {
  hits?: SearchResponseHits;
  aggregations?: Record<string, Aggregation>;
  collection_titles?: Record<string, string>;
  collection_extra_info?: CollectionExtraInfo;
  account_extra_info?: AccountExtraInfo;
  page_elements?: PageElementMap;
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
   * Extra info about the target account, returned when the page type is
   * `account_details`.
   */
  accountExtraInfo?: AccountExtraInfo;

  /**
   * Specific page elements requested from the PPS will be present in this map
   */
  pageElements?: PageElementMap;

  /**
   * The hit schema for this response
   */
  schema?: SearchHitSchema;

  constructor(body: SearchResponseBody, schema: SearchHitSchema) {
    this.schema = schema;
    const schemaHitType = schema?.hit_type;

    let firstPageElement;
    console.log('has page elements?', !!body?.page_elements);
    if (body?.page_elements) {
      this.pageElements = body.page_elements;
      firstPageElement = Object.values(this.pageElements)[0];
      console.log('first page element is', firstPageElement);
    }

    // Use hits directly from the body if available.
    // Otherwise, try extracting them from the first page_element
    let hits = body?.hits?.hits;
    this.totalResults = body?.hits?.total ?? 0;
    this.returnedCount = body?.hits?.returned ?? 0;
    console.log('hits from body', hits);
    if (!hits?.length && firstPageElement?.hits?.hits) {
      hits = firstPageElement.hits.hits;
      this.totalResults = firstPageElement.hits.total ?? 0;
      this.returnedCount = firstPageElement.hits.returned ?? 0;
      console.log('hits from page element', hits);
    } else if (this.pageElements?.['web_archives']) {
      hits = convertWebArchivesToSearchHits(this.pageElements['web_archives']);
      this.totalResults = this.pageElements['web_archives'].length ?? 0;
      this.returnedCount = this.totalResults;
      console.log('hits from web archives', hits);
    }
    console.log('total/returned:', this.totalResults, this.returnedCount);

    this.results =
      hits?.map((hit: SearchResult) =>
        SearchResponseDetails.createResult(hit.hit_type ?? schemaHitType, hit)
      ) ?? [];
    console.log('results', this.results);

    // Use aggregations directly from the body if available.
    // Otherwise, try extracting them from the first page_element.
    let aggregations = body?.aggregations;
    const bodyHasAggregations =
      this.aggregations && Object.keys(this.aggregations).length > 0;
    console.log('aggs from body', bodyHasAggregations, aggregations);
    if (
      !bodyHasAggregations &&
      firstPageElement?.aggregations
    ) {
      aggregations = firstPageElement.aggregations;
      console.log('aggs from page element', aggregations);
    }

    // Construct Aggregation objects
    if (aggregations) {
      this.aggregations = Object.entries(aggregations).reduce(
        (acc, [key, val]) => {
          acc[key] = new Aggregation(val);
          return acc;
        },
        {} as Record<string, Aggregation>
      );
      console.log(this.aggregations);
    }

    if (body?.collection_titles) {
      this.collectionTitles = body.collection_titles ?? {};
    }

    if (body?.collection_extra_info) {
      this.collectionExtraInfo = body.collection_extra_info ?? null;
    }

    if (body?.account_extra_info) {
      this.accountExtraInfo = body.account_extra_info ?? null;
      console.log('acct extra info (search service)', this.accountExtraInfo);
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
      case 'favorited_search':
        return new FavoritedSearchHit(result);
      case 'web_archive':
        return new WebArchiveHit(result);
      default:
        // The hit type doesn't tell us what to construct, so just construct an ItemHit
        return new ItemHit(result);
    }
  }
}
