import { BooleanParser } from '@internetarchive/field-parsers';
import { MetadataField, MetadataRawValue, isMetadataRawValue } from '../metadata-field';

export class BooleanField extends MetadataField<boolean, BooleanParser> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromRaw(rawValue: MetadataRawValue | Record<string, any>): BooleanField | null {
    if (isMetadataRawValue(rawValue)) {
      return new BooleanField(rawValue as MetadataRawValue);
    }
    return null;
  }

  constructor(rawValue: MetadataRawValue) {
    super(BooleanParser.shared, rawValue);
  }
}
