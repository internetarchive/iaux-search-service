/* eslint-disable @typescript-eslint/no-explicit-any */
import { DefaultSearchBackend } from './default-search-backend';
import { SearchParams } from '../search-params';
import { Result } from '@internetarchive/result-type';
import { SearchServiceError } from '../search-service-error';
import { SearchParamURLGenerator } from '../search-param-url-generator';

/**
 * The BetaSearchBackend performs a `window.fetch` request to www-ximm.archive.org
 */
export class BetaSearchBackend extends DefaultSearchBackend {
  constructor(options?: {
    baseUrl?: string;
    includeCredentials?: boolean;
    scope?: string;
  }) {
    super(options);
    this.baseUrl = options?.baseUrl ?? 'www-ximm.archive.org';
  }

  /** @inheritdoc */
  async performSearch(
    params: SearchParams
  ): Promise<Result<any, SearchServiceError>> {
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const url = `https://${this.baseUrl}/services/search/beta/page_production/?${queryAsString}`;
    return this.fetchUrl(url);
  }

  /** @inheritdoc */
  async fetchMetadata(
    identifier: string,
    keypath?: string
  ): Promise<Result<any, SearchServiceError>> {
    const path = keypath ? `/${keypath}` : '';
    const url = `https://${this.baseUrl}/metadata/${identifier}${path}`;
    // the metadata endpoint doesn't current support credentialed requests
    // so don't include credentials until that is fixed
    return this.fetchUrl(url, {
      requestOptions: {
        credentials: 'omit',
      },
    });
  }
}
