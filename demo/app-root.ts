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
import { nothing } from 'lit-html';
import { SearchResponse } from '../src/responses/search/search-response';
import { SearchService } from '../src/search-service';
import { SearchServiceInterface } from '../src/search-service-interface';
import { Hit } from '../src/models/hit-types/hit';
import { SearchType } from '../src/search-type';

@customElement('app-root')
export class AppRoot extends LitElement {
  private searchService: SearchServiceInterface = SearchService.default;

  @query('#search-input')
  private searchInput!: HTMLInputElement;

  @internalProperty()
  private searchResponse?: SearchResponse;

  private get searchResults(): Hit[] | undefined {
    return this.searchResponse?.response.hits;
  }

  /** @inheritdoc */
  render(): TemplateResult {
    return html`
      <fieldset>
        <legend>Search</legend>
        <form>
          <label for="search-input">Search: </label>
          <input type="text" id="search-input" placeholder="Search Term" />
          <input type="submit" value="Go" @click=${this.search} />

          <fieldset id="search-options">
            <legend>Search type:</legend>
            <label><input type="radio" name="search-type" value="mds" checked>&nbsp;Metadata</label>
            <label><input type="radio" name="search-type" value="fts">&nbsp;Full text</label>
          </fieldset>
        </form>
      </fieldset>

      ${this.searchResults ? this.resultsTemplate : nothing}
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
          ${this.searchResults?.map(hit => {
            return html`
              <tr>
                <td>${hit.identifier}</td>
                <td>${hit.title?.value}</td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  }

  async search(e: Event): Promise<void> {
    e.preventDefault();
    const term = this.searchInput.value;
    const aggregations = {
      advancedParams: [
        {
          field: 'year',
          size: 100,
        },
      ],
    };
    const searchParams = {
      query: term,
      rows: 10,
      fields: ['identifier', 'title'],
      aggregations,
    };
    const checkedRadio = this.shadowRoot?.querySelector(`input[name='search-type']:checked`) as HTMLInputElement;
    const searchType = checkedRadio?.value === 'fts' ? SearchType.FULLTEXT : SearchType.METADATA;
    
    const result = await this.searchService.search(searchParams, searchType);
    if (result?.success) {
      this.searchResponse = result?.success;
    } else {
      alert(`Oh noes: ${result?.error?.message}`);
      console.error('Error searching', result?.error);
    }
  }

  static get styles(): CSSResult {
    return css`
      #search-options {
        margin-top: 0.6rem;
      }
    `;
  }
}
