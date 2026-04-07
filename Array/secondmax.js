/*Return the second largest number in the array.*/

function secondLargest(arr) {
  let max = arr[0];
  let secondmax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondmax = max;
      max = arr[i];
    } else if (arr[i] > secondmax && arr[i] !== max) {
      secondmax = arr[i];
    }
  }
  return secondmax;
}

console.log(secondLargest([10, 5, 30, 8, 20])); // 20
console.log(secondLargest([1, 4, 1, 2])); // 2
console.log(secondLargest([1, 1, 2])); // 1
