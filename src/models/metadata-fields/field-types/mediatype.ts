import { MediaType, MediaTypeParser } from '@internetarchive/field-parsers';
import { MetadataField, MetadataRawValue, isMetadataRawValue } from '../metadata-field';

export class MediaTypeField extends MetadataField<MediaType, MediaTypeParser> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromRaw(rawValue: MetadataRawValue | Record<string, any>): MediaTypeField | null {
    if (isMetadataRawValue(rawValue)) {
      return new MediaTypeField(rawValue as MetadataRawValue);
    }
    return null;
  }

  constructor(rawValue: MetadataRawValue) {
    super(MediaTypeParser.shared, rawValue);
  }
}
