/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BooleanField,
  DateField,
  MediaTypeField,
  NumberField,
  StringField,
} from '@internetarchive/iaux-item-metadata';
import { Memoize } from 'typescript-memoize';

/**
 * A model that describes a TV clip hit from a TV search via the PPS endpoint.
 *
 * The fields in here are cast to their respective field types. See `metadata-fields/field-type`.
 *
 * Add additional fields as needed.
 *
 * @export
 * @class TvClipHit
 */
export class TvClipHit {
  /**
   * This is the raw hit response; useful for inspecting the raw data
   * returned from the server.
   */
  readonly rawMetadata: Readonly<Record<string, any>>;

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
   * Synthesized in processing of TVS API hit; TBD
   * Optional.
   */
  @Memoize() get highlight(): StringField | undefined {
    // Note: _not_ inside the fields object.
    return this.rawMetadata?.highlight?.text
      ? new StringField(this.rawMetadata.highlight.text)
      : undefined;
  }

  /** Optional. */
  @Memoize() get addeddate(): DateField | undefined {
    return this.rawMetadata?.fields?.addeddate
      ? new DateField(this.rawMetadata.fields.addeddate)
      : undefined;
  }

  /** Optional. */
  @Memoize() get avg_rating(): NumberField | undefined {
    const averageRating = this.rawMetadata?.fields?.avg_rating;

    return averageRating || averageRating === 0
      ? new NumberField(this.rawMetadata?.fields.avg_rating)
      : undefined;
  }

  /** Multivalued. */
  @Memoize() get collection(): StringField | undefined {
    return this.rawMetadata?.fields?.collection
      ? new StringField(this.rawMetadata.fields.collection)
      : undefined;
  }

  @Memoize() get created_on(): DateField | undefined {
    return this.rawMetadata?.fields?.created_on
      ? new DateField(this.rawMetadata.fields.created_on)
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

  /** Optional. */
  @Memoize() get date(): DateField | undefined {
    return this.rawMetadata?.fields?.date
      ? new DateField(this.rawMetadata.fields.date)
      : undefined;
  }

  /**
   * Contents of description in TVS API hit, TBD
   * Optional.
   * Multivalued.
   */
  @Memoize() get description(): StringField | undefined {
    return this.rawMetadata?.fields?.description
      ? new StringField(this.rawMetadata.fields.description)
      : undefined;
  }

  /**
   * Total views over ITEM (not text) lifetime, updated by audit consultation with Views API.
   * Optional.
   */
  @Memoize() get downloads(): NumberField | undefined {
    const downloads = this.rawMetadata?.fields?.downloads;

    return downloads || downloads === 0
      ? new NumberField(this.rawMetadata?.fields.downloads)
      : undefined;
  }

  @Memoize() get filename(): StringField | undefined {
    return this.rawMetadata?.fields?.filename
      ? new StringField(this.rawMetadata.fields.filename)
      : undefined;
  }

  @Memoize() get file_basename(): StringField | undefined {
    return this.rawMetadata?.fields?.file_basename
      ? new StringField(this.rawMetadata.fields.file_basename)
      : undefined;
  }

  @Memoize() get file_creation_mtime(): NumberField | undefined {
    const mTime = this.rawMetadata?.fields?.file_creation_mtime;

    return mTime || mTime === 0
      ? new NumberField(this.rawMetadata?.fields.file_creation_mtime)
      : undefined;
  }

  /**
   * Format varies.
   * Optional.
   */
  @Memoize() get issue(): StringField | undefined {
    return this.rawMetadata?.fields?.issue
      ? new StringField(this.rawMetadata.fields.issue)
      : undefined;
  }

  @Memoize() get mediatype(): MediaTypeField | undefined {
    return this.rawMetadata?.fields?.mediatype
      ? new MediaTypeField(this.rawMetadata.fields.mediatype)
      : undefined;
  }

  /** Optional. */
  @Memoize() get publicdate(): DateField | undefined {
    return this.rawMetadata?.fields?.publicdate
      ? new DateField(this.rawMetadata.fields.publicdate)
      : undefined;
  }

  /**
   * Computed in processing of FTS API hit.
   * Potentially irrelevant for TVS hit.
   */
  @Memoize() get result_in_subfile(): BooleanField | undefined {
    const resultInSubfile = this.rawMetadata?.fields?.result_in_subfile;

    return resultInSubfile || resultInSubfile === false
      ? new BooleanField(this.rawMetadata?.fields.result_in_subfile)
      : undefined;
  }

  /** Optional. */
  @Memoize() get reviewdate(): DateField | undefined {
    return this.rawMetadata?.fields?.reviewdate
      ? new DateField(this.rawMetadata.fields.reviewdate)
      : undefined;
  }

  /**
   * Format varies.
   * Optional.
   */
  @Memoize() get source(): StringField | undefined {
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
  @Memoize() get title(): StringField | undefined {
    return this.rawMetadata?.fields?.title
      ? new StringField(this.rawMetadata.fields.title)
      : undefined;
  }

  @Memoize() get updated_on(): DateField | undefined {
    return this.rawMetadata?.fields?.updated_on
      ? new DateField(this.rawMetadata.fields.updated_on)
      : undefined;
  }

  /**
   * Computed from date.
   * Optional.
   */
  @Memoize() get year(): NumberField | undefined {
    const year = this.rawMetadata?.fields?.year;

    return year || year === 0
      ? new NumberField(this.rawMetadata?.fields.year)
      : undefined;
  }

  /**
   * Optional.
   * Start time for TV hit.
   */
  @Memoize() get start(): StringField | undefined {
    const start = this.rawMetadata?.fields?.start;

    return start || start === 0
      ? new StringField(this.rawMetadata?.fields.start)
      : undefined;
  }

  /**
   * Synthesized in processing of TVS API hit; TBD
   * Optional.
   */
  @Memoize() get __href__(): StringField | undefined {
    return this.rawMetadata?.fields?.__href__
      ? new StringField(this.rawMetadata.fields.__href__)
      : undefined;
  }
}
