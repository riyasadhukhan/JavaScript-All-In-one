/*Return longest string.*/

function longestWord(arr) {
  let longest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

console.log(longestWord(["apple", "banana", "kiwi"])); // "banana"
