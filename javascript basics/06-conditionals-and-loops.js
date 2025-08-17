// JavaScript Basics — 6) Conditionals & Loops
// Run: node "javascript basics\\06-conditionals-and-loops.js"

// if / else if / else
const score = 72;
if (score >= 90) {
  console.log("A");
} else if (score >= 75) {
  console.log("B");
} else if (score >= 60) {
  console.log("C");
} else {
  console.log("D");
}

// switch
const day = "mon";
switch (day) {
  case "mon":
  case "tue":
    console.log("Weekday");
    break;
  case "sat":
  case "sun":
    console.log("Weekend");
    break;
  default:
    console.log("Unknown");
}

// loops: for, while, for...of, for...in
for (let i = 0; i < 3; i++) 
    console.log("for i:", i);

let n = 0;
while (n < 3) { 
    console.log("while n:", n); 
    n++; 
}

for (const ch of "JS") console.log("of:", ch);

const obj = { a: 1, b: 2 };
for (const k in obj) console.log("in:", k, obj[k]);

// Practice:
// - FizzBuzz from 1..20.
// - Count vowels in a string.
