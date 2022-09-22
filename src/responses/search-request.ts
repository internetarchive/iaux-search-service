/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchRequestParams } from './search-request-params';

/**
 * A model for the request parameters returned with each search response.
 */
export class SearchRequest {
  /**
   * The original client parameters sent with the request
   */
  clientParameters: SearchRequestParams;

  /**
   * The finalized request parameters as determined by the backend
   */
  finalizedParameters: SearchRequestParams;

  constructor(json: Record<string, any>) {
    this.clientParameters = json.client_parameters;
    this.finalizedParameters = json.finalized_parameters;
  }
}
