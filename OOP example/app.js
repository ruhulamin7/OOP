console.log("hello");

const phone = {
  name: "Sumsung",
  price: 12000,
  quantity: 3,
  totalPrice: function () {
    return `${this.name} price: ${this.price * this.quantity}`;
  },
};

const watch = {
  name: "watch",
  price: 1000,
  quantity: 3,
  totalPrice: function () {
    return `${this.name} price: ${this.price * this.quantity}`;
  },
};

console.log(phone.totalPrice());
console.log(watch.totalPrice());

const Product = (name, price, quantity) => {
  return `${this.name} price: ${this.price * this.quantity}`;
};

console.log(new Product("bag", 1222, 2));
