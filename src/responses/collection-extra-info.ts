import { Metadata } from '../models/metadata';

/**
 * Extra info about the target collection that is returned for
 * the `collection_details` page type.
 */
export interface CollectionExtraInfo {
  thumbnail_url?: string;
  search_doc_fields?: CollectionSearchDocs;
  has_items_with_searchable_text?: boolean;
  forum_identifier?: string;
  forum_count?: number;
  review_count?: number;
  related_collection_details?: RelatedCollection[];
  uploader_details?: UserDetails;
  contributors_details?: UserDetails[];
  public_metadata?: typeof Metadata.prototype.rawMetadata;
}

/**
 * Fields from the search docs returned for the `collection_details`
 * page type.
 */
export interface CollectionSearchDocs {
  item_count?: number;
  files_count?: number;
  collection_size?: number;
  collection_files_count?: number;
  month?: number;
  week?: number;
  downloads?: number;
  num_favorites?: number;
  title_message?: string | null;
  primary_collection?: string | null;
}

/**
 * Info about a related collection, as returned for the `collection_details`
 * page type.
 */
export interface RelatedCollection {
  identifier: string;
  title?: string;
  item_count?: number;
}

/**
 * Info about a user (e.g., uploaders/contributors), as returned for
 * the `collection_details` page type.
 */
export interface UserDetails {
  screen_name?: string;
  useritem?: string;
  is_archivist?: boolean;
}
