# Switch

## Learning Objectives

By the end of this lesson you will be able to:

* Use switch statements to handle multiple possible values to control the flow of programs

## Resources

You can think of switch as an alternate syntax for if, else, else if. All switches
can be expressed as ifs, but not the other way around. That being said, switches
can still help improve the readability of your code!

* (Read just the section on switch statements) [Galvanize: Switch](https://github.com/gSchool/javascript-curriculum/blob/master/10_Syntax/02_Control_Flow.md#user-content-switch-statement)

## Challenges
### !challenge

* type: code-snippet
* language: javascript
* id: ffef5860-b3d2-11e8-b5de-9f42ac92f790
* title: Switch Statements

### !question

Rewrite your code from the last challenge to use switch statements.

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
    it("logs the correct value", function() {
      let c = {
        values: [],
        log(x) {
          this.values.push(x)
        }
      }
      studentCode(c)
      expect(c.values).to.eql(['the value is 10'])
    })
    it("uses only switch", function() {
      let src = studentCode.toString()
      expect(src.includes('if')).to.equal(false)
      expect(src.includes('else')).to.equal(false)
      expect(src.includes('switch')).to.equal(true)
    })
})
```
### !end-tests

### !end-challenge
