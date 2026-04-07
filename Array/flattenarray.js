/*Flatten a nested array.*/

function flattenArray(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArray = newArray.concat(flattenArray(arr[i]));
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(flattenArray([1, [2, [3, 4]], 5]));
// [1, 2, 3, 4, 5]
