import { Aggregation } from '../models/aggregation';

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
 * A map containing one or more page elements returned by the PPS, keyed by the
 * name of the element.
 */
export interface PageElementMap
  extends Partial<Record<PageElementName, unknown>> {
  uploads?: UploadsPageElement;
  reviews?: ReviewsPageElement;
  collections?: CollectionsPageElement;
  lending?: LendingPageElement;
  web_archives?: WebArchivesPageElement;
  forum_posts?: ForumPostsPageElement;
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
