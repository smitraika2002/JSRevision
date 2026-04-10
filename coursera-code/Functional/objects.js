// Tasks to complete

// Create a new empty array literal and assign it to the variable clothes.
// Add 5 of your favorite items of clothing as strings using the push() method.
// Remove the fifth piece of clothing from the array using the pop() method.
// Add a new piece of clothing using the push() method.
// Use console.log to show the third item from the clothes array in the console.
// Create a new empty object literal and assign it to the variable favCar.
// Using the dot notation, assign a color property to the favCar object and 
// give it a string value with the color of your choice.
// Using the dot notation, assign a convertible property to 
// the favCar object and give it a boolean value of your choice.
// Use the console to log the entire favCar object.

let arr = [];
arr.push("Shirt");
arr.push("Pants");
arr.push("Jacket");
arr.push("Shoes");
arr.push("Hat");

arr.pop();

arr.push("Socks");

console.log(arr[2]);

let favCar = {};
favCar.color = "Red";
favCar.convertible = true;

console.log(favCar);    
