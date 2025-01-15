import {
  DateField,
  Metadata,
  StringField,
} from '@internetarchive/iaux-item-metadata';
import { Memoize } from 'typescript-memoize';

export class SearchMetadata extends Metadata {
  /**
   * some extra fields for "favorited_search" hits
   */
  /** Optional. */
  @Memoize() get query(): StringField | undefined {
    return this.rawMetadata.fields?.query
      ? new StringField(this.rawMetadata.fields.query)
      : undefined;
  }

  /**
   * Optional.
   */
  @Memoize() get date_favorited(): DateField | undefined {
    return this.rawMetadata.fields?.date_favorited
      ? new DateField(this.rawMetadata.fields.date_favorited)
      : undefined;
  }

  /**
   * Optional.
   */
  @Memoize() get __href__(): StringField | undefined {
    return this.rawMetadata.fields?.__href__
      ? new StringField(this.rawMetadata.fields.__href__)
      : undefined;
  }
}
