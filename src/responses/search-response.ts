/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchResponseHeader } from './search-response-header';
import { SearchResponseDetails } from './search-response-details';
import { SearchRequest } from './search-request';

/**
 * The top-level response model when retrieving a response from the advanced search endpoint.
 *
 * @export
 * @class SearchResponse
 */
export class SearchResponse {
  /**
   * The raw JSON received from the endpoint. This is useful for inspecting if needed.
   *
   * @type {Record<string, any>}
   * @memberof SearchResponse
   */
  rawResponse: Record<string, any>;

  /**
   * The request object returned by the backend, specifying the query parameters and
   * how the backend interpreted them.
   */
  request: SearchRequest;

  /**
   * The response header
   *
   * @type {SearchResponseHeader}
   * @memberof SearchResponse
   */
  responseHeader: SearchResponseHeader;

  /**
   * The response containing the search results
   *
   * @type {SearchResponseDetails}
   * @memberof SearchResponse
   */
  response: SearchResponseDetails;

  constructor(json: Record<string, any>) {
    this.rawResponse = json;
    this.request = json.request;
    this.responseHeader = json.response?.header;
    this.response = new SearchResponseDetails(json.response?.body, json.response?.hit_schema);
  }
}
