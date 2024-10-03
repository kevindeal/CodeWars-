// // Overview
// After you recovered toString() for booleans, numbers and numerical arrays last time, you now realise that because , you have to be able to convert complex arrays containing any and all data types into strings too!

// Task
// You have to fix and improve upon the toString() method for arrays according to the criteria specified below.

// I. Numerical Arrays
// For arrays containing numbers only, you have to convert the array to a string where the contents of the string resembles what an array looks like in Javascript code. Here are a few examples:

// [].toString() === "[]"
// [3.14].toString() === "[3.14]"
// [1,2,3].toString() === "[1,2,3]"
// [1,2.72,4,3.14,9].toString() === "[1,2.72,4,3.14,9]"
// Notice that in this version of "Strings, strings, strings", you are not allowed to leave spaces between elements in an array. If you leave any spaces you will fail the test.

// II. Arrays Containing Strings
// For arrays containing strings, the format is the same except if element of the array is a string, the "stringified" version of that element must have single quotes around it.

// ["Hello World",3.14,"Lorem Ipsum"].toString() === "['Hello World',3.14,'Lorem Ipsum']"
// Please note that while unnecessary whitespace will not be accepted, whitespace that already exists in strings must be preserved; that is, "Hello World" should NOT be converted into "HelloWorld".

// III. Arrays in arrays
// In this version of "Strings, strings, strings", you must be able to correctly handle with and stringify nested arrays. For example:

// [1,[2,4]].toString() === "[1,[2,4]]"
// [1,2,[3,4],[5,6],[[7]],[8,[9]]].toString() === "[1,2,[3,4],[5,6],[[7]],[8,[9]]]"
// There can be as many levels of nested arrays as the test cases allow. Therefore, you may want to use recursion or a similar method.

// IV. Arrays with Booleans
// This should be really straightforward. Anyway here's a few examples:

// [true,false].toString() === "[true,false]"

/*base case */
// Base case: If the array is empty, return "[]".
// Iterate through each element of the array.
// If the element is a number or boolean, add it to the result string.
// If the element is a string, add it with single quotes around it.
// If the element is an array, call the function recursively to process the nested array.
// Join the elements with commas and wrap the entire result in square brackets ([]).

Array.prototype.toString = function() {
  // Step 1: Check if the array is empty
  if (this.length === 0) {
    return "[]";
  }
  
  // Step 2: Map over each element in the array
  return "[" + this.map(item => {
    if (Array.isArray(item)) {
      // Step 3: Recursively call toString() if the element is an array
      return item.toString();
    } else if (typeof item === "string") {
      // Step 4: If the element is a string, wrap it in single quotes
      return `'${item}'`;
    } else {
      // Step 5: For numbers, booleans, etc., return the value as is
      return item;
    }
  }).join(",") + "]"; // Step 6: Join the elements with commas, no spaces
};

// Empty Arrays: If the array is empty, return "[]" directly:


if (this.length === 0) return "[]";

// Map through Each Element:

// Use this.map() to iterate over each element in the array.
// For each element:
// If it’s a nested array, call toString() recursively on it.
// If it’s a string, wrap it in single quotes.
// If it’s a number, boolean, or other primitive type, just return the value as is.
// Recursive Handling of Nested Arrays:

// By calling item.toString() within the map, the function will handle nested arrays by applying the same rules.
// Joining Elements: After processing each element, use .join(",") to concatenate the elements without adding spaces between them.

// Wrap in Square Brackets: Finally, wrap the entire result in square brackets ([])