import {
  FieldParserInterface,
  FieldParserRawValue,
} from '@internetarchive/field-parsers';

export type MetadataRawValue = string | string[] | number | boolean;

/**
 * The MetadataField is responsible for three things:
 * 1. Take in some raw data (strings, arrays, numbers, etc)
 * 2. Normalize the input to an array of the input,
 *    ie. [string, string], [number, number], [Date, Date], etc
 * 3. Cast the values to their expected `Type`
 *
 * This class gets instiated with a `Type` and a parser of that type. For instance, the
 * `DateField` is a subclass of `MetadataField` with a `Type` of `Date` and a `DateParser`.
 *
 * When using a `DateField`, you can pass it a string date and it will cast it to a javascript Date,
 * ie:
 *
 * ```
 * const dateField = new DateField('2020-02-13')
 * dateField.value = Date(2020-02-13) // native javascript Date object
 * dateField.values = [Date(2020-02-13)] // the normalized array of values
 * dateField.rawValue = '2020-02-13' // the raw string that was passed in
 * ```
 *
 * @class MetadataField
 * @template Type The type of metadata this is (string, number, Date, etc)
 * @template FieldParserInterfaceType The parser for that type (StringParser, NumberParser, etc)
 */
export class MetadataField<
  Type,
  FieldParserInterfaceType extends FieldParserInterface<Type>
> {
  /**
   * The raw value received from the API response
   *
   * @type {MetadataRawValue}
   * @memberof MetadataField
   */
  rawValue?: MetadataRawValue;

  /**
   * The array of all values for the field.
   *
   * Many fields only contain a single value and
   * can be accessed via the `.value` getter
   *
   * @type {Type[]}
   * @memberof MetadataField
   */
  values: Type[] = [];

  /**
   * The first value if there are multiple or the only value if there is one
   *
   * @readonly
   * @type {(Type | undefined)}
   * @memberof MetadataField
   */
  get value(): Type | undefined {
    return this.values.length > 0 ? this.values[0] : undefined;
  }

  constructor(parser: FieldParserInterfaceType, rawValue?: MetadataRawValue) {
    this.parser = parser;
    this.rawValue = rawValue;

    this.processRawValue();
  }

  private parser: FieldParserInterfaceType;

  private processRawValue(): void {
    if (this.rawValue === undefined) {
      return;
    }

    if (Array.isArray(this.rawValue)) {
      this.rawValue.forEach(value => {
        this.parseAndPersistValue(value);
      });
    } else {
      this.parseAndPersistValue(this.rawValue);
    }
  }

  private parseAndPersistValue(value: FieldParserRawValue): void {
    const parsedValue = this.parser.parseValue(value);
    if (parsedValue !== undefined) {
      this.values.push(parsedValue);
    }
  }
}
