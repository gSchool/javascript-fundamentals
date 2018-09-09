# Comparison

## Learning Objectives

By the end of this lesson you will be able to:

* Compare numbers and booleans

## Logical operators

Logical operators `&&` (and), `||` (or) and `!` (not) are typically used with boolean (logical) values. When they are, they return a boolean value.

```javascript
true && true;   // true
true && false;  // false
false && true;  // false
false && false; // false

true || true;   // true
true || false;  // true
false || true;  // true
false || false; // false

!true;          // false
!false;         // true
```

As logical expressions are evaluated left to right, they are tested for possible "short-circuit" evaluation using the following rules.

```javascript
false && (anything);  // Short-circuit evaluated to false
true || (anything);   // Short-circuit evaluated to true
```

See the [logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) on the Mozilla Developer Network for more information.

## Relational operators

Relational operators `>` (greater than), `>=` (greater than or equal to), `<` (less than), and `<=` (less than or equal to) are used to compare the values of two numbers.

```javascript
7 < 7;  // false
7 <= 7; // true
```

## Equality operators

The triple equals `===` operator compares two values to see if they're exactly the same or "strictly equal" to one another. The operator evaluates to `true` if the values are equal **and** are the same type.

```javascript
4 === 3   // false
3 === 3   // true
3 === '3' // false
```

Conversely, the `!==` operator evaluates to `true` if the values are not equal and/or are not the same type.

```javascript
4 !== 3   // true
3 !== 3   // false
3 !== '3' // true
```

Be careful not to confuse the `===` operator with the single equal `=` operator. The `===` operator asks "Are these two values strictly equal?" while the `=` operator means "Assign the value on the right to the variable on the left." In short, the `===` operator is used for **comparison** and the `=` operator is used for **assignment**.

Remember, when you use the `=` operator, a variable name _must_ be on the left and the value you want to assign to that variable _must_ be on the right. On the other hand, since the `===` operator compares two values to see if they're strictly equal, it doesn't matter which value is on which side.

Related to the `===` and `!==` operators are the `==` and `!=` operators respectively. The double equals `==` operator compares two values to see if they're equal-ish or "loosely equal" to one another. The operator evaluates to `true` if the values are equal even if they're not the same type.

```javascript
4 == 3    // false
3 == 3    // true
3 == '3'  // true
```

Conversely, the `!=` operator evaluates to `true` if the values are not equal even if they're not the same type.

```javascript
4 != 3    // true
3 != 3    // false
3 != '3'  // false
```

At first it might seem much easier to use the `==` operator instead of the `===` operator. However, the `==` operator in JavaScript often produces some unexpected results.

```javascript
true == 1       // true
true == 'true'  // false
```

When JavaScript compares two values with the `==` operator, it first converts them to the same type. In the first example, it converts the boolean `true` into the number `1` which is why `true == 1` is true. In the second example, it converts the boolean `true` into the number `1` _and_ the string `'true'` into the number `NaN` which is why `true == 'true'` is false.

