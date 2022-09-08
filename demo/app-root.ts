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
import { Aggregation, Bucket } from '../src/models/aggregation';

@customElement('app-root')
export class AppRoot extends LitElement {
  private searchService: SearchServiceInterface = SearchService.default;

  @query('#search-input')
  private searchInput!: HTMLInputElement;

  @internalProperty()
  private searchResponse?: SearchResponse;

  @internalProperty()
  private aggregationsResponse?: SearchResponse;

  @internalProperty()
  private loadingSearchResults = false;

  @internalProperty()
  private loadingAggregations = false;

  private get searchResults(): Hit[] | undefined {
    return this.searchResponse?.response.hits;
  }

  private get searchAggregations(): Record<string, Aggregation> | undefined {
    return this.aggregationsResponse?.response.aggregations;
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
            <legend>Search size:</legend>
            <div class="field-row">
              <label for="num-rows">Number of result rows:</label>
              <input type="number" id="num-rows" value="10" min="0" max="99" />
            </div>
            <div class="field-row">
              <label for="num-aggs">Number of aggregation rows:</label>
              <input type="number" id="num-aggs" value="6" min="0" max="50" />
            </div>
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

          <fieldset class="search-options">
            <legend>Include aggregations for:</legend>
            <input
              type="checkbox"
              id="aggs-subject"
              name="aggs"
              value="subject"
              checked
            />
            <label for="aggs-subject">Subject </label>
            <input
              type="checkbox"
              id="aggs-language"
              name="aggs"
              value="language"
              checked
            />
            <label for="aggs-language">Language </label>
            <input
              type="checkbox"
              id="aggs-creator"
              name="aggs"
              value="creator"
              checked
            />
            <label for="aggs-creator">Creator </label>
            <input
              type="checkbox"
              id="aggs-collection"
              name="aggs"
              value="collection"
              checked
            />
            <label for="aggs-collection">Collection </label>
            <input
              type="checkbox"
              id="aggs-mediatype"
              name="aggs"
              value="mediatype"
              checked
            />
            <label for="aggs-mediatype">Mediatype </label>
            <input
              type="checkbox"
              id="aggs-year"
              name="aggs"
              value="year"
              checked
            />
            <label for="aggs-year"> &nbsp;Year </label>
          </fieldset>
        </form>
      </fieldset>

      ${this.searchResults ? this.resultsTemplate : nothing}
    `;
  }

  private get resultsTemplate(): TemplateResult {
    return html`
      ${this.loadingSearchResults
        ? html`<h3>Loading search results...</h3>`
        : this.searchResultsTemplate}
      ${this.loadingAggregations
        ? html`<h3>Loading aggregations...</h3>`
        : this.aggregationsTemplate}
    `;
  }

  private get searchResultsTemplate(): TemplateResult {
    return html`
      <h2>Search Results</h2>
      <table>
        <thead>
          <tr>
            <th>Identifier</th>
            <th>Title</th>
            ${this.snippetsHeaderTemplate}
          </tr>
        </thead>
        <tbody>
          ${this.searchResults?.map(hit => {
            return html`
              <tr>
                <td>${hit.identifier}</td>
                <td>${hit.title?.value ?? '(Untitled)'}</td>
                ${this.snippetTemplate(hit)}
              </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  }

  private get aggregationsTemplate(): TemplateResult {
    return html`
      <div>
        <h2>Aggregations</h2>
        ${Object.entries(this.searchAggregations ?? {}).map(([key, agg]) => {
          return html`
            <h3>${key}</h3>
            <p>
              ${agg.buckets
                .map((bucket: number | Bucket) => {
                  if (typeof bucket === 'number') {
                    return bucket;
                  } else {
                    return `${bucket.key} (${bucket.doc_count})`;
                  }
                })
                .join(', ')}
            </p>
          `;
        })}
      </div>
    `;
  }

  private get snippetsHeaderTemplate(): TemplateResult {
    return this.searchResults?.some(hit => hit.highlight)
      ? html`<th>Snippets</th>`
      : html`${nothing}`;
  }

  private snippetTemplate(hit: Hit): TemplateResult {
    return hit.highlight
      ? html`<td>${hit.highlight.value}</td>`
      : html`${nothing}`;
  }

  /**
   * Conduct a full search (both hits and aggregations)
   */
  private async search(e: Event): Promise<void> {
    e.preventDefault();
    const term = this.searchInput.value;

    const checkedSearchType = this.shadowRoot?.querySelector(
      `input[name='search-type']:checked`
    ) as HTMLInputElement;

    const searchType =
      checkedSearchType?.value === 'fts'
        ? SearchType.FULLTEXT
        : SearchType.METADATA;

    this.fetchSearchResults(term, searchType);
    this.fetchAggregations(term, searchType);
  }

  /**
   * Fetch the search hits
   */
  private async fetchSearchResults(query: string, searchType: SearchType) {
    const checkedSort = this.shadowRoot?.querySelector(
      `input[name='sort']:checked`
    ) as HTMLInputElement;

    const sortParam =
      checkedSort?.value === 'none'
        ? []
        : [{ field: 'title', direction: checkedSort?.value as SortDirection }];

    const rowsInput = this.shadowRoot?.querySelector(
      '#num-rows'
    ) as HTMLInputElement;
    const numRows = Number(rowsInput?.value);

    const searchParams: SearchParams = {
      query,
      rows: numRows,
      fields: ['identifier', 'title'],
      sort: sortParam,
      aggregations: { omit: true },
    };

    this.loadingSearchResults = true;
    const result = await this.searchService.search(searchParams, searchType);
    this.loadingSearchResults = false;

    if (result?.success) {
      this.searchResponse = result?.success;
    } else {
      alert(`Oh noes: ${result?.error?.message}`);
      console.error('Error searching', result?.error);
    }
  }

  /**
   * Fetch the search aggregations (facets)
   */
  private async fetchAggregations(query: string, searchType: SearchType) {
    const checkedAggs = this.shadowRoot?.querySelectorAll(
      `input[name='aggs']:checked`
    );
    const aggregations = {
      simpleParams: checkedAggs
        ? [...checkedAggs].map(elmt => (elmt as HTMLInputElement).value)
        : undefined,
    };

    const numAggsInput = this.shadowRoot?.querySelector(
      '#num-aggs'
    ) as HTMLInputElement;
    const numAggs = Number(numAggsInput?.value);

    const searchParams: SearchParams = {
      query,
      rows: 0,
      aggregations,
      aggregationsSize: numAggs,
    };

    this.loadingAggregations = true;
    const result = await this.searchService.search(searchParams, searchType);
    this.loadingAggregations = false;

    if (result?.success) {
      this.aggregationsResponse = result?.success;
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

      .field-row {
        margin: 0.3rem 0;
      }
    `;
  }
}
