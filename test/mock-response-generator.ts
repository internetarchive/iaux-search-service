/* eslint-disable @typescript-eslint/no-explicit-any */

import { SearchResponse } from '../src/responses/search/search-response';
import { SearchParams } from '../src/search-params';
import { ItemHit } from '../src/models/hit-types/item-hit';
import { TextHit } from '../src/models/hit-types/text-hit';

export class MockResponseGenerator {
  generateMockMetadataSearchResponse(params: SearchParams): SearchResponse {
    const metadata1 = new ItemHit({ identifier: 'foo' });
    const metadata2 = new ItemHit({ identifier: 'bar' });

    return {
      rawResponse: {
        foo: 'bar'
      },
      request: {
        client_parameters: {
          client: 'page_production_service_endpoint',
          user_query: params.query,
          page: params.page ?? 0,
          hits_per_page: params.rows ?? 0,
          fields: params.fields ?? []
        },
        finalized_parameters: {
          client: 'page_production_service_endpoint',
          user_query: params.query,
          service_backend: 'metadata',
          page: params.page ?? 0,
          page_type: 'search_results',
          hits_per_page: 50,
          fields: [
            '_tile_'
          ].concat(params.fields ?? []),
          sort: [
            '_score'
          ],
          aggregations: [
            'mediatype',
            'year',
            'subject',
            'collection',
            'creator',
            'language'
          ],
          aggregations_size: 6
        }
      },
      responseHeader: {
        succeeded: true,
        query_time: 3133
      },
      response: {
        totalHits: 12345,
        returnedHits: 2,
        hits: [metadata1, metadata2]
      }
    };

    // return {
    //   rawResponse: {
    //     foo: 'bar',
    //   },
    //   responseHeader: {
    //     status: 0,
    //     QTime: 1459,
    //     params: {
    //       query: params.query,
    //       qin: params.query,
    //       fields: fieldsAsString ?? '',
    //       wt: 'json',
    //       sort: params.sort?.reduce((prev, current, index) => {
    //         const isFirst = index === 0;
    //         const commaPrefix = isFirst ? '' : ', ';
    //         return `${prev}${commaPrefix}${current.field} ${current.direction}`;
    //       }, ''),
    //       rows: params.rows ? `${params.rows}` : '',
    //       start: params.page ?? 0,
    //     },
    //   },
    //   response: {
    //     totalHits: 12345,
    //     start: 0,
    //     docs: [metadata1, metadata2],
    //   },
    // };
  }

  generateMockFulltextSearchResponse(params: SearchParams): SearchResponse {
    const text1 = new TextHit({ identifier: 'foo' });
    const text2 = new TextHit({ identifier: 'bar' });

    return {
      rawResponse: {
        foo: 'bar'
      },
      request: {
        client_parameters: {
          client: 'page_production_service_endpoint',
          user_query: params.query,
          page: params.page ?? 0,
          hits_per_page: params.rows ?? 0,
          fields: params.fields ?? []
        },
        finalized_parameters: {
          client: 'page_production_service_endpoint',
          user_query: params.query,
          service_backend: 'fts',
          page: params.page ?? 0,
          page_type: 'search_results',
          hits_per_page: 50,
          fields: [
            '_tile_'
          ].concat(params.fields ?? []),
          sort: [
            '_score'
          ],
          aggregations: [
            'mediatype',
            'year',
            'subject',
            'collection',
            'creator',
            'language'
          ],
          aggregations_size: 6
        }
      },
      responseHeader: {
        succeeded: true,
        query_time: 3133
      },
      response: {
        totalHits: 12345,
        returnedHits: 2,
        hits: [text1, text2]
      }
    };
  }

  // generateMockMetadataResponse(identifier: string): any {
  //   return {
  //     created: 1586477049,
  //     d1: 'ia600201.us.archive.org',
  //     d2: 'ia800201.us.archive.org',
  //     dir: '/27/items/rss-383924main_TWAN_09_04_09',
  //     files: [
  //       {
  //         name: 'foo.jpg',
  //         source: 'derivative',
  //         format: 'Thumbnail',
  //         original: 'foo.mp4',
  //         md5: '48067b43a547d3e90cb433a04ba84d5d',
  //         mtime: '1256675427',
  //         size: '1135',
  //         crc32: '40870038',
  //         sha1: '6445c2a6f51c8314c1872ec1f7daf33c5cfabd06',
  //       },
  //       {
  //         name: 'bar.jpg',
  //         source: 'derivative',
  //         format: 'Thumbnail',
  //         original: 'bar.mp4',
  //         md5: '5bf69912d7b796fe309cde32e61230bc',
  //         mtime: '1256675429',
  //         size: '6329',
  //         crc32: 'ba5f361a',
  //         sha1: 'cddab0e2daab29978e5efdeff735240a44aa7c80',
  //       },
  //     ],
  //     files_count: 2,
  //     item_last_updated: 1463797130,
  //     item_size: 99872691,
  //     metadata: {
  //       feed_id:
  //         '/0/rss_feeds/NASACast_Video/nasacast_video:sts128_landing/NASAcast_vodcast.rss',
  //       mediatype: 'movies',
  //       title: "NASA TV's This Week @NASA, September 4",
  //       description: "NASA TV's This Week @NASA, September 4",
  //       creator: 'NASA',
  //       source: 'http://www.nasa.gov/multimedia/podcasting/twan_09_04_09.html',
  //       date: '9/4/2009',
  //       year: '2009',
  //       rights: 'Public Domain',
  //       language: 'en-us',
  //       updater: 'BonnieReal',
  //       updatedate: '2009-10-27 20:23:01',
  //       identifier,
  //       uploader: 'bonnie@archive.org',
  //       addeddate: '2009-10-27 20:25:55',
  //       publicdate: '2009-10-27 20:41:27',
  //       collection: ['nasa', 'nasacastvideo'],
  //       backup_location: 'ia903604_7',
  //     },
  //     server: 'ia800201.us.archive.org',
  //     uniq: 162444403,
  //     workable_servers: ['ia800201.us.archive.org', 'ia600201.us.archive.org'],
  //   };
  // }
}
