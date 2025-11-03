// array methods 

// What you should understand about the question:

function myMod(array, s) {
  var na = [];
  for (var i = 0; i < array.length; i++) {
    na.push(s + array[i]);
  }
  return na;
}
// The function follows a classic "accumulator pattern" where it creates an empty array na to collect results, then iterates through each element of the input array using a traditional for loop. During each iteration, it adds the value s to the current array element (s + array[i]) and pushes this transformed value into the new array.

// One important gotcha here is that the + operator will behave differently depending on the data types. If s is a number and the array contains numbers, you'll get mathematical addition. But if s is a string or the array contains strings, you'll get string concatenation instead. For example, myMod([1, 2, 3], 10) returns [11, 12, 13], while myMod([1, 2, 3], "Hello") returns ["Hello1", "Hello2", "Hello3"].

// This is manually doing what map() does:
const myMod = (array, s) => array.map(item => s + item);

// PRACTICE:
const numbers = [1, 2, 3];
// Write these using map, filter, reduce:
// 1. Double each number
const doubleNumbers = numbers.map(num => num * 2);
// 2. Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
// 3. Sum all numbers
const sum = numbers.reduce((t,n) => t + n, 0);
// 4. multiply all numbers(get product)
// We start at 1, everything * 0 = 0
const product = numbers.reduce((t,n) => t * n, 1);