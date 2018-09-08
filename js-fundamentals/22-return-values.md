# Return

## Learning Objectives

By the end of this lesson you will be able to:

* Write functions that return values and assign those values

## Resources

Functions are used to return values for use in other parts of our programs. It is the essential keyword for functions!

* (Read until Parameters and Arguments) [Galvanize: Functions](https://github.com/gSchool/javascript-curriculum/blob/master/10_Syntax/04_Functions.md#user-content-the-keyword-return)

## Challenges

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 006076E5-D70D-455F-8D07-863D4962DEFD
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
