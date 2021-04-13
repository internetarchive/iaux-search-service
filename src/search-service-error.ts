/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export enum SearchServiceErrorType {
  networkError,
  itemNotFound,
  decodingError,
  searchEngineError,
}

export class SearchServiceError extends Error {
  type: SearchServiceErrorType;

  details?: any;

  constructor(type: SearchServiceErrorType, message?: string, details?: any) {
    super(message);
    this.type = type;
    this.details = details;
  }
}
