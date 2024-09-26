// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// find the average of 3 test scores

function calculateAverage(s1, s2, s3) {
  return (s1 + s2 + s3) / 3;
}

// create a variable for the average

const avgScore = (s1 + s2 + s3) / 3;

// create an if statement for if avgScore = x, a letter grade(A,B,C,D,F) to represent the avgScore will be returned.
if (avgScore >= 90 && avgScore <= 100) {
  return 'A';
} else if (avgScore >= 80 && avgScore < 90) {
  return 'B';
} else if (avgScore >= 70 && avgScore < 80) {
  return 'C';
} else if (avgScore >= 60 && avgScore < 70) {
  return 'D';
} else {
  return 'F';
}

// entire function

function getGrade (s1, s2, s3) {
  const avgScore = (s1 + s2 + s3) / 3;
  // console.log(avgScore);
  if (avgScore >= 90 && avgScore <= 100) {
    return 'A';
  } else if (avgScore >= 80 && avgScore < 90) {
    return 'B';
  } else if (avgScore >= 70 && avgScore < 80) {
    return 'C';
  } else if (avgScore >= 60 && avgScore < 70) {
    return 'D';
  } else {
    return 'F';
  }
}


// lets still find the average if we dont know how many scores we're going to have before hand

function calculateAverageAndGrade(scores) {
  // Calculate the sum of all the scores
  const total = scores.reduce((acc, score) => acc + score, 0);
  
  // Calculate the average by dividing the sum by the number of scores
  const avgScore = total / scores.length;
  
  // Determine the letter grade based on the average score
  if (avgScore >= 90 && avgScore <= 100) {
    return 'A';
  } else if (avgScore >= 80 && avgScore < 90) {
    return 'B';
  } else if (avgScore >= 70 && avgScore < 80) {
    return 'C';
  } else if (avgScore >= 60 && avgScore < 70) {
    return 'D';
  } else {
    return 'F';
  }
}
