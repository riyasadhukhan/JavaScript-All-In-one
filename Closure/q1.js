/* write a function that returns another function
which prints "Hello World". */

function hello() {
  return function () {
    console.log("Hello World");
  };
}

const fn = hello();
fn();
