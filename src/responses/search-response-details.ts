/* eslint-disable @typescript-eslint/no-explicit-any */
import { Aggregation } from '../models/aggregation';
import { SearchResult, HitType } from '../models/hit-types/hit';
import { ItemHit } from '../models/hit-types/item-hit';
import { TextHit } from '../models/hit-types/text-hit';
import { FavoritedSearchHit } from '../models/hit-types/favorited-search-hit';
import { WebArchiveHit } from '../models/hit-types/web-archive-hit';
import { CollectionExtraInfo } from './collection-extra-info';
import type { SearchHitSchema } from './search-hit-schema';
import { AccountExtraInfo } from './account-extra-info';
import {
  LendingPageElement,
  PageElementMap,
  SearchResponseHits,
  convertWebArchivesToSearchHits,
  LENDING_SUB_ELEMENTS,
  WebArchivesPageElement,
} from './page-elements';

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
export interface SearchResponseDetailsInterface {
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
}

/**
 * Implementation for search response details, converting raw response bodies
 * into a more consistent set of properties & types.
 */
export class SearchResponseDetails implements SearchResponseDetailsInterface {
  /**
   * @inheritdoc
   */
  totalResults: number;

  /**
   * @inheritdoc
   */
  returnedCount: number;

  /**
   * @inheritdoc
   */
  results: SearchResult[];

  /**
   * @inheritdoc
   */
  aggregations?: Record<string, Aggregation>;

  /**
   * @inheritdoc
   */
  collectionTitles?: Record<string, string>;

  /**
   * @inheritdoc
   */
  collectionExtraInfo?: CollectionExtraInfo;

  /**
   * @inheritdoc
   */
  accountExtraInfo?: AccountExtraInfo;

  /**
   * @inheritdoc
   */
  pageElements?: PageElementMap;

  /**
   * @inheritdoc
   */
  schema?: SearchHitSchema;

  constructor(body: SearchResponseBody, schema: SearchHitSchema) {
    this.schema = schema;
    const schemaHitType = schema?.hit_type;

    let firstPageElement;
    if (body?.page_elements) {
      this.pageElements = body.page_elements;
      firstPageElement = Object.values(this.pageElements)[0];
    }

    // Use hits directly from the body if available.
    // Otherwise, try extracting them from the first page_element
    let hits = body?.hits?.hits;
    this.totalResults = body?.hits?.total ?? 0;
    this.returnedCount = body?.hits?.returned ?? 0;

    if (!hits?.length && firstPageElement?.hits?.hits) {
      hits = firstPageElement.hits.hits;
      this.totalResults = firstPageElement.hits.total ?? 0;
      this.returnedCount = firstPageElement.hits.returned ?? 0;
    } else if (this.pageElements?.lending) {
      hits = this.handleLendingPageElement(schemaHitType);
    } else if (this.pageElements?.web_archives) {
      hits = this.handleWebArchivesPageElement();
    }

    this.results =
      hits?.map((hit: SearchResult) =>
        SearchResponseDetails.createResult(hit.hit_type ?? schemaHitType, hit)
      ) ?? [];

    // Use aggregations directly from the body if available.
    // Otherwise, try extracting them from the first page_element.
    let aggregations = body?.aggregations;
    const bodyHasAggregations =
      this.aggregations && Object.keys(this.aggregations).length > 0;

    if (!bodyHasAggregations && firstPageElement?.aggregations) {
      aggregations = firstPageElement.aggregations;
    }

    // Construct Aggregation objects
    if (aggregations) {
      this.buildAggregations(aggregations);
    }

    if (body?.collection_titles) {
      this.collectionTitles = body.collection_titles ?? {};
    }

    if (body?.collection_extra_info) {
      this.collectionExtraInfo = body.collection_extra_info ?? null;
    }

    if (body?.account_extra_info) {
      this.accountExtraInfo = body.account_extra_info ?? null;
    }
  }

  /**
   * Constructs Aggregation objects from raw aggregations data and applies them
   * to this instance's aggregations property.
   * @param aggregations The raw aggregations data from the PPS
   */
  private buildAggregations(aggregations: Record<string, Aggregation>): void {
    this.aggregations = Object.entries(aggregations).reduce(
      (acc, [key, val]) => {
        acc[key] = new Aggregation(val);
        return acc;
      },
      {} as Record<string, Aggregation>
    );
  }

  /**
   * Special handling for when the 'lending' page element is present on the response.
   * @returns An array of raw hits representing current loans.
   */
  private handleLendingPageElement(
    schemaHitType: HitType
  ): Record<string, unknown>[] {
    const pageElements = this.pageElements?.lending as LendingPageElement;
    const hits = pageElements.loans ?? [];
    this.totalResults = hits.length;
    this.returnedCount = this.totalResults;

    // For loans, we also need to build hit models for each sub-element
    for (const subElement of LENDING_SUB_ELEMENTS) {
      pageElements[subElement] = (pageElements[
        subElement
      ].map((hit: SearchResult) =>
        SearchResponseDetails.createResult(hit.hit_type ?? schemaHitType, hit)
      ) ?? []) as Record<string, unknown>[];
    }

    return hits;
  }

  /**
   * Special handling for when the 'web_archives' page element is present on the response.
   * @returns An array of raw hits representing the web archive results.
   */
  private handleWebArchivesPageElement(): Record<string, unknown>[] {
    const hits = convertWebArchivesToSearchHits(
      this.pageElements?.web_archives as WebArchivesPageElement
    );
    this.totalResults = hits.length;
    this.returnedCount = this.totalResults;
    return hits;
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
