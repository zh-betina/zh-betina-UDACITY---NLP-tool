import { updateUI } from '../js/updateUI.js';

test('The right elements were selected and UI updated accordingly', ()=>{

  document.body.innerHTML =  `<div id="results"></div>`;

  const jsonReview = {
    "apiData": {
      "polarity": "negative",
      "subjectivity": "unknown",
      "polarity_confidence": "10",
      "subjectivity_confidence": "8"
    }
  };

  document.getElementById('results').innerHTML = `<p id="polarity">Polarity: ${jsonReview.apiData.polarity}</p>
  <p id="subjectivity">Subjectivity: ${jsonReview.apiData.subjectivity}</p>
  <p id="pol-confidence">Polarity confidence: ${jsonReview.apiData.polarity_confidence}</p>
  <p id="sub-confidence">Subjectivity confidence: ${jsonReview.apiData.subjectivity_confidence}</p>`;

  const polarity = document.getElementById('polarity').innerHTML;
  const subject = document.getElementById('subjectivity').innerHTML;
  const polConfid = document.getElementById('pol-confidence').innerHTML;
  const subConfid = document.getElementById('sub-confidence').innerHTML;

  expect(polarity).toMatch(/Polarity: negative/);
  expect(subject).toMatch(/Subjectivity: unknown/);
  expect(polConfid).toMatch(/Polarity confidence: 10/);
  expect(subConfid).toMatch(/Subjectivity confidence: 8/);
})
