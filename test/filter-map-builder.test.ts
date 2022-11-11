import { expect } from '@open-wc/testing';
import { FilterMapBuilder } from '../src/filter-map-builder';
import { FilterConstraint, FilterMap } from '../src/search-params';

describe('filter map builder', () => {
  it('initializes with empty filter map', () => {
    expect(new FilterMapBuilder().build()).to.deep.equal({});
  });

  it('can add filters', () => {
    const builder = new FilterMapBuilder();
    builder.addFilter('foo', 'bar', FilterConstraint.INCLUDE);
    expect(builder.build()).to.deep.equal({ foo: { bar: 'inc' } });

    builder.addFilter('baz', 'boop', FilterConstraint.EXCLUDE);
    expect(builder.build()).to.deep.equal({
      foo: { bar: 'inc' },
      baz: { boop: 'exc' },
    });

    builder.addFilter('foo', 'beep', FilterConstraint.GREATER_THAN);
    expect(builder.build()).to.deep.equal({
      foo: { bar: 'inc', beep: 'gt' },
      baz: { boop: 'exc' },
    });
  });

  it('can remove filters', () => {
    const builder = new FilterMapBuilder();
    builder.addFilter('foo', 'bar', FilterConstraint.INCLUDE);
    builder.addFilter('baz', 'boop', FilterConstraint.EXCLUDE);
    builder.addFilter('foo', 'beep', FilterConstraint.GREATER_THAN);
    expect(builder.build()).to.deep.equal({
      foo: { bar: 'inc', beep: 'gt' },
      baz: { boop: 'exc' },
    });

    builder.removeFilter('foo', 'bar');
    expect(builder.build()).to.deep.equal({
      foo: { beep: 'gt' },
      baz: { boop: 'exc' },
    });

    builder.removeFilter('foo', 'beep');
    expect(builder.build()).to.deep.equal({ baz: { boop: 'exc' } });

    builder.removeFilter('not', 'exist');
    expect(builder.build()).to.deep.equal({ baz: { boop: 'exc' } });

    builder.removeFilter('baz', 'boop');
    expect(builder.build()).to.deep.equal({});
  });

  it('can be initialized with an existing filter map', () => {
    const builder = new FilterMapBuilder();
    const filterMap: FilterMap = {
      foo: {
        bar: FilterConstraint.INCLUDE,
      },
      baz: {
        boop: FilterConstraint.EXCLUDE,
      },
    };

    builder.setFilterMap(filterMap);
    expect(builder.build()).to.deep.equal({
      foo: { bar: 'inc' },
      baz: { boop: 'exc' },
    });
  });

  it('can be merged with an existing filter map', () => {
    const builder = new FilterMapBuilder();
    const filterMap: FilterMap = {
      foo: {
        bar: FilterConstraint.INCLUDE,
      },
      baz: {
        boop: FilterConstraint.EXCLUDE,
      },
    };

    builder.addFilter('foo', 'beep', FilterConstraint.LESS_OR_EQUAL);
    expect(builder.build()).to.deep.equal({ foo: { beep: 'lte' } });

    builder.mergeFilterMap(filterMap);
    expect(builder.build()).to.deep.equal({
      foo: { bar: 'inc', beep: 'lte' },
      baz: { boop: 'exc' },
    });
  });
});
