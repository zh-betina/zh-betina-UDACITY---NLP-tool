import { urlAlert } from './urlAlert.js';

test("if the new element is correctly prepended", () => {

  document.body.innerHTML = `<div id="main">
                              <input></input>
                            </div>`;

  let ifResult;
  const newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'alert-div');
  document.getElementById('main').prepend(newDiv);

  const childList = document.getElementById('main').childNodes[0].attributes[0].nodeValue;
  expect(childList).toMatch(/alert-div/);
});
