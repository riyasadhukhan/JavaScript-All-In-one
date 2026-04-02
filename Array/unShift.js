/* 
*
Unshift Implementation
 *
 */

let arr = [1, 2];

function unshift(...elements) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + elements.length] = arr[i];
  }
  for (let i = 0; i <= elements.length - 1; i++) {
    arr[i] = elements[i];
  }
  console.log(arr);
}

unshift(8, 9);
