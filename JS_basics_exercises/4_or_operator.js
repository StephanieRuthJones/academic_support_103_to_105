// OR OPERATOR
function howLong(string) {
  return string.length > 10 || string.length < 5;
}

console.log(howLong("1234")); //returns true because less than 5
console.log(howLong("12345678910")); //returns true because greater than 10
console.log(howLong("123456")); //returns false because not less than 5 or greater than 10
