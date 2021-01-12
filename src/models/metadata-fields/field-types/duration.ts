import { FieldParserInterface } from '../field-parser-interface';
import { MetadataField } from '../metadata-field';

/**
 * Duration is a number in seconds
 */
export type Duration = number;

/**
 * Parsed duration format to a Duration (number of seconds with decimal)
 *
 * Can parse hh:mm:ss.ms, hh:mm:ss, mm:ss, mmLss.ms, and s.ms formats
 */
export class DurationParser implements FieldParserInterface<Duration> {
  // use a shared static instance for performance instead of
  // instantiating a new instance for every use
  static shared = new DurationParser();

  parseValue(rawValue: string): Duration {
    const componentArray: string[] = rawValue.split(':');
    const componentCount: number = componentArray.length;
    const seconds: number = componentArray
      .map((element: string, index: number) => {
        const componentValue: number = parseFloat(element);
        const exponent: number = componentCount - 1 - index;
        const multiplier: number = 60 ** exponent;
        return componentValue * Math.floor(multiplier);
      })
      .reduce((a, b) => a + b, 0);

    return seconds;
  }
}

export class DurationField extends MetadataField<Duration, DurationParser> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(rawValue: any) {
    super(DurationParser.shared, rawValue);
  }
}
