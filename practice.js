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

/*const products = [
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

console.log(practice(products));*/

/*const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
];

function practice(products) {
  let arr = [];
  for (let product of products) {
    product.discountedPrice = product.price - product.price / 10;
    arr.push(product);
  }
  return arr;
}

console.log(practice(products));*/

/*const users = [
  { id: 1, email: "a@gmail.com" },
  { id: 2, email: "b@gmail.com" },
];

function practice(users, email) {
  for (let user of users) {
    if (user.email === email) {
      return user;
    }
  }
}

console.log(practice(users, "b@gmail.com"));*/

/*const orders = [
  { id: 1, status: "pending" },
  { id: 2, status: "completed" },
  { id: 3, status: "pending" },
];

function practice(orders) {
  let obj = {};
  for (let order of orders) {
    if (!obj[order.status]) {
      obj[order.status] = [];
    }
    obj[order.status].push(order);
  }
  return obj;
}

console.log(practice(orders));*/

/*const posts = [
  {
    id: 1,
    comments: ["Good", "Nice"],
  },
  {
    id: 2,
    comments: ["Awesome"],
  },
];

function practice(posts) {
  let arr = [];
  for (let post of posts) {
    if (post.comments) {
      arr = arr.concat(post.comments);
    }
  }
  return arr;
}

console.log(practice(posts));*/

/*const orders = [
  { id: 1, amount: 500 },
  { id: 2, amount: 1500 },
  { id: 3, amount: 1000 },
];

function practice(orders) {
  let total = 0;
  for (let order of orders) {
    total += order.amount;
  }
  return total;
}

console.log(practice(orders));*/

/*const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Priya" },
];

const orders = [
  { userId: 1, product: "Shoes" },
  { userId: 1, product: "Shirt" },
  { userId: 2, product: "Bag" },
];

function practice(users, orders) {
  for (let user of users) {
    user.orders = [];
    for (let order of orders) {
      if (user.id === order.userId) {
        user.orders.push(order.product);
      }
    }
  }
  return users;
}

console.log(practice(users, orders));*/

/*const sales = [
  { product: "Laptop", quantity: 5 },
  { product: "Phone", quantity: 10 },
  { product: "Tablet", quantity: 7 },
];

function practice(sales) {
  let n = sales.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sales[j].quantity < sales[j + 1].quantity) {
        let temp = sales[j];
        sales[j] = sales[j + 1];
        sales[j + 1] = temp;
      }
    }
  }
  return sales.slice(0, 2);
}

console.log(practice(sales));*/

const users = [
  { name: "A", email: "a@mail.com" },
  { name: "B", email: "b@mail.com" },
  { name: "A2", email: "a@mail.com" },
];

function practice(users) {
  let seen = new Set();
  let newArr = [];
  for (let user of users) {
    if (!seen.has(user.email)) {
      seen.add(user.email);
      newArr.push(user);
    }
  }
  return newArr;
}

console.log(practice(users));
