import {
  FieldParserInterface,
  FieldParserRawValue,
} from '../field-parser-interface';
import { MetadataField, MetadataRawValue } from '../metadata-field';

export class StringParser implements FieldParserInterface<string> {
  // use a shared static instance for performance instead of
  // instantiating a new instance for every use
  static shared = new StringParser();

  parseValue(rawValue: FieldParserRawValue): string {
    return String(rawValue);
  }
}

export class StringField extends MetadataField<string, StringParser> {
  constructor(rawValue: MetadataRawValue) {
    super(StringParser.shared, rawValue);
  }
}
