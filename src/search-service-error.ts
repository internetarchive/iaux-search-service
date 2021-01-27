export enum SearchServiceErrorType {
  networkError,
  itemNotFound,
  decodingError,
  searchEngineError,
}

export class SearchServiceError extends Error {
  type: SearchServiceErrorType;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  details?: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(type: SearchServiceErrorType, message?: string, details?: any) {
    super(message);
    this.type = type;
    this.details = details;
  }
}
