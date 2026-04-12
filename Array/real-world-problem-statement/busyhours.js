/* You have hourly customer counts in a store. Return hours where customers were more than 50. */

const customers = [20, 45, 60, 80, 30, 55];

function busyHours(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 50) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(busyHours(customers));
