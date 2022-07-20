/* eslint-disable @typescript-eslint/no-explicit-any */
import { Result } from '@internetarchive/result-type';
import { SearchParams, ParamType } from '../search-params';
import { ServiceParam } from '../service-param';
import { SearchServiceError } from '../search-service-error';

/**
 * An interface to provide the network layer to the `SearchService`.
 *
 * Objects implementing this interface are responsible for making calls to the Internet Archive
 * `advancedsearch` and `metadata` endpoints or otherwise providing a similar reponse in JSON
 * format.
 *
 * This allows for projects like the DWeb project to provide
 * alternative datasources for a request.
 *
 * @export
 * @interface SearchBackendInterface
 */
export interface SearchBackendInterface {
  /**
   * Required service query parameter settings for this backend class.
   *
   * serviceParam.name used to set/get by-service query parameter names.
   * serviceParam.param used to set the service= query parameter value.
   *
   * @type {ServiceParam}
   * @example { name: 'alpha', param: '' }
   * @example { name: 'alpha-full-text', param: 'fts' }
   */
  readonly serviceParam: ServiceParam;

  /**
   * Perform a search for the given parameters.
   *
   * @param params
   */
  performSearch(params: SearchParams): Promise<Result<any, SearchServiceError>>;

  /**
   * Fetch metadata for a single item with an optional keypath
   *
   * @param identifier
   * @param keypath
   */
  fetchMetadata(
    identifier: string,
    keypath?: string
  ): Promise<Result<any, SearchServiceError>>;

  /**
   * Map of search params to querystring params.
   */
  readonly querystringParams: Record<ParamType, string>;
}
