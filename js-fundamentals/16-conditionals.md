# Conditionals

## Learning Objectives

By the end of this lesson you will be able to:

* Use conditionals to branch code

## Resources

While loops allow things to happen multiple times, conditionals will potentially allow
things to not happen at all. This adds a lot of options for your code!

* (Read until Loops) [Galvanize: Control Flow](https://github.com/gSchool/javascript-curriculum/blob/master/10_Syntax/02_Control_Flow.md)

## Challenges

<!-- Question -->
### !challenge

* type: code-snippet
* language: javascript
* id: 06c9ffa0-b3c9-11e8-86aa-2d44bc389978
* title: Conditionals

### !question

There is a variable called number. Write the following logic into the code:

* If the number is less than 10, log 'less than 10'
* If it's greater than 10, log 'greater than 10'
* Otherwise, log out 'the value is 10'

This should use an if, else if, else style conditional.

### !end-question

### !placeholder

```js
function studentCode(console) {
  var number = 10
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
      expect(c.values).to.eql(['the value is 10'])
    })

    it("uses if and else", function() {
      let src = studentCode.toString()
      expect(src.includes('if')).to.equal(true)
      expect(src.includes('else')).to.equal(true)
    })
})
```
### !end-tests

### !end-challenge
