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
  start: 0,
  fields: ['identifier', 'collection', 'title', 'creator']
};

const result = await searchService.search(params, SearchType.METADATA);
if (result.success) {
  const searchResponse = result.success;
  searchResponse.response.totalHits // => number -- total number of search results available to fetch
  searchResponse.response.returnedHits // => number -- how many search results are included in this response
  searchResponse.response.hits // => Hit[] array
  searchResponse.response.hits[0].identifier // => 'some-item-identifier'
  searchResponse.response.hits[0].title?.value // => 'some-item-title', or possibly undefined if no title exists on the item
}
```

Currently available search types are `SearchType.METADATA` and `SearchType.FULLTEXT`.

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
