import { expect } from '@open-wc/testing';
import { StringParser } from '../../../../src/models/metadata-fields/field-types/string';

describe('StringParser', () => {
  it('can parse strings', async () => {
    const parser = new StringParser();
    const response = parser.parseValue('3');
    expect(response).to.equal('3');
  });
});
