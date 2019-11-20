# Multiple Parameters

## Learning Objectives

By the end of this lesson you will be able to:

* Write and invoke functions with multiple parameters

### Parameters and Arguments

So far, we've learned how to re-use code with the aid of functions. We can define a function once, and then invoke it many times. However, during each invocation, we execute the same code with the same static values--the output never changes.

This outcome is analogous to a website that greets every user whom logs into a site with the the following greeting: "Hello, user." How generic; how static! The value of that greeting would be infinitely better if every user could be greeted with their name- "Hello, Danny." To add this behavior to our code, we can include parameters and arguments to our functions.

#### Parameters

When we define a function, we can create variables that are local to a function and assigned during invocation. These specific variables are called parameters:

```javascript
function greet(name) {
  return "Hello, " + name;
}
```

Let's view what happens when we now invoke `greet`:

```javascript
function greet(name) {
  return "Hello, " + name;
}

greet();
// "Hello, undefined"
```

Hmmmm... Not quite what we wanted. We'll need arguments to assign values to our parameters.

#### Arguments

To dynamically assign a value to `name`, we need to pass a value to `greet()` during invocation. An argument is passed by putting a variable or value in an invocation's parenthesis. The position of this argument will correspond with the position of the parameter. We'll write some example code to make this process clearer:

```javascript
function greet(name) {
  return "Hello, " + name;
}

greet("Grace Hopper");
// "Hello, Grace Hopper"
```

`"Grace Hopper"` is the first argument passed when invoking `greet()`. During invocation, `"Grace Hopper"` is assigned to the first parameter of `greet()`, `name`.

### The keyword `arguments`

You'll often encounter situations where you can't know ahead of time how many arguments you're going to need. Other times, you want to be able to decide how many arguments to pass in during invocation. In both of these situations you want to utilize a keyword that exists only inside of functions: `arguments`. This keyword exhibits the following behavior:

* the keyword `arguments` exists only inside of a function
* the keyword `arguments` is _array-like_, which means it has some functionality of an array, such as `length`, but not others (such as `.join`).

Let's use `arguments` in a function and see what we can and cannot do:

```javascript
function args() {
  return arguments.length;
}

args(1,2,3);
// 3
```

Notice that the correct number of arguments is being logged to the console. We achieved this functionality with the `length` property being used on `arguments`. Let's look at another example:

```javascript
function total() {
  var total = 0;
  for (var i=0; i<arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      total += arguments[i];
    }
  }
  return total;
}

total(1,2,3);
// 6
```

We can loop over `arguments` because it has a `.length` property, like an array. We can also index into it, because it contains all of the arguments that were passed into the function when it was invoked, in the order that they were passed in.

Now watch what happens when we try to use an array method such as `pop()`:

```javascript
function args() {
  console.log(arguments.pop());
}

args(1,2,3);
// ...arguments.pop is not a function...
```

Using the `pop()` method doesn't work, and this observation confirms our assumption that `arguments` doesn't have access to all methods of an array. So what methods or properties does it have? Let's use console.log to see! As we'll soon notice, `arguments` is actually an object where each argument being passed, from left to right, is assigned a numeric key starting from the integer `0`. `arguments` also has a `length` property, as we learned in an earlier example.


### Optional Arguments

Javascript allows us to call functions without all of the defined arguments. Take a look at the example below- it has two parameters: `base` and `exponent`. We're able to call the function successfully without both arguments, because on the first line we're using a technique called **Short Circuit Evaluation**. `var exponent = exponent || 2;` will set the variable `exponent` to `2` in the case that `exponent` contains a "falsey" value such as `undefined`).

```js
function power(base, exponent) {
  var exponent = exponent || 2;
  var result = 1;
  for (var count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(4, 3));
// → 64

```

## Challenges

### !challenge

* type: code-snippet
* language: javascript
* id: aef5a750-b3d9-11e8-92ed-57e3f4477ba5
* title: Multiple Parameters A

### !question

We're going to write a function that takes multiple parameters. One for your name, and one for your title.

* Write a function called `formalGreeting` that takes two parameters.
* The first parameter should be a string, `name`
* The next parameter should be a string, `title`
* `return` a string that is formatted like so: `"My name is Rear Admiral Grace Hopper"`

### !end-question

### !placeholder

```js
```

### !end-placeholder

### !tests

```js
describe('formalGreeting', function() {

    it("returns a formal greeting ", function() {
      expect(formalGreeting("Grace Hopper", "Rear Admiral"), "Doesn't return the correct value").to.eq("My name is Rear Admiral Grace Hopper");
      expect(formalGreeting("Ada Lovelace", "Countess"), "Doesn't return the correct value").to.eq("My name is Countess Ada Lovelace");
    })

})
```
### !end-tests

### !explanation

Great! You can write functions with more than one parameter, and return values composed of multiple operations!

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: aef5a751-b3d9-11e8-92ed-57e3f4477ba5
* title: Multiple Parameters B

### !question

Time to write a function with a little more complex behavior.

* Write a function called `whichIsLonger`
* It should accept two strings
* `return` the longer of the two strings.
* If the strings are the same length, return the first string.

### !end-question

### !placeholder

```js
function whichIsLonger(first, second) {
  // your code here...
}

// whichIsLonger('Mel', 'Jill');
// 'Jill'

// whichIsLonger('abcd', 'abcdefg');
// 'abcdefg'

// whichIsLonger('abcd', 'efgh');
// 'abcd'
```

### !end-placeholder

### !tests

```js
describe('whichIsLonger', function() {

    it("returns the longer of two strings", function() {
      expect(whichIsLonger("aa", "bbbbbb")).to.eq("bbbbbb");
      expect(whichIsLonger("aaaaaa", "bb")).to.eq("aaaaaa");
    })
    it("returns the first string when the two strings are the same length", function() {
      expect(whichIsLonger("aaaaaa", "bbbbbb")).to.eq("aaaaaa");
      expect(whichIsLonger("abc", "def")).to.eq("abc");
    })

})
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge
