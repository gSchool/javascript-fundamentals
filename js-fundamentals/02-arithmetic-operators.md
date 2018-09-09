# Arithmetic Operators

## Learning Objectives

_By the end of this lesson, you will be able to:_

* Use arithmetic operators on numbers

## Math in JavaScript

JavaScript lets you perform basic arithmetic operations like addition, subtraction, multiplication, and division using the `+`, `-`, `*`, and `/` operators, respectively. The arithmetic rules and order of operations apply as expected.

```javascript
1 + 1;  // 2
4 - 8;  // -4
3 * 4;  // 12
5 / 2;  // 2.5
```

## Modulo

One special character you may not have seen before is [modulo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()) or the "remainder" operator. It will divide a number, but instead of returning the divisible result, it returns the remainder that is left.

```js
5 / 2; // 2.5
5 % 2; // 1
```

You may not have thought about remainders in some time, but they can actually be incredibly helpful in programming.

## The Math global object

JavaScript also has a `Math` global object that has properties and methods for mathematical constants and functions.

```javascript
// pi
Math.PI;  // 3.141592653589793

// 2⁴
Math.pow(2, 4); // 16

// √4
Math.sqrt(4); // 2

// Round down to an integer
Math.floor(3.14); // 3
Math.floor(3.99); // 3

// Round up to an integer
Math.ceil(5.10);  // 6
Math.ceil(5.99);  // 6

// Round to the nearest integer
Math.round(7.25); // 7
Math.round(7.99); // 8
```

You can also use the `Math` object to generate random numbers.

```javascript
// Generate a random number from 0 up to but not including 1
Math.random();  // .229375290430

// Generate a random number from 0 up to but not including 10
Math.random() * 10; // 7.133676137309521

// Generate a random number from 1 up to but not including 11
Math.random() * 10 + 1; // 3.390042587649077

// Generate a random integer from 1 up to and including 10
Math.floor(Math.random() * 10 + 1); // 8
```

See the [`Math` global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) on the Mozilla Developer Network for more information.

## Order of Operations

Remember the acronym [__PEMDAS__](https://en.wikipedia.org/wiki/Order_of_operations#Mnemonics)? It represents the order in which mathematical operations will be performed. This will be a helpful tool when Javascript expressions become more complex.

```javascript
(1 + 1) + 3 * 5 - 2;  // 15
(1 + 1 + 3) * 5 - 2;  // 23
```

## Challenges

<!-- Question -->

### !challenge

* type: multiple-choice
* id: ffece760-b3d2-11e8-b5de-9f42ac92f790
* title: PEMDAS

##### !question

What is PEMDAS an acronym for?

##### !end-question

##### !options

* Priority for: Exponents, Multiplication, Division, Addition, Subtraction
* Priority for: Exponents, Multiplication, Division, Addition, Substitution
* Parentheses, Explanation, Modifications, Difference, Addition, Subtraction
* Parentheses, Exponents, Multiplication, Division, Addition, Subtraction

##### !end-options

##### !answer

Parentheses, Exponents, Multiplication, Division, Addition, Subtraction

##### !end-answer

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: ffed0e70-b3d2-11e8-b5de-9f42ac92f790
* title: Evaluate Modulo

##### !question

What does the following evaluate to?

```
10 % 5
```

##### !end-question

##### !answer

0

##### !end-answer

##### !placeholder

Write your answer

##### !end-placeholder

##### !explanation

Because 10 can be evenly divided by 5, the remainder is 0.

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: ffed0e71-b3d2-11e8-b5de-9f42ac92f790
* title: The Math global object

##### !question

Which of the following will generate a random range of numbers that is inclusive of _only_ the following:

```
2, 4, 6, 8
```

##### !end-question

##### !options


* `Math.floor(Math.random() * 4) * 2`
* `Math.ceil(Math.random() * 4) * 2`
* `Math.floor(Math.random() * 16) / 2`
* `Math.ceil(Math.random() * 16) / 2`


##### !end-options

##### !answer

`Math.ceil(Math.random() * 4) * 2`

##### !end-answer

### !end-challenge
