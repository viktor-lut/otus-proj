Feature('login');

const invalidCredentials = new DataTable(['username', 'password']);
invalidCredentials.add(['user', 'password']);
invalidCredentials.add(['admin', '1234']);

Data(invalidCredentials).Scenario('invalid login', (I, current) => {
    const {username, password} = current;
    I.amOnPage('/login');
    I.fillField('usr', username);
    I.fillField('pwd', password);
    I.click('Login');
    I.see('ACCESS DENIED!');
})
