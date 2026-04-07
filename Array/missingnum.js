/*One number is missing from range [0, n].find that number*/

function findMissing(arr) {
  let expectedSum = (arr.length * (arr.length + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  return expectedSum - actualSum;
}

console.log(findMissing([3, 0, 1])); // 2
console.log(findMissing([0, 1, 4, 2])); // 3
