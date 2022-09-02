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
import { SearchResponse } from '../src/responses/search-response';
import { SearchService } from '../src/search-service';
import { SearchServiceInterface } from '../src/search-service-interface';
import { Hit } from '../src/models/hit-types/hit';
import { SearchType } from '../src/search-type';
import { SearchParams, SortDirection } from '../src/search-params';

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

          <fieldset class="search-options">
            <legend>Search type:</legend>
            <input
              type="radio"
              id="mds"
              name="search-type"
              value="mds"
              checked
            />
            <label for="mds"> &nbsp;Metadata </label>
            <input type="radio" id="fts" name="search-type" value="fts" />
            <label for="fts"> &nbsp;Full text </label>
          </fieldset>

          <fieldset class="search-options">
            <legend>Sort by title:</legend>
            <input
              type="radio"
              id="sort-none"
              name="sort"
              value="none"
              checked
            />
            <label for="sort-none"> &nbsp;None </label>
            <input type="radio" id="sort-asc" name="sort" value="asc" />
            <label for="sort-asc"> &nbsp;Ascending </label>
            <input type="radio" id="sort-desc" name="sort" value="desc" />
            <label for="sort-desc"> &nbsp;Descending </label>
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
                <td>${hit.title?.value ?? '(Untitled)'}</td>
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

    const checkedSort = this.shadowRoot?.querySelector(
      `input[name='sort']:checked`
    ) as HTMLInputElement;

    const sortParam =
      checkedSort?.value === 'none'
        ? []
        : [{ field: 'title', direction: checkedSort?.value as SortDirection }];

    const searchParams: SearchParams = {
      query: term,
      rows: 10,
      sort: sortParam,
      fields: ['identifier', 'title'],
      aggregations,
    };

    const checkedSearchType = this.shadowRoot?.querySelector(
      `input[name='search-type']:checked`
    ) as HTMLInputElement;

    const searchType =
      checkedSearchType?.value === 'fts'
        ? SearchType.FULLTEXT
        : SearchType.METADATA;

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
      .search-options {
        margin-top: 0.6rem;
      }
    `;
  }
}
