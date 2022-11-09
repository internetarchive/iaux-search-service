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

  it('correctly resolves overlap between exclude and gte constraints', () => {
    const builder = new FilterMapBuilder();
    builder.addFilter('year', '1950', FilterConstraint.GREATER_OR_EQUAL);
    expect(builder.build()).to.deep.equal({ year: { 1950: 'gte' } });

    builder.addFilter('year', '1950', FilterConstraint.EXCLUDE);
    // Overwrites constraint with GREATER_THAN
    expect(builder.build()).to.deep.equal({ year: { 1950: 'gt' } });
  });

  it('correctly resolves overlap between exclude and lte constraints', () => {
    const builder = new FilterMapBuilder();
    builder.addFilter('year', '1950', FilterConstraint.LESS_OR_EQUAL);
    expect(builder.build()).to.deep.equal({ year: { 1950: 'lte' } });

    builder.addFilter('year', '1950', FilterConstraint.EXCLUDE);
    // Overwrites constraint with LESS_THAN
    expect(builder.build()).to.deep.equal({ year: { 1950: 'lt' } });
  });

  it('correctly resolves overlap between exclude and gt constraints', () => {
    const builder = new FilterMapBuilder();
    builder.addFilter('year', '1950', FilterConstraint.GREATER_THAN);
    expect(builder.build()).to.deep.equal({ year: { 1950: 'gt' } });

    builder.addFilter('year', '1950', FilterConstraint.EXCLUDE);
    // Leaves constraint unchanged
    expect(builder.build()).to.deep.equal({ year: { 1950: 'gt' } });
  });

  it('correctly resolves overlap between exclude and lt constraints', () => {
    const builder = new FilterMapBuilder();
    builder.addFilter('year', '1950', FilterConstraint.LESS_THAN);
    expect(builder.build()).to.deep.equal({ year: { 1950: 'lt' } });

    builder.addFilter('year', '1950', FilterConstraint.EXCLUDE);
    // Leaves constraint unchanged
    expect(builder.build()).to.deep.equal({ year: { 1950: 'lt' } });
  });

  it('correctly resolves overlap between include and numeric constraints', () => {
    const builder = new FilterMapBuilder();
    builder.addFilter('year', '1950', FilterConstraint.INCLUDE);
    expect(builder.build()).to.deep.equal({ year: { 1950: 'inc' } });

    builder.addFilter('year', '1950', FilterConstraint.GREATER_THAN);
    // Existing include constraint takes precedence
    expect(builder.build()).to.deep.equal({ year: { 1950: 'inc' } });
  });
});
