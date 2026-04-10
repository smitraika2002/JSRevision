const dishes = [
  { name: "Italian pasta", price: 9.55 },
  { name: "Rice with veggies", price: 8.65 },
  { name: "Chicken with potatoes", price: 15.55 },
  { name: "Vegetarian Pizza", price: 6.45 }
];

function getPrices(withTax) {
  if (withTax) {
    console.log("Prices with 20% tax:");
    
    for (let dish of dishes) {
      let finalPrice = (dish.price * 1.2).toFixed(2);
      console.log(`Dish: ${dish.name} Price: $ ${finalPrice}`);
    }

  } else {
    console.log("Prices without tax:");
    
    for (let dish of dishes) {
      console.log(`Dish: ${dish.name} Price (excl.tax): $ ${dish.price}`);
    }
  }
}

// call function
getPrices(true);
getPrices(false);