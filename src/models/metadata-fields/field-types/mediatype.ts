import {
  FieldParserInterface,
  FieldParserRawValue,
} from '../field-parser-interface';
import { MetadataField } from '../metadata-field';

export enum MediaType {
  Audio = 'audio',
  Collection = 'collection',
  Data = 'data',
  Etree = 'etree',
  Image = 'image',
  Movies = 'movies',
  Software = 'software',
  Texts = 'texts',
  Web = 'web',
}

export class MediaTypeParser implements FieldParserInterface<MediaType> {
  // use a shared static instance for performance instead of
  // instantiating a new instance for every use
  static shared = new MediaTypeParser();

  parseValue(rawValue: FieldParserRawValue): MediaType | undefined {
    switch (rawValue) {
      case 'audio':
        return MediaType.Audio;
      case 'collection':
        return MediaType.Collection;
      case 'data':
        return MediaType.Data;
      case 'etree':
        return MediaType.Etree;
      case 'image':
        return MediaType.Image;
      case 'movies':
        return MediaType.Movies;
      case 'software':
        return MediaType.Software;
      case 'texts':
        return MediaType.Texts;
      case 'web':
        return MediaType.Web;
      default:
        return undefined;
    }
  }
}

export class MediaTypeField extends MetadataField<MediaType, MediaTypeParser> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(rawValue: any) {
    super(MediaTypeParser.shared, rawValue);
  }
}
