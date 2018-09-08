# Native Array Methods

## Learning Objectives

By the end of this lesson you will be able to:

* Add and remove from arrays with native array methods

## Resources

If datatypes are the "nouns" of JavaScript, then methods can be thought of
as the "verbs" of JavaScript. Array's have many useful built in methods to add
and remove elements. One of the most popular sources of documentation for JavaScript
is the MDN. In the attached article, specifically read about push, pop, shift, and unshift, but
feel free to browse through some of the other methods as well!

* [Galvanize: Native Array Methods](https://github.com/gSchool/javascript-curriculum/blob/master/10_Syntax/03_Arrays_Objects_Iteration.md#native-array-and-object-methods)
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Challenges

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 303c4150-b3c3-11e8-9ceb-f1ccefb688fa
* title: Create Undefined Variables

### !question

Use the native array methods push and shift to modify
the contents of the array, such that it instead contains the values

```js
['dogs', 'wolves', 'lions']
```

### !end-question

### !placeholder

```js
var animals = ['cats', 'dogs', 'wolves']
```

### !end-placeholder

### !tests

```js
describe('native array methods', function() {

    it('has a variable called animals containing dogs, wolves, and lions', function() {
      expect(animals).to.be.eql(['dogs', 'wolves', 'lions'])
    })

})
```

### !end-tests

### !end-challenge
