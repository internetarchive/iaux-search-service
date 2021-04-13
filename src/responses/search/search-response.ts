/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchResponseHeader } from './search-response-header';
import { SearchResponseDetails } from './search-response-details';

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
   * The resonse header
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
    this.responseHeader = json.responseHeader;
    this.response = new SearchResponseDetails(json.response);
  }
}
