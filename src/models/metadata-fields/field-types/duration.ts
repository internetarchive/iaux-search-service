import { Duration, DurationParser } from '@internetarchive/field-parsers';
import { MetadataField, MetadataRawValue, isMetadataRawValue } from '../metadata-field';

/**
 * The DurationField parses different duration formats
 * and returns a `Duration`, which is a number in seconds
 * with decimals.
 *
 * @export
 * @class DurationField
 * @extends {MetadataField<Duration, DurationParser>}
 */
export class DurationField extends MetadataField<Duration, DurationParser> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromRaw(rawValue: MetadataRawValue | Record<string, any>): DurationField | null {
    if (isMetadataRawValue(rawValue)) {
      return new DurationField(rawValue as MetadataRawValue);
    }
    return null;
  }

  constructor(rawValue: MetadataRawValue) {
    super(DurationParser.shared, rawValue);
  }
}
