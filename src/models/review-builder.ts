import { Review } from '../responses/page-elements';

export function makeReview(data: Record<string, string>): Review {
  return {
    body: data.reviewbody,
    title: data.reviewtitle,
    author: data.reviewer,
    authorItem: data.reviewer_itemname,
    updatedate: new Date(data.reviewdate),
    createdate: new Date(data.createdate),
    stars: Number(data.stars) || 0,
    __href__: data.__href__,
  };
}