Because of [this and other strangeness](https://dorey.github.io/JavaScript-Equality-Table/), it's probably safest to just stick with `===` for now.

## Complex comparisons

The more time you spend with JavaScript, the more likely you're going come across expressions like these:

```JavaScript
!false && 1 > 10 || null && 10 > 1 || 1 < 0 && "false" === "False" // returns `false`
!false || 1 > 10 || null && 10 > 1 || 1 < 0 && "false" === "False" // returns `true`
```

When using the the `&&` AND operator, if the first expression can evaluate to `false`, the first expression is returned. Otherwise, it will return the the second expression.

When using the the `||` OR operator, if the first expression can evaluate to `true`, the first expression is returned. Otherwise, it will return the the second expression.

With this in mind, we can evaluate these complex logical expressions piece by piece moving from left to right. Let's work through one of these complex logical expressions together in our terminal or browser.

```javascript
// Start here
!false && 1 > 10 || null && 10 > 1 || 1 < 0 && "false" === "False" // returns `false`

// Let's wrap the first part of our expression in parentheses
// Checking to be sure it still evaluates the same
(!false && 1 > 10) || null && 10 > 1 || 1 < 0 && "false" === "False" // returns `false`

// Now we can focus on that initial expression
(!false && 1 > 10)
// !false will evaluate to true
// 1 > 10 will evaluate to false
(true && false)
// We can now using our && operator further simplifying this expression
(false)

// Let's now replace our prior code with this new simplified expression
(false) || null && 10 > 1 || 1 < 0 && "false" === "False" // returns `false`

// We can use this same process to group the next portion of our expression
(false || null) && 10 > 1 || 1 < 0 && "false" === "False" // returns `false`

// Separating out our parentheses
(false || null)
(null)

// Now replacing this in our larger expression again
null && 10 > 1 || 1 < 0 && "false" === "False" // returns `false`

// Working through the rest of these steps looks like the following
(null && 10 > 1) || 1 < 0 && "false" === "False"
(null) || 1 < 0 && "false" === "False"

(null || 1 < 0) && "false" === "False"
(false) && "false" === "False"

(false && "false" === "False")

false
```

## Challenges

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 26b71d10-b3d9-11e8-89b8-f32133e66ea3
* title: Complex Boolean Statements

##### !question

What will the following evaluate to?

```js
true && (false && true)
```

##### !end-question

##### !options

* true
* false
* undefined

##### !end-options

##### !answer

false

##### !end-answer

##### !explanation

Because both sides of the logical operator `&&` must be `true` in order for the entire expression to evaluate to `true`, the final result is `false`

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 26b71d11-b3d9-11e8-89b8-f32133e66ea3
* title: Greater Than

##### !question

What does this evaluate to?

```js
(21 * 2) > (22 * 1)
```

##### !end-question

##### !options

* true
* false

##### !end-options

##### !answer

true

##### !end-answer

##### !explanation

The numbers are evaluated before the comparison is done.

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 26b71d12-b3d9-11e8-89b8-f32133e66ea3
* title: Greater Than

##### !question

What does this evaluate to?

```js
36 % 6 > 1 - 500;
```

##### !end-question

##### !options

* true
* false

##### !end-options

##### !answer

true

##### !end-answer

##### !explanation

The numbers are evaluated before the comparison is done, even without parenthesis.

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 26b71d13-b3d9-11e8-89b8-f32133e66ea3
* title: Compare expressions

##### !question

What will the following evaluate to?

```js
"hello" == "Hello";
```

##### !end-question

##### !options

* true
* false
* NaN
* undefined

##### !end-options

##### !answer

false

##### !end-answer

##### !explanation

Even though we used the same type AND didn't strictly compare, because one string contains an uppercase letter they are not identical.

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 26b71d14-b3d9-11e8-89b8-f32133e66ea3
* title: Compare expressions

##### !question

What will the following evaluate to?

```js
100 * 5 === "500"
```
##### !end-question

##### !options

* true
* false
* NaN
* undefined

##### !end-options

##### !answer

false

##### !end-answer

##### !explanation

Because we compared type with a strict comparison operator, though they are both 500, one is a string and so they are not equivalent.

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 26b74420-b3d9-11e8-89b8-f32133e66ea3
* title: Compare expressions

##### !question

What will the following evaluate to?

```js
100 % 20 == "0"
```
##### !end-question

##### !options

* true
* false
* NaN
* undefined

##### !end-options

##### !answer

true

##### !end-answer

##### !explanation

We didn't compare type this time, and so 0 is equal to "0".

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: 26b74421-b3d9-11e8-89b8-f32133e66ea3
* title: Evaluate Math operations with Operators

##### !question

What will the following evaluate to?

```javascript
false || 11 % 3 === 2 || (5 - 3) * 4 === 12
```

##### !end-question

##### !answer

/[tT]rue/

##### !end-answer

##### !explanation

The second statement, `11 % 3 === 2` will return `true`. At that point, because all of the operators are `||` (or) statements, we know that this statement will evaluate to `true`.

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: 26b74422-b3d9-11e8-89b8-f32133e66ea3
* title: Evaluate Math operations with Operators

##### !question

What will the following evaluate to?

```js
11 % 3 === 2 && false && true === !false || !!undefined && true || false || (5 - 3) * 4 === 12 || "1" + 1 == 11
```

##### !end-question

##### !answer

/[tT]rue/

##### !end-answer

##### !explanation

To understand this problem, break it up into five distinct parts:

1. `11 % 3 === 2 && false && true === !false`
1. `!!undefined && true`
1. `false`
1. `(5 - 3) * 4 === 12`
1. `"1" + 1 == 11`

Why is separating it like this useful? Well, each statement is separated by an `||` (or) operator. If _any_ of these return `true`, then the entire statement returns `true`.

In the first part, each statement is joined by an `&&` (and) operator. If anything between the `&&`s is falsy, the entire statement is falsy. Right in the middle there is a plain `false` boolean which means this entire part is `false`.

In the second part, the double bang (`!!`) will convert any value to it's boolean representation. `undefined` on its own is falsy, therefore `!undefined` (with a single `!`) would be truthy. Adding an additional `!` converts it to the boolean value `false`. Because there is a `&&` joining this subsection and the `true` boolean value, the entire statement is falsy.

The third part is just `false`! Easy.

The fourth part requires a bit of math, but resolves to `8 === 12` which is falsy.

The fifth part is tricky and uses two kinds of type conversion. Concatenating a number and a string data type with a `+` will convert the end result to a string. For example:

```js
"1" + 1 // "11"
```

Now, compare `"11" == 11`. Since the statement has a double equals (`==`) instead of triple equals (`===`), type conversion will take place. Because `"11"` and `11` are "equal-ish", this statement will return `true`. That will make the entire overall statement `true`.

##### !end-explanation

### !end-challenge
