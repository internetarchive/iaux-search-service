/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export enum SearchServiceErrorType {
  networkError = 'SearchService.NetworkError',
  itemNotFound = 'SearchService.ItemNotFound',
  decodingError = 'SearchService.DecodingError',
  searchEngineError = 'SearchService.SearchEngineError',
}

export class SearchServiceError extends Error {
  type: SearchServiceErrorType;

  details?: any;

  constructor(type: SearchServiceErrorType, message?: string, details?: any) {
    super(message);
    this.name = type;
    this.type = type;
    this.details = details;
  }
}
