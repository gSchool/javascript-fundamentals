# The Accumulator Pattern

## Learning Objectives

By the end of this lesson you will be able to:

* Identify the parts of the accumulator pattern

## Resources

Before looking at some real world examples, let's begin by looking at the parts of the
accumulator pattern.

* [Galvanize: The Accumulator Pattern](https://github.com/gSchool/javascript-curriculum/blob/master/20_Functional_Patterns/04_Accumulator_Pattern/README.md)
* [Galvanize: Choosing the initial value](https://github.com/gSchool/javascript-curriculum/blob/master/20_Functional_Patterns/04_Accumulator_Pattern/Choosing%20Initial%20Values.md)
* [Galvanize: Iterating](https://github.com/gSchool/javascript-curriculum/blob/master/20_Functional_Patterns/04_Accumulator_Pattern/Iterating.md)
* [Galvanize: Altering the Accumulator](https://github.com/gSchool/javascript-curriculum/blob/master/20_Functional_Patterns/04_Accumulator_Pattern/Altering%20the%20Accumulator.md)

## Challenges

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 26bbb0f0-b3d9-11e8-89b8-f32133e66ea3
* title: Accumulator Pattern

### !question

Try your hand at implementing the `joinWords` function from the article. As much as possible, implement the
method without peaking.

### !end-question

### !placeholder

```js
function joinWords (words) {
  // your code here
}
```

### !end-placeholder

### !tests

```js
describe('joinWords', function() {
  it('returns an empty string if the input is empty', function() {
    const err = 'Make sure to choose an initial value and return it'
    expect(joinWords([]), err).to.equal('')
  })

  it('can join multiple strings together', function() {
    const err = 'Your function isn\'t joining strings together!'
    expect(joinWords(['hello', 'world', '!']), err).to.equal('helloworld!')
  })

  it('does not use .join', function() {
    const err = 'You should not use the native .join method to solve this problem'
    expect(joinWords.toString(), err).to.not.match(/\.join/)
  })
})
```

### !end-tests

### !end-challenge
