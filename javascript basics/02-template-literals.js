// JavaScript Basics — 2) Template Literals
// Run: node "javascript basics\\02-template-literals.js"

const personName = "Alice";
const age = 28;

// Old way (string concatenation)
console.log("Hello, " + personName + ". You are " + age + " years old.");

// Template literals (preferred)
console.log(`Hello, ${personName}. You are ${age} years old.`);

// Multi-line strings
const poem = `Roses are red,
Violets are blue,
JS is fun,
And so are you!`;
console.log(poem);

// Expressions inside ${}
console.log(`Next year you'll be ${age + 3}`);

// Practice:
// - Build a sentence that includes: your favorite food, color, and a computed year (currentYear + 1).
