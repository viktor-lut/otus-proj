Feature('home work 2-2');

Scenario('add issue from out text', async (I) => {

  I.amOnPage('https://github.com/minimaxir/big-list-of-naughty-strings/blob/master/blns.txt');
  let currtxt = await I.grabTextFrom('tbody');
  I.amOnPage('/examples/emberjs/');
  I.fillField('#new-todo', currtxt);
  I.pressKey('Enter');
  I.see(currtxt);
})


// Scenario('add issue', (I) => {
//
//   I.amOnPage('https://github.com/minimaxir/big-list-of-naughty-strings/blob/master/blns.txt');
//   const text = new DataTable(['rowtext']);
//   let currtxt = I.grabTextFrom('tbody');
//   text.add([currtxt]);
//
//   Data(text).Scenario('add issue from out text', (I, current) => {
//     const {rowtext} = current;
//     I.amOnPage('/examples/emberjs/');
//     I.fillField('#new-todo', rowtext);
//     I.pressKey('Enter');
//     I.see(txt, 'label');
//   })
// })