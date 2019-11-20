# Creating Objects

## Learning Objectives

By the end of this lesson you will be able to:

* Create objects with and without contents using the object literal syntax

## Objects

Let's now transition to **objects**, which are created with a different syntax.

### Key-value pairs

We're going to declare a variable named `person` and set it to an empty **object literal**:

```javascript
var person = {};
```

Objects start with an open curly brace and end with a closing curly brace. Inside of these braces, we store data as **key-value pairs**. The **key** is similar to an **index** of an array. The **value** is similar to a **value** in an array.

Here's an example of an object literal with one key-value pair:

```javascript
var person = {
  firstName: "Bruce"
};
```

The key-value pair is separated with a colon. The key is written _with or without quotes_, and the value is written as a desired data type, such as the string `"Bruce"`. Keys without quotes are restricted to _valid JavaScript variable names_.

If we store more than one key-value pair, each pair must be separated with a comma. The value of the key-value pairs, as you'll notice, can have a value type of either primitive or reference.

```javascript
var person = {
  firstName: "Bruce",
  lastName: "Wayne",
  favoriteColors: ["black", "yellow"]
};
```

### Dot notation vs. square bracket notation (Creation)

Imagine that we declared a variable named `cat` and assigned it an empty object literal. How do we add key-value pairs to `cat`? We have two options: dot notation and square bracket notation.

Dot notation works the following way:

```javascript
var cat = {};
cat.firstName = "Felix";
cat.lastName = "The Cat";

console.log(cat);
// {firstName: "Felix", lastName: "The Cat"}
```

When using dot notation, the keys are placed after the dot. The corresponding values of the keys become the right operand of the equality operator. One note of caution about the keys: they must be a valid identifier. In other words, they must conform to these rules:

- the name must begin with a `$`, `_`, or alphabet character
- after the first character, any of the above plus numeric characters

In the case that the key isn't a valid identifier (or even if it is a valid identifier), we may use square bracket notation:

```javascript
var cat = {};
cat["first name"] = "Felix";
cat["last name"] = "The Cat";

console.log(cat);
// {'first name': 'Felix', 'last name': 'The Cat'}
```

Above, the keys are considered invalid due to the white space in their names. To circumvent this problem, we enclose the invalid identifier in quotation marks. Then, we enclose that string inside of square brackets.

## Challenges

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: aef3f9a0-b3d9-11e8-92ed-57e3f4477ba5
* title: Create Your Own Person Object

### !question

Below, modify the existing object literal to include information about you! Include _at least_ the following keys:

* `age`
* `hobbies`
* `eyeColor`

### !end-question

### !placeholder

```js
var person = {}
```

### !end-placeholder

### !tests

```js
describe('person object', function() {

    it('incudes an age key', function() {
      expect(person.age).to.be.ok
    })

    it('incudes an hobbies key', function() {
      expect(person.hobbies).to.be.ok
      if (Array.isArray(person.hobbies)) expect(person.hobbies[0]).to.be.ok
    })

    it('incudes an eyeColor key', function() {
      expect(person.eyeColor).to.be.ok
    })
})
```

### !end-tests

### !end-challenge
