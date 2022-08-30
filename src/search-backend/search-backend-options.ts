/**
 * Options that can be passed to a search backend constructor
 */
export interface SearchBackendOptions {
  baseUrl?: string;
  includeCredentials?: boolean;
  scope?: string;
}