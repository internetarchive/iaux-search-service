import { Review } from "./page-elements";

/**
 * Extra info about the target item that is returned for
 * the `item_details` page type.
 */
export interface ItemExtraInfo {
  /** Total size in bytes of this item (incl. its members) */
  item_size?: number;

  /** How many files are within this item proper (not incl. its members) */
  files_count?: number;

  /** How many views this item has received in the past month */
  month?: number;

  /** How many views this item has received in the past week */
  week?: number;

  /** How many total views this item has received (all-time) */
  downloads?: number;

  /** How many users have favorited this item */
  num_favorites?: number;

  /** Additional message to appear in the page title for this item, if any */
  title_message?: string | null;

  /** The primary parent collection that contains this one as a member, if any */
  primary_collection?: string | null;

  reviews_data?: Review[];

  /** URL for this item's header thumbnail image */
  thumbnail_url?: string;

  /** How many reviews this item's members have */
  review_count?: number;

  /** User details for the item uploader */
  uploader_details?: UserDetails;

  /** Full MDAPI object for this item */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public_metadata?: Record<string, any>;

  // array of collection identifiers this item is part of
  part_of?: string[];

  reviews_metadata?: Review[];
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
