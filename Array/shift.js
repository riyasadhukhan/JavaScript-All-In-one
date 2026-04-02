/*
shift implement
*/
let arr = [1, 2, 3, 4];

function shift() {
  let firstelement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  console.log(arr);
  return firstelement;
}

console.log(shift());
