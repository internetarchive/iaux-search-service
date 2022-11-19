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

  it('can add multiple constraints for one value', () => {
    const builder = new FilterMapBuilder();
    builder.addFilter('foo', 'bar', FilterConstraint.INCLUDE);
    expect(builder.build()).to.deep.equal({ foo: { bar: 'inc' } });

    builder.addFilter('foo', 'bar', FilterConstraint.GREATER_OR_EQUAL);
    expect(builder.build()).to.deep.equal({
      foo: { bar: ['inc', 'gte'] },
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

    builder.removeFilters('foo', 'bar');
    expect(builder.build()).to.deep.equal({
      foo: { beep: 'gt' },
      baz: { boop: 'exc' },
    });

    builder.removeFilters('foo', 'beep');
    expect(builder.build()).to.deep.equal({ baz: { boop: 'exc' } });

    builder.removeFilters('not', 'exist');
    expect(builder.build()).to.deep.equal({ baz: { boop: 'exc' } });

    builder.removeFilters('baz', 'boop');
    expect(builder.build()).to.deep.equal({});
  });

  it('can remove single filters by constraint type', () => {
    const builder = new FilterMapBuilder();
    builder.addFilter('foo', 'bar', FilterConstraint.INCLUDE);
    builder.addFilter('foo', 'bar', FilterConstraint.GREATER_OR_EQUAL);
    builder.addFilter('baz', 'boop', FilterConstraint.EXCLUDE);
    expect(builder.build()).to.deep.equal({
      foo: { bar: ['inc', 'gte'] },
      baz: { boop: 'exc' },
    });

    builder.removeSingleFilter('foo', 'bar', FilterConstraint.GREATER_OR_EQUAL);
    expect(builder.build()).to.deep.equal({
      foo: { bar: 'inc' },
      baz: { boop: 'exc' },
    });

    builder.removeSingleFilter('foo', 'bar', FilterConstraint.EXCLUDE);
    expect(builder.build()).to.deep.equal({
      foo: { bar: 'inc' },
      baz: { boop: 'exc' },
    });

    builder.removeSingleFilter('foo', 'bar', FilterConstraint.INCLUDE);
    expect(builder.build()).to.deep.equal({
      baz: { boop: 'exc' },
    });

    builder.removeSingleFilter('baz', 'boop', FilterConstraint.EXCLUDE);
    expect(builder.build()).to.deep.equal({});

    builder.removeSingleFilter('not', 'exist', FilterConstraint.INCLUDE);
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
        boop: [FilterConstraint.EXCLUDE, FilterConstraint.LESS_OR_EQUAL],
      },
    };

    builder.addFilter('foo', 'bar', FilterConstraint.GREATER_OR_EQUAL);
    builder.addFilter('foo', 'beep', FilterConstraint.LESS_OR_EQUAL);
    expect(builder.build()).to.deep.equal({
      foo: { bar: 'gte', beep: 'lte' },
    });

    builder.mergeFilterMap(filterMap);
    expect(builder.build()).to.deep.equal({
      foo: { bar: ['gte', 'inc'], beep: 'lte' },
      baz: { boop: ['exc', 'lte'] },
    });
  });
});
