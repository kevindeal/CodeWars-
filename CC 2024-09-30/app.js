// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// step 1: we have to find the length of the (ending) string.
/* First, you want to determine how many characters from the end of the str you need to compare. This would be the length of the ending string. */

// step 2: Extract the same number of characters from the end of (str)
/* Using the length of (ending), slice off the last part of (str) that has the same number of characters as (ending). This allows you to compare the ending portion of (str) to (ending). */

// step 3: compare the two strings 
/* If the extracted portion of str matches ending, return true.
If not, return false. */

function solution(str, ending){
  // TODO: complete
  // Step 1: Slice the string to get the part that matches the length of 'ending'
  var newString = str.slice(-ending.length);

  // Step 2: Check if the sliced portion matches 'ending'
  if (newString === ending) {
    return true;
  }
  // Step 3: Return false if it doesn't match
  return false;
}


// Explanation:
// str.slice(-ending.length):
// This slices the string str starting from the negative index -ending.length, which counts from the end of the string. For example, if ending has 2 characters, this will slice the last 2 characters of str.
// newstring === ending:
// This compares the sliced part of str with ending. If they match, the function returns true; otherwise, it returns false.


// another Edge case
function solution(str, ending){
  return str.endsWith(ending);
}
// str.endsWith(ending):

// This method automatically checks if the string str ends with the substring ending.
// For example:
// str.endsWith('bc') on the string 'abc' returns true because 'abc' ends with 'bc'.
// str.endsWith('d') on 'abc' returns false because 'abc' does not end with 'd'.
// Return the result directly:

// Since endsWith() already returns a boolean (true or false), you can directly return its result.
// Example Breakdown:
// solution('abc', 'bc'):

// str is 'abc' and ending is 'bc'.
// str.endsWith('bc') returns true, so the function returns true.
// solution('abc', 'd'):

// str is 'abc' and ending is 'd'.
// str.endsWith('d') returns false, so the function returns false.
// Handling Edge Cases:
// solution('abc', ''):
// In this case, str.endsWith('') returns true because any string ends with an empty string.
// Why This is Clever:
// Concise: You don't need to manually slice the string and compare it.
// Built-in: The endsWith() method is specifically designed for this purpose, making your code shorter and easier to read.
// Efficient: This method does exactly what you want without extra logic.