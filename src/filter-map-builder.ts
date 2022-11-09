import { FilterConstraint, FilterMap } from "./search-params";

const NUMERIC_CONSTRAINTS = [
  FilterConstraint.GREATER_OR_EQUAL,
  FilterConstraint.GREATER_THAN,
  FilterConstraint.LESS_OR_EQUAL,
  FilterConstraint.LESS_THAN
];

/**
 * A utility class for building filter maps
 */
 export class FilterMapBuilder {
  private filterMap: FilterMap = {};

  /**
   * Adds a filter to the FilterMap under construction.
   * The new filter may overwrite or modify existing filters already added to the builder.
   * @param field The field to filter on (e.g., 'subject', 'year', ...)
   * @param value The value of the field to filter on (e.g., 'Cicero', '1920', ...)
   * @param constraint The constraint to apply to the `field`, with respect to the given `value`.
   * Allowed values are the enum members of `FilterConstraint`.
   */
  addFilter(field: string, value: string, constraint: FilterConstraint): this {
    if (!this.filterMap[field]) {
      this.filterMap[field] = {};
    }
    
    // Edge case for numeric fields (i.e., year)
    // Logically it would be valid for excluded values to overlap with gt/gte/lt/lte values.
    // For instance, specifying 1950 <= year <= 2000, but also excluding year = 1950.
    // But since we can only have one constraint for a given value, these would overwrite each other.
    // To work around this, we adjust the resulting map to maintain the correct logic.
    const currentConstraint = this.filterMap[field][value];
    if (currentConstraint && constraint === FilterConstraint.EXCLUDE) {
      if (currentConstraint === FilterConstraint.GREATER_OR_EQUAL) {
        // gte and exclude on the same value -> gt
        this.filterMap[field][value] = FilterConstraint.GREATER_THAN;
        return this;
      } else if (currentConstraint === FilterConstraint.LESS_OR_EQUAL) {
        // lte and exclude on the same value -> lt
        this.filterMap[field][value] = FilterConstraint.LESS_THAN;
        return this;
      } else if (currentConstraint === FilterConstraint.GREATER_THAN || currentConstraint === FilterConstraint.LESS_THAN) {
        // gt/lt and exclude -> no additional filter
        return this;
      }
    }

    // An 'include' constraint should always take precedence over a gt/gte/lt/lte constraint on the same value.
    if (currentConstraint === FilterConstraint.INCLUDE) {
      if (NUMERIC_CONSTRAINTS.includes(constraint)) {
        // Don't overwrite the existing 'include' constraint
        return this;
      }
    }

    // Otherwise, overwrite any existing filter for this value
    this.filterMap[field][value] = constraint;
    return this;
  }

  /**
   * Initializes the filter map under construction to have filters exactly equal to the given one.
   * This will overwrite *all* existing filters already added to the builder.
   * @param map The FilterMap to set this builder's state to.
   */
  setFilterMap(map: FilterMap): this {
    this.filterMap = {...map};
    return this;
  }

  /**
   * Adds all filters from an existing filter map to the one being built.
   * Filters from the provided map may overwrite or modify existing filters already added to the builder.
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
   * 
   * @returns A FilterMap that includes the filters applied to 
   */
  build(): FilterMap {
    return this.filterMap;
  }
}