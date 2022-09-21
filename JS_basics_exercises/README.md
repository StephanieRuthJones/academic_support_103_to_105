# JS Basics

## How to Run JS Files

Run JS files from the project's root directory with the command `node JS_basics_exercises/[file_name]`

## Leap Year

Write a function called `leapYear` that takes in a year and has an **if statement** that returns `true` if the year is a leap year and `false` if the year is not a leap year

> ℹ️ **NOTE:** Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by `100`, but these centurial years are leap years if they are exactly divisible by `400`.
>
> For example, the years `1700`, `1800`, and `1900` are not leap years, but the year `2000` is.

**Additional Challenge:** Refactor your function to implement a **ternary** in place of your `if` statement.

## Operators

Navigate to the `operators.js` file to answer the questions below.

### `==` and `===` Comparison Operators Instructions

What two values can you provide the `looselyEquals` function so that it returns `true`?

#### `==` and `===` Comparison Operators Notes

`==` Checks the equality of two operands **without considering their type**

```
"4" == 4 //output: true because value is the same when types (string and number) are ignored
```

`===` Checks equality of two operands **with their types**

```
"4" === 4 //output: false because values are different when types (string and number) are accounted for
```

### `!` NOT Operator Instructions

Answer the following questions:

1. What will the `checkTruthiness` function return if `0` is passed as an argument? Why?
2. What will the `checkTruthiness` function return if `1` is passed as an argument? Why?
3. What will the `checkTruthiness` function return if an empty string is passed as an argument? Why?
4. What will the `checkTruthiness` function return if `a string` is passed as an argument? Why?
5. What will the `checkTruthiness` function return if `newVariable` is passed as an argument? Why?

### `!` NOT Operator Notes

- Inverts a boolean
- Inverts truthiness of non-boolean

```
const didHomework = true;
const didNotDoHomework = !didHomework;
console.log(didNotDoHomework); //false b/c ! inverts value of didHomework
```

```
const string = "Stephanie";
const stringLength = string.length;
console.log("stringLength", stringLength); //outputs 9
const isStringEmpty = !string.length;
console.log("isStringEmpty", isStringEmpty); //outputs false b/c the value of string.length is truthy and when the ! operator is added, it turns that into the opposite which is false
```

------NEED TO OMIT OR EDIT BELOW ----

## Operators

Answer the questions in each section.

### `||` OR Operator Instructions

#### `||` OR Operator Description

- Checks two values
- If one or both values are true or truthy, returns true
- If both values are false or falsy, returns false

```
const schoolName = "Masterschool";
const checkSchoolNameLength = schoolName.length > 4 || schoolName.length < 5;
console.log(checkSchoolNameLength); //output: true b/c schoolName.length > 4
```

### `!` NOT Operator

- Inverts a boolean
- Inverts truthiness of non-boolean

```
const didHomework = true;
const didNotDoHomework = !didHomework;
console.log(didNotDoHomework); //false b/c ! inverts value of didHomework
```

```
const string = "Stephanie";
const stringLength = string.length;
console.log("stringLength", stringLength); //outputs 9
const isStringEmpty = !string.length;
console.log("isStringEmpty", isStringEmpty); //outputs false b/c the value of string.length is truthy and when the ! operator is added, it turns that into the opposite which is false
```

### `condition ? execute if true : execute if false` Ternary Operator

- Checks a condition before the `?` operator
- If the condition is true, it executes the block before the `:`
- If the condition is false, it executes the block after the `:`

```
const number = 6;
const isADozen = number > 12 ? "Is more than a dozen" : "Is less than a dozen";
console.log(isADozen); //output: "Is less than a dozen"
```

### `%` Modulo (Remainder) Operator

Returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

```
13 % 5 //output: 3 b/c 5 goes into 13 two times with a remainder of 3
12 % 6 //output: 0 b/c 6 goes into 12 without any remainder
```

### `&&` AND Operator

- Checks 2 values and returns a boolean
- If both values are true or truthy, returns true
- If one or both of the values is false or falsy, returns false

```
const checkAddition = 1 + 1 === 2 && 1 + 3 === 2;
console.log(checkAddition); //false b/c 1 + 3 does not equal 3
```

## Comparison Operators

Compare two values and return true or false

`===` strict equal
`!==` strict not equal
`>` greater than
`>=` greater than or equal
`<` less than
`<=` less than or equal

## Truthy and Falsy

Values evaluate to true or false when evaluated as Booleans.

- Falsy: values that evaluate to false - e.g., `""`, `null`, `undefined`, `0`, `NaN`
- Truthy: values that evaluate to true

```
console.log(0); //outputs 0
console.log(!!0); //outputs false bc 0 is falsy, then the double bang turns it into a boolean
console.log(!!1); //outputs true because 1 is truthy, then double bang turns it into a boolean
```
