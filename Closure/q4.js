/* create a function createCounter() such that:
   => the count variable is not accessible directly
   => only increment() method can change it */

function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(count);
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
