/*Write a function that returns the largest number in an array.*/

function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([1, 5, 9, 3, 2]));
console.log(findMax([-10, -3, -5]));
