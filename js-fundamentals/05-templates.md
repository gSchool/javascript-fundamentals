# Template Strings

## Learning Objectives

By the end of this lesson you will be able to:

* Use template literals to use stored values in a string

## Resources

Template strings are quite powerful, but the basics are simple to master! You'll find they are much more friendly to work with then concatenating strings with the plus operator. For example:

```js
var name = 'Alonzo'
var concatenation = 'Hello, my name is ' + name + '!'
var templateString = `Hello, my name is ${name}!`
concatenation === templateString // true
```

Template strings also make it easier to work with quotations which can be tricky with string concatenation.

```js
var name = 'Viola'
var concatenation = '"Nice day, isn\'t it?", said ' + name + '.'
var templateString = `"Nice day, isn't it?", said ${name}.`
concatenation === templateString // true
```

* [ES6 Template Strings](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings)

## Challenges

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 26b7b950-b3d9-11e8-89b8-f32133e66ea3
* title: Template Strings

##### !question

Choose the answer that correctly converts the following to use template strings instead of concatenation.

```js
var firstName = 'Louis'
var lastName = 'Rivera'
var nickname = 'Louie'
var age = 28
var phrase = 'My name is ' + firstName + ' ' +
  lastName + ' but I go by "' + nickname +
  '" and I am ' + age + 'years old.'
```

##### !end-question

##### !options

* `My name is #{firstName} #{lastName} but I go by "#{nickname}" and I am #{age} years old.`
* `My name is {{firstName}} {{lastName}} but I go by "{{nickname}}" and I am {{age}} years old.`
* `My name is ${firstName} ${lastName} but I go by "${nickname}" and I am ${age} years old.`

##### !end-options

##### !answer

`My name is ${firstName} ${lastName} but I go by "${nickname}" and I am ${age} years old.`

##### !end-answer

### !end-challenge
