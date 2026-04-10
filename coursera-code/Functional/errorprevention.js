// Error Prevention - Try and Catch
// In JavaScript, you can use try and catch blocks to handle errors gracefully. 
// This allows you to prevent your program from crashing when an error occurs and 
// instead handle it in a controlled manner.

function addTwoNums(a, b) {
    try {
        if (typeof a !== "number") {
            throw new TypeError("The first argument is not a number.");
        } else if (typeof b !== "number") {
            throw new TypeError("The second argument is not a number.");
        } else {
            console.log(a + b);
        }
    } catch (err) {
        console.log("Error!", err);
    }
}

// Invoke function
addTwoNums(5, "5");

// Extra log
console.log("It still works");