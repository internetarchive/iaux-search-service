export enum SearchServiceErrorType {
  networkError,
  itemNotFound,
  decodingError,
}

export class SearchServiceError extends Error {
  type: SearchServiceErrorType;

  constructor(type: SearchServiceErrorType, message?: string) {
    super(message);
    this.type = type;
  }
}
