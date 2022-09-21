const family = [
  { name: "Liz", age: 6 },
  { name: "Mike", age: 42 },
  { name: "Pam", age: 38 },
  { name: "Sam", age: 11 },
  { name: "Sue", age: 18 },
];
function isAdult(family) {
  return family.age >= 18;
}
// 1. Write a function that takes in an array of family members and returns a new array of family members who are 18 or older
function adultFamilyMembers(family) {
  return family.filter(isAdult);
}
// 2. Write a function that takes in an array of family members and returns a new array of family members who are under 18
function adultFamilyMembers(family) {
  return family.filter(!isAdult);
}
// 3. Write a function that takes in an array of family members and returns a new array of people who are 18 or older and whose name starts with the letter "S"
function adultFamilyMembers(family) {
  return family.filter(
    (member) => isAdult(member) && member.name.startsWith("S")
  );
}
console.log(adultFamilyMembers(family));
