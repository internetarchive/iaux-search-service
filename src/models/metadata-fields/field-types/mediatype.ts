import { MediaType, MediaTypeParser } from '@internetarchive/field-parsers';
import { MetadataField, MetadataRawValue } from '../metadata-field';

export class MediaTypeField extends MetadataField<MediaType, MediaTypeParser> {
  constructor(rawValue: MetadataRawValue) {
    super(MediaTypeParser.shared, rawValue);
  }
}
