/* create a function that returns a function which increments and 
  prints a counter value. */

function count(num) {
  return function () {
    num++;
    console.log(num);
  };
}

const counter = count(0);
counter();
counter();
counter();
