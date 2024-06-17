const App = require('./App');

App.createUser('helio@email.com', 'Helio Junior');
App.createUser('jose@email.com', 'Jose Campos');
App.createUser('juliana@email.com', 'Juliana Conde');

App.deposit('helio@email.com', 100);

App.transfer('helio@email.com', 'jose@email.com', 20);

App.changeLoanFee(10);
App.takeLoan('juliana@email.com', 2000, 24);

console.log(App.findUser('helio@email.com'));
console.log(App.findUser('helio@email.com').account);

console.log(App.findUser('jose@email.com'));
console.log(App.findUser('jose@email.com').account);

console.log(App.findUser('juliana@email.com'));
console.log(App.findUser('juliana@email.com').account);
console.table(App.findUser('juliana@email.com').account.loans[0].installments);
