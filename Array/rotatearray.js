/*Rotate array to the right by k steps.*/

function rotateArray(arr, k) {
  k = k % arr.length;
  while (k > 0) {
    arr.unshift(arr.pop());
    k--;
  }
  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
// [4, 5, 1, 2, 3]

console.log(rotateArray([1, 2, 3], 2));
// [2, 1]
