/* eslint-disable @typescript-eslint/no-explicit-any */
import { Memoize } from 'typescript-memoize';
import type { Metadata } from '../metadata';
import { DateField } from '../metadata-fields/field-types/date';
import { StringField } from '../metadata-fields/field-types/string';

/**
 * A model that describes a set of captures for a given URL, as presented in the Web Archives tab
 * on a patron's profile page.
 *
 * The fields in here are cast to their respective field types. See `metadata-fields/field-type`.
 *
 * Add additional fields as needed.
 *
 * @export
 * @class WebArchiveHit
 */
export class WebArchiveHit {
  /**
   * This is the raw hit response; useful for inspecting the raw data
   * returned from the server.
   */
  rawMetadata?: Record<string, any>;

  constructor(json: Record<string, any>) {
    this.rawMetadata = json;
  }

  get identifier(): typeof Metadata.prototype.identifier {
    return this.rawMetadata?.fields?.url;
  }

  /** The URL that was captured */
  @Memoize() get title(): StringField | undefined {
    return this.rawMetadata?.fields?.url
      ? new StringField(this.rawMetadata.fields?.url)
      : undefined;
  }

  /**
   * Optional.
   */
  @Memoize() get capture_dates(): DateField | undefined {
    return this.rawMetadata?.fields?.capture_dates
      ? new DateField(this.rawMetadata.fields?.capture_dates)
      : undefined;
  }

  /**
   * Optional.
   */
  @Memoize() get __href__(): typeof Metadata.prototype.__href__ {
    return this.rawMetadata?.fields?.__href__
      ? new StringField(this.rawMetadata.fields?.__href__)
      : undefined;
  }
}
