import { expect } from '@open-wc/testing';
import { NumberParser } from '../../../../src/models/metadata-fields/field-types/number';

describe('NumberParser', () => {
  it('can parse int strings', async () => {
    const parser = new NumberParser();
    const response = parser.parseValue('3');
    expect(response).to.equal(3);
  });

  it('can parse float strings', async () => {
    const parser = new NumberParser();
    const response = parser.parseValue('3.14');
    expect(response).to.equal(3.14);
  });

  it('returns undefined if the number is not a number', async () => {
    const parser = new NumberParser();
    const response = parser.parseValue('qab');
    expect(response).to.be.undefined;
  });
});
