import { expect } from '@open-wc/testing';
import { DurationParser } from '../../../../src/models/metadata-fields/field-types/duration';

describe('DurationParser', () => {
  it('can parse mm:ss format', async () => {
    const parser = new DurationParser();
    const response = parser.parseValue('45:23');
    const expected = 23 + 45 * 60;
    expect(response).to.equal(expected);
  });

  it('can parse hh:mm:ss format', async () => {
    const parser = new DurationParser();
    const response = parser.parseValue('3:45:23');
    const expected = 23 + 45 * 60 + 3 * 60 * 60;
    expect(response).to.equal(expected);
  });

  it('can parse decimal format', async () => {
    const parser = new DurationParser();
    const response = parser.parseValue('345.23');
    expect(response).to.equal(345.23);
  });
});
