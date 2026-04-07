/*Return a new array with duplicates removed.*/

function removeDuplicates(arr) {
  let newArray = [];
  let k = 0;

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < newArray.length; j++) {
      if (arr[i] === newArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      newArray[k] = arr[i];
      k++;
    }
  }
  return newArray;
}

console.log(removeDuplicates([1, 2, 2, 8, 4, 3, 4, 4, 8, 5, 7, 9, 9]));
// [1, 2, 3, 4]
