/* From a list of products, return an array of just product names.*/

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
];

function extractName(products) {
  let productName = [];
  for (let product of products) {
    productName.push(product.name);
  }
  return productName;
}

console.log(extractName(products));
