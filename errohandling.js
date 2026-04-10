// console.log(a+b)
// console.log("This will cause an error because 'a' and 'b' are not defined, and 'c' is also not defined.");

// To prevent this, we use try and catch blocks to handle errors gracefully. 
// The code that might throw an error is placed inside the try block, and if an error occurs, 
// it will be caught and handled in the catch block.

try {
    console.log(a + b); // this might be error
} catch(err) {
    console.log("An error occurred: " + err.message); // this will run if there is an error
}

console.log("This will run regardless of whether there was an error or not.");