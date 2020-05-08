document.getElementById('button').addEventListener('click', getReviewInput);
let reviewText = document.getElementById('review-input').value;

function getReviewInput(e){
  reviewText = document.getElementById('review-input').value;
  console.log(reviewText);
  postReview('/sendReview', {"review": reviewText})
  //.then(()=>{

  //});
};


const postReview = async (url = "/sendReview", data = {})=>{
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',

  },
    body: JSON.stringify(data),
  });
  try{
    const jsonReview = await response.json();
    console.log(jsonReview);
    return jsonReview;
  }catch(error){
    console.log('While POSTing review to the server, a following error occured:', error);
  };
};
