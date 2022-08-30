/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchParams } from '../search-params';
import { Result } from '@internetarchive/result-type';
import {
  SearchServiceError,
} from '../search-service-error';
import { SearchParamURLGenerator } from '../search-param-url-generator';
import { BaseSearchBackend } from './base-search-backend.ts';
import { SearchBackendOptions } from './search-backend-options';

/**
 * The MetadataSearchBackend performs a `window.fetch` request to archive.org
 */
export class MetadataSearchBackend extends BaseSearchBackend {
  private servicePath: string;

  constructor(options?: SearchBackendOptions & {
    servicePath?: string;
  }) {
    super(options);
    this.servicePath = options?.servicePath ?? '/services/search/beta/page_production';
  }

  /** @inheritdoc */
  async performSearch(
    params: SearchParams
  ): Promise<Result<any, SearchServiceError>> {
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params
    );
    const queryAsString = urlSearchParam.toString();
    const url = `https://${this.baseUrl}${this.servicePath}/?${queryAsString}`;
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
