/* write a function that takes a name and
return a function that prints */

function greet(name) {
  return function () {
    console.log("Hello", name);
  };
}

const greetRiya = greet("Riya");
greetRiya();
