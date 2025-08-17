// ============================================
// EXPONENTIATION (**) AND EQUALITY OPERATORS (== vs ===)
// ============================================

console.log("=== EXPONENTIATION AND EQUALITY OPERATORS ===\n");

// ============================================
// 1. EXPONENTIATION OPERATOR (**)
// ============================================
// The ** operator raises the first operand to the power of the second operand

console.log("1. EXPONENTIATION OPERATOR (**)");
console.log("------------------------------");

// Basic exponentiation examples
console.log("2 ** 3 =", 2 ** 3);           // 2 to the power of 3 = 8
console.log("5 ** 2 =", 5 ** 2);           // 5 squared = 25
console.log("10 ** 3 =", 10 ** 3);         // 10 cubed = 1000
console.log("4 ** 0.5 =", 4 ** 0.5);       // Square root of 4 = 2
console.log("8 ** (1/3) =", 8 ** (1/3));   // Cube root of 8 = 2

// Negative numbers and exponents
console.log("(-2) ** 3 =", (-2) ** 3);     // -8
console.log("2 ** (-2) =", 2 ** (-2));     // 1/4 = 0.25
console.log("(-3) ** 2 =", (-3) ** 2);     // 9

// Variables with exponentiation
const base = 3;
const exponent = 4;
console.log(`${base} ** ${exponent} =`, base ** exponent);

// Real-world examples
const principal = 1000;
const rate = 0.05;  // 5% interest
const time = 3;     // 3 years
const compoundInterest = principal * (1 + rate) ** time;
console.log(`Compound Interest: $${compoundInterest.toFixed(2)}`);

console.log("\n============================================");

// ============================================
// 2. EQUALITY OPERATORS (== vs ===)
// ============================================

console.log("2. EQUALITY OPERATORS (== vs ===)");
console.log("--------------------------------");

console.log("\n2.1 LOOSE EQUALITY (==)");
console.log("----------------------");
console.log("Performs type coercion (converts types before comparing)");

// Numbers and strings
console.log("5 == '5':", 5 == '5');         // true (string '5' converted to number 5)
console.log("0 == false:", 0 == false);     // true (false converted to 0)
console.log("1 == true:", 1 == true);       // true (true converted to 1)
console.log("'' == false:", '' == false);   // true (empty string converted to false)
console.log("null == undefined:", null == undefined); // true (special case)

// Arrays and objects (tricky cases)
console.log("[] == false:", [] == false);   // true (empty array converted to false)
console.log("[] == 0:", [] == 0);           // true (empty array converted to 0)
console.log("[1] == 1:", [1] == 1);         // true (array [1] converted to string "1", then to number 1)

console.log("\n2.2 STRICT EQUALITY (===)");
console.log("------------------------");
console.log("NO type coercion (types and values must be exactly the same)");

// Same comparisons with strict equality
console.log("5 === '5':", 5 === '5');       // false (number vs string)
console.log("0 === false:", 0 === false);   // false (number vs boolean)
console.log("1 === true:", 1 === true);     // false (number vs boolean)
console.log("'' === false:", '' === false); // false (string vs boolean)
console.log("null === undefined:", null === undefined); // false (different types)

// When they give the same result
console.log("5 === 5:", 5 === 5);           // true
console.log("'hello' === 'hello':", 'hello' === 'hello'); // true
console.log("true === true:", true === true); // true

console.log("\n2.3 INEQUALITY OPERATORS (!= vs !==)");
console.log("-----------------------------------");

console.log("5 != '5':", 5 != '5');         // false (loose inequality)
console.log("5 !== '5':", 5 !== '5');       // true (strict inequality)
console.log("0 != false:", 0 != false);     // false (loose inequality)
console.log("0 !== false:", 0 !== false);   // true (strict inequality)

console.log("\n3. DETAILED COMPARISON EXAMPLES");
console.log("------------------------------");

