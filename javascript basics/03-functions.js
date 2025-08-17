// JavaScript Basics — 3) Functions
// Run: node "javascript basics\\03-functions.js"

// Function declaration
function add(a, b) {
  return a + b;
}
console.log("add(2, 3) =", add(2, 3));

// Function expression
const multiply = function(a, b) {
  return a * b;
};
console.log("multiply(4, 5) =", multiply(4, 5));

// Arrow function (concise)
const square = n => n * n;
console.log("square(6) =", square(6));

// Default parameters
function greet(name = "friend") {
  return `Hello, ${name}!`;
}
console.log(greet());
console.log(greet("Mina"));
console.log(greet("Alex"));

// Practice:
// - Write a function avg(...nums) that returns the average.
// - Write an arrow function that returns the longer of two strings.
