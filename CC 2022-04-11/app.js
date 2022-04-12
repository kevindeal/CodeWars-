// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex:Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

// P: if a name has less than or more than 4 it is not your friend.  A name should have EXACTLY 4 letters in it.

// R:filter a list of strings and return an new array with a list of elements with EXACTLY 4 characters.

// E: if we have array of ["Ryan", "Kieran", "Jason", "Yous"] myFriends should return ["Ryan","Yous"]. if a value is < 4 it would not = myfriend

function friend(friends){
  var maxNum = 4;
  const myFriends = friends.filter(friend => friend.length == maxNum)

 return myFriends
}