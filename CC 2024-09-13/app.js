// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// task:Write a function that returns both the minimum and maximum number of the given list/array.

/* ie:[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1] */

// check for an empty array
function getMinMax(arr) {
  if (arr.length === 0) {
    return null; /* handle empty array case */
  }

  // find min value
  // Use Math.min() fuction to take a series of numbers and returns the smallest value
  // To use Math.min() on an array, we spread(...) the array elements using the spread operator.
  let min = Math.min(...arr);
  // the spread operator expands the array into individual arguments that Math.min() can process.

  // Find the max value
  // similarly, the Math.max() function finds the largest value of the array.
  let max = Math.max(...arr);

  return [min, max];
}

// Example usage:
const numbers = [3, 7, 2, 9, 4];
const result = getMinMax(numbers);
console.log(result); // Output: [2, 9]