/* Split Batches of Orders by 2 */

const orders = [101, 102, 103, 104, 105];

function splitOrders(arr) {
  let newArr = [];
  let k = 0;
  for (let i = 0; i < arr.length; i += 2) {
    newArr[k] = arr.slice(i, i + 2);
    k++;
  }
  return newArr;
}

console.log(splitOrders(orders));
