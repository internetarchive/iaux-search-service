import {
  css,
  CSSResult,
  customElement,
  html,
  internalProperty,
  LitElement,
  query,
  TemplateResult,
} from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { nothing } from 'lit-html';
import { Metadata } from '../src/models/metadata';
import { MetadataResponse } from '../src/responses/metadata/metadata-response';
import { SearchResponse } from '../src/responses/search/search-response';
import { SearchParams } from '../src/search-params';
import { SearchService } from '../src/search-service';
import { SearchServiceInterface } from '../src/search-service-interface';

@customElement('app-root')
export class AppRoot extends LitElement {
  private searchService: SearchServiceInterface = SearchService.default;

  @query('#search-input')
  private searchInput!: HTMLInputElement;

  @query('#metadata-input')
  private metadataInput!: HTMLInputElement;

  @internalProperty()
  private searchResponse?: SearchResponse;

  @internalProperty()
  private metadataResponse?: MetadataResponse;

  private get searchResults(): Metadata[] | undefined {
    return this.searchResponse?.response.docs;
  }

  /** @inheritdoc */
  render(): TemplateResult {
    return html`
      <fieldset>
        <legend>Search</legend>
        <form>
          <label>Search</label>
          <input type="text" id="search-input" placeholder="Search Term" />
          <input type="submit" value="Search" @click=${this.search} />
        </form>
        <form>
          <label>Metadata</label>
          <input type="text" id="metadata-input" placeholder="Identifier" />
          <input
            type="submit"
            value="Get Metadata"
            @click=${this.getMetadata}
          />
        </form>
      </fieldset>

      ${this.searchResults ? this.resultsTemplate : nothing}
      ${this.metadataResponse ? this.metadataTemplate : nothing}
    `;
  }

  private get resultsTemplate(): TemplateResult {
    return html`
      <h2>Search Results</h2>
      <table>
        <thead>
          <tr>
            <th>Identifier</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          ${this.searchResults?.map(metadata => {
            return html`
              <tr>
                <td>${metadata.identifier}</td>
                <td>${metadata.title?.value}</td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  }

  private get metadataTemplate(): TemplateResult {
    const rawMetadata = this.metadataResponse?.metadata.rawMetadata;
    if (!rawMetadata) return html`${nothing}`;

    return html`
      <h2>Metadata Response</h2>
      <table>
        ${Object.keys(rawMetadata).map(
          key => html`
            <tr>
              <td>${key}</td>
              <td>${unsafeHTML(rawMetadata[key])}</td>
            </tr>
          `
        )}
      </table>
    `;
  }

  async getMetadata(e: Event): Promise<void> {
    e.preventDefault();
    const identifier = this.metadataInput.value;
    const result = await this.searchService.fetchMetadata(identifier);
    this.metadataResponse = result?.success;
  }

  async search(e: Event): Promise<void> {
    e.preventDefault();
    const term = this.searchInput.value;
    const searchParams = new SearchParams({
      query: term,
      rows: 10,
      fields: ['identifier', 'title'],
    });
    const result = await this.searchService.search(searchParams);
    if (result?.success) {
      this.searchResponse = result?.success;
    } else {
      alert(`Oh noes: ${result?.error?.message}`);
      console.error('Error searching', result?.error);
    }
  }

  static get styles(): CSSResult {
    return css`
      /* th {
        font-weight: bold;
      } */
    `;
  }
}
