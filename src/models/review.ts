/* eslint-disable @typescript-eslint/no-explicit-any */
export class Review {
  reviewbody?: string;

  reviewtitle?: string;

  reviewer: string;

  reviewdate: Date;

  createdate: Date;

  stars: number;

  constructor(json: any) {
    this.reviewbody = json.reviewbody;
    this.reviewtitle = json.reviewtitle;
    this.reviewer = json.reviewer;
    this.reviewdate = new Date(json.reviewdate);
    this.createdate = new Date(json.createdate);
    this.stars = parseFloat(json.stars);
  }
}
