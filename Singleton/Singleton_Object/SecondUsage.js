const Till2 = require('./CashRegister');
const AddCredit = (amount = 30) => {
    Till2.credit(amount);
}
const AddDebit = (amount = 30) => {
    Till2.debit(amount);
}

module.exports = {AddCredit, AddDebit}