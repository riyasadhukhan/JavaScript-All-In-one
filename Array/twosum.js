/*Return indices of two numbers that add up to target.*/

function twoSum(arr, target) {
  // your code here
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        newArray.push(i, j);
      }
    }
  }
  return newArray;
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
