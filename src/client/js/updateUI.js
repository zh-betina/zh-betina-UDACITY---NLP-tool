import { postUrl } from './postUrl.js';

function updateUI(jsonReview){

  document.getElementById('results').innerHTML = `<p>Polarity: ${jsonReview.apiData.polarity}</p>
  <p>Subjectivity: ${jsonReview.apiData.subjectivity}</p>
  <p>Polarity confidence: ${jsonReview.apiData.polarity_confidence}</p>
  <p>Subjectivity confidence: ${jsonReview.apiData.subjectivity_confidence}</p>`;

};

export { updateUI }
