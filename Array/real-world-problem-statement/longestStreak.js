/* 1 = sale happened, 0 = no sale. Find longest continuous streak of sales. */

const sales = [1, 1, 0, 1, 1, 1, 0, 1];

function longestStreak(arr) {
  let currentStreak = 0;
  let maxStreak = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentStreak++;
    } else {
      currentStreak = 0;
    }
    maxStreak = Math.max(maxStreak, currentStreak);
  }
  return maxStreak;
}

console.log(longestStreak(sales));
