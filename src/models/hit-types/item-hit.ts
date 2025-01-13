/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BooleanField,
  ByteField,
  DateField,
  MediaTypeField,
  NumberField,
  StringField,
} from '@internetarchive/iaux-item-metadata';
import { Memoize } from 'typescript-memoize';
import { Review } from '../../responses/page-elements';
import { SearchMetadata } from '../search-metadata';

/**
 * A model that describes an item hit from a Metadata Search via the PPS endpoint.
 *
 * The fields in here are cast to their respective field types. See `metadata-fields/field-type`.
 *
 * Add additional fields as needed.
 *
 * @export
 * @class ItemHit
 */
export class ItemHit {
  /**
   * This is the raw hit response; useful for inspecting the raw data
   * returned from the server.
   */
  rawMetadata?: Record<string, any>;

  constructor(json: Record<string, any>) {
    this.rawMetadata = json;
  }

  /**
   * The item identifier.
   *
   * _Note_: This is a plain string instead of a `MetadataField` since it's
   * the primary key of the item.
   */
  get identifier(): typeof SearchMetadata.prototype.identifier {
    return this.rawMetadata?.fields?.identifier;
  }

  /** Optional. */
  @Memoize() get addeddate(): typeof SearchMetadata.prototype.addeddate {
    return this.rawMetadata?.fields?.addeddate
      ? new DateField(this.rawMetadata.fields.addeddate)
      : undefined;
  }

  /** Optional. */
  @Memoize() get avg_rating(): typeof SearchMetadata.prototype.avg_rating {
    return this.rawMetadata?.fields?.avg_rating != null
      ? new NumberField(this.rawMetadata.fields.avg_rating)
      : undefined;
  }

  /**
   * May be a superset of metadata collection field.
   * Multivalued.
   */
  @Memoize() get collection(): typeof SearchMetadata.prototype.collection {
    return this.rawMetadata?.fields?.collection
      ? new StringField(this.rawMetadata.fields.collection)
      : undefined;
  }

  /**
   * Computed during document construction, for collection items only.
   * Optional.
   */
  @Memoize() get collection_files_count(): NumberField | undefined {
    return this.rawMetadata?.fields?.collection_files_count != null
      ? new NumberField(this.rawMetadata.fields.collection_files_count)
      : undefined;
  }

  /**
   * In bytes; computed during document construction, for collection items only.
   * Optional.
   */
  @Memoize()
  get collection_size(): typeof SearchMetadata.prototype.collection_size {
    return this.rawMetadata?.fields?.collection_size != null
      ? new ByteField(this.rawMetadata.fields.collection_size)
      : undefined;
  }

  /**
   * Optional.
   * Multivalued.
   */
  @Memoize() get creator(): typeof SearchMetadata.prototype.creator {
    return this.rawMetadata?.fields?.creator
      ? new StringField(this.rawMetadata.fields.creator)
      : undefined;
  }

  /**
   * Optional.
   */
  @Memoize() get date(): typeof SearchMetadata.prototype.date {
    return this.rawMetadata?.fields?.date
      ? new DateField(this.rawMetadata.fields.date)
      : undefined;
  }

  /** Optional. */
  @Memoize() get description(): typeof SearchMetadata.prototype.description {
    return this.rawMetadata?.fields?.description
      ? new StringField(this.rawMetadata.fields.description)
      : undefined;
  }

  /**
   * Total views over item lifetime, updated by audit consultation with Views API.
   * Optional.
   */
  @Memoize() get downloads(): typeof SearchMetadata.prototype.downloads {
    return this.rawMetadata?.fields?.downloads != null
      ? new NumberField(this.rawMetadata.fields.downloads)
      : undefined;
  }

  /**
   * Computed during document construction.
   */
  @Memoize() get files_count(): typeof SearchMetadata.prototype.files_count {
    return this.rawMetadata?.fields?.files_count != null
      ? new NumberField(this.rawMetadata.fields.files_count)
      : undefined;
  }

  /**
   * Optional.
   * Multivalued.
   */
  @Memoize() get genre(): StringField | undefined {
    return this.rawMetadata?.fields?.genre
      ? new StringField(this.rawMetadata.fields.genre)
      : undefined;
  }

  /**
   * Item characterization including noindex status.
   * Multivalued.
   */
  @Memoize() get indexflag(): StringField | undefined {
    return this.rawMetadata?.fields?.indexflag
      ? new StringField(this.rawMetadata.fields.indexflag)
      : undefined;
  }

  /**
   * Format varies.
   * Optional.
   */
  @Memoize() get issue(): typeof SearchMetadata.prototype.issue {
    return this.rawMetadata?.fields?.issue
      ? new StringField(this.rawMetadata.fields.issue)
      : undefined;
  }

  /**
   * Computed during document construction.
   * Optional.
   */
  @Memoize() get item_count(): typeof SearchMetadata.prototype.item_count {
    return this.rawMetadata?.fields?.item_count != null
      ? new NumberField(this.rawMetadata.fields.item_count)
      : undefined;
  }

  /**
   * In bytes; computed during document construction.
   */
  @Memoize() get item_size(): typeof SearchMetadata.prototype.item_size {
    return this.rawMetadata?.fields?.item_size != null
      ? new ByteField(this.rawMetadata.fields.item_size)
      : undefined;
  }

  /**
   * Optional.
   * Multivalued.
   */
  @Memoize() get language(): typeof SearchMetadata.prototype.language {
    return this.rawMetadata?.fields?.language
      ? new StringField(this.rawMetadata.fields.language)
      : undefined;
  }

