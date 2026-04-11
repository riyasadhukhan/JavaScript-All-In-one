/*Longest Substring Without Repeating*/

function longestUnique(arr) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < arr.length; right++) {
    if (set.has(arr[right])) {
      set.delete(arr[left]);
      left++;
    }
    set.add(arr[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(longestUnique(["a", "b", "c", "a", "b"])); //3
console.log(longestUnique(["a", "a", "a"])); // 1
console.log(longestUnique([])); // 0
