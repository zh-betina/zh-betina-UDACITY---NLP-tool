import { postReview } from './postReview.js';
import { sortData } from './sortData.js';

function getReviewInput(e){
  const reviewText = document.getElementById('review-input').value;
  postReview('/sendReview', {"review": reviewText});
};

export { getReviewInput };
