import { sortData } from '../js/sortData.js';

test('The for loop works correctly', () => {

  let positiveArray = [];
  let negativeArray = [];
  let neutralArray = [];

  let jsonReview = [{
    'aspect': 'food',
    'polarity': 'negative'
  },
  {
    'aspect': 'menu',
    'polarity': 'neutral'
  },
  {
    'aspect': 'staff',
    'polarity': 'positive'
  }];

  for(let i = 0; i <= jsonReview.length-1; i++){

    if(jsonReview[i].polarity == "positive"){
      positiveArray.push(jsonReview[i].aspect)
    } else if(jsonReview[i].polarity == "negative"){
      negativeArray.push(jsonReview[i].aspect)
    } else {
      neutralArray.push(jsonReview[i].aspect);
      };
    };

    expect(positiveArray).toContain('staff');
    expect(negativeArray).toContain('food');
    expect(neutralArray).toContain('menu');

});
