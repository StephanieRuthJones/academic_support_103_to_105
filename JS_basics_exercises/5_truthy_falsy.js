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
