//Write a function called leapYear that takes in a year
//and has an if statement that
//returns true if the year is a leap year
//and false if the year is not a leap year

//NOTE: Every year that is exactly divisible by four is a leap year,
//except for years that are exactly divisible by 100,
//but these centurial years are leap years if they are exactly divisible by 400.
//For example, the years 1700, 1800, and 1900 are not leap years, but the year 2000 is.
//Solution 1: If statement
// function leapYear(year) {
//   if (year % 100 === 0) {
//     return year % 400 === 0;
//   }
//   return year % 4 === 0;
// }

//CHALLENGE: Refactor your leapYear function to use a ternary
// const leapYear = (year) =>
//   year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

console.log("2016", leapYear(2016)); //should return true
console.log("2000", leapYear(2000)); //should return true
console.log("1800", leapYear(1800)); //should return false
console.log("100", leapYear(100)); //should return false
