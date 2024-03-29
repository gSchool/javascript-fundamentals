# Anonymous Functions

## Learning Objectives

By the end of this lesson you will be able to:

* Write and invoke anonymous functions assigned to a variable

## Resources

Assigning anonymous functions to variables is a common way to create named functions.
These functions are often called function expressions.

* [MDN: Function Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)

## Challenges

### !challenge

* type: code-snippet
* language: javascript
* id: aef53222-b3d9-11e8-92ed-57e3f4477ba5
* title: Function Expressions

### !question

Create a function expression named `square` that squares a number. For example:

```js
square(2) // OUTPUT: 4
```

### !end-question

### !placeholder

```js
var square
```

### !end-placeholder

### !tests

```js
describe('square function', function() {

    it("square will square a number", function() {
      expect(square(9)).to.equal(81)
    })

})
```

### !end-tests

### !end-challenge
