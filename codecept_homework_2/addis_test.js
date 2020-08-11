Feature('home work 2-1');

Scenario('add issue', (I) => {
  I.amOnPage('/examples/emberjs/');
  let txt = 'задача с произвольным текстом';
  I.fillField('#new-todo', txt);
  I.pressKey('Enter');
  I.see(txt, 'label');
});
