const fetch = require('node-fetch');
import { postReview } from './postReview.js';

describe('Test postReview fetch function', () => {
  test('if it can fetch a response', async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await res.json();
      expect(response).not.toBeNull();
      expect(response).not.toBeUndefined();
    })
});
