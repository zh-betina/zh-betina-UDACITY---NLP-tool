import { getUrlInput } from './getUrlInput.js';

test('element containing reviewText is not null',() => {
  document.body.innerHTML = `<input type="url"
            name="url-input"
            id="url-input"
            placeholder="https://example.com"
            pattern="https://.*"
            required></input>`;
  document.getElementById('url-input').value = "www.text.com";
  const getInput = document.getElementById('url-input').value;
  expect(getInput).not.toEqual("");
});
