import { Review } from '@internetarchive/iaux-item-metadata';
import { Aggregation } from '../models/aggregation';

/**
 * The structure of the response body `hits` object returned from the PPS endpoint.
 */
export interface SearchResponseHits {
  total: number;
  returned: number;
  hits: Record<string, unknown>[];
}

export type FederatedServiceName =
  | 'service___fts'
  | 'service___tvs'
  | 'service___rcs'
  | 'service___whisper';

export type FederatedMediatypeName =
  | 'metadata___mediatype___texts'
  | 'metadata___mediatype___movies'
  | 'metadata___mediatype___audio'
  | 'metadata___mediatype___software'
  | 'metadata___mediatype___image'
  | 'metadata___mediatype___etree';

export type FederatedPageElementName =
  | FederatedServiceName
  | FederatedMediatypeName;

/**
 * Valid page element names recognized & returned by the PPS
 */
export type PageElementName =
  | 'uploads'
  | 'reviews'
  | 'collections'
  | 'lending'
  | 'web_archives'
  | 'forum_posts'
  | FederatedPageElementName;

/**
 * A basic page element returning hits and/or aggregations
 */
interface HitsAggregationsPageElement {
  hits?: SearchResponseHits;
  aggregations?: Record<string, Aggregation>;
}

/**
 * A single entry in a user's web archives, representing one or more captures for
 * a given URL.
 */
export interface WebArchiveEntry {
  url: string;
  captures: string[];
}

/**
 * An object representing a single forum post
 */
export interface ForumPost {
  id: number;
  subject: string;
  subject_href: string;
  poster: string;
  poster_href: string;
  forum: string;
  forum_href: string;
  replies: number;
  date: string;
}

export class SearchReview extends Review {
  get __href__(): string | undefined {
    return this.rawValue.__href__;
  }
}

export type UploadsPageElement = HitsAggregationsPageElement;
export type ReviewsPageElement = HitsAggregationsPageElement;
export type CollectionsPageElement = HitsAggregationsPageElement;
export type FederatedPageElement = HitsAggregationsPageElement;

export const LENDING_SUB_ELEMENTS = [
  'loans',
  'waitlist',
  'loan_history',
] as const;
export type LendingSubElement = typeof LENDING_SUB_ELEMENTS[number];
export type LendingPageElement = Record<
  LendingSubElement,
  Record<string, unknown>[]
>;

export type WebArchivesPageElement = WebArchiveEntry[];
export type ForumPostsPageElement = ForumPost[];

export type PageElement =
  | UploadsPageElement
  | ReviewsPageElement
  | CollectionsPageElement
  | LendingPageElement
  | WebArchivesPageElement
  | ForumPostsPageElement
  | FederatedPageElement;

/**
 * A map containing one or more page elements returned by the PPS, keyed by the
 * name of the element.
 */
export interface PageElementMap
  extends Partial<Record<PageElementName, PageElement>> {
  uploads?: UploadsPageElement;
  reviews?: ReviewsPageElement;
  collections?: CollectionsPageElement;
  lending?: LendingPageElement;
  web_archives?: WebArchivesPageElement;
  forum_posts?: ForumPostsPageElement;
  service___fts?: FederatedPageElement;
  service___tvs?: FederatedPageElement;
  service___rcs?: FederatedPageElement;
  service___whisper?: FederatedPageElement;
  metadata___mediatype___texts?: FederatedPageElement;
  metadata___mediatype___movies?: FederatedPageElement;
  metadata___mediatype___audio?: FederatedPageElement;
  metadata___mediatype___software?: FederatedPageElement;
  metadata___mediatype___image?: FederatedPageElement;
  metadata___mediatype___etree?: FederatedPageElement;
}

/**
 * Converts dates from web capture "YYYYMMDDhhmmss" format to ISO-8601 "YYYY-MM-DDThh:mm:ssZ" format.
 */
function fixWebCaptureDateFormatting(date: string): string {
  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);
  const hour = date.slice(8, 10);
  const minute = date.slice(10, 12);
  const second = date.slice(12, 14);
  return `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
}

/**
 * Converts an array of web archive entries to an array of objects compatible with the search hit constructors
 */
export function convertWebArchivesToSearchHits(
  pageElement: WebArchivesPageElement
): Record<string, unknown>[] {
  const results: Record<string, unknown>[] = [];

  for (const entry of pageElement) {
    if (!entry.captures?.length) continue;

    const encodedUrl = encodeURIComponent(entry.url);
    const href = `https://web.archive.org/web/${entry.captures[0]}/${encodedUrl}`;
    results.push({
      hit_type: 'web_archive',
      fields: {
        url: entry.url,
        capture_dates: entry.captures.map(date =>
          fixWebCaptureDateFormatting(date)
        ),
        __href__: href,
      },
    });
  }

  return results;
}
