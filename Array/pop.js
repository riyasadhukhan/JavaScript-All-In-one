//pop() implemented

let arr = [1, 2, 3, 4, 5];

function pop() {
  let lastelement = arr[arr.length - 1];
  arr.length = arr.length - 1;
  console.log(arr);
  return lastelement;
}

console.log(pop());
