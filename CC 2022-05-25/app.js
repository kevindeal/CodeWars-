// Let's play! You have to return which player won! In case of a draw return Draw!.
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const oneWins = {
  'rock' : 'scissors',
  'scissors' : 'paper',
  'paper' : 'rock'
};

const rps = (p1, p2) => {
  if(p1 === p2) return "Draw!";
  else if(oneWins[p1] === p2)
    return 'Player 1 won!'; 
  else {
    return `Player 2 won!`;
  }
};