const numbers = [1, 2, 3, 4, 5];

// 1. Use reduce to sum the numbers in the numbers array.
function sum(numsArray) {
  return numsArray.reduce((sum, num) => sum + num);
}
console.log(sum(numbers));
// 2. Use reduce to multiply the numbers in the numbers array.
function multiply(numsArray) {
  return numsArray.reduce((product, num) => product * num);
}
console.log(multiply(numbers));
// 3. Use reduce to find the largest number in the numbers array.
function findLargestNum(numsArray) {
  return numsArray.reduce((largest, num) => (num > largest ? num : largest));
}
console.log(findLargestNum(numbers));
