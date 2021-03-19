# Return

## Learning Objectives

By the end of this lesson you will be able to:

* Write functions that return values and assign those values

### The keyword `return`

You may have noticed that when we invoked `greet()`, the console logged the value `undefined`. This points to an important part of how functions are designed. Every function **returns** a value. If you do not specify a `return` statement, then it will return `undefined`.

Logging is similar to a chef following a recipe and shouting when he executes one of the steps of the recipe; moreover, a chef yelling each step isn’t the same as a chef creating our meal and then returning a meal to us. Imagine you order a dish and you can hear the chef calling out each step, but no one ever gives you the dish.

If you want to add instructions on what a function should return, you'll need to use the keyword `return`. Return looks like this:

```javascript
function greet() {
  console.log("Hello, World!");
  return "You told me to return.";
}

greet()
// The console will print:
// "Hello, World!"
// "You told me to return." - This is where undefined was
```

The keyword `return` may be followed by any valid JavaScript Expression. You can have a string, as above, or you can add numbers, a series of numbers and operators (`2 + 7 / 3`) or even `null`.

Take note that `return` has special behavior associated with it. The most notable is that once a function executes a `return` statement, all code succeeding it in a function never gets executed. In other words, be careful where and when you use `return`:

```javascript
function greet() {
  return "You'll never reach the console.log() message.";
  console.log("Hello, World!");
}

greet();
// "You'll never reach the console.log() message."
```

```js
function twoReturns() {
  return "I'm the only return that gets executed";
  return "You told me to return.";
  console.log("Hello, World!");
}

twoReturns()
// "I'm the only return that gets executed";
```

## Challenges

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: aef58040-b3d9-11e8-92ed-57e3f4477ba5
* title: Parameterizing Functions

### !question

Write a function called `sayMyName`. It should say "My name is [x]", where `x` is the passed in name. It should
return a string.

### !end-question

### !placeholder

```js
function sayMyName() {

}
```

### !end-placeholder

### !tests

```js
describe('sayMyName', function() {

    it("Takes in a name parameter and returns the correct value", function() {
      expect(sayMyName("Ada")).to.eq("My name is Ada")
      expect(sayMyName("Alan")).to.eq("My name is Alan")
    })

})
```

### !end-tests

### !explanation

Great! You can write a function with parameters and return values!

### !end-explanation

### !end-challenge
