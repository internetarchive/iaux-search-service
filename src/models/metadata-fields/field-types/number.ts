import { NumberParser } from '@internetarchive/field-parsers';
import { MetadataField, MetadataRawValue, isMetadataRawValue } from '../metadata-field';

export class NumberField extends MetadataField<number, NumberParser> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromRaw(rawValue: MetadataRawValue | Record<string, any>): NumberField | null {
    if (isMetadataRawValue(rawValue)) {
      return new NumberField(rawValue as MetadataRawValue);
    }
    return null;
  }

  constructor(rawValue: MetadataRawValue) {
    super(NumberParser.shared, rawValue);
  }
}
