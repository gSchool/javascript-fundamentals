# Common Aggregators

## Learning Objectives

By the end of this lesson you will be able to:

* Write join, leftPad, rightPad, sum, and average functions using the accumulator pattern

## Resources

Let's start by building some common functions that use the accumulator pattern. In each of the below functions, you will be aggregating values onto an accumulator, just like you've seen before. Each one has its own particularities, so make sure to read through the instructions and let an instructor know if you need help.

## Challenges

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 3040d530-b3c3-11e8-9ceb-f1ccefb688fa
* title: Join

### !question

We'll be rebuilding the native `.join` array method. The `join` function should work as follows:

```js
// If the input is empty, return an empty string
join([]) // ''

// If there is no separator, separate by commas
join([ 'a', 'b', 'c' ]) // 'a,b,c'

// If there is a separator, separate by that string
join([ 'a', 'b', 'c' ], '-') // 'a-b-c'

// If there is only one item, return just that item
join([ 'a' ], '---') // 'a'
```

### !end-question

### !placeholder

```js
function join (array, separator) {
  // your code here
}
```

### !end-placeholder

### !tests

```js
describe('join function', function() {
    it('should return an empty string if the input is empty', function() {
      const result = join([])
      const err = 'Make sure to choose an initial value and return it'
      expect(result, err).to.equal('')
    })

    it('should join together words with commas if no separator is provided', function() {
      const input = [ 'x', 'y', 'z' ]
      const result = join(input)
      const err = 'Join the words with a comma by default'
      expect(result, err).to.equal('x,y,z')
    })

    it('should join together words with the separator if it is provided', function() {
      const input = [ 'x', 'y', 'z' ]
      const separator = ' '
      const result = join(input, separator)
      const err = 'Join the words with the separator if you received it'
      expect(result, err).to.equal('x y z')
    })

    it('should not use the separator if there is only one item', function() {
      const input = [ 'x' ]
      const separator = '-'
      const result = join(input, separator)
      const err = 'Do not add the separator with only one item'
      expect(result, err).to.equal('x')
    })
})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 3040fc40-b3c3-11e8-9ceb-f1ccefb688fa
* title: Left Pad

### !question

The `leftPad` function will make string be a certain length by padding it on the left. The `leftPad` function should work as follows:

```js
// If the input is empty, return an empty string
leftPad('') // ''

// When given just a string, it returns that string
leftPad('abc') // 'abc'

// When given a string and a number, it will pad the string with spaces
// until the string length matches that number. Notice that the code
// below does NOT add four spaces -- rather, it pads the string until
// the length is four
leftPad('abc', 4) // ' abc'

// If the padding given is less than the length of the initial string,
// it just returns the string
leftPad('abc', 2) // 'abc'

// If given a third argument that is a single character, it will pad
// the string with that character
leftPad('abc', 6, 'z') // 'zzzabc'
```

### !end-question

### !placeholder

```js
function leftPad (string, padding, character) {
  // your code here
}
```

### !end-placeholder

### !tests

```js
describe('leftPad function', function() {
    it('should return an empty string if the input is empty', function() {
      const result = leftPad('')
      const err = 'Make sure to choose an initial value and return it'
      expect(result, err).to.equal('')
    })

    it('should return the string if no padding is given', function() {
      const input = 'xyz'
      const result = leftPad(input)
      const err = 'Simply return the string if no padding is given'
      expect(result, err).to.equal('xyz')
    })

    it('should pad the string with spaces if the new length is longer than the original length', function() {
      const input = 'xyz'
      const result = leftPad(input, 6)
      const err = 'Add spaces to the string until its length matches the given padding'
      expect(result, err).to.equal('   xyz')
    })

    it('should not pad the string with spaces if the new length is shorter than the original length', function() {
      const input = 'xyz'
      const result = leftPad(input, 1)
      const err = 'Do not add any spacing if the padding argument is less than the length of the original string'
      expect(result, err).to.equal('xyz')
    })

    it('should pad the string with a character if provided', function() {
      const input = 'xyz'
      const result = leftPad(input, 4, '-')
      const err = 'Make sure to prefix the string with the given character if it is provided'
      expect(result, err).to.equal('-xyz')
    })
})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 3040fc41-b3c3-11e8-9ceb-f1ccefb688fa
* title: Right Pad

