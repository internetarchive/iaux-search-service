/**
 * Options that can be passed to a search backend constructor
 */
export interface SearchBackendOptionsInterface {
  /**
   * The base URL / host this backend should use for its requests.
   * Defaults to 'archive.org'.
   */
  baseUrl?: string;
  servicePath?: string;
  includeCredentials?: boolean;
  scope?: string;
  debuggingEnabled?: boolean;
}
