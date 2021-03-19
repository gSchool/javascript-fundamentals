# Native Array Methods

## Learning Objectives

By the end of this lesson you will be able to:

* Add and remove from arrays with native array methods

## Resources


### Array

Every array has access to a set of default properties and methods. Instead of exploring all of them now, we're going to explore the most frequently used, especially in the beginning:

 - `length`
 - `push([value])`
 - `pop()`
 - `slice(startIndex, endIndex)`
 - `splice(startIndex, count)`
 - `indexOf(element)`

First, [open this link in a new window](https://goo.gl/COHJVm), and step through the code. It should illuminate how these methods function.

* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

After seeing the visualization from the link above, answer these questions:

## Challenges

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: aef3d290-b3d9-11e8-92ed-57e3f4477ba5
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
