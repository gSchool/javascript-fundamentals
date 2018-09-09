# Function Declarations

## Learning Objectives

By the end of this lesson you will be able to:

* Write and invoke a named function declaration

## Resources

Another common syntax is function declarations. Outside of small scope changes, these
are more or less interchangeable with function expressions.

* (Read until The keyword return) [Galvanize: Functions](https://github.com/gSchool/javascript-curriculum/blob/master/10_Syntax/04_Functions.md)
* [MDN: Function statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

## Challenges

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: ffefa681-b3d2-11e8-b5de-9f42ac92f790
* title: Function Declarations

### !question

Create a function statement named `excite` that makes a string more exciting. For example:

```js
excite('hello') // OUTPUT: 'hello!'
```

### !end-question

### !placeholder

```js
// Write your function declaration here
```

### !end-placeholder

### !tests

```js
describe('excite function', function() {

    it('adds an explanation point to the input', function() {
      expect(excite('Hello World')).to.equal('Hello World!')
    })

})
```

### !end-tests

### !end-challenge
