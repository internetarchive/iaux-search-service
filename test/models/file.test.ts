import { expect } from '@open-wc/testing';

import { File } from '../../src/models/file';

describe('File', () => {
  it('can be instantiated with an object', async () => {
    const file = new File({ name: 'foo.jpg' });
    expect(file.name).to.equal('foo.jpg');
  });
});
