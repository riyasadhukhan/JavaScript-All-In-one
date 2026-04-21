/* Create a product system where products have a price and a method to apply discounts. 
Discount should reduce the price dynamically.*/

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  applyDiscount(discountRate) {
    console.log(`Discount applied: ${discountRate}`);
    this.price -= (this.price * discountRate) / 100;
  }
  getPrice() {
    console.log(`Final Price: ${this.price}`);
  }
}

const product = new Product("Laptop", 50000);
product.applyDiscount(10);
product.getPrice();
