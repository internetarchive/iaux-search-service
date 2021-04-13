import {
  FieldParserInterface,
  FieldParserRawValue,
} from '../field-parser-interface';
import { MetadataField, MetadataRawValue } from '../metadata-field';

export class BooleanParser implements FieldParserInterface<boolean> {
  // use a shared static instance for performance instead of
  // instantiating a new instance for every use
  static shared = new BooleanParser();

  parseValue(rawValue: FieldParserRawValue): boolean {
    if (
      typeof rawValue === 'string' &&
      (rawValue === 'false' || rawValue === '0')
    ) {
      return false;
    }
    return Boolean(rawValue);
  }
}

export class BooleanField extends MetadataField<boolean, BooleanParser> {
  constructor(rawValue: MetadataRawValue) {
    super(BooleanParser.shared, rawValue);
  }
}
