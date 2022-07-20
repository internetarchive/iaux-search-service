/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchResponse } from './search/search-response';
import { SearchBackendType } from '../service-param';

export class ResponseFactory {
  public static create(
    backendType: SearchBackendType,
    rawResponse: Record<string, any>
  ): SearchResponse {
    switch (backendType) {
      case 'default':
        return ResponseFactory.createSearchResponse(rawResponse);
      default:
        throw new Error(`Unknown backend type: ${backendType}`);
    }
  }

  public static createSearchResponse(
    rawResponse: Record<string, any>
  ): SearchResponse {
    return new SearchResponse(rawResponse);
  }

  /*
  public static createPageProductionSearchResponse(
    rawResponse: Record<string, any>
  ): SearchResponse {
    return new PageProductionSearchResponse(rawResponse);
  }
  */
}
