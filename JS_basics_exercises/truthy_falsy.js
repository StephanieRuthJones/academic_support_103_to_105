// ***** == and === Comparison Operators ***** //
function looselyEquals(value) {
  return value == 11;
}

//What two values can you provide as arguments
//to the looselyEquals function so that it returns true?

// console.log(looselyEquals("11"));
// console.log(looselyEquals(11));

// === operator
function strictlyEquals(value) {
  return value === 11;
}

//What value do you need to provide as an argument
//for strictlyEquals to return true ?
// console.log(strictlyEquals(11));

// ***** == and === Comparison Operators ***** //
let newVariable;
function checkTruthiness(value) {
  return !!value;
}
//If you provide the values below to the checkTruthiness function, what will the output be and why?
//checkTruthiness(0) => what is the output and why?
console.log("checkTruthiness(0)", checkTruthiness(0)); //output false
//checkTruthiness(1) => what is the output and why?
console.log("checkTruthiness(1)", checkTruthiness(1)); //output true
//checkTruthiness("") => what is the output and why?
console.log("checkTruthiness(empty string)", checkTruthiness("")); //output false
//checkTruthiness("a string") => what is the output and why?
console.log("checkTruthiness(a string)", checkTruthiness("a string")); //output true
//checkTruthiness(NaN) => what is the output and why?
console.log("checkTruthiness(NaN)", checkTruthiness(NaN)); //output false
//checkTruthiness(newVariable) => what is the output and why?
console.log("checkTruthiness(newVariable)", checkTruthiness(newVariable)); //output false
