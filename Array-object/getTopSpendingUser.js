/* Find the user who has spent the most total money. */

const users = [
  {
    name: "Amit",
    orders: [{ total: 100 }, { total: 200 }],
  },
  {
    name: "Sara",
    orders: [{ total: 500 }],
  },
];

function getTopSpendingUser(users) {
  let maxTotal = 0;
  let topUser = null;
  for (let user of users) {
    let total = 0;
    for (let order of user.orders) {
      total += order.total;
    }
    if (total > maxTotal) {
      maxTotal = total;
      topUser = user;
    }
  }
  return topUser.name;
}

console.log(getTopSpendingUser(users));
