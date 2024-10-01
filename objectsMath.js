// Task 1: function for the Account object

function Account(accountNumber, owner, balance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
}


// i used my other homework deposit and withdraw from previous day but took out the arrow functions and added this.(per balance which has been defined) for this formula and put it in act.prototype.

 Account.prototype.deposit = function(amount) {
    if (amount <= 0) {
      console.log("No amount was deposited.");
      return this.balance;
    }
    this.balance += amount;
    console.log(`Deposit complete! Your updated balance is: $${this.balance}`);
    return this.balance;
  };

  
  Account.prototype.withdraw = function(amount) {
    if (amount <= 0) {
      console.log("You withdrawed nothing..");
      return this.balance;
    } else if (amount > this.balance) {
      console.log("Insufficient funds in account.");
      return this.balance;
    }
    this.balance -= amount;
    console.log(`Withdrawal complete! Your new updated balance is $${this.balance}`);
    return this.balance;
  };

 
//  calculating compound interests formula

Account.prototype.compoundInterest = function(years, interestRate){
    let principal = this.balance;
    let rate = interestRate / 100;
    let one = 1;

    let amount = principal * Math.pow((1 + rate / one), one * years);

    amount = Math.ceil(amount);
    
    console.log(`${years} years at ${interestRate}% interest.`)
    console.log(`Total after 2 year: $${amount}.`)
    return amount;
}
 
 
 
// simulation:
let benAccount = new Account(33556622, 'Benjamin Button', 1300);


benAccount.deposit(700);

benAccount.withdraw(500);

benAccount.compoundInterest(2, 7)