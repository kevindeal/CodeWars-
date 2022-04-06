// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// for example:

// [1, 2, 3, 4, 5, 6] - - > [1, 3, 5]

// P: is it always going to be a string? is there an array of just Geese?

// R: return a new array with out geese.

// E: if we are given an array of birds should return all the birds but geese.

// Write a function that takes a list of strings as an argument and returns a filtered list
function filteredList(arr) {
  return arr.splice(i);
}

// splice(does not return a new arry) out a portion of an array. So create a new array( newArr = []) take the length of birds.
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];  
  // return an array containing all of the strings in the input array except those that match strings in geese
  var newArr = [];
  for(var i =0; i<birds.length;i++) {
    if(!geese.includes(birds[i])) {
      newArr.push(birds[i]);
    }  
  }
return newArr;
};