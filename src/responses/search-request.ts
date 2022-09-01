import { SearchRequestParams } from './search-request-params';

/**
 * A model for the request parameters returned with each search response.
 */
export class SearchRequest {
  /**
   * The original client parameters sent with the request
   */
  client_parameters: SearchRequestParams;

  /**
   * The finalized request parameters as determined by the backend
   */
  finalized_parameters: SearchRequestParams;

  constructor(json: Record<string, any>) {
    this.client_parameters = json.client_parameters;
    this.finalized_parameters = json.finalized_parameters;
  }
}
