import { makeReview } from '../../src/models/review-builder';
import { expect } from '@open-wc/testing';

describe('makeReview', () => {
  it('constructs a Review with all fields present', () => {
    const data = {
      reviewbody: 'Body text',
      reviewtitle: 'Title',
      reviewer: 'Author',
      reviewer_itemname: '@user',
      reviewdate: '2025-09-03 12:00:00',
      createdate: '2025-09-01 08:00:00',
      stars: '4',
      __href__: 'https://archive.org/review/123',
    };
    const review = makeReview(data);
    expect(review.body).to.equal('Body text');
    expect(review.title).to.equal('Title');
    expect(review.author).to.equal('Author');
    expect(review.authorItem).to.equal('@user');
    expect(review.updatedate.getTime()).to.equal(
      new Date('2025-09-03 12:00:00').getTime()
    );
    expect(review.createdate.getTime()).to.equal(
      new Date('2025-09-01 08:00:00').getTime()
    );
    expect(review.stars).to.equal(4);
    expect(review.__href__).to.equal('https://archive.org/review/123');
  });

  it('defaults missing fields to empty string, 0, or invalid date', () => {
    const data = {
      reviewbody: 'Body',
      reviewtitle: 'Title',
      stars: '',
    };
    const review = makeReview(data);
    expect(review.body).to.equal('Body');
    expect(review.title).to.equal('Title');
    expect(review.author).to.be.undefined;
    expect(review.authorItem).to.be.undefined;
    expect(review.updatedate).to.be.instanceOf(Date);
    expect(isNaN(review.updatedate.getTime())).to.be.true;
    expect(review.createdate).to.be.instanceOf(Date);
    expect(isNaN(review.createdate.getTime())).to.be.true;
    expect(review.stars).to.equal(0);
    expect(review.__href__).to.be.undefined;
  });

  it('handles invalid date and star values', () => {
    const data = {
      reviewbody: 'Body',
      reviewtitle: 'Title',
      reviewer: 'Author',
      reviewer_itemname: '@user',
      reviewdate: 'not-a-date',
      createdate: 'also-not-a-date',
      stars: 'not-a-number',
      __href__: '/review/1',
    };
    const review = makeReview(data);
    expect(isNaN(review.updatedate.getTime())).to.be.true;
    expect(isNaN(review.createdate.getTime())).to.be.true;
    expect(review.stars).to.equal(0);
  });
});
