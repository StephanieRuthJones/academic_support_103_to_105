// ***** == and === Comparison Operators ***** //
function looselyEquals(value) {
  return value == 11;
}

//What two values can you provide as arguments
//to the looselyEquals function so that it returns true?

console.log(looselyEquals("11"));
console.log(looselyEquals(11));

// === operator
function strictlyEquals(value) {
  return value === 11;
}

//What value do you need to provide as an argument
//for strictlyEquals to return true ?
console.log(strictlyEquals(11));
