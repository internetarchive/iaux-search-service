import { FieldParserInterface } from '../field-parser-interface';
import { MetadataField } from '../metadata-field';

export class BooleanParser implements FieldParserInterface<boolean> {
  // use a shared static instance for performance instead of
  // instantiating a new instance for every use
  static shared = new BooleanParser();

  parseValue(rawValue: string): boolean {
    if (rawValue === 'false' || rawValue === '0') {
      return false;
    }
    return Boolean(rawValue);
  }
}

export class BooleanField extends MetadataField<boolean, BooleanParser> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(rawValue: any) {
    super(BooleanParser.shared, rawValue);
  }
}
