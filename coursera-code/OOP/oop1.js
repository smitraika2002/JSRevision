// OOP1
console.log("Without Constructor Function:");
var purchase1= {
    name: "TV",
    price: 500,
    discount_percent: 10,
    getprice: function(){
        return this.price - (this.price * this.discount_percent / 100);
    }
}
var purchase1 = purchase1.getprice(); // 450
console.log(purchase1);

var purchase2 = {
    name: "Laptop",
    price: 1000,
    discount_percent: 15,
    getprice: function(){
        return this.price - (this.price * this.discount_percent / 100);
    }
}
var purchase2 = purchase2.getprice(); // 850
console.log(purchase2);

// The above code is repetitive and not efficient. 
// We can use a constructor function to create multiple purchase objects without repeating the same code.

console.log("Using Constructor Function:");

function Purchase(name, price, discount_percent) {
    this.name = name;
    this.price = price;
    this.discount_percent = discount_percent;
    this.getprice = function() {
        return this.price - (this.price * this.discount_percent / 100);
    }
}

var purchase1 = new Purchase("TV", 500, 10);
var purchase2 = new Purchase("Laptop", 1000, 15);

console.log("After Discount, the price of " + purchase1.name + " is $" + purchase1.getprice()); // The price of TV is $450
console.log("After Discount, the price of " + purchase2.name + " is $" + purchase2.getprice()); // The price of Laptop is $850