# Accessing Arrays

## Learning Objectives

By the end of this lesson you will be able to:

* Access and replace values with bracket notation

### Accessing Elements

To access and read each element in the array, we need to use square bracket notation with an index. Indices (plural of Index) are always numbers.

```javascript
var cats = ["Elie", "Janey", "Matt", "Parker", "Tim"];

cats[0]; // "Elie"
cats[1]; // "Janey"
cats[2]; // "Matt"
cats[3]; // "Parker"
cats[4]; // "Tim"
```

Notice that the index starts with `0` and then increments by `1`. We say that arrays are _zero-indexed_ because the first element is at index 0, not at index 1.

Given the following code:

```javascript
var cats = ["Elie", "Janey", "Matt", "Parker", "Tim"];
var index = 3;
```

### `length` property

Every array has a `length` property. The `length` property stores the current length of an array.

```javascript
var cats = [];
cats.length;  // 0

cats[0] = "Sherlock";
cats.length; // 1
```

### Updating Elements

To update a value stored at a specific index, we can simply reassign the value at that index.

```javascript
var cats = ["Elie", "Janey", "Matt", "Parker", "Tim"];

cats[2] = "Mathematical Matt";

// ["Elie", "Janey", "Mathematical Matt", "Parker", "Tim"]
```

### Iterating over an array

One of the most common things we want to do with an array is iterate over it so that we can look at and use each element in an array. We commonly use a `for` loop to iterate over an array.

#### `for` loops with Arrays

Let's first view the code to iterate with arrays:

```javascript
var books = ["JavaScript: The Good Parts", "Eloquent JS", "You Don't Know JS"];

for (var i = 0; i < books.length; i++) {
	var book = books[i];
	console.log(book);
}
```

Will output:

```
> JavaScript: The Good Parts
> Eloquent JS
> You Don't Know JS
```

Imagine that we want to iterate through every element from our array from the first index to the last index. To achieve this goal, we essentially define a four-step process:

1. Declare a variable that represents the first index (`i`) and set its value to the first index (`0`).
2. Write a conditional statement that terminates when we iterated once for each element in the array.
3. We want to increment `i` after every iteration of the `for` loop.
4. During each iteration, we use `i` to access an element in the array.

## Challenges

<!-- Question -->

### !challenge

* type: multiple-choice
* id: aef3ab80-b3d9-11e8-92ed-57e3f4477ba5
* title: Access Arrays A

##### !question

Given the following code:

```javascript
var cats = ['Elie', 'Janey', 'Matt', 'Parker', 'Tim'];
var index = 3;
```

What will the expression `cats[index]` produce?

##### !end-question

##### !options

* `'3'`
* `3`
* `'Parker'`
* `'Tim'`
* `'Matt'`
* `undefined`

##### !end-options

##### !answer

`'Parker'`

##### !end-answer

##### !explanation

Whatever _expression_ is inside the brackets is _evaluated_, and the result is used to index into the array.

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: aef3ab81-b3d9-11e8-92ed-57e3f4477ba5
* title: Access Arrays B

##### !question

Given the following code:

```javascript
var cats = ['Elie', 'Janey', 'Matt', 'Parker', 'Tim'];
var index = 3;
```

What will the expression `cats[index - 1]` produce?

##### !end-question

##### !options

* `'3'`
* `3`
* `'Parker'`
* `'Tim'`
* `undefined`
* `'Matt'`

##### !end-options

##### !answer

`'Matt'`

##### !end-answer

##### !explanation

Whatever _expression_ is inside the brackets is _evaluated_, and the result is used to index into the array.

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: aef3ab82-b3d9-11e8-92ed-57e3f4477ba5
* title: Access Arrays C

##### !question

Given the following code:

```javascript
var cats = ['Elie', 'Janey', 'Matt', 'Parker', 'Tim'];
var index = 3;
```

What will the expression `cats[index + 10]` produce?

##### !end-question

##### !options

* `'3'`
* `3`
* `'Parker'`
* `'Tim'`
* `'Matt'`
* `undefined`

##### !end-options

##### !answer

`undefined`

##### !end-answer

##### !explanation

Accessing values outside of an array will return `undefined`.

##### !end-explanation

### !end-challenge
