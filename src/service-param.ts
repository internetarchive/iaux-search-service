/**
 * Types of search backends implemented by the `SearchService`.
 */
export type SearchBackendType = 'default' | 'alpha' | 'alpha-full-text';

/**
 * Map search backend type to its service parameter, if any.
 */
export type ServiceParam = {
  name: SearchBackendType;
  param: string;
};
