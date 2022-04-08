// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Ex: 

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// P:Does Camel Case mean the first word gets capitilized? if the first word is capitalized its Pascal case. I've never heard of pascal case.

// R: return a new string in camelCase, If the first letter in the string is capitilized return that string in Pascal Case.

// use / /g to find a global match

// write a function that takes a str and turns it into camelCase.
function toCamelCase(str) {
  let newStr = "";
  if(str) {
    let newArr = str.split(/[-_]/g);
    //   loop through our new array and capitalize all the words in the string except the first word. this deals with words followed by underscore or dash
  	for(let i in newArr) {
    	if(i > 0) {
         //charAt(0) will output the first characted with the index of 0 and concatenate that character with the remaining words in the string using slice().
      	newStr += newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);
    	}else {
      	newStr += newArr[i]
    	}
  	}
	}else {
  	return newStr
	}
  return newStr;
}

