/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateParser } from '@internetarchive/field-parsers';
import { MetadataEntry } from './metadata-entry';
import { MetadataRawValue } from './metadata-fields/metadata-field';

export class Review extends MetadataEntry {
  reviewbody?: string;
  reviewtitle?: string;
  reviewer?: string;
  reviewdate?: Date;
  createdate?: Date;
  stars?: number;

  static fromRaw(rawValue: MetadataRawValue | Record<string, any>): Review | null {
    if (rawValue instanceof Object) {
      return new Review(rawValue);
    }
    return null;
  }

  constructor(json: Record<string, any>) {
    super();
    this.reviewbody = json.reviewbody;
    this.reviewtitle = json.reviewtitle;
    this.reviewer = json.reviewer;
    this.reviewdate = DateParser.shared.parseValue(json.reviewdate);
    this.createdate = DateParser.shared.parseValue(json.createdate);
    this.stars = json.stars ? parseFloat(json.stars) : undefined;
  }
}
