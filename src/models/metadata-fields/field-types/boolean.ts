import { FieldParserInterface } from '../field-parser-interface';
import { MetadataField } from '../metadata-field';

export class BooleanParser implements FieldParserInterface<boolean> {
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
    const parser = new BooleanParser();
    super(parser, rawValue);
  }
}
