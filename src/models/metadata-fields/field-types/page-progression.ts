import {
  PageProgression,
  PageProgressionParser,
} from '@internetarchive/field-parsers';
import { MetadataField, MetadataRawValue, isMetadataRawValue } from '../metadata-field';

export class PageProgressionField extends MetadataField<
  PageProgression,
  PageProgressionParser
> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromRaw(rawValue: MetadataRawValue | Record<string, any>): PageProgressionField | null {
    if (isMetadataRawValue(rawValue)) {
      return new PageProgressionField(rawValue as MetadataRawValue);
    }
    return null;
  }

  constructor(rawValue: MetadataRawValue) {
    super(PageProgressionParser.shared, rawValue);
  }
}
