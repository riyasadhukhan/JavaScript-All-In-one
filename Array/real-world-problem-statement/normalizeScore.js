/* Convert scores to percentage out of 100 (max score is highest in array). */

const scores = [40, 80, 60];

function normalizeScore(arr) {
  let max = Math.max(...arr);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push((arr[i] / max) * 100);
  }
  return newArr;
}
console.log(normalizeScore(scores));