  /**
   * May be stale.
   * Optional.
   */
  @Memoize() get lending___available_to_borrow(): BooleanField | undefined {
    return this.rawMetadata?.fields?.lending___available_to_borrow != null
      ? new BooleanField(this.rawMetadata.fields.lending___available_to_borrow)
      : undefined;
  }

  /**
   * May be stale.
   * Optional.
   */
  @Memoize() get lending___available_to_browse(): BooleanField | undefined {
    return this.rawMetadata?.fields?.lending___available_to_browse != null
      ? new BooleanField(this.rawMetadata.fields.lending___available_to_browse)
      : undefined;
  }

  /**
   * May be stale.
   * Optional.
   */
  @Memoize() get lending___available_to_waitlist(): BooleanField | undefined {
    return this.rawMetadata?.fields?.lending___available_to_waitlist != null
      ? new BooleanField(
          this.rawMetadata.fields.lending___available_to_waitlist
        )
      : undefined;
  }

  /**
   * May be stale.
   * Optional.
   */
  @Memoize() get lending___status(): StringField | undefined {
    return this.rawMetadata?.fields?.lending___status
      ? new StringField(this.rawMetadata.fields.lending___status)
      : undefined;
  }

  /** Optional. */
  @Memoize() get licenseurl(): StringField | undefined {
    return this.rawMetadata?.fields?.licenseurl
      ? new StringField(this.rawMetadata.fields.licenseurl)
      : undefined;
  }

  @Memoize() get mediatype(): typeof SearchMetadata.prototype.mediatype {
    return this.rawMetadata?.fields?.mediatype
      ? new MediaTypeField(this.rawMetadata.fields.mediatype)
      : undefined;
  }

  /**
   * Views over a month, updated by audit consultation with Views API.
   * Optional.
   */
  @Memoize() get month(): typeof SearchMetadata.prototype.month {
    return this.rawMetadata?.fields?.month != null
      ? new NumberField(this.rawMetadata.fields.month)
      : undefined;
  }

  /** Optional. */
  @Memoize() get noindex(): typeof SearchMetadata.prototype.noindex {
    return this.rawMetadata?.fields?.noindex != null
      ? new BooleanField(this.rawMetadata.fields.noindex)
      : undefined;
  }

  /**
   * Computed during document construction.
   * Optional.
   */
  @Memoize()
  get num_favorites(): typeof SearchMetadata.prototype.num_favorites {
    return this.rawMetadata?.fields?.num_favorites != null
      ? new NumberField(this.rawMetadata.fields.num_favorites)
      : undefined;
  }

  /**
   * Computed during document construction.
   * Optional.
   */
  @Memoize() get num_reviews(): typeof SearchMetadata.prototype.num_reviews {
    return this.rawMetadata?.fields?.num_reviews != null
      ? new NumberField(this.rawMetadata.fields.num_reviews)
      : undefined;
  }

  /** Optional. */
  @Memoize() get publicdate(): typeof SearchMetadata.prototype.publicdate {
    return this.rawMetadata?.fields?.publicdate
      ? new DateField(this.rawMetadata.fields.publicdate)
      : undefined;
  }

  /** Optional. */
  @Memoize() get reviewdate(): typeof SearchMetadata.prototype.reviewdate {
    return this.rawMetadata?.fields?.reviewdate
      ? new DateField(this.rawMetadata.fields.reviewdate)
      : undefined;
  }

  /**
   * Optional.
   * Only present when requesting the reviews page_element of an account_details page.
   * Contains data about the target user's review on this item.
   * Note: this property is not a standard field type and there is no need to call `.value`/`.values` on it.
   */
  @Memoize() get review(): Review | undefined {
    const reviewData = this.rawMetadata?.review;
    return reviewData
      ? {
          body: reviewData.reviewbody,
          title: reviewData.reviewtitle,
          author: reviewData.reviewer,
          authorItem: reviewData.reviewer_itemname,
          updatedate: new Date(reviewData.reviewdate),
          createdate: new Date(reviewData.createdate),
          stars: Number(reviewData.stars) || 0,
          __href__: reviewData.__href__,
        }
      : undefined;
  }

  /**
   * Format varies.
   * Optional.
   */
  @Memoize() get source(): typeof SearchMetadata.prototype.source {
    return this.rawMetadata?.fields?.source
      ? new StringField(this.rawMetadata.fields.source)
      : undefined;
  }

  /**
   * Optional.
   * Multivalued.
   */
  @Memoize() get subject(): StringField | undefined {
    return this.rawMetadata?.fields?.subject
      ? new StringField(this.rawMetadata.fields.subject)
      : undefined;
  }

  /** Optional. */
  @Memoize() get title(): typeof SearchMetadata.prototype.title {
    return this.rawMetadata?.fields?.title
      ? new StringField(this.rawMetadata.fields.title)
      : undefined;
  }

  /** Optional. */
  @Memoize() get type(): typeof SearchMetadata.prototype.type {
    return this.rawMetadata?.fields?.type
      ? new StringField(this.rawMetadata.fields.type)
      : undefined;
  }

  /** Optional. */
  @Memoize() get volume(): typeof SearchMetadata.prototype.volume {
    return this.rawMetadata?.fields?.volume
      ? new StringField(this.rawMetadata.fields.volume)
      : undefined;
  }

  /**
   * Views over a seven-day period, updated by audit consultation with Views API.
   * Optional.
   */
  @Memoize() get week(): typeof SearchMetadata.prototype.week {
    return this.rawMetadata?.fields?.week != null
      ? new NumberField(this.rawMetadata.fields.week)
      : undefined;
  }

  /**
   * Computed from date.
   * Optional.
   */
  @Memoize() get year(): NumberField | undefined {
    return this.rawMetadata?.fields?.year != null
      ? new NumberField(this.rawMetadata.fields.year)
      : undefined;
  }
}
