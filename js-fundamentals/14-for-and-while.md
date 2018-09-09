# For and While Loops

## Learning Objectives

By the end of this lesson you will be able to:

* Loop a certain number of times with for and while

## Resources

There are many ways to loop or iterate in JavaScript, but for and while loops
are the most fundamental, and you'll never stop using them entirely.

[Galvanize: Loops](https://github.com/gSchool/javascript-curriculum/blob/master/10_Syntax/02_Control_Flow.md#user-content-loops)

## Challenges
<!-- Question -->
### !challenge

* type: code-snippet
* language: javascript
* id: aef495e0-b3d9-11e8-92ed-57e3f4477ba5
* title: for Loops

### !question

Use a for loop to log the numbers 0 though 10

### !end-question

### !placeholder

```js
function studentCode(console) {
  // your code here
}
```

### !end-placeholder

### !tests

```js
describe('for loop code', function() {

    it("logs the numbers 0 through 10", function() {
      let c = {
        values: [],
        log(x) {
          this.values.push(x)
        }
      }
      studentCode(c)
      for (let i = 0; i <= 10; i++) {
        expect(c.values[i]).to.equal(i)
      }
    })

    it("uses a for loop and not a while loop", function() {
      let src = studentCode.toString()
      expect(src.includes('for')).to.equal(true)
      expect(src.includes('while')).to.equal(false)
    })

})
```
### !end-tests

### !end-challenge
<!-- Question -->
### !challenge

* type: code-snippet
* language: javascript
* id: aef495e1-b3d9-11e8-92ed-57e3f4477ba5
* title: while Loops

### !question

Use a while loop to log the numbers 0 though 5

### !end-question

### !placeholder

```js
function studentCode(console) {
  // your code here
}
```

### !end-placeholder

### !tests

```js
describe('loop', function() {

    it("logs the numbers 0 through 5", function() {
      let c = {
        values: [],
        log(x) {
          this.values.push(x)
        }
      }
      studentCode(c)
      for(let i = 0; i <= 5; i++) {
        expect(c.values[i]).to.equal(i)
      }    
    })

    it("uses a while loop and not a for loop", function() {
      let src = studentCode.toString()
      expect(src.includes('for')).to.equal(false)
      expect(src.includes('while')).to.equal(true)
    })
})
```
### !end-tests

### !end-challenge
