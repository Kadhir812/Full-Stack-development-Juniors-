// JavaScript Basics — 1) Variables & Data Types
// Run: node "javascript basics\\01-variables-and-types.js"

// Use let for changeable variables, const for constants. Avoid var in modern JS.
let username = "siva"; // can change
const age = 25;         // cannot be reassigned
console.log("username:", username); // John
console.log("age:", age);           // 25

// typeof shows the data type
console.log(typeof username); // "string"
console.log(typeof age);      // "number"

// Reassigning let
username = "Jane";
console.log("new username:", username); // Jane

// Primitive types: string, number, boolean, null, undefined, bigint, symbol
console.log("boolean:", typeof true);           // "boolean"
console.log("undefined:", typeof undefined);    // "undefined"
console.log("null (quirk):", typeof null);      // "object" ← historic quirk

// Practice:
// - Create a const pi = 3.14 and log its type.
// - Make a let isLoggedIn = false, toggle it to true, and log both values.
