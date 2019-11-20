# Function Declarations

## Learning Objectives

By the end of this lesson you will be able to:

* Write and invoke a named function declaration

### What's a Function?

In one sentence, we can say that a **function** is a reusable block of code. A good real-world analogue would be a recipe.

Functions have names, much like recipes - when you tell someone to make you a pumpkin pie, you are really telling them to execute a sequence of small steps in a specific order, in order to return to you a pumpkin pie. When you tell someone to make 5 pumpkin pies, you have changed the input, but the sequence of steps is the same. The input to a function when a function is run is called an **argument**. Inside the function, inputs are called **parameters**. The sequence of steps is called the *function body*.

### The Syntax of a Function

The way we create functions in the real world is different from how we create functions in JavaScript. In the real world, a recipe has a series of bullet points with instructions. In order to create functions in JavaScript, we need to use a particular syntax:

```javascript
function name ( parameter, parameters ) {
  //body (i.e., statements, expressions, values)
}
```

There are four parts to the above code example:

1. Keyword `function`
1. Name for that function
1. Parameters - a comma separated list enclosed in parenthesis
1. Instructions - a variable number of optional instructions enclosed in curly braces

###  Function Creation

Given the above the syntax of a function. Let's apply this technique to create a function named `greet()`, which will log to the console the string `"Hello, World!"`:

```javascript
function greet() {
  console.log("Hello, World!");
}
```

> 💻 Time to practice! Each time you see a code snippet, run that code in either your `node` console, or use an online tool like [REPL.it](http://repl.it/languages/javascript). This will help you recall these concepts later.

This function is very much like a variable, in that it's a *name* with a *value*. The value of the name is the entire function declaration. If we want to see the value of our function, we can print it to the console the same way we do with any other variable- input the name of the function to our REPL, or call `console.log(greet)`:

```javascript
function greet() {
  console.log("Hello, World!");
}

greet
```

Will output:

```javascript
// function greet() {
//  console.log("Hello, World!");
// }
// undefined
```

Now some of you may be confused. You may have have imagined `"Hello, World!"` logged to our console- not the definition of the function. If I'm describing you, then you've got great intuition. When working with functions, there are two steps: creating and **invoking**. What you imagined reading (`"Hello, World!"`) happens during the *invocation* step of a function.

### Function Invocation

To this point, we've just created a recipe for `greet`, we haven't actually told anyone or anything to execute the instructions in our function.

To execute the code inside our curly braces, we need to use an operator of `()` next to the name of our function:

```javascript
function greet() {
  console.log("Hello, World!");
}

greet();
// "Hello, World!"
// undefined

greet();
// "Hello, World!"
// undefined

greet();
// "Hello, World!"
// undefined
```

That's it! Now we can re-use the instructions of `greet` whenever we want. Above, we just *invoked* it 3 times.

* [MDN: Function statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

## Challenges

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: aef55930-b3d9-11e8-92ed-57e3f4477ba5
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
