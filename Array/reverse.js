/*Reverse the array manually.*/

function reverseArray(arr) {
  let newArr = [];
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr[j] = arr[i];
    j++;
  }
  return newArr;
}

console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
console.log(reverseArray([])); // []
