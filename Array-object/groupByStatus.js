/* Group orders into categories based on their status. */

const orders = [
  { id: 1, status: "pending" },
  { id: 2, status: "completed" },
  { id: 3, status: "pending" },
];

function grouped(orders) {
  let obj = {};
  for (let order of orders) {
    if (!obj[order.status]) {
      obj[order.status] = [];
    }
    obj[order.status].push(order);
  }
  return obj;
}

console.log(grouped(orders));
