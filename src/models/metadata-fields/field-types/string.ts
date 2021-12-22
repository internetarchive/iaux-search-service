import { StringParser } from '@internetarchive/field-parsers';
import { MetadataField, MetadataRawValue, isMetadataRawValue } from '../metadata-field';

export class StringField extends MetadataField<string, StringParser> {
  constructor(rawValue: MetadataRawValue) {
    super(StringParser.shared, rawValue);
  }
}
