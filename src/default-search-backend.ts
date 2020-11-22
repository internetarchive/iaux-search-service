import { SearchBackendInterface } from './search-backend-interface';
import { SearchResponse } from './responses/search/search-response';
import { MetadataResponse } from './responses/metadata/metadata-response';
import { SearchParams } from './search-params';

export class DefaultSearchBackend implements SearchBackendInterface {
  private baseUrl: string;

  constructor(baseUrl = 'archive.org') {
    this.baseUrl = baseUrl;
  }

  async performSearch(params: SearchParams): Promise<SearchResponse> {
    const urlSearchParam = params.asUrlSearchParams;
    const queryAsString = urlSearchParam.toString();
    const url = `https://${this.baseUrl}/advancedsearch.php?${queryAsString}`;
    const response = await fetch(url);
    const json = await response.json();
    return new Promise(resolve => resolve(json));
  }

  async fetchMetadata(identifier: string): Promise<MetadataResponse> {
    const url = `https://${this.baseUrl}/metadata/${identifier}`;
    const response = await fetch(url);
    const json = await response.json();
    return new Promise(resolve => resolve(json));
  }
}
