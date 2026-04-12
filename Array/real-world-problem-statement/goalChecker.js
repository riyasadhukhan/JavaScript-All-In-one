/* Return days where steps are >= 10,000. */

const steps = [8000, 12000, 15000, 7000, 11000];

function goalChecker(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10000) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(goalChecker(steps));
