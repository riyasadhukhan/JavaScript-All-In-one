/*Maximum Subarray Product*/

function maxProductSubarray(arr) {
  // variation of Kadane
  let minsofar = arr[0];
  let maxsofar = arr[0];
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    if (num < 0) {
      [maxsofar, minsofar] = [minsofar, maxsofar];
    }
    maxsofar = Math.max(num, maxsofar * num);
    minsofar = Math.min(num, minsofar * num);

    result = Math.max(result, maxsofar);
  }
  return result;
}

console.log(maxProductSubarray([2, 3, -2, 8])); // 6
console.log(maxProductSubarray([-2, 0, -1, -3])); // 0
