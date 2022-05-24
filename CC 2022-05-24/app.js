// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// the function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
  // at the beginning I massage my data and also get a boolean value
  const lowercaseName = name.toLowerCase()
  const isLetterR = lowercaseName.startsWith('r'); 

  if(isLetterR) {
    return `${name}` + ' ' + 'plays banjo'
  } 

  return `${name}` + ' ' + 'does not play banjo'
}