/* Create an order system where each order has:
id
status (pending, shipped, delivered)
Allow updating status and viewing order details.*/

class Order {
  #status;
  constructor(id) {
    this.id = id;
    this.#status = "pending";
  }
  updateStatus(status) {
    this.#status = status;
    console.log(`Order ${this.id} status updated to ${this.#status}`);
  }
  getDetails() {
    console.log(`Order ID: ${this.id}, Status: ${this.#status}`);
  }
}

const order = new Order(101);
order.updateStatus("shipped");
order.getDetails();
