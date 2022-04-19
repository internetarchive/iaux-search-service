import {
  FieldParserInterface,
  NumberParser,
  StringParser,
} from '@internetarchive/field-parsers';
import { MetadataField, MetadataRawValue } from '../metadata-field';

/**
 * The ListField handles parsing of a list of values.
 *
 * Certain fields in the metadata, like `subject` typically have a
 * comma or semicolon-separated list of values. The `ListField`
 * parses the list values independently and aggregates them into
 * the main `.values` array.
 */
export class ListField<
  T,
  FieldParserInterfaceType extends FieldParserInterface<T>
  > extends MetadataField<T, FieldParserInterfaceType> {
  constructor(rawValue: MetadataRawValue, parser: FieldParserInterfaceType) {
    const stringifiedValue = String(rawValue);
    let results: string[] = [];
    // first try splitting by comma, then by semi-colon
    results = stringifiedValue.split(',');
    if (results.length === 1) results = stringifiedValue.split(';');
    const trimmed = results.map(s => s.trim());

    super(parser, trimmed);
  }
}

/**
 * The StringListField handles parsing of a list of strings.
 */
export class StringListField extends ListField<string, StringParser> {
  constructor(rawValue: MetadataRawValue) {
    super(rawValue, StringParser.shared);
  }
}

/**
 * The NumberListField handles parsing of a list of numbers.
 */
export class NumberListField extends ListField<number, NumberParser> {
  constructor(rawValue: MetadataRawValue) {
    super(rawValue, NumberParser.shared);
  }
}
