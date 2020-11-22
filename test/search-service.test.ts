import { html, fixture, expect } from '@open-wc/testing';

import {SearchService} from '../src/SearchService.js';
import '../search-service.js';

describe('SearchService', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el: SearchService = await fixture(html`
      <search-service></search-service>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el: SearchService = await fixture(html`
      <search-service></search-service>
    `);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el: SearchService = await fixture(html`
      <search-service title="attribute title"></search-service>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el: SearchService = await fixture(html`
      <search-service></search-service>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
