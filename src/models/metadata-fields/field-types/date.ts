import { FieldParserInterface } from '../field-parser-interface';
import { MetadataField } from '../metadata-field';

export class DateParser implements FieldParserInterface<Date> {
  // use a shared static instance for performance instead of
  // instantiating a new instance for every use
  static shared = new DateParser();

  parseValue(rawValue: string): Date | undefined {
    // try different date parsing
    return this.parseJSDate(rawValue) || this.parseBracketDate(rawValue);
  }

  // handles "[yyyy]" format
  private parseBracketDate(rawValue: string): Date | undefined {
    const yearMatch = rawValue.match(/\[([0-9]{4})\]/);
    if (!yearMatch || yearMatch.length < 2) {
      return undefined;
    }
    return this.parseJSDate(yearMatch[1]);
  }

  private parseJSDate(rawValue: string): Date | undefined {
    // fix for Safari not supporting `yyyy-mm-dd HH:MM:SS` format, insert a `T` into the space
    if (
      rawValue.match(
        /^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/
      )
    ) {
      rawValue = rawValue.replace(' ', 'T');
    }

    const parsed = Date.parse(rawValue);
    if (Number.isNaN(parsed)) {
      return undefined;
    }
    let date = new Date(rawValue);
    // the `Date(string)` constructor parses some strings as GMT and some in the local timezone
    // this attempts to detect cases that get parsed as GMT and adjusts accordingly
    const dateWithTimeZone =
      rawValue.indexOf('Z') > -1 || // ISO8601 with GMT timezone
      rawValue.indexOf('+') > -1 || // ISO8601 with positive timezone offset
      rawValue.match(/^[0-9]{4}$/) || // just the year, ie `2020`
      rawValue.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/) || // YYYY-MM-DD format
      rawValue.match(/^.*?-[0-9]{2}:[0-9]{2}$/) || // `YYYY-MM-DDTHH:mm:ss-00:00` format
      rawValue.match(/^.*?-[0-9]{4}$/); // `YYYY-MM-DDTHH:mm:ss-0000` format
    if (dateWithTimeZone) {
      date = new Date(date.getTime() + date.getTimezoneOffset() * 1000 * 60);
    }
    return date;
  }
}

export class DateField extends MetadataField<Date, DateParser> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(rawValue: any) {
    super(DateParser.shared, rawValue);
  }
}
