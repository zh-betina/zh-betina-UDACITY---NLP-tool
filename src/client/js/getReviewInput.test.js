import { getReviewInput } from './getReviewInput.js';

test('element containing reviewText is not null',() => {
  document.body.innerHTML = `<textarea type="text"
            name="review-input"
            id="review-input"
            placeholder="Paste the review for analysis right here"></textarea>`;
  const reviewText = document.getElementById('review-input').value;
  expect(reviewText).not.toBeNull();
});
