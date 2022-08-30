/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SearchParams } from '../search-params';
import type { Result } from '@internetarchive/result-type';
import type {
  SearchServiceError,
} from '../search-service-error';
import { SearchParamURLGenerator } from '../search-param-url-generator';
import { BaseSearchBackend } from './base-search-backend.ts';
import type { SearchBackendOptions } from './search-backend-options';

/**
 * The DefaultSearchBackend performs a `window.fetch` request to archive.org
 */
export class DefaultSearchBackend extends BaseSearchBackend {
  constructor(options?: SearchBackendOptions) {
    super(options);
  }

  /** @inheritdoc */
  async performSearch(
    params: SearchParams
  ): Promise<Result<any, SearchServiceError>> {
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const url = `https://${this.baseUrl}/advancedsearch.php?${queryAsString}`;
    return this.fetchUrl(url);
  }

  /** @inheritdoc */
  async fetchMetadata(
    identifier: string,
    keypath?: string
  ): Promise<Result<any, SearchServiceError>> {
    const path = keypath ? `/${keypath}` : '';
    const url = `https://${this.baseUrl}/metadata/${identifier}${path}`;
    // the metadata endpoint doesn't currently support credentialed requests
    // so don't include credentials until that is fixed
    return this.fetchUrl(url, {
      requestOptions: {
        credentials: 'omit',
      },
    });
  }
}
