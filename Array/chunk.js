/*Split array into chunks of given size.*/

function chunkArray(arr, size) {
  let result = [];
  let k = 0;
  for (let i = 0; i < arr.length; i += size) {
    result[k] = arr.slice(i, size + i);
    k++;
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 3));
// [[1,2],[3,4],[5]]
