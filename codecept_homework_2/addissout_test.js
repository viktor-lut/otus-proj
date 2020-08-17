const fs = require('fs');
Feature('home work 2-2');

Feature('issue');

const textFile = fs.readFileSync(__dirname + '/words.txt').toString();
const credentials = textFile.split('\r\n');

const text = [];
let count = 0;

credentials.forEach(line => {
  if (!line) return;
  text.push(line);
})

;

Data(text).Scenario('Add issue from out text', async (I, current) => {

    I.amOnPage('/examples/emberjs/');
    I.fillField('#new-todo', current);

    I.pressKey('Enter');

    let txt = '22' + ' items left';
    I.see(txt, '#todo-count');

})