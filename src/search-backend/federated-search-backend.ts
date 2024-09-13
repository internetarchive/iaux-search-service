/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SearchParams } from '../search-params';
import type { Result } from '@internetarchive/result-type';
import type { SearchServiceError } from '../search-service-error';
import { SearchParamURLGenerator } from '../search-param-url-generator';
import { BaseSearchBackend } from './base-search-backend';
import type { SearchBackendOptionsInterface } from './search-backend-options';

/* Temporary URL for prototyping purposes */
const PROTOTYPE_URL = 'ia-petabox-ximm-search-simple-federation.archive.org/';

/**
 * The FederatedSearchBackend performs a `window.fetch` request to archive.org
 */
export class FederatedSearchBackend extends BaseSearchBackend {
  private servicePath: string;

  constructor(options?: SearchBackendOptionsInterface) {
    super(options);
    this.servicePath =
      options?.servicePath ?? '/services/search/beta/page_production';

    // TODO: Remove this when we're no longer using the temp URL
    this.baseUrl = PROTOTYPE_URL;
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
    const url = `https://${this.baseUrl}${this.servicePath}/?page_type=simple_federation&${queryAsString}`;
    return this.fetchUrl(url);
  }
}
