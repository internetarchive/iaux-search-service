import {
  FieldParserInterface,
  FieldParserRawValue,
} from '../field-parser-interface';
import { MetadataField, MetadataRawValue } from '../metadata-field';

/**
 * Duration is a number in seconds
 */
export type Duration = number;

/**
 * Parses duration format to a `Duration` (number of seconds with decimal)
 *
 * Can parse hh:mm:ss.ms, hh:mm:ss, mm:ss, mm:ss.ms, and s.ms formats
 */
export class DurationParser implements FieldParserInterface<Duration> {
  // use a shared static instance for performance instead of
  // instantiating a new instance for every use
  static shared = new DurationParser();

  parseValue(rawValue: FieldParserRawValue): Duration | undefined {
    if (typeof rawValue === 'number') return rawValue;
    if (typeof rawValue === 'boolean') return undefined;

    const componentArray: string[] = rawValue.split(':');
    const componentCount: number = componentArray.length;
    const seconds: number | undefined = componentArray
      .map((element: string, index: number) => {
        const componentValue: number = parseFloat(element);
        if (Number.isNaN(componentValue)) return 0;
        const exponent: number = componentCount - 1 - index;
        const multiplier: number = 60 ** exponent;
        return componentValue * Math.floor(multiplier);
      })
      .reduce((a, b) => a + b, 0);

    return seconds;
  }
}

/**
 * The DurationField parses different duration formats
 * and returns a `Duration`, which is a number in seconds
 * with decimals.
 *
 * @export
 * @class DurationField
 * @extends {MetadataField<Duration, DurationParser>}
 */
export class DurationField extends MetadataField<Duration, DurationParser> {
  constructor(rawValue: MetadataRawValue) {
    super(DurationParser.shared, rawValue);
  }
}
