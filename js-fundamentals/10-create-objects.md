# Creating Objects

## Learning Objectives

By the end of this lesson you will be able to:

* Create objects with and without contents using the object literal syntax

## Resources

Just like with Arrays, let's begin by exploring basic Object creation.

Read until Accessing Elements Until Dot notation vs. square bracket notation (Access)

[Galvanize: Creating Objects](https://github.com/gSchool/javascript-curriculum/blob/master/10_Syntax/03_Arrays_Objects_Iteration.md#objects)

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
