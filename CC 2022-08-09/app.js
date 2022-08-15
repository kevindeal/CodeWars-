// asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer
// ie: 
function squareDigits(num) {
  let number = 0;
  return number;
}

//  example of square each digit: (9119)

// 9^2 = 81
// 1^2 = 1
// 1^2 = 1
// 9^2 = 81

// lets convert our number into a string
let numString = num + "";

// create at total variable to contain the new number after concatating the new squared digits.
let total = "";

// lets loop through numString. Inside the parenthesis parseInt() will convert each digit to an integer. then **2 will square it. the "" will concatenate it into an empty string.

// the entire statement is in parenthesis to tell javascript to concatenate quared digit to variable total.
for(let number in numString) {
  total += (parseInt(numString[number])**2 + "");
}

// after looping through all the digits of our number return total. converting it to an integer first.
return parseInt(total);

function squareDigits(num) {
  let numString = num + "";
  let total = "";
  
  for(let number in numString) {
    total += (parseInt(numString[number]**2 + ""));
  }
  return parseInt(total);
}