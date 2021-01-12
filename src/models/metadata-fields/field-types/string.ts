import { FieldParserInterface } from '../field-parser-interface';
import { MetadataField } from '../metadata-field';

export class StringParser implements FieldParserInterface<string> {
  parseValue(rawValue: string): string {
    return String(rawValue);
  }
}

export class StringField extends MetadataField<string, StringParser> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(rawValue: any) {
    const parser = new StringParser();
    super(parser, rawValue);
  }
}
