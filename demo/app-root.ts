import { html, css, LitElement, TemplateResult, CSSResult, nothing } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { SearchResponse } from '../src/responses/search-response';
import { SearchService } from '../src/search-service';
import { SearchServiceInterface } from '../src/search-service-interface';
import { SearchResult } from '../src/models/hit-types/hit';
import { SearchType } from '../src/search-type';
import { SearchParams, SortDirection } from '../src/search-params';
import { Aggregation, Bucket } from '../src/models/aggregation';
import { SearchBackendOptionsInterface } from '../src/search-backend/search-backend-options';
import { SearchParamURLGenerator } from '../src/search-param-url-generator';

@customElement('app-root')
export class AppRoot extends LitElement {
  @query('#search-input')
  private searchInput!: HTMLInputElement;

  @query('#debug-info-check')
  private debugCheck!: HTMLInputElement;

  @query('#num-rows')
  private rowsInput!: HTMLInputElement;

  @query('#num-aggs')
  private numAggsInput!: HTMLInputElement;

  @query(`input[name='sort']:checked`)
  private checkedSort!: HTMLInputElement;

  @query('#aggs-default')
  private defaultAggregationsCheckbox!: HTMLInputElement;

  @state()
  private searchServiceUrlOptions?: SearchBackendOptionsInterface = this.initSearchServiceUrlOptions();

  @state()
  private searchResponse?: SearchResponse;

  @state()
  private aggregationsResponse?: SearchResponse;

  @state()
  private loadingSearchResults = false;

  @state()
  private loadingAggregations = false;

  @state()
  private lastSearchParams?: string;

  @state()
  private lastAggregationParams?: string;

  @state()
  private defaultAggregationsChecked = true;

  @state()
  private fullSearchResultsShown = false;

  private searchService: SearchServiceInterface = new SearchService(
    this.searchServiceUrlOptions
  );

  private get searchResults(): SearchResult[] | undefined {
    return this.searchResponse?.response.results;
  }

  private get searchAggregations(): Record<string, Aggregation> | undefined {
    return this.aggregationsResponse?.response.aggregations;
  }

