/*Find max sum of contiguous subarray*/
/* going forword -> negativity comes -> reset */

function maxSubarraySum(arr) {
  let currentSum = 0;
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubarraySum([1, 2, -3, 9, 7])); // 6
