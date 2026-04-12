/* Return true if any number appears more than once. */

const ids = [1, 2, 3, 4, 2];

function detectDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(detectDuplicate(ids));