  private initSearchServiceUrlOptions() {
    const params = new URL(window.location.href).searchParams;
    return {
      baseUrl: params.get('search_base_url') ?? undefined,
      servicePath: params.get('search_service_path') ?? undefined,
      debuggingEnabled: !!params.get('debugging') ?? undefined,
    };
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

          <span class="input-with-label">
            <input
              type="checkbox"
              id="debug-info-check"
              ?checked=${this.searchServiceUrlOptions?.debuggingEnabled}
            />
            <label for="debug-info-check">Include debugging info</label>
          </span>

          <fieldset class="search-options">
            <legend>Search type:</legend>
            <span class="input-with-label">
              <input
                type="radio"
                id="mds"
                name="search-type"
                value="mds"
                checked
              />
              <label for="mds"> &nbsp;Metadata </label>
            </span>
            <span class="input-with-label">
              <input type="radio" id="fts" name="search-type" value="fts" />
              <label for="fts"> &nbsp;Full text </label>
            </span>
          </fieldset>

          <fieldset class="search-options">
            <legend>Search size:</legend>
            <div class="field-row">
              <label for="num-rows">Number of result rows:</label>
              <input type="number" id="num-rows" value="10" min="0" max="999" />
            </div>
            <div class="field-row">
              <label for="num-aggs">Number of aggregation buckets:</label>
              <input type="number" id="num-aggs" value="6" min="0" max="999" />
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
              id="aggs-default"
              checked
              @change=${this.toggleDefaultAggregations}
            />
            <label for="aggs-default">Default (all) </label>
            <input
              type="checkbox"
              id="aggs-mediatype"
              name="aggs"
              value="mediatype"
              checked
              ?disabled=${this.defaultAggregationsChecked}
            />
            <label for="aggs-mediatype">Mediatype </label>
            <input
              type="checkbox"
              id="aggs-year"
              name="aggs"
              value="year"
              checked
              ?disabled=${this.defaultAggregationsChecked}
            />
            <label for="aggs-year">Year </label>
            <input
              type="checkbox"
              id="aggs-subject"
              name="aggs"
              value="subject"
              checked
              ?disabled=${this.defaultAggregationsChecked}
            />
            <label for="aggs-subject">Subject </label>
            <input
              type="checkbox"
              id="aggs-language"
              name="aggs"
              value="language"
              checked
              ?disabled=${this.defaultAggregationsChecked}
            />
            <label for="aggs-language">Language </label>
            <input
              type="checkbox"
              id="aggs-creator"
              name="aggs"
              value="creator"
              checked
              ?disabled=${this.defaultAggregationsChecked}
            />
            <label for="aggs-creator">Creator </label>
            <input
              type="checkbox"
              id="aggs-collection"
              name="aggs"
              value="collection"
              checked
              ?disabled=${this.defaultAggregationsChecked}
            />
            <label for="aggs-collection">Collection </label>
            <input
              type="checkbox"
              id="aggs-lending"
              name="aggs"
              value="lending___status"
              checked
              ?disabled=${this.defaultAggregationsChecked}
            />
            <label for="aggs-lending">Lending </label>
          </fieldset>
        </form>
      </fieldset>

      ${this.searchResults || this.loadingSearchResults ? this.resultsTemplate : nothing}
    `;
  }

  private get resultsTemplate(): TemplateResult {
    return html`
      <details>
        <summary>PPS URL params</summary>
        ${this.lastSearchParams
          ? html`<div>
              Last search params:
              <pre>${this.lastSearchParams}</pre>
            </div>`
          : nothing}
        ${this.lastAggregationParams
          ? html`<div>
              Last aggregation params:
              <pre>${this.lastAggregationParams}</pre>
            </div>`
          : nothing}
      </details>
      ${this.loadingSearchResults
        ? html`<h3>Loading search results...</h3>`
        : [this.minimalSearchResultsTemplate, this.fullSearchResultsTemplate]}
      ${this.loadingAggregations
        ? html`<h3>Loading aggregations...</h3>`
        : this.aggregationsTemplate}
    `;
  }

  private get minimalSearchResultsTemplate(): TemplateResult {
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

  private get fullSearchResultsTemplate(): TemplateResult {
    return html`
      <button @click=${this.toggleFullSearchResults}>
        ${this.fullSearchResultsShown ? 'Hide' : 'Show'} all search results
      </button>
      ${this.fullSearchResultsShown
        ? html`<pre>
          ${JSON.stringify(this.searchResults, null, 2)}
        </pre
          >`
        : nothing}
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

  private snippetTemplate(hit: SearchResult): TemplateResult {
    return hit.highlight
      ? html`<td>${hit.highlight.value}</td>`
      : html`${nothing}`;
  }

  private toggleDefaultAggregations() {
    this.defaultAggregationsChecked = this.defaultAggregationsCheckbox?.checked;
  }

  private toggleFullSearchResults() {
    this.fullSearchResultsShown = !this.fullSearchResultsShown;
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
    const sortParam =
      this.checkedSort?.value === 'none'
        ? undefined
        : [
            {
              field: 'title',
              direction: this.checkedSort?.value as SortDirection,
            },
          ];

    const numRows = Number(this.rowsInput?.value);
    const includeDebugging = this.debugCheck?.checked;

    const searchParams: SearchParams = {
      query,
      rows: numRows,
      sort: sortParam,
      aggregations: { omit: true },
      debugging: includeDebugging,
      uid: 'demo',
    };

    this.lastSearchParams = SearchParamURLGenerator.generateURLSearchParams(
      searchParams
    ).toString();

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

    const numAggs = Number(this.numAggsInput?.value);
    const includeDebugging = this.debugCheck?.checked;

    const searchParams: SearchParams = {
      query,
      rows: 0,
      aggregationsSize: numAggs,
      debugging: includeDebugging,
      uid: 'demo',
    };

    if (!this.defaultAggregationsChecked) {
      searchParams.aggregations = aggregations;
    }

    this.lastAggregationParams = SearchParamURLGenerator.generateURLSearchParams(
      searchParams
    ).toString();

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
      :host {
        font-size: 1.3rem;
      }

      .search-options {
        margin-top: 0.6rem;
      }

      .field-row {
        margin: 0.3rem 0;
      }

      fieldset {
        margin-bottom: 0.5rem;
      }

      .input-with-label {
        display: inline-flex;
        align-items: center;
        margin-right: 8px;
      }
    `;
  }
}
