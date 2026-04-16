/* Calculate total cart value considering quantity. */

const cart = [
  { name: "Shirt", price: 1000, qty: 2 },
  { name: "Shoes", price: 2000, qty: 1 },
];

function getPriceQty(cart) {
  let total = 0;
  for (let item of cart) {
    total += item.price * item.qty;
  }
  return total;
}

console.log(getPriceQty(cart));
