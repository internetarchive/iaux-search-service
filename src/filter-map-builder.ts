import { FilterConstraint, FilterMap } from './search-params';

/**
 * A utility class for building filter maps
 */
export class FilterMapBuilder {
  private filterMap: FilterMap = {};

  /**
   * Adds a filter to the FilterMap under construction.
   * The new filter may overwrite existing filters already added to the builder.
   * @param field The field to filter on (e.g., 'subject', 'year', ...)
   * @param value The value of the field to filter on (e.g., 'Cicero', '1920', ...)
   * @param constraint The constraint to apply to the `field`, with respect to the given `value`.
   * Allowed values are the enum members of `FilterConstraint`.
   */
  addFilter(field: string, value: string, constraint: FilterConstraint): this {
    if (!this.filterMap[field]) {
      this.filterMap[field] = {};
    }

    // Overwrite any existing filter for this value
    this.filterMap[field][value] = constraint;
    return this;
  }

  /**
   * Removes any filter currently associated with the given field and value.
   * @param field The field to remove a filter for
   * @param value The value to remove the filter for
   */
  removeFilter(field: string, value: string): this {
    if (this.filterMap[field]) {
      delete this.filterMap[field][value];

      // If there are no remaining filters for this field, delete the whole field object.
      if (Object.keys(this.filterMap[field]).length === 0) {
        delete this.filterMap[field];
      }
    }

    return this;
  }

  /**
   * Initializes the filter map under construction to have filters exactly equal to the given one.
   * This will overwrite *all* existing filters already added to the builder.
   * @param map The FilterMap to set this builder's state to.
   */
  setFilterMap(map: FilterMap): this {
    this.filterMap = { ...map };
    return this;
  }

  /**
   * Adds all filters from an existing filter map to the one being built.
   * Filters from the provided map may overwrite existing filters already added to the builder.
   * @param map The FilterMap to merge into the one being built.
   */
  mergeFilterMap(map: FilterMap): this {
    for (const [field, filters] of Object.entries(map)) {
      for (const [value, constraint] of Object.entries(filters)) {
        this.addFilter(field, value, constraint);
      }
    }
    return this;
  }

  /**
   * Produces a `FilterMap` including all the filters that have been applied to
   * this builder.
   */
  build(): FilterMap {
    return this.filterMap;
  }
}
