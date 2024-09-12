// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// ie:"This is an example!" ==> "sihT si na !elpmaxe"
// // reverseWords('NOEL') should return 'LEON';
//  const str = "NOEL";
// // step1. lets use split() method to return a new array.
//  let splitStr = str.split("");
// console.log(splitStr); 
// // step2. Use the reverse() method to reverse the new created array.
// let reverseArray = splitStr.reverse();
// console.log(reverseArray);
// // step3. Use the join() method to join all elements of the array into a string.
// let joinArray = reverseArray.join();
// // step4. Return the reversed string
// console.log(joinArray);
// function reverseString(str) {
//   // step 1. Create an empty string that will host the new created string 
//   let newString = "";
//   // step 2. Create the FOR loop
//   /* the starting point of the loop will be (str.length - 1) which corresponds to the last character of the string, 'N'
//   As long as i is greater than or equals -, the loop will go on
//   We decrement i after each iteration */
//   for(let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//     // console.log(newString);
//   }
  
//   // step 3. return the newString 
//   return newString;
// }


// reverseString("This is an example!");

// this returned '!elpmaxe na si sihT' so that is not what we what I reveresed the entire string i want to reverse each word.

function reverseWords(str) {
  // Step 1: Split the string into an array of words
  let wordsArray = str.split(" ");
  
  // Step 2: Map through each word and reverse its characters
  let reversedWordsArray = wordsArray.map(word => {
    return word.split("").reverse().join("");
  });
  
  // Step 3: Join the array of reversed words back into a string
  return reversedWordsArray.join(" ");
}


reverseWords("The quick brown fox jumps over the lazy dog.");

