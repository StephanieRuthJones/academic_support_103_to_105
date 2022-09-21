//AND OPERATOR
//Write a function called isADog that takes in two arguments: animalSound and wantsTreats
//isADog returns true if the animalSound is equal to "woof" and wantsTreats is true
function isADog(animalSound, wantsTreats) {
  return animalSound.toLowerCase() === "woof" && wantsTreats;
}

console.log(isADog("meow", true)); //outputs false because "meow" is not equal to "woof"
console.log(isADog("woof", true)); //outputs true
console.log(isADog("woof", false)); //outputs false because wantsTreats is false
