/* eslint-disable @typescript-eslint/no-explicit-any */
import { Memoize } from 'typescript-memoize';
import { BooleanField } from './metadata-fields/field-types/boolean';
import { DateField } from './metadata-fields/field-types/date';
import { DurationField } from './metadata-fields/field-types/duration';
import { NumberField } from './metadata-fields/field-types/number';
import { StringField } from './metadata-fields/field-types/string';
import { PageProgressionField } from './metadata-fields/field-types/page-progression';
import { ByteField } from './metadata-fields/field-types/byte';
import { MediaTypeField } from './metadata-fields/field-types/mediatype';
import { StringListField } from './metadata-fields/field-types/list';

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
  get identifier(): string | undefined {
    return this.rawMetadata?.identifier;
  }

  @Memoize() get addeddate(): DateField | undefined {
    return this.rawMetadata?.addeddate
      ? new DateField(this.rawMetadata.addeddate)
      : undefined;
  }

  @Memoize() get audio_codec(): StringField | undefined {
    return this.rawMetadata?.audio_codec
      ? new StringField(this.rawMetadata.audio_codec)
      : undefined;
  }

  @Memoize() get audio_sample_rate(): NumberField | undefined {
    return this.rawMetadata?.audio_sample_rate
      ? new NumberField(this.rawMetadata.audio_sample_rate)
      : undefined;
  }

  @Memoize() get avg_rating(): NumberField | undefined {
    return this.rawMetadata?.avg_rating
      ? new NumberField(this.rawMetadata.avg_rating)
      : undefined;
  }

  /**
   * All of the collections that an Item is in, including
   * all of the side-loaded collections from the ListAPI
   * and SimpleListsAPI like `fav-*`
   *
   * @type {StringField}
   * @memberof Metadata
   */
  @Memoize() get collection(): StringField | undefined {
    return this.rawMetadata?.collection
      ? new StringField(this.rawMetadata.collection)
      : undefined;
  }

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
  @Memoize() get collections_raw(): StringField | undefined {
    return this.rawMetadata?.collections_raw
      ? new StringField(this.rawMetadata.collections_raw)
      : undefined;
  }

  /**
   * The size of a collection in bytes
   *
   * @type {ByteField}
   * @memberof Metadata
   */
  @Memoize() get collection_size(): ByteField | undefined {
    return this.rawMetadata?.collection_size
      ? new ByteField(this.rawMetadata.collection_size)
      : undefined;
  }

  @Memoize() get contributor(): StringField | undefined {
    return this.rawMetadata?.contributor
      ? new StringField(this.rawMetadata.contributor)
      : undefined;
  }

  @Memoize() get coverage(): StringField | undefined {
    return this.rawMetadata?.coverage
      ? new StringField(this.rawMetadata.coverage)
      : undefined;
  }

  @Memoize() get creator(): StringField | undefined {
    return this.rawMetadata?.creator
      ? new StringField(this.rawMetadata.creator)
      : undefined;
  }

  @Memoize() get date(): DateField | undefined {
    return this.rawMetadata?.date
      ? new DateField(this.rawMetadata.date)
      : undefined;
  }

  @Memoize() get description(): StringField | undefined {
    return this.rawMetadata?.description
      ? new StringField(this.rawMetadata.description)
      : undefined;
  }

  /**
   * All time download count
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get downloads(): NumberField | undefined {
    return this.rawMetadata?.downloads
      ? new NumberField(this.rawMetadata.downloads)
      : undefined;
  }

  /**
   * The item duration in seconds
   *
   * @type {DurationField}
   * @memberof Metadata
   */
  @Memoize() get duration(): DurationField | undefined {
    return this.rawMetadata?.duration
      ? new DurationField(this.rawMetadata.duration)
      : undefined;
  }

  @Memoize() get 'external-identifier'(): StringField | undefined {
    return this.rawMetadata?.['external-identifier']
      ? new StringField(this.rawMetadata?.['external-identifier'])
      : undefined;
  }

  /**
   * The number of files in an item
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get files_count(): NumberField | undefined {
    return this.rawMetadata?.files_count
      ? new NumberField(this.rawMetadata.files_count)
      : undefined;
  }

  @Memoize() get indexdate(): DateField | undefined {
    return this.rawMetadata?.indexdate
      ? new DateField(this.rawMetadata.indexdate)
      : undefined;
  }

  @Memoize() get isbn(): StringField | undefined {
    return this.rawMetadata?.isbn
      ? new StringField(this.rawMetadata.isbn)
      : undefined;
  }

  @Memoize() get issue(): StringField | undefined {
    return this.rawMetadata?.issue
      ? new StringField(this.rawMetadata.issue)
      : undefined;
  }

  /**
   * For collections, the number of items in the collection
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get item_count(): NumberField | undefined {
    return this.rawMetadata?.item_count
      ? new NumberField(this.rawMetadata.item_count)
      : undefined;
  }

  /**
   * The size of the item in bytes
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get item_size(): ByteField | undefined {
    return this.rawMetadata?.item_size
      ? new ByteField(this.rawMetadata.item_size)
      : undefined;
  }

  @Memoize() get language(): StringField | undefined {
    return this.rawMetadata?.language
      ? new StringField(this.rawMetadata.language)
      : undefined;
  }

  @Memoize() get length(): DurationField | undefined {
    return this.rawMetadata?.length
      ? new DurationField(this.rawMetadata.length)
      : undefined;
  }

  @Memoize() get lineage(): StringField | undefined {
    return this.rawMetadata?.lineage
      ? new StringField(this.rawMetadata.lineage)
      : undefined;
  }

  /**
   * The number of downloads in the last month
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get month(): NumberField | undefined {
    return this.rawMetadata?.month
      ? new NumberField(this.rawMetadata.month)
      : undefined;
  }

  @Memoize() get mediatype(): MediaTypeField | undefined {
    return this.rawMetadata?.mediatype
      ? new MediaTypeField(this.rawMetadata.mediatype)
      : undefined;
  }

  @Memoize() get noindex(): BooleanField | undefined {
    return this.rawMetadata?.noindex
      ? new BooleanField(this.rawMetadata.noindex)
      : undefined;
  }

  @Memoize() get notes(): StringField | undefined {
    return this.rawMetadata?.notes
      ? new StringField(this.rawMetadata.notes)
      : undefined;
  }

  /**
   * The number of users that have favorited the item
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get num_favorites(): NumberField | undefined {
    return this.rawMetadata?.num_favorites
      ? new NumberField(this.rawMetadata.num_favorites)
      : undefined;
  }

  @Memoize() get num_reviews(): NumberField | undefined {
    return this.rawMetadata?.num_reviews
      ? new NumberField(this.rawMetadata.num_reviews)
      : undefined;
  }

  @Memoize() get openlibrary_edition(): StringField | undefined {
    return this.rawMetadata?.openlibrary_edition
      ? new StringField(this.rawMetadata.openlibrary_edition)
      : undefined;
  }

  @Memoize() get openlibrary_work(): StringField | undefined {
    return this.rawMetadata?.openlibrary_work
      ? new StringField(this.rawMetadata.openlibrary_work)
      : undefined;
  }

  @Memoize() get page_progression(): PageProgressionField | undefined {
    return this.rawMetadata?.page_progression
      ? new PageProgressionField(this.rawMetadata.page_progression)
      : undefined;
  }

  @Memoize() get partner(): StringField | undefined {
    return this.rawMetadata?.partner
      ? new StringField(this.rawMetadata.partner)
      : undefined;
  }

  @Memoize() get ppi(): NumberField | undefined {
    return this.rawMetadata?.ppi
      ? new NumberField(this.rawMetadata.ppi)
      : undefined;
  }

  @Memoize() get publicdate(): DateField | undefined {
    return this.rawMetadata?.publicdate
      ? new DateField(this.rawMetadata.publicdate)
      : undefined;
  }

  @Memoize() get publisher(): StringField | undefined {
    return this.rawMetadata?.publisher
      ? new StringField(this.rawMetadata.publisher)
      : undefined;
  }

  @Memoize() get reviewdate(): DateField | undefined {
    return this.rawMetadata?.reviewdate
      ? new DateField(this.rawMetadata.reviewdate)
      : undefined;
  }

  @Memoize() get runtime(): DurationField | undefined {
    return this.rawMetadata?.runtime
      ? new DurationField(this.rawMetadata.runtime)
      : undefined;
  }

  @Memoize() get scanner(): StringField | undefined {
    return this.rawMetadata?.scanner
      ? new StringField(this.rawMetadata.scanner)
      : undefined;
  }

  @Memoize() get source(): StringField | undefined {
    return this.rawMetadata?.source
      ? new StringField(this.rawMetadata.source)
      : undefined;
  }

  @Memoize() get start_localtime(): DateField | undefined {
    return this.rawMetadata?.start_localtime
      ? new DateField(this.rawMetadata.start_localtime)
      : undefined;
  }

  @Memoize() get start_time(): DateField | undefined {
    return this.rawMetadata?.start_time
      ? new DateField(this.rawMetadata.start_time)
      : undefined;
  }

  @Memoize() get stop_time(): DateField | undefined {
    return this.rawMetadata?.stop_time
      ? new DateField(this.rawMetadata.stop_time)
      : undefined;
  }

  @Memoize() get subject(): StringListField | undefined {
    return this.rawMetadata?.subject
      ? new StringListField(this.rawMetadata.subject)
      : undefined;
  }

  @Memoize() get taper(): StringField | undefined {
    return this.rawMetadata?.taper
      ? new StringField(this.rawMetadata.taper)
      : undefined;
  }

  @Memoize() get title(): StringField | undefined {
    return this.rawMetadata?.title
      ? new StringField(this.rawMetadata.title)
      : undefined;
  }

  @Memoize() get transferer(): StringField | undefined {
    return this.rawMetadata?.transferer
      ? new StringField(this.rawMetadata.transferer)
      : undefined;
  }

  @Memoize() get track(): NumberField | undefined {
    return this.rawMetadata?.track
      ? new NumberField(this.rawMetadata.track)
      : undefined;
  }

  @Memoize() get type(): StringField | undefined {
    return this.rawMetadata?.type
      ? new StringField(this.rawMetadata.type)
      : undefined;
  }

  @Memoize() get uploader(): StringField | undefined {
    return this.rawMetadata?.uploader
      ? new StringField(this.rawMetadata.uploader)
      : undefined;
  }

  @Memoize() get utc_offset(): NumberField | undefined {
    return this.rawMetadata?.utc_offset
      ? new NumberField(this.rawMetadata.utc_offset)
      : undefined;
  }

  @Memoize() get venue(): StringField | undefined {
    return this.rawMetadata?.venue
      ? new StringField(this.rawMetadata.venue)
      : undefined;
  }

  @Memoize() get volume(): StringField | undefined {
    return this.rawMetadata?.volume
      ? new StringField(this.rawMetadata.volume)
      : undefined;
  }

  /**
   * The number of downloads in the last week
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get week(): NumberField | undefined {
    return this.rawMetadata?.week
      ? new NumberField(this.rawMetadata.week)
      : undefined;
  }

  @Memoize() get year(): DateField | undefined {
    return this.rawMetadata?.year
      ? new DateField(this.rawMetadata.year)
      : undefined;
  }

  constructor(json: Record<string, any>) {
    this.rawMetadata = json;
  }
}
