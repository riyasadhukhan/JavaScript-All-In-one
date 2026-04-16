/* Generate summary stats from transactions. */

const transactions = [
  { amount: 100, type: "credit" },
  { amount: 50, type: "debit" },
  { amount: 200, type: "credit" },
];

function getSummary(transactions) {
  let obj = {};
  obj.totalCredit = 0;
  obj.totalDebit = 0;
  for (let transaction of transactions) {
    if (transaction.type === "credit") {
      obj.totalCredit += transaction.amount;
    }
    if (transaction.type === "debit") {
      obj.totalDebit += transaction.amount;
    }
  }
  obj.balance = obj.totalCredit - obj.totalDebit;
  return obj;
}

console.log(getSummary(transactions));
