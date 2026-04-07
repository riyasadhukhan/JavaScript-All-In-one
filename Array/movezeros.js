/*Move all zeros to the end while maintaining order of other elements.*/

function moveZeros(arr) {
  let newIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[newIndex] = arr[i];
      newIndex++;
    }
  }
  for (let i = newIndex; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]
