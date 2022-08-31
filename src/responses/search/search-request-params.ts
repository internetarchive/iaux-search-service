export interface SearchRequestParams {
  client?: string,
  user_query?: string,
  service_backend?: string,
  page_type?: string,
  page?: number,
  hits_per_page?: number,
  fields?: string[],
  sort?: string[],
  aggregations?: string[],
  aggregations_size?: number
}