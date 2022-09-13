/* eslint-disable @typescript-eslint/no-explicit-any */
import { Memoize } from 'typescript-memoize';
import { Metadata } from '../metadata';
import { BooleanField } from '../metadata-fields/field-types/boolean';
import { DateField } from '../metadata-fields/field-types/date';
import { MediaTypeField } from '../metadata-fields/field-types/mediatype';
import { NumberField } from '../metadata-fields/field-types/number';
import { StringField } from '../metadata-fields/field-types/string';

/**
 * A model that describes a textual hit from a full text search via the PPS endpoint.
 *
 * The fields in here are cast to their respective field types. See `metadata-fields/field-type`.
 *
 * Add additional fields as needed.
 *
 * @export
 * @class TextHit
 */
export class TextHit {
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
  get identifier(): typeof Metadata.prototype.identifier {
    return this.rawMetadata?.fields?.identifier;
  }

  /**
   * Synthesized in processing of FTS API hit; TBD
   * Optional.
   */
  @Memoize() get highlight(): StringField | undefined {
    // Note: _not_ inside the fields object.
    return this.rawMetadata?.highlight?.text
      ? new StringField(this.rawMetadata.highlight.text)
      : undefined;
  }

  /** Multivalued. */
  @Memoize() get collection(): typeof Metadata.prototype.collection {
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
  @Memoize() get creator(): typeof Metadata.prototype.creator {
    return this.rawMetadata?.fields?.creator
      ? new StringField(this.rawMetadata.fields.creator)
      : undefined;
  }

  /** Optional. */
  @Memoize() get date(): typeof Metadata.prototype.date {
    return this.rawMetadata?.fields?.date
      ? new DateField(this.rawMetadata.fields.date)
      : undefined;
  }

  /**
   * Contents of hilighting in FTS API hit, TBD
   * Optional.
   * Multivalued.
   */
  @Memoize() get description(): typeof Metadata.prototype.description {
    return this.rawMetadata?.fields?.description
      ? new StringField(this.rawMetadata.fields.description)
      : undefined;
  }

  /**
   * Total views over ITEM (not text) lifetime, updated by audit consultation with Views API.
   * Optional.
   */
  @Memoize() get downloads(): typeof Metadata.prototype.downloads {
    return this.rawMetadata?.fields?.downloads
      ? new NumberField(this.rawMetadata.fields.downloads)
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
    return this.rawMetadata?.fields?.file_creation_mtime
      ? new NumberField(this.rawMetadata.fields.file_creation_mtime)
      : undefined;
  }

  @Memoize() get mediatype(): typeof Metadata.prototype.mediatype {
    return this.rawMetadata?.fields?.mediatype
      ? new MediaTypeField(this.rawMetadata.fields.mediatype)
      : undefined;
  }

  /** Optional. */
  @Memoize() get page_num(): NumberField | undefined {
    return this.rawMetadata?.fields?.page_num
      ? new NumberField(this.rawMetadata.fields.page_num)
      : undefined;
  }

  /** Optional. */
  @Memoize() get publicdate(): typeof Metadata.prototype.publicdate {
    return this.rawMetadata?.fields?.publicdate
      ? new DateField(this.rawMetadata.fields.publicdate)
      : undefined;
  }

  /**
   * Computed in processing of FTS API hit.
   */
  @Memoize() get result_in_subfile(): BooleanField | undefined {
    return this.rawMetadata?.fields?.result_in_subfile != null
      ? new BooleanField(this.rawMetadata.fields.result_in_subfile)
      : undefined;
  }

  /** Optional. */
  @Memoize() get reviewdate(): typeof Metadata.prototype.reviewdate {
    return this.rawMetadata?.fields?.reviewdate
      ? new DateField(this.rawMetadata.fields.reviewdate)
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
  @Memoize() get title(): typeof Metadata.prototype.title {
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
    return this.rawMetadata?.fields?.year
      ? new NumberField(this.rawMetadata.fields.year)
      : undefined;
  }

  /**
   * Synthesized in processing of FTS API hit; TBD
   * Optional.
   */
  @Memoize() get __href__(): StringField | undefined {
    return this.rawMetadata?.fields?.__href__
      ? new StringField(this.rawMetadata.fields.__href__)
      : undefined;
  }
}
