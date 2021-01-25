import { FieldParserInterface } from '../field-parser-interface';
import { MetadataField } from '../metadata-field';
import { NumberParser } from './number';

export type Byte = number;

/**
 * The ByteParser is a unit-specific NumberParser
 * that returns a value in bytes
 *
 * @export
 * @class ByteParser
 * @implements {FieldParserInterface<Byte>}
 */
export class ByteParser implements FieldParserInterface<Byte> {
  // use a shared static instance for performance instead of
  // instantiating a new instance for every use
  static shared = new ByteParser();

  parseValue(rawValue: string): Byte | undefined {
    const parser = NumberParser.shared;
    return parser.parseValue(rawValue);
  }
}

/**
 * ByteField is a unit-specific number field that
 * returns a value in bytes
 *
 * @export
 * @class ByteField
 * @extends {MetadataField<Byte, ByteParser>}
 */
export class ByteField extends MetadataField<Byte, ByteParser> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(rawValue: any) {
    super(ByteParser.shared, rawValue);
  }
}
