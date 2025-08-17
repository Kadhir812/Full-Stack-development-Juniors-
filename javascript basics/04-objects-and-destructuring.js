// JavaScript Basics — 4) Objects & Destructuring
// Run: node "javascript basics\\04-objects-and-destructuring.js"

const user = {
  firstName: "Charlie",
  lastName: "Brown",
  role: "Admin",
  address: {
     city: "Lagos", 
     country: "NG" 
    }
};

console.log(`${user.firstName}\n${user.address.city}`);

// Object destructuring
const { firstName, role, address: { city } } = user;
console.log(`Name: ${firstName}, Role: ${role}, City: ${city}`);

// Renaming during destructuring
const { lastName: surname } = user;
console.log("surname:", surname);


// Practice:
// - Add a new nested field user.contact = { email: "x@y.com" } and destructure email.
// - Create a function printUser({ firstName, lastName }) that logs full name.
