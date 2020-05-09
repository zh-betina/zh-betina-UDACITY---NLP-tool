import { getUrlInput } from './getUrlInput.js';

function urlAlert(urlInput){

  const newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'alert-div');
  document.getElementById('main').prepend(newDiv);
  document.getElementById('alert-div').innerHTML = `<p class="alert-text">Your input: <i>${urlInput}</i> is incorrect.</p>
  <p class="alert-text">Please, use the correct URL format: <i><u>https://example.com</u></i> or <i><u>www.example.com</u></i>.</p>`

};

export { urlAlert }