### !question

The `rightPad` function will work just like the above `leftPad` function except it will pad from the right! You should just need to slightly modify your above code to make it work.

### !end-question

### !placeholder

```js
function rightPad (string, padding, character) {
  // your code here
}
```

### !end-placeholder

### !tests

```js
describe('rightPad function', function() {
    it('should return an empty string if the input is empty', function() {
      const result = rightPad('')
      const err = 'Make sure to choose an initial value and return it'
      expect(result, err).to.equal('')
    })

    it('should return the string if no padding is given', function() {
      const input = 'xyz'
      const result = rightPad(input)
      const err = 'Simply return the string if no padding is given'
      expect(result, err).to.equal('xyz')
    })

    it('should pad the string with spaces if the new length is longer than the original length', function() {
      const input = 'xyz'
      const result = rightPad(input, 6)
      const err = 'Add spaces to the string until its length matches the given padding'
      expect(result, err).to.equal('xyz   ')
    })

    it('should not pad the string with spaces if the new length is shorter than the original length', function() {
      const input = 'xyz'
      const result = rightPad(input, 1)
      const err = 'Do not add any spacing if the padding argument is less than the length of the original string'
      expect(result, err).to.equal('xyz')
    })

    it('should pad the string with a character if provided', function() {
      const input = 'xyz'
      const result = rightPad(input, 4, '-')
      const err = 'Make sure to prefix the string with the given character if it is provided'
      expect(result, err).to.equal('xyz-')
    })
})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 3040fc42-b3c3-11e8-9ceb-f1ccefb688fa
* title: Sum

### !question

The `sum` function should add up an array of numbers into a single number. For example:

```js
sum([]) // 0
sum([ 1 ]) // 1
sum([ 1, 2 ]) // 3
sum([ 1, 2, 3 ]) // 6
```

### !end-question

### !placeholder

```js
function sum (numbers) {
  // your code here
}
```

### !end-placeholder

### !tests

```js
describe('sum function', function() {
    it('should return 0 if the input is empty', function() {
      const result = sum([])
      const err = 'Make sure to choose an initial value and return it'
      expect(result, err).to.equal(0)
    })

    it('should add up all numbers in an array', function() {
      const input = [ 10, 11, 12, 13 ]
      const result = sum(input)
      const err = 'Add all numbers in an array together'
      expect(result, err).to.equal(46)
    })

    it('should work with a single number as well', function() {
      const input = [ 10 ]
      const result = sum(input)
      const err = 'If there is just one number, you should return just that number'
      expect(result, err).to.equal(10)
    })
})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 30412350-b3c3-11e8-9ceb-f1ccefb688fa
* title: Average

### !question

The `average` function should find the average of a set of numbers. For example:

```js
average([]) // 0
average([ 1 ]) // 1
average([ 1, 3 ]) // 2
average([ 1, 3, 6, 10 ]) // 5
```

### !end-question

### !placeholder

```js
function average (numbers) {
  // your code here
}
```

### !end-placeholder

### !tests

```js
describe('average function', function() {
    it('should return 0 if the input is empty', function() {
      const result = average([])
      const err = 'Make sure to choose an initial value and return it'
      expect(result, err).to.equal(0)
    })

    it('should find the average of all numbers in an array', function() {
      const input = [ 5, 8, 11 ]
      const result = average(input)
      const err = 'Add all numbers together and then divide by the length of the array'
      expect(result, err).to.equal(8)
    })

    it('should work with a single number as well', function() {
      const input = [ 10 ]
      const result = average(input)
      const err = 'If there is just one number, you should return just that number'
      expect(result, err).to.equal(10)
    })
})
```

### !end-tests

### !end-challenge
