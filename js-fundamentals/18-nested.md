# Nested Loops

## Learning Objectives

By the end of this lesson you will be able to:

* Loop through deeply nested arrays and objects with for loops

## Resources

We can also nest loops inside of loops! One of the most common uses is when working with nested arrays

* [Nested Arrays](http://www.elated.com/articles/nested-arrays-in-javascript/)

## Challenges

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 86b4acf0-b3cf-11e8-9c80-3f50f0d4f65c
* title: nested loops

### !question

Use nested for loops to print off every cell of the tic-tac-toe board starting at the top left and ending at the bottom right.

### !end-question

### !placeholder

```js
function studentCode(console) {
  var ticTacToeBoard = [
   ['x', 'o', 'o'],
   ['x', 'o', 'x'],
   ['o', 'o', 'x']
  ]
  // your code here
}

```

### !end-placeholder

### !tests

```js
describe('studentCode', function() {
    it("logs the correct value", function() {
      let c = {
        values: [],
        log(x) {
          this.values.push(x)
        }
      }
       studentCode(c)
       var ticTacToeBoard = [
         'x', 'o', 'o',
         'x', 'o', 'x',
         'o', 'o', 'x'
       ]
      expect(c.values).to.eql(ticTacToeBoard)
    })
})
```
### !end-tests

### !end-challenge
