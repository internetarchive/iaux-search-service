import { html, css, LitElement, TemplateResult, CSSResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { SearchService } from '../src/search-service';
import { SearchServiceInterface } from '../src/search-service-interface';
import { SearchBackendOptionsInterface } from '../src/search-backend/search-backend-options';
import './item-detail-query';
import './search-query';

@customElement('app-root')
export class AppRoot extends LitElement {
  @state()
  private searchServiceUrlOptions?: SearchBackendOptionsInterface = this.initSearchServiceUrlOptions();

  @state()
  private queryType: 'search' | 'item' = 'search';

  @state()
  private searchService: SearchServiceInterface = new SearchService(
    this.searchServiceUrlOptions
  );

  private initSearchServiceUrlOptions() {
    const params = new URL(window.location.href).searchParams;
    return {
      baseUrl: params.get('search_base_url') ?? 'archive.org',
      servicePath: params.get('search_service_path') ?? undefined,
      debuggingEnabled: !!params.get('debugging') ?? undefined,
    };
  }

  /** @inheritdoc */
  render(): TemplateResult {
    return html`
      <fieldset>
        <legend>Query Type</legend>
        <input
          type="radio"
          id="search"
          name="query-type"
          value="search"
          ?checked=${this.queryType === 'search'}
          @change=${this.onQueryTypeChange}
        />
        <label for="search">Search</label>
        <input
          type="radio"
          id="item"
          name="query-type"
          value="item"
          ?checked=${this.queryType === 'item'}
          @change=${this.onQueryTypeChange}
        />
        <label for="item">Item</label>
      </fieldset>
      ${choose(this.queryType, [
        ['search', () => this.searchTemplate],
        ['item', () => this.itemTemplate],
      ])}
    `;
  }

  onQueryTypeChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.queryType = target.value as 'search' | 'item';
  }

  private get itemTemplate(): TemplateResult {
    return html`
      <item-detail-query
        .searchService=${this.searchService}
      ></item-detail-query>
    `;
  }

  private get searchTemplate(): TemplateResult {
    return html` <search-query
      .searchService=${this.searchService}
      ?debuggingEnabled=${this.searchServiceUrlOptions?.debuggingEnabled}
    ></search-query>`;
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

      #search-input {
        min-width: 220px;
      }

      #applied-filters {
        margin-top: 6px;
      }

      .filter {
        display: inline-block;
        margin-bottom: 3px;
        font-size: 1.1rem;
        font-family: sans-serif;
      }

      .filter-text {
        padding: 3px 3px 3px 6px;
        border-radius: 3px 0 0 3px;
        background: #ccc;
      }

      .remove-filter {
        all: unset;
        padding: 3px 6px;
        border-radius: 0 3px 3px 0;
        background: #ccc;
        cursor: pointer;
      }
      .remove-filter:hover {
        background: #999;
      }
      .remove-filter:active {
        background: #888;
      }

      .input-with-label {
        display: inline-flex;
        align-items: center;
        margin-right: 8px;
      }

      .params {
        white-space: pre-wrap;
      }
    `;
  }
}
