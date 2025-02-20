import multiply, { add, subtract, addAndLogUpper } from "./mathModule.js";
import { toUpperCase, toLowerCase } from "./stringModule.js";
import { findMax, reverseArray } from "./arrayModule.js";

console.log("Add", add(4, 3));
console.log("Subtract", subtract(4, 3));
console.log("Uppercase", toUpperCase("Hello World"));
console.log("LowerCase", toLowerCase("Hello World"));
console.log("Multiply", multiply(3, 3));
console.log("Max", findMax([1, 2, 3, 4, 5]));
console.log("Reversed", reverseArray([1, 2, 3, 4, 5]));
console.log("addAndLogUpper");
addAndLogUpper(1, 2);

// Part 8
const myArray = [5, 8, 3, 4, 10, 16];

console.log("Part 8");
addAndLogUpper(multiply(findMax(myArray), 2), 0);
