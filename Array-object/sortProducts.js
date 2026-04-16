/* Sort products from highest to lowest price. */

const products = [
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 50000 },
  { name: "Tablet", price: 30000 },
];

function sortProducts(products) {
  for (let i = 0; i < products.length - 1; i++) {
    for (let j = 0; j < products.length - i - 1; j++) {
      if (products[j].price < products[j + 1].price) {
        let temp = products[j];
        products[j] = products[j + 1];
        products[j + 1] = temp;
      }
    }
  }
  return products;
}

console.log(sortProducts(products));
