Feature('page text');

Scenario('test example.com', (I) => {
    I.amOnPage('http://example.com/');
    I.see('Example Domain');
});
