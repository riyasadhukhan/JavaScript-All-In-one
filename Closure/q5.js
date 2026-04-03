/*Create a function that generates multiplier functions.*/

function multiplier(num) {
  return function (input) {
    console.log(num * input);
  };
}

const double = multiplier(2);
const triple = multiplier(3);

double(5);
triple(3);
