/* 0 represents out-of-stock items. Remove them from the list. */

const stock = [10, 0, 5, 0, 8];

function removeZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(removeZero(stock));
