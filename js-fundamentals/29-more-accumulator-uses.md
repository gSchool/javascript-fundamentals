# Swapping Values

## Learning Objectives

By the end of this lesson you will be able to:

* Write min, max, and indexOf using the accumulator pattern

## Resources

We can also use the accumulator pattern in such a way where instead of modifying the accumulator we are swapping its values. For example, try running the following code:

```js
function longestString (strings) {
  var result = ''

  for (var i = 0; i < strings.length; i++) {
    var string = strings[i]
    if (string.length > result.length) {
      result = string
    }
  }

  return result
}

var dinosaur = longestString([ 'spinosaurus', 'troodon', 'dilophosaurus' ])

console.log(`${dinosaur} is the longest word.`)
```

Notice that the accumulator pattern inside of the function. However, instead of adding to result we are swapping out the value of result based on a conditional. This means we end up with a single value at the end -- the longest string that we've found inside the array.

Take a look at the following input for the above code:

```js
var input = [ 'aa', 'b', 'cc' ]
var word = longestString(input)
console.log(word) // ???
```

Before running the code, take a guess as to what it will return. After running it, did it return what you expect?

## Challenges

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: bf75fbc7-870f-4bf0-b588-9f6154a30594
* title: indexOf

### !question

The `indexOf` function should work as follows:

```js
indexOf([]) // -1

indexOf([ 6 ], 6) // 0
indexOf([ 5, 3, 1, 2, 4 ], 2) // 3
indexOf([ 20, 10, 0, -10, -20 ], 5) // -1

indexOf([ '7', '8', '9' ], 7) // -1
indexOf([ 7, 7, 7 ], 7) // 0
```

### !end-question

### !placeholder

```js
function indexOf (array, value) {
  // your code here
}
```

### !end-placeholder

### !tests

```js
describe('indexOf function', function() {
    it('should return -1 if the input is empty', function() {
      const result = indexOf([])
      const err = 'Make sure to choose an initial value and return it'
      expect(result, err).to.equal(-1)
    })

    it('should return the index of the matching item in the array', function() {
      const array = [ -5, 0, 10, 5 ]
      const item = 0
      const result = indexOf(array, item)
      const err = 'Make sure you are looking for the index of the matching item'
      expect(result, err).to.equal(1)
    })

    it('should return -1 if the item is not found', function() {
      const array = [ -5, 0, 10, 5 ]
      const item = 20
      const result = indexOf(array, item)
      const err = 'If the item is not found, return -1'
      expect(result, err).to.equal(-1)
    })

    it('should return the first item in the array if there are multiple matches', function() {
      const array = [ 6, 7, 6, 8, 9 ]
      const item = 6
      const result = indexOf(array, item)
      const err = 'Return the index for the first match in the array'
      expect(result, err).to.equal(0)
    })

    it('should check for strict equality', function() {
      const array = [ -5, 0, '10', 5 ]
      const item = 10
      const result = indexOf(array, item)
      const err = 'Make sure you are checking for equality using ==='
      expect(result, err).to.equal(-1)
    })
})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 760d86f5-26cb-49ef-93f0-bfebe6cfaf79
* title: Max

### !question

The `max` function should work as follows:

```js
max([]) // 0
max([ 6 ]) // 6
max([ 5, 3, 1, 2, 4 ]) // 5
max([ 20, 10, 0, -10, -20 ]) // 20
```

### !end-question

### !placeholder

```js
function max (numbers) {
  // your code here
}
```

### !end-placeholder

### !tests

```js
describe('max function', function() {
    it('should return 0 if the input is an empty array', function() {
      const result = max([])
      const err = 'Make sure to choose an initial value and return it'
      expect(result, err).to.equal(0)
    })

    it('should return the largest number in the array', function() {
      const input = [ -5, 0, 10, 5 ]
      const result = max(input)
      const err = 'Check your function to make sure it returns the smallest number!'
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
* id: 7178a054-5f2b-405a-97b0-eb1ab100c9b5
* title: Min

### !question

The `min` function should work as follows:

```js
min([]) // 0
min([ 6 ]) // 6
min([ 5, 3, 1, 2, 4 ]) // 1
min([ 20, 10, 0, -10, -20 ]) // -20
```

### !end-question

### !placeholder

```js
function min (numbers) {
  // your code here
}
```

### !end-placeholder

### !tests

```js
describe('min function', function() {
    it('should return 0 if the input is an empty array', function() {
      const result = min([])
      const err = 'Make sure to choose an initial value and return it'
      expect(result, err).to.equal(0)
    })

    it('should return the smallest number in the array', function() {
      const input = [ 5, -5, 0, 10 ]
      const result = min(input)
      const err = 'Check your function to make sure it returns the smallest number!'
      expect(result, err).to.equal(-5)
    })
})
```

### !end-tests

### !end-challenge
