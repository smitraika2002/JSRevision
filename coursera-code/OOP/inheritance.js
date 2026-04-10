console.log("Using Prototypal Inheritance:");

// Parent object (prototype)
var animal = {
  eats: true,
  runs: true,
  cookfood: false,
  walk: function() {
    console.log("Animal is walking");
  }
};

// Child object inherits from animal
var dog = Object.create(animal);

// Add own property
dog.barks = true;

// Use inherited + own properties
console.log("Animal eats: " + dog.eats);   // true (from animal)
console.log("Animal runs: " + dog.runs);   // true (from animal)
console.log("Dog barks: " + dog.barks);  // true (own)
console.log("Animal cooks food: " + dog.cookfood); // false (from animal)
dog.walk();              // Animal is walking


// New way of Inheritance using class syntax

console.log("\nUsing Class Syntax for Inheritance:");


class Animal {
    constructor(name) {
        this.name = name;
    }
    // Method in the parent class
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

// Child class that inherits from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }
}

const dog1 = new Dog('Buddy', 'Golden Retriever');
dog1.eat();  // Output: Buddy is eating.
dog1.bark(); // Output: Buddy is barking.