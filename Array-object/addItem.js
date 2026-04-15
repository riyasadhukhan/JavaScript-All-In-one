/* Add a new item to a cart without modifying the original array. */

const cart = [{ name: "Shirt", price: 1000 }];

const newItem = { name: "Hat", price: 500 };

function addItem(cart, newItem) {
  cart.push(newItem);
  return cart;
}

console.log(addItem(cart, newItem));
