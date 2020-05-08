import { getReviewInput } from './getReviewInput.js';
import { updateUI } from './updateUI.js';

function sortData(jsonReview){

  let positiveArray = [];
  let negativeArray = [];
  let neutralArray = [];
  let aspects = jsonReview.aspects;
  let length = aspects.length;

for(let i = 0; i <= length-1; i++){

  if(aspects[i].polarity == "positive"){
    positiveArray.push(aspects[i].aspect)
  } else if(aspects[i].polarity == "negative"){
    negativeArray.push(aspects[i].aspect)
  } else {
    neutralArray.push(aspects[i].aspect);
    };
  };
  updateUI(positiveArray, negativeArray, neutralArray);
};

export { sortData }
