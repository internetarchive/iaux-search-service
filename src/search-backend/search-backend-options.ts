/**
 * Options that can be passed to a search backend constructor
 */
export interface SearchBackendOptionsInterface {
  /**
   * The base URL / host this backend should use for its requests.
   * Defaults to 'archive.org'.
   */
  baseUrl?: string;
  includeCredentials?: boolean;
  scope?: string;
}
