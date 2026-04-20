/*Build a shopping cart where users can add items, remove items, and view the total price.
Each item has:
name
price
quantity*/

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    console.log(`Item added: ${name}`);
    this.items.push({ name, price, quantity });
    console.log(this.items);
  }
  removeItem(name) {
    const index = this.items.findIndex((item) => item.name === name);
    this.items.splice(index, 1);
    console.log(`Item removed: ${name}`);
    console.log(this.items);
  }
  getTotal() {
    const total = this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    console.log(`Total: ${total}`);
  }
}

const cart = new Cart();
cart.addItem("Shoes", 2000, 1);
cart.addItem("T-shirt", 500, 2);
cart.removeItem("Shoes");
cart.getTotal();
