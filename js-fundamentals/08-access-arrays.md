# Accessing Arrays

## Learning Objectives

By the end of this lesson you will be able to:

* Access and replace values with bracket notation

## Resources

Arrays wouldn't be very useful if you could only put data inside of them. Let's explore how
we can also access the data we put inside arrays.

Read until Objects
* [Galvanize: access Arrays](https://github.com/gSchool/javascript-curriculum/blob/master/10_Syntax/03_Arrays_Objects_Iteration.md#accessing-elements)

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
