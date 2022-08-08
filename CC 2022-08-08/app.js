// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// ie: for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Map() will create a new aray populated with the results so lets map the array square each number.

let mapped = numbers.map(x => Math.pow(x,2));
// [1, 2, 2] will return [1, 4, 4]

// now we have to find the sum of the numbers in the array
// Array.prototype.reduce can be used to iterate through the array, adding the current element value to the sum of the previous element values.
mapped.reduce((a, b) => a + b, 0);
// [1, 4, 4] now will return 9.

function squareSum(numbers) {
  let mapped = numbers.map(x => Math.pow(x,2));
  let sum = mapped.reduce((a, b) => a + b, 0)
  return sum;
}
 