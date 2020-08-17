const fs = require('fs');
Feature('home work 2-2');

// Scenario('add issue from out text', async (I) => {
//
//   I.amOnPage('https://github.com/minimaxir/big-list-of-naughty-strings/blob/master/blns.txt');
//   let currtxt = await I.grabTextFrom('tbody');
//   I.amOnPage('/examples/emberjs/');
//   I.fillField('#new-todo', currtxt);
//   I.pressKey('Enter');
//   I.see(currtxt);
// })

Feature('issue');

const textFile = fs.readFileSync(__dirname + '/words.txt').toString();
const credentials = textFile.split('\r\n');

// const text = new DataTable(['rowtext']);
const text = [];
let count = 0;

credentials.forEach(line => {
  if (!line) return;
  // const [currtxt] = line.split(':');
  // const [currtxt] = line;
  // text.add([currtxt]);
  text.push(line);
  count++;
})

;

Data(text).Scenario('Add issue from out text', async (I, current) => {

    I.amOnPage('/examples/emberjs/');
    I.fillField('#new-todo', current);

    I.pressKey('Enter');

    let txt = '22' + ' items left';
    I.see(txt, '#todo-count');

})