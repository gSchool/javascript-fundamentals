# For and While Loops

## Learning Objectives

By the end of this lesson you will be able to:

* Loop a certain number of times with for and while

## Loops

### While loops

A while loop is another way of controlling our programs.  Here is the syntax:

```
while ( /* Boolean expression */ ) {
    Execute code
}
```

You can see that it is very similar to an `if` statement. The primary way that it differs is that instead of executing the code inside one time, it continues to execute the code inside, over and over, as long as the expression evaluates to `true`.

Here is an example:

```
var timesForPhrase = 10;
var phrase = prompt("What do you want to say " + timesForPhrase + " times?");

var i = 0;
while (i < timesForPhrase)  {
   console.log(phrase);
   i++;
}

```

In this example, the code will execute 10 times. The first time, the condition checked is `0 < 10`. The code runs, which increments `i` by 1, and the condition checked is now `1 < 10`. This repeats until `10 < 10`, which is `false`, and the loop terminates.

```
var input;
var total = 0;
while (input != "q") {
  input = prompt("What numbers do you want to add to the total?");
  if (!isNaN(parseInt(input))) {
    total += parseInt(input);
  }
  console.log("Total is now: " + total)
}

```

This code could *theoretically* run forever, because we don't know when the user will type `q`. Use `while` loops when you want code to run _until_ something happens.

### Do-while loop

Related to the while loop is the do-while loop. How do you think these two code blocks are similar? How are they different?

```
// log some squares

var i = 1;
while (i < 10) {
  console.log(i*i);
  i++;
}

// log some squares, another way

var i = 1;
do {
  console.log(i*i);
  i++;
} while(i < 10);
```

#### Beware of infinite loops!

Sometimes, you may accidentally write a loop that will never end. This is called an **infinite loop**, and is something every programmer does from time to time. Here's an example: suppose you want to log the numbers 1 through 10 to the console using a `while` loop, but you forget to increment your index at each step:

```
// Don't paste this into the browser unless you want to force quit Chrome!
var i = 1;
while (i <= 10) {
  console.log(i);
}
```

### For Loops

`for` loops perform the same actions as a `while` loop, but are structured differently in order to facilitate different uses. Exactly the same way that `if` statements and `switch` statements do the same thing (conditionally execute code), but are used in different ways.

Here is an example of a for loop:
```
for (var i=0; i < 10; i++) {
  console.log(i);
}

```

This example prints the numbers 1-10, exactly as the `while` loop example above does. The way that it works is different, however.

What happens in a `for` loop is:

1. The initialization code for the loop runs once, the first time the loop is executed. In the example above, `var i=0;` is the initialization step.
2. The conditional is checked, and the loop executes the code. This part is most similar to the `while` loop. In the example above, `i < 10;` is the condition.
3. The statements inside the loop are executed - `console.log(i);` in the example.
4. The iteration step runs last. This is where you change variables related to the condition step. `i++;` is the iteration step in the code above.

When you know in advance how many times you want a loop to run (the length of an array, or a specific number), a `for` loop is best. When you want to run code _until_ a condition is met, a `while` loop is best.

Sometimes it helps to think about it like this:  
* `while` the sun is out, sit outside and drink lemonade.
* `for` 3 hours, sit outside and drink lemonade.

When you get to Arrays and Objects, you'll cover `for` loops again, as they are very useful when dealing with data structures.

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
