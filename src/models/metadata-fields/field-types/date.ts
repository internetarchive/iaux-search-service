import { DateParser } from '@internetarchive/field-parsers';
import { MetadataField, MetadataRawValue } from '../metadata-field';

export class DateField extends MetadataField<Date, DateParser> {
  constructor(rawValue: MetadataRawValue) {
    super(DateParser.shared, rawValue);
  }
}
