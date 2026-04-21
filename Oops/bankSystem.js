/* Design a bank account system where users can deposit, withdraw, and check balance. 
Prevent withdrawing more than the available balance. */

class BankAccount {
  #balance;
  constructor(name, initialbalance) {
    this.name = name;
    this.#balance = initialbalance;
  }
  deposit(amount) {
    console.log(`Deposited: ${amount}`);
    this.#balance += amount;
    console.log(`Balance: ${this.#balance}`);
  }
  withdraw(amount) {
    console.log(`Withdrawn: ${amount}`);
    if (amount > this.#balance) {
      console.log(`Insufficient balance`);
      return;
    }
    this.#balance -= amount;
    console.log(`Balance: ${this.#balance}`);
  }
  getBalance() {
    console.log(`Balance: ${this.#balance}`);
  }
}

const acc = new BankAccount("Rahul", 5000);
acc.deposit(2000);
acc.withdraw(3000);
acc.withdraw(5000);
acc.getBalance();
