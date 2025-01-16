import {
  BooleanField,
  DateField,
  Metadata,
  NumberField,
  StringField,
} from '@internetarchive/iaux-item-metadata';
import { Memoize } from 'typescript-memoize';

export class SearchMetadata extends Metadata {
  @Memoize() get capture_dates(): DateField | undefined {
    return this.rawMetadata.capture_dates != null
      ? new DateField(this.rawMetadata.capture_dates)
      : undefined;
  }

  @Memoize() get collection_files_count(): NumberField | undefined {
    return this.rawMetadata.collection_files_count != null
      ? new NumberField(this.rawMetadata.collection_files_count)
      : undefined;
  }

  /** Optional. */
  @Memoize() get created_on(): DateField | undefined {
    return this.rawMetadata.created_on != null
      ? new DateField(this.rawMetadata.created_on)
      : undefined;
  }

  @Memoize() get file_creation_mtime(): NumberField | undefined {
    return this.rawMetadata.file_creation_mtime != null
      ? new NumberField(this.rawMetadata.file_creation_mtime)
      : undefined;
  }

  @Memoize() get filename(): StringField | undefined {
    return this.rawMetadata.filename != null
      ? new StringField(this.rawMetadata.filename)
      : undefined;
  }

  @Memoize() get file_basename(): StringField | undefined {
    return this.rawMetadata.file_basename != null
      ? new StringField(this.rawMetadata.file_basename)
      : undefined;
  }

  @Memoize() get genre(): StringField | undefined {
    return this.rawMetadata.genre != null
      ? new StringField(this.rawMetadata.genre)
      : undefined;
  }

  @Memoize() get indexflag(): StringField | undefined {
    return this.rawMetadata.indexflag != null
      ? new StringField(this.rawMetadata.indexflag)
      : undefined;
  }

  @Memoize() get lending___available_to_borrow(): BooleanField | undefined {
    return this.rawMetadata.lending___available_to_borrow != null
      ? new BooleanField(this.rawMetadata.lending___available_to_borrow)
      : undefined;
  }

  @Memoize() get lending___available_to_browse(): BooleanField | undefined {
    return this.rawMetadata.lending___available_to_browse != null
      ? new BooleanField(this.rawMetadata.lending___available_to_browse)
      : undefined;
  }

  @Memoize() get lending___available_to_waitlist(): BooleanField | undefined {
    return this.rawMetadata.lending___available_to_waitlist != null
      ? new BooleanField(this.rawMetadata.lending___available_to_waitlist)
      : undefined;
  }

  @Memoize() get lending___status(): StringField | undefined {
    return this.rawMetadata.lending___status != null
      ? new StringField(this.rawMetadata.lending___status)
      : undefined;
  }

  @Memoize() get licenseurl(): StringField | undefined {
    return this.rawMetadata.licenseurl != null
      ? new StringField(this.rawMetadata.licenseurl)
      : undefined;
  }

  /** Optional. */
  @Memoize() get page_num(): NumberField | undefined {
    return this.rawMetadata.page_num != null
      ? new NumberField(this.rawMetadata.page_num)
      : undefined;
  }

  /**
   * Computed in processing of FTS API hit.
   */
  @Memoize() get result_in_subfile(): BooleanField | undefined {
    return this.rawMetadata.result_in_subfile != null
      ? new BooleanField(this.rawMetadata.result_in_subfile)
      : undefined;
  }

  /** Optional. */
  @Memoize() get query(): StringField | undefined {
    return this.rawMetadata.query != null
      ? new StringField(this.rawMetadata.query)
      : undefined;
  }

  /**
   * Optional.
   */
  @Memoize() get date_favorited(): DateField | undefined {
    return this.rawMetadata.date_favorited != null
      ? new DateField(this.rawMetadata.date_favorited)
      : undefined;
  }

  /**
   * Optional.
   * Start time for TV hit.
   */
  @Memoize() get start(): StringField | undefined {
    return this.rawMetadata.start != null
      ? new StringField(this.rawMetadata.start)
      : undefined;
  }

  /**
   * Optional.
   */
  @Memoize() get updated_on(): DateField | undefined {
    return this.rawMetadata.updated_on != null
      ? new DateField(this.rawMetadata.updated_on)
      : undefined;
  }

  @Memoize() get url(): StringField | undefined {
    return this.rawMetadata.url != null
      ? new StringField(this.rawMetadata.url)
      : undefined;
  }

  /**
   * Optional.
   */
  @Memoize() get __href__(): StringField | undefined {
    return this.rawMetadata.__href__ != null
      ? new StringField(this.rawMetadata.__href__)
      : undefined;
  }
}
