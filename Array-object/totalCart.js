/* Calculate the total price of items in a cart. */

const cart = [
  { name: "Shirt", price: 1000 },
  { name: "Shoes", price: 2000 },
];

function totalCart(cart) {
  let totalPrice = 0;
  for (let item of cart) {
    totalPrice += item.price;
  }
  return totalPrice;
}

console.log(totalCart(cart));
