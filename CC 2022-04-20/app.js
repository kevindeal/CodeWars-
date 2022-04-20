// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// // E:h = 0
// m = 1
// s = 1

// result = 61000

// Break this down like a word problem.

// create variables to convert s,m,h to milliseconds
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

function getMilliSecondsFromSeconds(s) {
  let sMilli = s * second;
  return sMilli;
}
getMilliSecondsFromSeconds()

function getMilliSecondsFromMinutes(m) {
  let mMilli = m * minute;
  return mMilli;
}
getMilliSecondsFromMinutes()

function getMilliSecondsFromHours(h) {
  let hMilli = h * hour;
  return hMilli;
}
getMilliSecondsFromHours()
//a function that takes smh and adds times together
function past(h, m, s) {
  //#Happy Coding! ^_^
  return getMilliSecondsFromSeconds(s) +
   getMilliSecondsFromMinutes(m) +
   getMilliSecondsFromHours(h);
}
