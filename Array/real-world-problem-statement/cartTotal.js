/* You have an array of item prices in a shopping cart. Return the total bill amount. */

const prices = [120, 50, 30, 200];

function cartTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(cartTotal(prices));
