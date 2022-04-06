//Given an array of integers, return a new array with each value doubled.


// for example:

// [1, 2, 3] - - > [2, 4, 6]

//P: is it always going to be integers? Are we going to be given any special characters? An empty arr ever

//R: Return a new arr with each value doubled 

//E: If we are given [2, 3, 4], should return [4, 6, 8]
//   If we are given [4, 5, 6], should return [8, 10, 12]

// make a function that takes in an array
function doubled(arr) {
  return arr.map(e=>e*2)
}

// map(returns new array ) through the array and multiply each element by 2. also return
doubled([1,2,3])