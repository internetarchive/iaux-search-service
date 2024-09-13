/**
 * An enum specifying the different types of search that can be conducted
 * through the SearchService.
 */
export enum SearchType {
  METADATA,
  FULLTEXT,
  //TV, // not yet available
  RADIO = 3, // explicit value for now, just to maintain consistency when we add TV later
  // and so that the order matches how we present these options beside search widgets
  FEDERATED = 4, // temp explicit value to be removed when TV added
}
