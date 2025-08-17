// JavaScript Basics — 5) Arrays & Common Methods
// Run: node "javascript basics\\05-arrays-and-methods.js"

const nums = [1, 2, 3, 4, 5];
console.log("length:", nums.length);

// Access and update
console.log(nums[0]); // 1
nums[2] = 99;         // mutate
console.log(nums);

// Add/remove
nums.push(6);        // add to end
nums.unshift(0);     // add to start
console.log(nums);
nums.pop();          // remove end
nums.shift();        // remove start
console.log(nums);

// map, filter, reduce
const cat = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 == 0);
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log({ cat, evens, sum });

// find, some, every
console.log("find > 3:", nums.find(n => n > 3));
console.log("some > 4:", nums.some(n => n > 4));
console.log("every > 0:", nums.every(n => n > 0));

// spread & rest
const combo = [...nums, 10, 11];
const [first, second, ...rest] = combo;
console.log({ first, second, rest });

// Practice:
// - Use reduce to find the max value.
// - Create a function unique(arr) that removes duplicates.
