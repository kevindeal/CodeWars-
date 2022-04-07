// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// ex:

// arrDiff([1,2],[1]) == [2]

// if a value is present in b, all of its occurences must be removed from the other 

// arrDiff([1,2,2,2,3],[2]) == [1,3]

//P: is this always going to be an array? Are we going to be creating string with any arrays? Will this work with any strings?

// R: Implement a difference funtion in which one array subtracts the list from the other and returns the differnt array.

// E: if we have arrayDiff([1,2],[1]) 'it should' ==  [2]. If a value is present in b, all of its occurrences must be removed from the other: arrayDiff([1,2,2,2,3],[2]) == [1,3]

// make a function that one array subtracts the list from the other and returns the difference
function arrayDiff(a, b) {
  var difference = a.filter(x => b.indexOf(x) === -1);
  return(difference);
}

// refactor:
function arrDiff(a,b) {
  return a.filter(x => b.indexOf(x) === -1);
}
// filter will find the elements of our first array which aren't in the indexOf()second array and -1 means to subtract or get rid of.