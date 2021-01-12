import { FieldParserInterface } from '../field-parser-interface';
import { MetadataField } from '../metadata-field';

export class StringParser implements FieldParserInterface<string> {
  // use a shared static instance for performance instead of
  // instantiating a new instance for every use
  static shared = new StringParser();

  parseValue(rawValue: string): string {
    return String(rawValue);
  }
}

export class StringField extends MetadataField<string, StringParser> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(rawValue: any) {
    super(StringParser.shared, rawValue);
  }
}
