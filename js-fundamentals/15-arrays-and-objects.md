# Looping Over Arrays and Objects

## Learning Objectives

By the end of this lesson you will be able to:

* Loop over arrays and objects

## Resources

One of the most common use cases for loops is to iterate through arrays and objects. The
best way to loop over objects is to use the specialized for in loop.

* [MDN: Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
* [MDN: For in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

## Challenges

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 303def00-b3c3-11e8-9ceb-f1ccefb688fa
* title: for Loops with Arrays

### !question

Use a `for` loop to log each number in the array

### !end-question

### !placeholder

```js
function studentCode(console) {
  var arr = [1, 2, 5, 10, 20]
  // your code here
}
```

### !end-placeholder

### !tests

```js
describe('studentCode', function() {
    it("logs the values of the array", function() {
      let c = {
        values: [],
        log(x) {
          this.values.push(x)
        }
      }
      studentCode(c)
      expect(c.values).to.eql([1, 2, 5, 10, 20])
    })
})
```
### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 303def01-b3c3-11e8-9ceb-f1ccefb688fa
* title: for in Loops

### !question

Use a `for..in` loop to log each property and value in the object

### !end-question

### !placeholder

```js
function studentCode(console) {
  var obj = {
    name: 'zoe',
    age: 40
  }

  // log the key
  // then log the value
}
```

### !end-placeholder

### !tests

```js
describe('studentCode', function() {
  it("logs the values of the object", function() {
    let c = {
      values: [],
      log(x) {
        this.values.push(x)
      }
    }
    studentCode(c)
    expect(c.values).to.eql(['name', 'zoe', 'age', 40])
  })
})
```

### !end-tests

### !end-challenge
