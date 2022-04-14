// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// E:Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// P: Is b going to greater or equal to a? going to need an if statement.

// R: return the sum of all integers between a,b and including both a and b.

function getSum( a,b )
{		
   if(b > a) {
     return ((b-a)+1) * (a+b) / 2;
   }else {
     var n = (a - b + 1);
     var sum = n * (b + a) / 2;
     
     return sum;
   }
}