# JS Basics

## Control Flow

The order in which statements are executed in a program.

### Default Control Flow

Statements are read and executed from left-to-right, top-to-bottom in a file.

### Control Structures

Alter control flow by executing code only if specific conditions are met - e.g., `if()` statments.

## Operators

### `||` OR Operator

- Checks two values
- If one or both values are true or truthy, returns true
- If both values are false or falsy, returns false

```
const schoolName = "Masterschool";
const checkSchoolNameLength = schoolName.length > 4 || schoolName.length < 5;
console.log(checkSchoolNameLength); //output: true b/c schoolName.length > 4
```

### Ternary Operator

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
