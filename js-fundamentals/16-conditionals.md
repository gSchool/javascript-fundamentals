# Conditionals

## Learning Objectives

By the end of this lesson you will be able to:

* Use conditionals to branch code

## Why do we need Conditionals and Loops?

Programs are of course more complex than one-line statements and variable assignment. If we want to control programs that change based on the parameters of the program (eg, in response to user input), we'll need a way to tell our program when to do what.

Enter **Control Structures**.

Control Structures are a way of controlling what statements are executed. We can execute statements **IF** something happens. **IF** something has not happened, we can do something **ELSE**. **WHILE** something is happening, we can execute statements, or we can execute them **FOR** a specific number of *iterations*.

> To **iterate** means "perform or utter repeatedly."

## Conditionals

Conditionals control the flow of a program.  Conditionals decide which code statements gets run based on some **Boolean** input to the conditional.  An example from everyday life would be:

> If you spend $100 or more, then you get 20% off, otherwise the purchase is full price

In the example above, the input to the conditional is whether or not the total amount of your purchase is greater than or equal to $100.

### If statements

The most basic control flow statement is the `if` statement.  Here is our example from above in code:

```javascript
var total = 284;

if (total >= 100) {
  total = total * .8;
}

// Display the total to the user
console.log('Your total is: $' + total.toFixed(2));
```

Let's practice with some other if statements!

```javascript
if (1 + 1 === 2) {
  console.log('Arithmetic is the best');
}

if (1 + 1 !== 2) {
  console.log('Math is broken.');
}
```

We can also combine these two statements using `if...else`:

```javascript
if (1 + 1 === 2) {
  console.log('Arithmetic is the best');
} else {
  console.log('Math is broken');
}
```

See the [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) documentation on the Mozilla Developer Network for more information.

## Challenges

<!-- Question -->
### !challenge

* type: code-snippet
* language: javascript
* id: aef4e400-b3d9-11e8-92ed-57e3f4477ba5
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
