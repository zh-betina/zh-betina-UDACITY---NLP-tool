import { postReview } from './postReview.js';
import { sortData } from './sortData.js';

function getReviewInput(e){
  const reviewText = document.getElementById('review-input').value;
  postReview('http://localhost:8081/sendReview', {"review": reviewText});
};

export { getReviewInput };
