import { FieldParserInterface } from '../field-parser-interface';
import { MetadataField } from '../metadata-field';

export class NumberParser implements FieldParserInterface<number> {
  // use a shared static instance for performance instead of
  // instantiating a new instance for every use
  static shared = new NumberParser();

  parseValue(rawValue: string): number | undefined {
    const value = parseFloat(rawValue);
    if (Number.isNaN(value)) {
      return undefined;
    }
    return value;
  }
}

export class NumberField extends MetadataField<number, NumberParser> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(rawValue: any) {
    super(NumberParser.shared, rawValue);
  }
}
