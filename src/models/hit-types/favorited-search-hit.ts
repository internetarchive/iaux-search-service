/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateField, StringField } from '@internetarchive/iaux-item-metadata';
import { Memoize } from 'typescript-memoize';
import { SearchMetadata } from '../search-metadata';

/**
 * A model that describes an item hit from a Metadata Search via the PPS endpoint.
 *
 * The fields in here are cast to their respective field types. See `metadata-fields/field-type`.
 *
 * Add additional fields as needed.
 *
 * @export
 * @class FavoritedSearchHit
 */
export class FavoritedSearchHit {
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
    return this.rawMetadata?.fields.query;
  }

  /** Optional. */
  @Memoize() get title(): StringField | undefined {
    return this.rawMetadata?.fields?.title
      ? new StringField(this.rawMetadata.fields.title)
      : undefined;
  }

  /** Optional. */
  @Memoize() get query(): typeof SearchMetadata.prototype.query {
    return this.rawMetadata?.fields?.query
      ? new StringField(this.rawMetadata.fields.query)
      : undefined;
  }

  /**
   * Optional.
   */
  @Memoize()
  get date_favorited(): typeof SearchMetadata.prototype.date_favorited {
    return this.rawMetadata?.fields?.date_favorited
      ? new DateField(this.rawMetadata.fields.date_favorited)
      : undefined;
  }

  /**
   * Optional.
   */
  @Memoize() get __href__(): typeof SearchMetadata.prototype.__href__ {
    return this.rawMetadata?.fields?.__href__
      ? new StringField(this.rawMetadata.fields.__href__)
      : undefined;
  }
}
