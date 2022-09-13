# Internet Archive Search Service

A service for searching the Internet Archive.

## Installation
```bash
npm install @internetarchive/search-service
```

## Usage

### Searching
```ts
import {
  SearchService,
  SearchType,
  SortParam,
  SortDirection
} from '@internetarchive/search-service';

const searchService = SearchService.default;
const dateSort = { field: 'date', direction: 'desc' };
const params = {
  query: 'collection:books AND title:(goody)',
  sort: [dateSort],
  rows: 25,
  fields: ['identifier', 'collection', 'title', 'creator']
};

const result = await searchService.search(params, SearchType.METADATA);
if (result.success) {
  const searchResponse = result.success;
  searchResponse.response.totalResults // => number -- total number of search results available to fetch
  searchResponse.response.returnedCount // => number -- how many search results are included in this response
  searchResponse.response.results // => Result[] array
  searchResponse.response.results[0].identifier // => 'some-item-identifier'
  searchResponse.response.results[0].title?.value // => 'some-item-title', or possibly undefined if no title exists on the item
}
```

Currently available search types are `SearchType.METADATA` and `SearchType.FULLTEXT`.

### Search parameters

The `params` object passed as first argument to search calls can have the following properties:

#### `query`
The full search query, which may include Lucene syntax.

#### `rows`
The maximum number of search results to be retrieved per page.

#### `page`
Which page of results to retrieve, beginning from page `1`.
Each page is sized according to the `rows` parameter, so requesting `{ rows: 20, page: 3 }`
would retrieve results 41-60, etc.

#### `fields`
An array of metadata field names that should be present on the returned search results.

#### `sort`
An array of sorting parameters to apply to the results.
The first array element specifies the primary sort, the second element the secondary sort, and so on.
Each sorting parameter has the form `{ field: string, direction: 'asc' | 'desc' }`, where `field` is
the name of the column to sort on (e.g., title) and `direction` is whether to sort ascending or descending.

#### `aggregations`
An object specifying which aggregations to retrieve with the query.
To retrieve no aggregations at all, this object should be `{ omit: true }`.
To retrieve aggregations for one or more keys, this object should resemble 
```js
{ simpleParams: ['subject', 'creator', /*...*/] }
```

To specify the number of buckets for individual aggregation types, the object
should instead use the `advancedParams` property, resembling
```js
{ advancedParams: [{ field: 'subject', size: 2 }, { field: 'creator', size: 4 }, /*...*/] }
```

However, these advanced aggregation parameters are not currently supported by the backend and may be removed at 
a later date.

#### `aggregationsSize`
The number of buckets to be returned for all aggregation types.
This defaults to 6 (the number of facets displayed for each type in the search results sidebar),
but can be overridden using this parameter to retrieve more/fewer buckets as needed.

#### `pageType`
A string indicating what type of page this data is being requested for. The search backend may
use a different set of default parameters depending on the page type. This defaults to
`'search_results'`, and currently only supports `'search_results' | 'collection_details'`, with
more types to be added in the future.

#### `pageTarget`
Used in conjunction with `pageType: 'collection_details'` to specify the identifier of the collection
to retrieve results for.

### Search types

At present the only two types of search available are Metadata Search (`SearchType.METADATA`) 
and Full Text Search (`SearchType.FULLTEXT`). This will eventually be extended to support other
types of search including TV captions and radio transcripts. Calls that do not specify a search
type will default to Metadata Search.

### Return values

Calls to `SearchService#search` will return a Promise that either resolves to a `SearchResponse`
object or rejects with a `SearchServiceError`.

`SearchResponse` objects are structured similar to this example:

```js
{
  rawResponse: {/*...*/}, // The raw JSON fetched from the server
  request: {
    clientParameters: {/*...*/}, // The original client parameters sent with the request
    finalizedParameters: {/*...*/} // The finalized request parameters as determined by the backend
  },
  responseHeader: {/*...*/}, // The header containing info about the response success/failure and processing time
  response: {
    totalResults: 12345, // The total number of search results matching the query
    returnedCount: 50, // The number of search results returned in this response
    results: [/*...*/], // The array of search results
    aggregations: {/*...*/}, // A record mapping aggregation names to Aggregation objects
    schema: {/*...*/} // The data schema to which the returned search results conform
  }
}
```

### Fetch Metadata

As of v0.4.0, metadata fetching has been moved to the 
[iaux-metadata-service](https://github.com/internetarchive/iaux-metadata-service) package
and is no longer included as part of the Search Service.

# Development

## Prerequisite
```bash
npm install
```

## Testing
```bash
npm run test
```

## Demo
```bash
npm run start
```

## Linting
```bash
npm run format
```
