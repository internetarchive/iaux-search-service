/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { DurationField } from './metadata-fields/field-types/duration';
import { NumberField } from './metadata-fields/field-types/number';

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

  size?: NumberField;

  title?: string;

  length?: DurationField;

  height?: NumberField;

  width?: NumberField;

  track?: NumberField;

  external_identifier?: string;

  creator?: string;

  album?: string;

  constructor(json: any) {
    this.name = json.name;
    this.source = json.source;
    this.btih = json.btih;
    this.md5 = json.md5;
    this.format = json.format;
    this.mtime = json.mtime;
    this.crc32 = json.crc32;
    this.sha1 = json.sha1;
    this.original = json.original;
    this.size = json.size ? new NumberField(json.size) : undefined;
    this.title = json.title;
    this.length = json.length ? new DurationField(json.length) : undefined;
    this.height = json.height ? new NumberField(json.height) : undefined;
    this.width = json.width ? new NumberField(json.width) : undefined;
    this.track = json.track ? new NumberField(json.track) : undefined;
    this.external_identifier = json['external-identifier'];
    this.creator = json.creator;
    this.album = json.album;
  }
}