// Function to demonstrate comparisons
function compareValues(a, b) {
    console.log(`\nComparing: ${JSON.stringify(a)} and ${JSON.stringify(b)}`);
    console.log(`${JSON.stringify(a)} == ${JSON.stringify(b)}:`, a == b);
    console.log(`${JSON.stringify(a)} === ${JSON.stringify(b)}:`, a === b);
    console.log(`Type of first value: ${typeof a}`);
    console.log(`Type of second value: ${typeof b}`);
}

// Various comparisons
compareValues(0, false);
compareValues(1, true);
compareValues('', 0);
compareValues('5', 5);
compareValues(null, undefined);
compareValues([], '');
compareValues([1, 2], '1,2');

console.log("\n4. PRACTICAL EXAMPLES");
console.log("-------------------");

// Example 1: User input validation
function validateAge(input) {
    console.log(`\nValidating age input: "${input}"`);
    
    // Loose equality might cause issues
    if (input == 18) {
        console.log("✓ Loose equality: User is 18 (could be string '18')");
    }
    
    // Strict equality is safer
    if (input === 18) {
        console.log("✓ Strict equality: User is exactly number 18");
    } else {
        console.log("✗ Strict equality: Input is not number 18");
        console.log(`  Input type: ${typeof input}, value: ${input}`);
    }
}

validateAge(18);      // number
validateAge('18');    // string
validateAge('18.0');  // string

// Example 2: Array search
const numbers = [1, 2, 3, 4, 5];
const searchValue1 = '3';
const searchValue2 = 3;

console.log("\nArray search example:");
console.log("Array:", numbers);
console.log(`Searching for '3' (string):`, numbers.includes(searchValue1)); // false
console.log(`Searching for 3 (number):`, numbers.includes(searchValue2));   // true

// Example 3: Boolean checks
function checkTruthy(value) {
    console.log(`\nChecking value: ${JSON.stringify(value)} (${typeof value})`);
    console.log(`Is truthy:`, !!value);
    console.log(`== true:`, value == true);
    console.log(`=== true:`, value === true);
}

checkTruthy(1);
checkTruthy('hello');
checkTruthy([]);
checkTruthy(0);
checkTruthy('');

console.log("\n5. COMMON PITFALLS AND BEST PRACTICES");
console.log("-----------------------------------");

console.log("\n❌ PITFALLS TO AVOID:");
console.log("- Using == when you need exact type matching");
console.log("- Forgetting that [] == false is true");
console.log("- Assuming '0' == 0 means they're the same type");

console.log("\n✅ BEST PRACTICES:");
console.log("- Use === (strict equality) by default");
console.log("- Use == only when you specifically need type coercion");
console.log("- Always consider the types of values you're comparing");
console.log("- Use explicit type conversion when needed");

// Example of explicit type conversion
const userInput = '25';
const targetAge = 25;

console.log("\nExplicit type conversion example:");
console.log(`userInput: "${userInput}" (${typeof userInput})`);
console.log(`targetAge: ${targetAge} (${typeof targetAge})`);
console.log(`Direct comparison (===):`, userInput === targetAge);
console.log(`After conversion (===):`, parseInt(userInput) === targetAge);
console.log(`After conversion (===):`, userInput === String(targetAge));

console.log("\n6. SUMMARY TABLE");
console.log("-------------");
console.log("| Comparison | Result | Reason |");
console.log("|------------|--------|--------|");
console.log("| 5 == '5'   | true   | Type coercion |");
console.log("| 5 === '5'  | false  | Different types |");
console.log("| 0 == false | true   | Type coercion |");
console.log("| 0 === false| false  | Different types |");
console.log("| [] == ''   | true   | Type coercion |");
console.log("| [] === ''  | false  | Different types |");

console.log("\n🔑 KEY TAKEAWAY:");
console.log("=== checks both TYPE and VALUE");
console.log("== only checks VALUE (after type conversion)");
