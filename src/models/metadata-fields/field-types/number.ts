import { FieldParserInterface } from '../field-parser-interface';
import { MetadataField } from '../metadata-field';

export class NumberParser implements FieldParserInterface<number> {
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
    const parser = new NumberParser();
    super(parser, rawValue);
  }
}
