/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SearchParams } from '../search-params';
import type { Result } from '@internetarchive/result-type';
import type { SearchServiceError } from '../search-service-error';
import { SearchParamURLGenerator } from '../search-param-url-generator';
import { BaseSearchBackend } from './base-search-backend';
import type { SearchBackendOptionsInterface } from './search-backend-options';

/**
 * The TVSearchBackend requests search results among TV captions from archive.org
 */
export class TVSearchBackend extends BaseSearchBackend {
  private servicePath: string;

  constructor(options?: SearchBackendOptionsInterface) {
    super(options);
    this.servicePath =
      options?.servicePath ?? '/services/search/beta/page_production';
  }

  /** @inheritdoc */
  async performSearch(
    params: SearchParams
  ): Promise<Result<any, SearchServiceError>> {
    if (this.debuggingEnabled && params.debugging === undefined) {
      params.debugging = true;
    }

    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const url = `https://${this.baseUrl}${this.servicePath}/?service_backend=tvs&${queryAsString}`;
    return this.fetchUrl(url);
  }
}
