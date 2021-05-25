import {
  PageProgression,
  PageProgressionParser,
} from '@internetarchive/field-parsers';
import { MetadataField, MetadataRawValue } from '../metadata-field';

export class PageProgressionField extends MetadataField<
  PageProgression,
  PageProgressionParser
> {
  constructor(rawValue: MetadataRawValue) {
    super(PageProgressionParser.shared, rawValue);
  }
}
