import { updateUI } from '../js/updateUI.js';

test('The right elements were selected and UI updated accordingly', ()=>{

  const positiveArray = ['food', 'menu'];
  const negativeArray = ['value', 'staff'];
  const neutralArray = ['drinks'];

  document.body.innerHTML = `<div id="positive">
  Positive aspects of yours business:
  </div>
  <div id="negative">
  Aspects requiring improvement:
  </div>
  <div id="neutral">
  Not great, not terrible:
  </div>`;

  const positiveUI = document.getElementById('positive').innerHTML = `Positive aspects of yours business: ${positiveArray.join(` | `)}.`;
  const negativeUI = document.getElementById('negative').innerHTML = `Aspects requiring improvement: ${negativeArray.join(` | `)}.`;
  const neutralUI = document.getElementById('neutral').innerHTML = `Not great, not terrible: ${neutralArray.join(` | `)}.`;

  expect(positiveUI).toMatch(/food | menu/);
  expect(negativeUI).toMatch(/value | staff/);
  expect(neutralUI).toMatch(/drinks/);
})
