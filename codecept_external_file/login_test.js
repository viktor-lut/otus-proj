const fs = require('fs');

Feature('login');

const textFile = fs.readFileSync(__dirname + '/login_and_password.txt').toString();
const credentials = textFile.split('\r\n');

const invalidCredentials = new DataTable(['username', 'password']);

credentials.forEach(line => {
    if (!line) return;
    const [login, password] = line.split(':');
    invalidCredentials.add([login, password]);
})

Data(invalidCredentials).Scenario('invalid login', (I, current) => {
    const {username, password} = current;
    I.amOnPage('/login');
    I.fillField('usr', username);
    I.fillField('pwd', password);
    I.click('Login');
    I.see('ACCESS DENIED!');
})
