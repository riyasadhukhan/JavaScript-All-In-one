/* You receive user data and their orders separately. Merge them by userId.*/

const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Sara" },
];

const orders = [
  { id: 101, userId: 2, total: 500 },
  { id: 102, userId: 1, total: 300 },
];

function mergeApi(users, orders) {
  for (let user of users) {
    user.orders = [];
    for (let order of orders) {
      if (user.id === order.userId) {
        user.orders.push(order);
      }
    }
  }
  return users;
}

console.log(JSON.stringify(mergeApi(users, orders), null, 2));
