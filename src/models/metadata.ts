/* eslint-disable @typescript-eslint/no-explicit-any */
import { BooleanField } from './metadata-fields/field-types/boolean';
import { DateField } from './metadata-fields/field-types/date';
import { DurationField } from './metadata-fields/field-types/duration';
import { NumberField } from './metadata-fields/field-types/number';
import { StringField } from './metadata-fields/field-types/string';
import { PageProgressionField } from './metadata-fields/field-types/page-progression';
import { ByteField } from './metadata-fields/field-types/byte';
import { MediaTypeField } from './metadata-fields/field-types/mediatype';

/**
 * Metadata is an expansive model that describes an Item.
 *
 * The fields in here get casted to their respective field types. See `metadata-fields/field-type`.
 *
 * Add additional fields as needed.
 *
 * @export
 * @class Metadata
 */
export class Metadata {
  /**
   * This is the raw metadata reponse; useful for inspecting the raw data returned from the server.
   *
   * @type { string: any }
   * @memberof Metadata
   */
  rawMetadata?: Record<string, any>;

  /**
   * The item identifier.
   *
   * _Note_ This is a plain string instead of a `MetadataField` since it's
   * the primary key of the item.
   *
   * @type {string}
   * @memberof Metadata
   */
  identifier?: string;

  addeddate?: DateField;

  audio_codec?: StringField;

  audio_sample_rate?: NumberField;

  /**
   * All of the collections that an Item is in, including
   * all of the side-loaded collections from the ListAPI
   * and SimpleListsAPI like `fav-*`
   *
   * @type {StringField}
   * @memberof Metadata
   */
  collection?: StringField;

  /**
   * The "natural" collections for an item before augmentation
   * by side-loaded collections like ListsAPI and SimpleLists
   *
   * The `collection` field above includes things like all of
   * the `fav-*` collections, whereas this is only the collections
   * that have been directly added in the hierarchy.
   *
   * @type {StringField}
   * @memberof Metadata
   */
  collections_raw?: StringField;

  /**
   * The size of a collection in bytes
   *
   * @type {ByteField}
   * @memberof Metadata
   */
  collection_size?: ByteField;

  contributor?: StringField;

  coverage?: StringField;

  creator?: StringField;

  date?: DateField;

  description?: StringField;

  /**
   * All time download count
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  downloads?: NumberField;

  /**
   * The item duration in seconds
   *
   * @type {DurationField}
   * @memberof Metadata
   */
  duration?: DurationField;

  /**
   * The number of files in an item
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  files_count?: NumberField;

  indexdate?: DateField;

  /**
   * For collections, the number of items in the collection
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  item_count?: NumberField;

  /**
   * The size of the item in bytes
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  item_size?: ByteField;

  language?: StringField;

  length?: DurationField;

  lineage?: StringField;

  /**
   * The number of downloads in the last month
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  month?: NumberField;

  mediatype?: MediaTypeField;

  noindex?: BooleanField;

  notes?: StringField;

  /**
   * The number of users that have favorited the item
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  num_favorites?: NumberField;

  num_reviews?: NumberField;

  page_progression?: PageProgressionField;

  publicdate?: DateField;

  runtime?: DurationField;

  scanner?: StringField;

  source?: StringField;

  start_localtime?: DateField;

  start_time?: DateField;

  stop_time?: DateField;

  subject?: StringField;

  taper?: StringField;

  title?: StringField;

  transferer?: StringField;

  track?: NumberField;

  type?: StringField;

  uploader?: StringField;

  utc_offset?: NumberField;

  venue?: StringField;

  /**
   * The number of downloads in the last week
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  week?: NumberField;

  year?: DateField;

  constructor(json: Record<string, any>) {
    this.rawMetadata = json;
    this.identifier = json.identifier;

    this.addeddate = json.addeddate ? new DateField(json.addeddate) : undefined;
    this.publicdate = json.publicdate
      ? new DateField(json.publicdate)
      : undefined;
    this.indexdate = json.indexdate ? new DateField(json.indexdate) : undefined;

    this.audio_codec = json.audio_codec
      ? new StringField(json.audio_codec)
      : undefined;
    this.audio_sample_rate = json.audio_sample_rate
      ? new NumberField(json.audio_sample_rate)
      : undefined;
    this.collection = json.collection
      ? new StringField(json.collection)
      : undefined;
    this.collections_raw = json.collections_raw
      ? new StringField(json.collections_raw)
      : undefined;
    this.collection_size = json.collection_size
      ? new ByteField(json.collection_size)
      : undefined;
    this.contributor = json.contributor
      ? new StringField(json.contributor)
      : undefined;
    this.coverage = json.coverage ? new StringField(json.coverage) : undefined;
    this.creator = json.creator ? new StringField(json.creator) : undefined;
    this.date = json.date ? new DateField(json.date) : undefined;
    this.description = json.description
      ? new StringField(json.description)
      : undefined;
    this.downloads = json.downloads
      ? new NumberField(json.downloads)
      : undefined;
    this.duration = json.duration
      ? new DurationField(json.duration)
      : undefined;
    this.files_count = json.files_count
      ? new NumberField(json.files_count)
      : undefined;
    this.item_count = json.item_count
      ? new NumberField(json.item_count)
      : undefined;
    this.item_size = json.item_size ? new ByteField(json.item_size) : undefined;
    this.language = json.language ? new StringField(json.language) : undefined;
    this.length = json.length ? new DurationField(json.length) : undefined;
    this.lineage = json.lineage ? new StringField(json.lineage) : undefined;
    this.mediatype = json.mediatype
      ? new MediaTypeField(json.mediatype)
      : undefined;
    this.month = json.month ? new NumberField(json.month) : undefined;
    this.noindex = json.noindex ? new BooleanField(json.noindex) : undefined;
    this.notes = json.notes ? new StringField(json.notes) : undefined;
    this.num_favorites = json.num_favorites
      ? new NumberField(json.num_favorites)
      : undefined;
    this.num_reviews = json.num_reviews
      ? new NumberField(json.num_reviews)
      : undefined;
    this.runtime = json.runtime ? new DurationField(json.runtime) : undefined;
    this.scanner = json.scanner ? new StringField(json.scanner) : undefined;
    this.source = json.source ? new StringField(json.source) : undefined;
    this.start_localtime = json.start_localtime
      ? new DateField(json.start_localtime)
      : undefined;
    this.start_time = json.start_time
      ? new DateField(json.start_time)
      : undefined;
    this.stop_time = json.stop_time ? new DateField(json.stop_time) : undefined;
    this.subject = json.subject ? new StringField(json.subject) : undefined;
    this.taper = json.taper ? new StringField(json.taper) : undefined;
    this.title = json.title ? new StringField(json.title) : undefined;
    this.track = json.track ? new NumberField(json.track) : undefined;
    this.transferer = json.transferer
      ? new StringField(json.transferer)
      : undefined;
    this.type = json.type ? new StringField(json.type) : undefined;
    this.uploader = json.uploader ? new StringField(json.uploader) : undefined;
    this.utc_offset = json.utc_offset
      ? new NumberField(json.utc_offset)
      : undefined;
    this.venue = json.venue ? new StringField(json.venue) : undefined;
    this.week = json.week ? new NumberField(json.week) : undefined;
    this.year = json.year ? new DateField(json.year) : undefined;
  }
}
