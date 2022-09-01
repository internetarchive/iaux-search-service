/* eslint-disable @typescript-eslint/no-explicit-any */

import { SearchResponse } from '../src/responses/search-response';
import { SearchParams } from '../src/search-params';
import { ItemHit } from '../src/models/hit-types/item-hit';
import { TextHit } from '../src/models/hit-types/text-hit';

export class MockResponseGenerator {
  generateMockMetadataSearchResponse(params: SearchParams): SearchResponse {
    const metadata1 = new ItemHit({ identifier: 'foo' });
    const metadata2 = new ItemHit({ identifier: 'bar' });

    return {
      rawResponse: {
        foo: 'bar',
      },
      request: {
        client_parameters: {
          client: 'page_production_service_endpoint',
          user_query: params.query,
          page: params.page ?? 0,
          hits_per_page: params.rows ?? 0,
          fields: params.fields ?? [],
        },
        finalized_parameters: {
          client: 'page_production_service_endpoint',
          user_query: params.query,
          service_backend: 'metadata',
          page: params.page ?? 0,
          page_type: 'search_results',
          hits_per_page: 50,
          fields: ['_tile_'].concat(params.fields ?? []),
          sort: ['_score'],
          aggregations: [
            'mediatype',
            'year',
            'subject',
            'collection',
            'creator',
            'language',
          ],
          aggregations_size: 6,
        },
      },
      responseHeader: {
        succeeded: true,
        query_time: 3133,
      },
      response: {
        totalHits: 12345,
        returnedHits: 2,
        hits: [metadata1, metadata2],
      },
    };
  }

  generateMockFulltextSearchResponse(params: SearchParams): SearchResponse {
    const text1 = new TextHit({ identifier: 'foo' });
    const text2 = new TextHit({ identifier: 'bar' });

    return {
      rawResponse: {
        foo: 'bar',
      },
      request: {
        client_parameters: {
          client: 'page_production_service_endpoint',
          user_query: params.query,
          page: params.page ?? 0,
          hits_per_page: params.rows ?? 0,
          fields: params.fields ?? [],
        },
        finalized_parameters: {
          client: 'page_production_service_endpoint',
          user_query: params.query,
          service_backend: 'fts',
          page: params.page ?? 0,
          page_type: 'search_results',
          hits_per_page: 50,
          fields: ['_tile_'].concat(params.fields ?? []),
          sort: ['_score'],
          aggregations: [
            'mediatype',
            'year',
            'subject',
            'collection',
            'creator',
            'language',
          ],
          aggregations_size: 6,
        },
      },
      responseHeader: {
        succeeded: true,
        query_time: 3133,
      },
      response: {
        totalHits: 12345,
        returnedHits: 2,
        hits: [text1, text2],
      },
    };
  }
}
