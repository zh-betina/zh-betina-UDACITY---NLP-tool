import { sortData } from './sortData.js';

const postReview = async (url = "http://localhost:8081/sendReview", data = {})=>{
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
    sortData(jsonReview);
    return;
  }catch(error){
    console.log('While POSTing review to the server, a following error occured:', error);
  };
};

export { postReview };
