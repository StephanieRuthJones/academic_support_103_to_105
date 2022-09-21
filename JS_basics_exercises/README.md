# JS Basics

# How to Run JS Files

Run JS files from the project's root directory with the command `node JS_basics_exercises/[file_name]`

# 1. Leap Year - `1_leap_year.js`

Navigate to the `1_leap_year.js` file to complete this exercise.

Write a function called `leapYear` that takes in a year and has an **if statement** that returns `true` if the year is a leap year and `false` if the year is not a leap year

> ℹ️ **NOTE:** Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by `100`, but these centurial years are leap years if they are exactly divisible by `400`.
>
> For example, the years `1700`, `1800`, and `1900` are not leap years, but the year `2000` is.

**Additional Challenge:** Refactor your function to implement a **ternary** in place of your `if` statement.

#### `condition ? execute if true : execute if false` Ternary Operator Notes

- Checks a condition before the `?` operator
- If the condition is true, it executes the block before the `:`
- If the condition is false, it executes the block after the `:`

```
const number = 6;
const isADozen = number > 12 ? "Is more than a dozen" : "Is less than a dozen";
console.log(isADozen); //output: "Is less than a dozen"
```

#### `%` Modulo (Remainder) Operator Notes

Returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

```
13 % 5 //output: 3 b/c 5 goes into 13 two times with a remainder of 3
12 % 6 //output: 0 b/c 6 goes into 12 without any remainder
```

# 2. Equals - `2_equals.js`

Navigate to the `2_equals.js` file to answer the questions below.

i. What two values can you provide the `looselyEquals` function so that it returns `true`?

ii. What value can you provide the `strictlyEquals` function so that it returns `true`?

#### `==` and `===` Comparison Operators Notes

`==` Checks the equality of two operands **without considering their type**

```
"4" == 4 //output: true because value is the same when types (string and number) are ignored
```

`===` Checks equality of two operands **with their types**

```
"4" === 4 //output: false because values are different when types (string and number) are accounted for
```

# 3. `&&` AND Operator - `3_and_operator.js`

Navigate to the `3_and_operator.js` file to complete this exercise.

Write a function called `isADog` that takes in two arguments: `animalSound` and `wantsTreats`. The `isADog` function implements the `&&` operator to return `true` if the `animalSound` is equal to the string `woof` and `wantsTreats` is `true`. It returns `false` if the `animalSound` is NOT equal to the string `woof` OR if `wantsTreats` is `false`

#### `&&` AND Operator Notes

- Checks 2 values and returns a boolean
- If both values are true or truthy, returns true
- If one or both of the values is false or falsy, returns false

```
const checkAddition = 1 + 1 === 2 && 1 + 3 === 2;
console.log(checkAddition); //false b/c 1 + 3 does not equal 3
```

# 4. `||` OR Operator - `4_or_operator.js`

Navigate to the `4_or_operator.js` file to complete this exercise.

Write a function called `howLong` that uses the **OR operator** to return `true` if a string's length is greater than `10` or less than `5`

#### `||` OR Operator Notes

- Checks two values
- If one or both values are true or truthy, returns true
- If both values are false or falsy, returns false

```
const schoolName = "Masterschool";
const checkSchoolNameLength = schoolName.length > 4 || schoolName.length < 5;
console.log(checkSchoolNameLength); //output: true b/c schoolName.length > 4
```

# 5. Truthy and Falsy - `5_truthy_falsy.js`

Navigate to the `5_truthy_falsy.js` file to answer the questions below.

i. If you provide `0` as an input to the `checkTruthiness` function, what is the output? Why?

ii. If you provide `1` as an input to the `checkTruthiness` function, what is the output? Why?

iii. If you provide an empty string as an input to the `checkTruthiness` function, what is the output? Why?

iv. If you provide `some string` as an input to the `checkTruthiness` function, what is the output? Why?

v. If you provide `NaN` as an input to the `checkTruthiness` function, what is the output? Why?

vi. If you provide `newVariable` as an input to the `checkTruthiness` function, what is the output? Why?

#### Truthy and Falsy Notes

Values evaluate to true or false when evaluated as Booleans.

- Falsy: values that evaluate to false - e.g., `""`, `null`, `undefined`, `0`, `NaN`
- Truthy: values that evaluate to true

```
console.log(0); //outputs 0
console.log(!!0); //outputs false bc 0 is falsy, then the double bang turns it into a boolean
console.log(!!1); //outputs true because 1 is truthy, then double bang turns it into a boolean
```

#### `!` NOT Operator Notes

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

# 6. Switch Statement - `5_switch_statement.js`

Navigate to the `5_switch_statement.js` file to complete this exercise.

Write a function called `printDadJoke` that takes in a number argument called `levelOfCorny` from `1` to `3`. Implement a switch statement to return a dad joke based on the `levelOfCorny` provided:

- If `levelOfCorny` is `1`, return `"I'm afraid for the calendar. Its days are numbered."`
- If `levelOfCorny` is `2`, return `"What do a tick and the Eiffel Tower have in common?" "They're both Paris sites."`
- If `levelOfCorny` is `3`, return `"I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along."`
- If `levelOfCorny` is not 1-3, return `"No dad would ever make a joke that corny!"`