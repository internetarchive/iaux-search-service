import {
  Byte,
  ByteParser,
  Duration,
  DurationParser,
  NumberParser,
} from '@internetarchive/field-parsers';

/**
 * This represents an Internet Archive File
 *
 * @export
 * @class File
 */
export class File {
  name: string;

  source: string;

  btih: string;

  md5: string;

  format: string;

  mtime: string;

  crc32: string;

  sha1: string;

  original?: string;

  size?: Byte;

  title?: string;

  length?: Duration;

  height?: number;

  width?: number;

  track?: number;

  external_identifier?: string;

  creator?: string;

  album?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(json: Record<string, any>) {
    this.name = json.name;
    this.source = json.source;
    this.btih = json.btih;
    this.md5 = json.md5;
    this.format = json.format;
    this.mtime = json.mtime;
    this.crc32 = json.crc32;
    this.sha1 = json.sha1;
    this.original = json.original;
    this.title = json.title;
    this.length = json.length
      ? DurationParser.shared.parseValue(json.length)
      : undefined;
    this.size = json.size ? ByteParser.shared.parseValue(json.size) : undefined;
    this.height = json.height
      ? NumberParser.shared.parseValue(json.height)
      : undefined;
    this.width = json.width
      ? NumberParser.shared.parseValue(json.width)
      : undefined;
    this.track = json.track
      ? NumberParser.shared.parseValue(json.track)
      : undefined;
    this.external_identifier = json['external-identifier'];
    this.creator = json.creator;
    this.album = json.album;
  }
}
