import { Aggregation } from '../models/aggregation';
import { SearchResult } from '../models/hit-types/hit';
import { ItemHit } from '../models/hit-types/item-hit';

/**
 * The structure of the response body `hits` object returned from the PPS endpoint.
 */
export interface SearchResponseHits {
  total: number;
  returned: number;
  hits: Record<string, unknown>[];
}

/**
 * Valid page element names recognized & returned by the PPS
 */
export type PageElementName =
  | 'uploads'
  | 'reviews'
  | 'collections'
  | 'lending'
  | 'web_archives'
  | 'forum_posts';

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

export type UploadsPageElement = HitsAggregationsPageElement;
export type ReviewsPageElement = HitsAggregationsPageElement;
export type CollectionsPageElement = HitsAggregationsPageElement;
export interface LendingPageElement {
  loans: Record<string, unknown>[];
  waitlist: Record<string, unknown>[];
  loan_history: Record<string, unknown>[];
}

export type WebArchivesPageElement = WebArchiveEntry[];
export type ForumPostsPageElement = ForumPost[];

export type PageElement =
  | UploadsPageElement
  | ReviewsPageElement
  | CollectionsPageElement
  | LendingPageElement
  | WebArchivesPageElement
  | ForumPostsPageElement;

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
}

/**
 * Converts dates from web capture "YYYYMMDDhhmmss" format to ISO-8601 "YYYY-MM-DDThh:mm:ssZ" format.
 */
function fixWebCaptureDateFormatting(date: string): string {
  return `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}T${date.slice(8, 10)}:${date.slice(10, 12)}:${date.slice(12, 14)}Z`;
}

/**
 * Converts an array of web archive entries to an array of objects compatible with the search hit constructors
 */
export function convertWebArchivesToSearchHits(pageElement: WebArchivesPageElement): Record<string, unknown>[] {
  const results: Record<string, unknown>[] = [];

  for (const entry of pageElement) {
    if (!entry.captures?.length) continue;

    results.push({
      hit_type: 'web_archive',
      fields: {
        url: entry.url,
        capture_dates: entry.captures.map(date => fixWebCaptureDateFormatting(date)),
        __href__: `https://web.archive.org/web/${entry.captures[0]}/${encodeURIComponent(entry.url)}`,
      },
    });
  }

  return results;
}