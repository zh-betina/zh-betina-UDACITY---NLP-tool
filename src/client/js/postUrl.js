import { updateUI } from './updateUI.js';

const postUrl = async (url = "http://localhost:8081/sendUrl", data = {})=>{
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
    updateUI(jsonReview);
    return;
  }catch(error){
    console.log('While POSTing review to the server, a following error occured:', error);
  };
};

export { postUrl };
