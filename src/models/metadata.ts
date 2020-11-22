/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import {
  DateField,
  StringField,
  NumberField,
  DurationField,
  BooleanField,
} from './metadata-fields/field-types';

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
   * @type {*}
   * @memberof Metadata
   */
  rawMetadata?: any;

  identifier: string;

  addeddate: DateField;

  audioCodec?: StringField;

  audioSampleRate?: NumberField;

  collection?: StringField;

  contributor?: StringField;

  coverage?: StringField;

  creator?: StringField;

  date?: DateField;

  description?: StringField;

  downloads: NumberField;

  duration?: DurationField;

  indexdate: DateField;

  language?: StringField;

  length?: DurationField;

  lineage?: StringField;

  mediatype?: StringField;

  noindex?: BooleanField;

  notes?: StringField;

  numReviews?: NumberField;

  publicdate: DateField;

  runtime?: DurationField;

  scanner?: StringField;

  source?: StringField;

  startLocaltime?: DateField;

  startTime?: DateField;

  stopTime?: DateField;

  subject?: StringField;

  taper?: StringField;

  title?: StringField;

  transferer?: StringField;

  track?: NumberField;

  type?: StringField;

  uploader?: StringField;

  utcOffset?: NumberField;

  venue?: StringField;

  year?: DateField;

  constructor(json: any) {
    this.rawMetadata = json;
    this.identifier = json.identifier;

    this.addeddate = new DateField(json.addeddate);
    this.publicdate = new DateField(json.publicdate);
    this.indexdate = new DateField(json.indexdate);

    this.audioCodec = json.audio_codec
      ? new StringField(json.audio_codec)
      : undefined;
    this.audioSampleRate = json.audio_codec
      ? new NumberField(json.audio_sample_rate)
      : undefined;
    this.collection = json.collection
      ? new StringField(json.collection)
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
    this.downloads = new NumberField(json.downloads);
    this.duration = json.duration
      ? new DurationField(json.duration)
      : undefined;
    this.language = json.language ? new StringField(json.language) : undefined;
    this.length = json.length ? new DurationField(json.length) : undefined;
    this.lineage = json.lineage ? new StringField(json.lineage) : undefined;
    this.mediatype = json.mediatype
      ? new StringField(json.mediatype)
      : undefined;
    this.noindex = json.noindex ? new BooleanField(json.noindex) : undefined;
    this.notes = json.notes ? new StringField(json.notes) : undefined;
    this.numReviews = json.num_reviews
      ? new NumberField(json.num_reviews)
      : undefined;
    this.runtime = json.runtime ? new DurationField(json.runtime) : undefined;
    this.scanner = json.scanner ? new StringField(json.scanner) : undefined;
    this.source = json.source ? new StringField(json.source) : undefined;
    this.startLocaltime = json.start_localtime
      ? new DateField(json.start_localtime)
      : undefined;
    this.startTime = json.start_time
      ? new DateField(json.start_time)
      : undefined;
    this.stopTime = json.stop_time ? new DateField(json.stop_time) : undefined;
    this.subject = json.subject ? new StringField(json.subject) : undefined;
    this.taper = json.taper ? new StringField(json.taper) : undefined;
    this.title = json.title ? new StringField(json.title) : undefined;
    this.track = json.track ? new NumberField(json.track) : undefined;
    this.transferer = json.transferer
      ? new StringField(json.transferer)
      : undefined;
    this.type = json.type ? new StringField(json.type) : undefined;
    this.uploader = json.uploader ? new StringField(json.uploader) : undefined;
    this.utcOffset = json.utc_offset
      ? new NumberField(json.utc_offset)
      : undefined;
    this.venue = json.venue ? new StringField(json.venue) : undefined;
    this.year = json.year ? new DateField(json.year) : undefined;
  }
}
