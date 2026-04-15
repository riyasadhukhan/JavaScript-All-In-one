/* Count how many products belong to each category. */

const products = [
  { name: "Shirt", category: "clothing" },
  { name: "Jeans", category: "clothing" },
  { name: "Phone", category: "electronics" },
];

function countItem(products) {
  let obj = {};
  for (let product of products) {
    if (!obj[product.category]) {
      obj[product.category] = 0;
    }
    obj[product.category]++;
  }
  return obj;
}

console.log(countItem(products));
