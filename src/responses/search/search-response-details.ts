/* eslint-disable @typescript-eslint/no-explicit-any */
import { Aggregation } from '../../models/aggregation';
import { Metadata } from '../../models/metadata';

/**
 * This is the search response details inside the SearchResponse object that contains
 * the search results, under the `docs` key.
 *
 * @export
 * @class Response
 */
export class SearchResponseDetails {
  /**
   * Total number of results found
   *
   * @type {number}
   * @memberof Response
   */
  numFound: number;

  /**
   * Search result start number for pagination
   *
   * @type {number}
   * @memberof Response
   */
  start: number;

  /**
   * The array of search results
   *
   * @type {Metadata[]}
   * @memberof Response
   */
  docs: Metadata[];

  /**
   * Requested aggregations such as facets or histogram data
   *
   * @type {Record<string, Aggregation>}
   * @memberof SearchResponseDetails
   */
  aggregations?: Record<string, Aggregation>;

  constructor(json: SearchResponseDetails) {
    this.numFound = json.numFound;
    this.start = json.start;
    this.docs = json.docs.map((doc: any) => new Metadata(doc));
    this.aggregations = json.aggregations;
  }
}
