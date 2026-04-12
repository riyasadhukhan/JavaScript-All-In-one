/* Given daily temperatures, return the temperatures that are above the average. */

const temps = [30, 32, 28, 35, 31];

function avgTemp(arr) {
  let sum = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const avg = Math.floor(sum / arr.length);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= avg) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(avgTemp(temps));
