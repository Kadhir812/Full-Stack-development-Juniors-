// ============================================
// REST AND SPREAD OPERATORS IN JAVASCRIPT
// ============================================

console.log("=== REST AND SPREAD OPERATORS ===\n");

// ============================================
// 1. SPREAD OPERATOR (...)
// ============================================
// Used to "spread out" or expand elements from arrays, objects, or strings

console.log("1. SPREAD OPERATOR - Arrays");
console.log("-------------------------");

// Copying arrays
const fruits = ['apple', 'banana', 'orange'];
const moreFruits = ['mango', 'grape'];

// Using spread to combine arrays
const allFruits = [...fruits, ...moreFruits];
console.log("Original fruits:", fruits);
console.log("More fruits:", moreFruits);
console.log("Combined fruits:", allFruits);

// Copying an array (shallow copy)
const fruitsCopy = [...fruits];
console.log("Fruits copy:", fruitsCopy);

// Adding elements while spreading
const fruitsWithExtra = ['kiwi', ...fruits, 'pineapple'];
console.log("Fruits with extra:", fruitsWithExtra);

console.log("\n2. SPREAD OPERATOR - Objects");
console.log("---------------------------");

// Copying and merging objects
const person = {
    name: 'John',
    age: 30
};

const address = {
    city: 'New York',
    country: 'USA'
};

// Merge objects using spread
const personWithAddress = {...person, ...address};
console.log("Person:", person);
console.log("Address:", address);
console.log("Merged object:", personWithAddress);

// Overriding properties
const updatedPerson = {...person, age: 31, job: 'Developer'};
console.log("Updated person:", updatedPerson);

console.log("\n3. SPREAD OPERATOR - Function Arguments");
console.log("-------------------------------------");

function sum(a, b, c) {
    return a + b + c;
}

const numbers = [10, 20, 30];
console.log("Numbers array:", numbers);
console.log("Sum using spread:", sum(...numbers));

// Math functions with spread
const nums = [5, 10, 15, 3, 8];
console.log("Numbers:", nums);
console.log("Max number:", Math.max(...nums));
console.log("Min number:", Math.min(...nums));

// ============================================
// 4. REST OPERATOR (...)
// ============================================
// Used to collect multiple elements into an array

console.log("\n4. REST OPERATOR - Function Parameters");
console.log("------------------------------------");

// Rest parameters - collect all arguments into an array
function calculateTotal(...prices) {
    console.log("All prices:", prices);
    return prices.reduce((total, price) => total + price, 0);
}

console.log("Total of 10, 20, 30:", calculateTotal(10, 20, 30));
console.log("Total of 5, 15, 25, 35:", calculateTotal(5, 15, 25, 35));

// Mix of normal and rest parameters
function greetUsers(greeting, ...names) {
    console.log(`Greeting: ${greeting}`);
    console.log("Names:", names);
    return names.map(name => `${greeting}, ${name}!`);
}

const greetings = greetUsers("Hello", "Alice", "Bob", "Charlie");
console.log("All greetings:", greetings);

console.log("\n5. REST OPERATOR - Array Destructuring");
console.log("------------------------------------");

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
console.log("Original colors:", colors);

// Extract first two, rest go into remaining array
const [first, second, ...remaining] = colors;
console.log("First color:", first);
console.log("Second color:", second);
console.log("Remaining colors:", remaining);

// Skip elements
const [primary, , , ...others] = colors;
console.log("Primary color:", primary);
console.log("Other colors:", others);

console.log("\n6. REST OPERATOR - Object Destructuring");
console.log("-------------------------------------");

const student = {
    name: 'Emma',
    age: 22,
    grade: 'A',
    subject: 'Computer Science',
    university: 'MIT',
    gpa: 3.8
};

console.log("Original student:", student);

// Extract specific properties, rest go into remaining object
const {name, age, ...academicInfo} = student;
console.log("Name:", name);
console.log("Age:", age);
console.log("Academic info:", academicInfo);

console.log("\n7. PRACTICAL EXAMPLES");
console.log("-------------------");

// Example 1: Function that accepts unlimited arguments
function createShoppingList(store, ...items) {
    return {
        store: store,
        items: items,
        total: items.length,
        list: items.join(', ')
    };
}

const groceries = createShoppingList("Walmart", "milk", "bread", "eggs", "cheese");
console.log("Shopping list:", groceries);

// Example 2: Cloning arrays and adding elements
const originalTodos = ['Wake up', 'Brush teeth', 'Have breakfast'];
const newTodo = 'Go to work';
const updatedTodos = [...originalTodos, newTodo];

console.log("Original todos:", originalTodos);
console.log("Updated todos:", updatedTodos);

// Example 3: Removing specific property from object
const userProfile = {
    id: 1,
    username: 'john_doe',
    password: 'secret123',
    email: 'john@email.com',
    firstName: 'John',
    lastName: 'Doe'
};

// Remove password and keep rest
const {password, ...publicProfile} = userProfile;
console.log("User profile:", userProfile);
console.log("Public profile (no password):", publicProfile);

// Example 4: Converting string to array of characters
const message = "Hello";
const characters = [...message];
console.log("Message:", message);
console.log("Characters array:", characters);

console.log("\n8. COMMON USE CASES");
console.log("----------------");

// Use Case 1: Finding unique values
const duplicateNumbers = [1, 2, 3, 2, 4, 3, 5, 1];
const uniqueNumbers = [...new Set(duplicateNumbers)];
console.log("Duplicate numbers:", duplicateNumbers);
console.log("Unique numbers:", uniqueNumbers);

// Use Case 2: Flattening arrays (one level)
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = [].concat(...nestedArray);
console.log("Nested array:", nestedArray);
console.log("Flat array:", flatArray);

// Use Case 3: Converting NodeList to Array (in browser)
// const elements = [...document.querySelectorAll('div')];

console.log("\n=== KEY DIFFERENCES ===");
console.log("SPREAD: Expands/spreads elements OUT");
console.log("REST: Collects/gathers elements INTO an array/object");
console.log("BOTH use the same ... syntax but in different contexts!");



// Spread Operator (...)
// Array copying and combining
// Object merging and cloning
// Function argument spreading
// String to array conversion


// Rest Operator (...)
// Function parameters (collecting arguments)
// Array destructuring
// Object destructuring