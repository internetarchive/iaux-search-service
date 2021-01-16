import { DateParser } from './metadata-fields/field-types/date';

/* eslint-disable @typescript-eslint/no-explicit-any */
export class Review {
  reviewbody?: string;

  reviewtitle?: string;

  reviewer?: string;

  reviewdate?: Date;

  createdate?: Date;

  stars?: number;

  constructor(json: any) {
    this.reviewbody = json.reviewbody;
    this.reviewtitle = json.reviewtitle;
    this.reviewer = json.reviewer;
    this.reviewdate = DateParser.shared.parseValue(json.reviewdate);
    this.createdate = DateParser.shared.parseValue(json.createdate);
    this.stars = json.stars ? parseFloat(json.stars) : undefined;
  }
}
