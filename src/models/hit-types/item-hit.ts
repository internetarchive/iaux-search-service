import { Memoize } from 'typescript-memoize';
import { BooleanField } from '../metadata-fields/field-types/boolean';
import { DateField } from '../metadata-fields/field-types/date';
import { StringListField } from '../metadata-fields/field-types/list';
import { MediaTypeField } from '../metadata-fields/field-types/mediatype';
import { NumberField } from '../metadata-fields/field-types/number';
import { StringField } from '../metadata-fields/field-types/string';

/**
 * A model that describes an item hit from the MDS API.
 *
 * The fields in here get casted to their respective field types. See `metadata-fields/field-type`.
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
  get identifier(): string | undefined {
    return this.rawMetadata?.fields?.identifier;
  }

  /**
   * May be a superset of metadata collection field.
   * Multivalued.
   */
  @Memoize() get collection(): StringField | undefined {
    return this.rawMetadata?.fields?.collection
      ? new StringField(this.rawMetadata.fields.collection)
      : undefined;
  }

  /**
   * Computed during document construction, for collection items only.
   * Optional.
   */
  @Memoize() get collection_files_count(): NumberField | undefined {
    return this.rawMetadata?.fields?.collection_files_count
      ? new NumberField(this.rawMetadata.fields.collection_files_count)
      : undefined;
  }

  /**
   * In bytes; computed during document construction, for collection items only.
   * Optional.
   */
  @Memoize() get collection_size(): NumberField | undefined {
    return this.rawMetadata?.fields?.collection_size
      ? new NumberField(this.rawMetadata.fields.collection_size)
      : undefined;
  }

  /**
   * Optional.
   * Multivalued.
   */
  @Memoize() get creator(): StringField | undefined {
    return this.rawMetadata?.fields?.creator
      ? new StringField(this.rawMetadata.fields.creator)
      : undefined;
  }

  /**
   * Optional.
   */
  @Memoize() get date(): DateField | undefined {
    return this.rawMetadata?.fields?.date
      ? new DateField(this.rawMetadata.fields.date)
      : undefined;
  }

  /** Optional. */
  @Memoize() get description(): StringField | undefined {
    return this.rawMetadata?.fields?.description
      ? new StringField(this.rawMetadata.fields.description)
      : undefined;
  }

  /**
   * Total views over item lifetime, updated by audit consultation with Views API.
   * Optional.
   */
  @Memoize() get downloads(): NumberField | undefined {
    return this.rawMetadata?.fields?.downloads
      ? new NumberField(this.rawMetadata.fields.downloads)
      : undefined;
  }

  /**
   * Computed during document construction.
   */
  @Memoize() get files_count(): NumberField | undefined {
    return this.rawMetadata?.fields?.files_count
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
   * In bytes; computed during document construction.
   */
  @Memoize() get item_size(): NumberField | undefined {
    return this.rawMetadata?.fields?.item_size
      ? new NumberField(this.rawMetadata.fields.item_size)
      : undefined;
  }

  /**
   * Optional.
   * Multivalued.
   */
  @Memoize() get language(): StringField | undefined {
    return this.rawMetadata?.fields?.language
      ? new StringField(this.rawMetadata.fields.language)
      : undefined;
  }

  /**
   * May be stale.
   * Optional.
   */
  @Memoize() get lending___available_to_borrow(): BooleanField | undefined {
    return this.rawMetadata?.fields?.lending___available_to_borrow
      ? new BooleanField(this.rawMetadata.fields.lending___available_to_borrow)
      : undefined;
  }

  /**
   * May be stale.
   * Optional.
   */
  @Memoize() get lending___available_to_browse(): BooleanField | undefined {
    return this.rawMetadata?.fields?.lending___available_to_browse
      ? new BooleanField(this.rawMetadata.fields.lending___available_to_browse)
      : undefined;
  }

  /**
   * May be stale.
   * Optional.
   */
  @Memoize() get lending___available_to_waitlist(): BooleanField | undefined {
    return this.rawMetadata?.fields?.lending___available_to_waitlist
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

  @Memoize() get mediatype(): MediaTypeField | undefined {
    return this.rawMetadata?.fields?.mediatype
      ? new MediaTypeField(this.rawMetadata.fields.mediatype)
      : undefined;
  }

  /**
   * Views over a month, updated by audit consultation with Views API.
   * Optional.
   */
  @Memoize() get month(): NumberField | undefined {
    return this.rawMetadata?.fields?.month
      ? new NumberField(this.rawMetadata.fields.month)
      : undefined;
  }

  /** Optional. */
  @Memoize() get noindex(): BooleanField | undefined {
    return this.rawMetadata?.fields?.noindex
      ? new BooleanField(this.rawMetadata.fields.noindex)
      : undefined;
  }

  /**
   * Computed during document construction.
   * Optional.
   */
  @Memoize() get num_favorites(): NumberField | undefined {
    return this.rawMetadata?.fields?.num_favorites
      ? new NumberField(this.rawMetadata.fields.num_favorites)
      : undefined;
  }

  /**
   * Computed during document construction.
   * Optional.
   */
  @Memoize() get num_reviews(): NumberField | undefined {
    return this.rawMetadata?.fields?.num_reviews
      ? new NumberField(this.rawMetadata.fields.num_reviews)
      : undefined;
  }

  /**
   * Optional.
   * Multivalued.
   */
  @Memoize() get subject(): StringListField | undefined {
    return this.rawMetadata?.fields?.subject
      ? new StringListField(this.rawMetadata.fields.subject)
      : undefined;
  }

  /** Optional. */
  @Memoize() get title(): StringField | undefined {
    return this.rawMetadata?.fields?.title
      ? new StringField(this.rawMetadata.fields.title)
      : undefined;
  }

  /** Optional. */
  @Memoize() get type(): StringField | undefined {
    return this.rawMetadata?.fields?.type
      ? new StringField(this.rawMetadata.fields.type)
      : undefined;
  }

  /** Optional. */
  @Memoize() get volume(): StringField | undefined {
    return this.rawMetadata?.fields?.volume
      ? new StringField(this.rawMetadata.fields.volume)
      : undefined;
  }

  /**
   * Views over a seven-day period, updated by audit consultation with Views API.
   * Optional.
   */
  @Memoize() get week(): NumberField | undefined {
    return this.rawMetadata?.fields?.week
      ? new NumberField(this.rawMetadata.fields.week)
      : undefined;
  }

  /**
   * Computed from date.
   * Optional.
   */
  @Memoize() get year(): DateField | undefined {
    return this.rawMetadata?.fields?.year
      ? new DateField(this.rawMetadata.fields.year)
      : undefined;
  }
}
