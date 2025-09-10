import { Memoize } from 'typescript-memoize';
import { Metadata } from '@internetarchive/iaux-item-metadata';
import { makeReview } from '../models/review-builder';
import type { Review } from './page-elements';
import type { UserDetails } from './user-details';

/**
 * Extra info about the target item that is returned for
 * the `item_details` page type.
 */
export class ExtraInfo {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly rawResponse: Readonly<Record<string, any>>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(json: Record<string, any>) {
    this.rawResponse = json;
  }

  /** Total size in bytes of this item (incl. its members) */
  get item_size(): number | undefined {
    return this.rawResponse.item_size;
  }

  /** How many files are within this item proper (not incl. its members) */
  get files_count(): number | undefined {
    return this.rawResponse.files_count;
  }

  /** How many views this item has received in the past month */
  get month(): number | undefined {
    return this.rawResponse.month;
  }

  /** How many views this item has received in the past week */
  get week(): number | undefined {
    return this.rawResponse.week;
  }

  /** How many total views this item has received (all-time) */
  get downloads(): number | undefined {
    return this.rawResponse.downloads;
  }

  /** How many users have favorited this item */
  get num_favorites(): number | undefined {
    return this.rawResponse.num_favorites;
  }

  /** Additional message to appear in the page title for this item, if any */
  get title_message(): string | null | undefined {
    return this.rawResponse.title_message;
  }

  /** The primary parent collection that contains this one as a member, if any */
  get primary_collection(): string | null | undefined {
    return this.rawResponse.primary_collection;
  }

  /** URL for this item's header thumbnail image */
  get thumbnail_url(): string | undefined {
    return this.rawResponse.thumbnail_url;
  }

  /** How many reviews this item's members have */
  get review_count(): number | undefined {
    return this.rawResponse.review_count;
  }

  /** User details for the item uploader */
  get uploader_details(): UserDetails | undefined {
    return this.rawResponse.uploader_details;
  }

  /** Full MDAPI object for this item */
  @Memoize() get public_metadata(): Metadata | undefined {
    if (!this.rawResponse.public_metadata) return undefined;
    return new Metadata(this.rawResponse.public_metadata);
  }

  // array of collection identifiers this item is part of
  get part_of(): string[] | undefined {
    return this.rawResponse.part_of;
  }

  @Memoize() get reviews_metadata(): Review[] {
    const reviews = this.rawResponse.reviews_metadata ?? [];
    return reviews.map(makeReview);
  }
}
