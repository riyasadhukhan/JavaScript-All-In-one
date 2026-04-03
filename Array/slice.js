/* slice() implemented */

let arr = [1, 2, 3, 4, 5];
let newArr = [];

function slice(firstIndex, lastIndex) {
  if (lastIndex === undefined) {
    lastIndex = arr.length;
  }
  for (let i = firstIndex; i < lastIndex; i++) {
    newArr[newArr.length] = arr[i];
  }
  console.log(newArr);
  console.log(arr);
  return newArr;
}

console.log(slice(1, 3));
