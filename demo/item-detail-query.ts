import { html, LitElement, nothing, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { SearchServiceInterface } from '../src/search-service-interface';
import { SearchParams } from '../src/search-params';
import { SearchType } from '../src/search-type';
import { SearchResponse } from '../src/responses/search-response';
import { ItemExtraInfo } from '../src/responses/item-extra-info';

@customElement('item-detail-query')
export class ItemDetailQuery extends LitElement {
  @property({ type: Object }) searchService?: SearchServiceInterface;

  @state() isSearching = false;

  @state() response?: SearchResponse;

  @state() error?: Error;

  private get itemResults(): ItemExtraInfo | null | undefined {
    return this.response?.response.itemExtraInfo;
  }

  render(): TemplateResult {
    return html`
      <fieldset>
        <legend>Item Query</legend>
        <form>
          <label for="item-input">Item ID: </label>
          <input type="text" id="item-input" placeholder="Enter Item ID" />
          <input type="submit" value="Go" @click=${this.search} />
        </form>
      </fieldset>

      ${this.isSearching ? html`<p>Searching...</p>` : nothing}
      ${this.itemResults
        ? html`
            <h3>Item Details:</h3>
            <pre>${JSON.stringify(this.itemResults, null, 2)}</pre>
          `
        : nothing}
      ${this.error
        ? html`
            <h3>Error:</h3>
            <pre>${this.error}</pre>
          `
        : nothing}
    `;
  }

  async search(event: Event): Promise<void> {
    event.preventDefault();
    const itemId = (this.shadowRoot?.getElementById(
      'item-input'
    ) as HTMLInputElement)?.value;

    const searchParams: SearchParams = {
      query: '',
      pageType: 'item_details',
      pageTarget: itemId,
      uid: 'demo',
    };

    this.error = undefined;
    this.response = undefined;
    this.isSearching = true;

    const results = await this.searchService?.search(
      searchParams,
      SearchType.DEFAULT
    );

    this.response = results?.success;
    this.error = results?.error;
    this.isSearching = false;
  }
}
