//Solution 1: If statement
// function leapYear(year) {
//   if (year % 100 === 0) {
//     return year % 400 === 0;
//   }
//   return year % 4 === 0;
// }

//CHALLENGE: Refactor your leapYear function to use a ternary
const leapYear = (year) =>
  year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

  //Test Outputs
console.log("2016", leapYear(2016)); //should return true
console.log("2000", leapYear(2000)); //should return true
console.log("1800", leapYear(1800)); //should return false
console.log("100", leapYear(100)); //should return false
