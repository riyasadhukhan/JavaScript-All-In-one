/*
 * push 
implementation
*
*/

let arr = [1, 2, 3];

function push(...elements) {
  for (let i = 0; i < elements.length; i++) {
    arr[arr.length] = elements[i];
    console.log("Updated array: " + arr);
    console.log("current array length: " + arr.length);
  }
  console.log("Final array: " + arr);
}

push(5, 6);
