import { sortData } from './sortData.js';

function updateUI(positiveArray, negativeArray, neutralArray){

  document.getElementById('positive').innerHTML = `<span class="fas fa-star"></span>Positive aspects of yours business: ${positiveArray.join(`, `)}.`;
  document.getElementById('negative').innerHTML = `<span class="far fa-star"></span>Aspects requiring improvement: ${negativeArray.join(`, `)}.`;
  document.getElementById('neutral').innerHTML = `<span class="fas fa-star-half-alt"></span>Not great, not terrible: ${neutralArray.join(`, `)}.`;

};

export { updateUI }
