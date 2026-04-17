/*const users = [
  { firstName: "Amit", lastName: "Sharma" },
  { firstName: "Priya", lastName: "Das" },
];

function practice(users) {
  let arr = [];
  for (let user of users) {
    arr.push(user.firstName);
  }
  return arr;
}

console.log(practice(users));*/

/*const users = [
  { name: "Rahul", isActive: true },
  { name: "Sneha", isActive: false },
  { name: "Arjun", isActive: true },
];

function practice(users) {
  let arr = [];
  for (let user of users) {
    if (user.isActive) {
      arr.push(user);
    }
  }
  return arr;
}

console.log(practice(users));*/

/*const cart = [
  { product: "Shirt", quantity: 2 },
  { product: "Shoes", quantity: 1 },
];

function practice(cart) {
  let total = 0;
  for (let item of cart) {
    total += item.quantity;
  }
  return total;
}

console.log(practice(cart));*/

const products = [
  { name: "Watch", price: 1500 },
  { name: "Pen", price: 50 },
  { name: "Bag", price: 1200 },
];

function practice(products) {
  let arr = [];
  for (let product of products) {
    if (product.price > 1000) {
      arr.push(product);
    }
  }
  return arr;
}

console.log(practice(products));
