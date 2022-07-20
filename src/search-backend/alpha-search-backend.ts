/* eslint-disable @typescript-eslint/no-explicit-any */
import { ServiceParam } from '../service-param';
import { DefaultSearchBackend } from './default-search-backend';
import { SearchParams, ParamType } from '../search-params';
import { Result } from '@internetarchive/result-type';
import { SearchServiceError } from '../search-service-error';
import { SearchParamURLGenerator } from '../search-param-url-generator';

/**
 * The AlphaSearchBackend performs a `window.fetch` request to www-ximm.archive.org
 */
export class AlphaSearchBackend extends DefaultSearchBackend {
  private readonly testUrl_1 =
    'ia-petabox-ximm-search-page-production-service.archive.org';
  private readonly testUrl_2 = 'www-ximm.archive.org';

  readonly serviceParam: ServiceParam = {
    name: 'alpha',
    param: '',
  };

  constructor(options?: {
    baseUrl?: string;
    includeCredentials?: boolean;
    scope?: string;
  }) {
    super(options);
    this.baseUrl = options?.baseUrl ?? this.testUrl_1;
  }

  /** @inheritdoc */
  async performSearch(
    params: SearchParams
  ): Promise<Result<any, SearchServiceError>> {
    params.service = this.serviceParam;
    const urlSearchParam = SearchParamURLGenerator.generateURLSearchParams(
      params,
      this.querystringParams
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

  /** @inheritdoc */
  readonly querystringParams: Record<ParamType, string> = {
    query: 'q',
    sort: 'sort',
    rows: 'rows',
    page: 'page',
    fields: 'fields',
    aggregations: 'aggregations',
    aggregations_size: 'aggregations_size',
    service: 'service_backend',
  };
}
