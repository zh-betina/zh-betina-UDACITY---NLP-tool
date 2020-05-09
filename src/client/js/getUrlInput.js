import { postUrl } from './postUrl.js';
import { urlAlert } from './urlAlert.js';


function getUrlInput(e){
  const urlInput = document.getElementById('url-input').value;
  const alertDiv = document.getElementById("alert-div");
  if(alertDiv !== null){
    alertDiv.remove();
  };
  
  if(urlInput.startsWith("https://") || urlInput.startsWith("www.")){
    if(alertDiv !== null){
      alertDiv.remove();
    };
    postUrl('http://localhost:8081/sendUrl', {"urlText": urlInput});

  } else {
    urlAlert(urlInput);
  }
};

export { getUrlInput };
