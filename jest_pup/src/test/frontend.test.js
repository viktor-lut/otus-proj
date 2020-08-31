const timeout = 10000;

// const puppeteer = require('puppeteer')
// let browser
// let page
//
// beforeAll(async () => {
//   browser = await puppeteer.launch()
//   page = await browser.newPage()
// })


  describe("Test title and header of the homepage", () => {

    // const page =  browser.newPage();

    beforeEach(async () => {
      // const page = await browser.newPage();
      // await page.goto(URL + '/examples/emberjs/', {waitUntil: "domcontentloaded"});
      // page.waitFor(2000);
    });

    test("1. Title of the page", async () => {
      // const page = await browser.newPage();
      await page.goto(URL + '/examples/emberjs/', {waitUntil: "domcontentloaded"});
      // await page.waitFor(3000);
      const title = await page.title();
      expect(title).toBe("Ember TodoMVC");
    }, timeout);

    test("2. Header of the page", async () => {
      const h1Handle = await page.$("h1");
      const html = await page.evaluate(h1Handle => h1Handle.innerHTML, h1Handle);
      expect(html).toBe("todos");
    }, timeout);

    test("3. Input block is visible", async () => {
      // expect((await page.$('#header')) !== null).toEqual(true);
      const isNotHidden = await page.$('#header');
      let inh = await page.evaluate(el => el.style.display !== 'none', isNotHidden);
      expect(inh).toEqual(true);
    }, timeout);

    test("4. Text of first row in the placeholder", async () => {
      let plch = await page.$('#info > p:nth-child(1)');
      let html = await page.evaluate(el => el.textContent, plch);
      //  const html = await page.$eval('#info > p:nth-child(1)', e => e.innerHTML);
      expect(html).toBe('Double-click to edit a todo');
    }, timeout);

    test("5. Add one item", async () => {
      const taskInputField = await page.$('#new-todo');
      const taskToAdd = "New Task";
      await taskInputField.click();
      await taskInputField.type(taskToAdd);
      await page.keyboard.press('Enter');
      const lists = await page.$('label');
      let toDo;
      toDo = await page.evaluate(el => el.textContent, lists);
      expect(toDo).toBe(taskToAdd);
    }, timeout);

    test("6. Delete item", async () => {
      await page.waitFor(1000);
      // const taskInputField = await page.$('#new-todo');
      // const taskToAdd = "New Task";
      // await taskInputField.click();
      // await taskInputField.type(taskToAdd);
      // await page.keyboard.press('Enter');

      const destr = await page.$('label');
      let linkPos = await page.evaluate((destr) => {
        const {top, left} = destr.getBoundingClientRect();
        return {top, left};
      }, destr);

      await page.waitFor(1000);
      let lp = linkPos.left;
      let xlnk = await page.$('.destroy');
      await page.mouse.move(lp, linkPos.top);
      await page.waitFor(1000);
      // await page.mouse.click(lp, linkPos.top);
      await xlnk.click();
      await page.waitFor(1000);
      // let inh = await page.evaluate(el => el.style.display !== 'none', destr);
      // console.log('=========== ' + await page.$('label'));
      expect((await page.$('label')) === null).toEqual(true);
    }, timeout);


  });
