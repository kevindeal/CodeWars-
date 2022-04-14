// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Ex:[4,3,9,7,2,1] -> [2,9,3,49,4,1]

function squareOrSquareRoot(array) {
  return array.map(x => isSquare(x) ? Math.sqrt(x) : x*x)
}

function isSquare(n) {
 return Math.sqrt(n) % 1 === 0;
}