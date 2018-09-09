# Multiple Parameters

## Learning Objectives

By the end of this lesson you will be able to:

* Write and invoke functions with multiple parameters

## Resources

Often, we must pass more than one thing into a function so that we can have everything work together.

* (Read until arguments keyword) [Galvanize: Function parameters and arguments](https://github.com/gSchool/javascript-curriculum/blob/master/10_Syntax/04_Functions.md#user-content-parameters-and-arguments)

## Challenges

### !challenge

* type: code-snippet
* language: javascript
* id: ffeff4a0-b3d2-11e8-b5de-9f42ac92f790
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
* id: ffeff4a1-b3d2-11e8-b5de-9f42ac92f790
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
