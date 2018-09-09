# Checkpoint

This checkpoint will require you to use what you've learned from the previous lessons. The goal is to gain mastery over this standard, so take some time, review lessons, and ask for help if you need it!

## Questions

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb0390-b3c3-11e8-884e-0102c2c4839e
* title: doubleNumbers
* standard_uuids: WD-AAEBCAgBDQk

### !question

Example:

- if you pass it `[1,2,3]` then it should return `[2,4,6]`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('doubleNumbers', function() {

  it('returns an empty array when the input is empty', function() {
    expect(doubleNumbers([]), 'Default value is incorrect').to.deep.eq([])
  })

  it('doubles every number in the given array', function() {
    expect(doubleNumbers([1,2,3])).to.deep.eq([2,4,6])
    expect(doubleNumbers([10,20,30,40])).to.deep.eq([20,40,60,80])
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb0391-b3c3-11e8-884e-0102c2c4839e
* title: multiplyNumbers
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call `multiplyNumbers([1,2,3], 0)` you'd get `[0,0,0]`
- if you call `multiplyNumbers([1,2,3], 5)` you'd get `[5,10,15]`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('multiplyNumbers', function() {

  it("returns 0 when the input is empty", function() {
    expect(multiplyNumbers([], 3), "Default value is incorrect").to.deep.eq([])
  })

  it("doubles every number in the given array", function() {
    expect(multiplyNumbers([1,2,3], 3)).to.deep.eq([3,6,9])
    expect(multiplyNumbers([10,20,30,40], 5)).to.deep.eq([50,100,150,200])
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb0392-b3c3-11e8-884e-0102c2c4839e
* title: doubleLetters
* standard_uuids: WD-AAEBCAgBDQk

### !question
Write function named doubleLetters that will take a string and double every letter in the string

Example:

- if you pass it `"abc"` then it should return `"aabbcc"`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('doubleLetters', function() {

  it("returns an empty string when the input is empty", function() {
    expect(doubleLetters(""), "Default value is incorrect").to.eq("")
  })

  it("doubles every letter in the given string", function() {
    expect(doubleLetters("abc")).to.eq("aabbcc")
    expect(doubleLetters("xyzpdq")).to.eq("xxyyzzppddqq")
  })
})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb0393-b3c3-11e8-884e-0102c2c4839e
* title: interleave
* standard_uuids: WD-AAEBCAgBDQk

### !question
Write function named interleave that will take two arrays and interleaves them

Example:

- if you pass it `["a", "b", "c"]` and `["d", "e", "f"]` then it should return `["a", "d", "b", "e", "c", "f"]`

NOTE: you can assume each input will be the same length

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('interleave', function() {
  it("returns an empty array when the inputs are empty", function() {
    expect(interleave([], []), "Default value is incorrect").to.deep.eq([])
  })

  it("interleaves elements from two arrays when input is present", function() {
    expect(interleave(["a", "b", "c"], ["x", "y", "z"])).to.deep.eq(["a", "x", "b", "y", "c", "z"])
    expect(interleave([1,2,3,4], [5,6,7,8])).to.deep.eq([1,5,2,6,3,7,4,8])
  })
})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb0394-b3c3-11e8-884e-0102c2c4839e
* title: createRange
* standard_uuids: WD-AAEBCAgBDQk

### !question
Write function named createRange that will take a number and a default value and return an array of that many values

Example:

- if you pass it `4` and `"Hello"` then it should return `["Hello", "Hello", "Hello", "Hello"]`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('createRange', function() {

  it("returns an empty array when the input is empty", function() {
    expect(createRange(0), "Default value is incorrect").to.deep.eq([])
  })

  it("creates an array of the specified length with the specified values", function() {
    expect(createRange(4, "a")).to.deep.eq(["a", "a", "a", "a"])
    expect(createRange(7, "z")).to.deep.eq(["z", "z", "z", "z", "z", "z", "z"])
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb0395-b3c3-11e8-884e-0102c2c4839e
* title: flipArray
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

- If you pass it `["quick", "brown", "fox"]` then it should return `{ "quick": 0, "brown": 1, "fox": 2 }`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('flipArray', function() {

  it("returns an empty object when the input is empty", function() {
    expect(flipArray([]), "Default value is incorrect").to.deep.eq({})
  })

  it("turns the of items into an object", function() {
    expect(flipArray(["a", "b", "c"])).to.deep.eq({a: 0, b: 1, c: 2})
    expect(flipArray([10, 20])).to.deep.eq({10: 0, 20: 1})
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb0396-b3c3-11e8-884e-0102c2c4839e
* title: arraysToObject
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

- If you pass it `[[2014, "Horse"], [2015, "Sheep"]]` then it should return `{ 2014: "Horse", 2015: "Sheep" }`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('arraysToObject', function() {
  it("returns an empty object when the input is empty", function() {
    expect(arraysToObject([]), "Default value is incorrect").to.deep.eq({})
  })

  it("turns the array of arrays into an object", function() {
    expect(arraysToObject([["name", "Sue"], ["age", "24"]])).to.deep.eq({name: "Sue", age: "24"})
    expect(arraysToObject([["height", 24], ["weight", 22]])).to.deep.eq({height: 24, weight: 22})
  })
})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb2aa0-b3c3-11e8-884e-0102c2c4839e
* title: reverseString
* standard_uuids: WD-AAEBCAgBDQk

### !question
Write function named reverseString that will reverse a string without calling the built-in `.split` or `.reverse` methods.

Example:

- If you pass it `"hello"` then it should return `"olleh"`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('reverseString', function() {

  it("returns an empty string when the input is empty", function() {
    expect(reverseString(""), "Default value is incorrect").to.deep.eq("")
  })

  it("returns the string reversed", function() {
    expect(reverseString("Sue")).to.deep.eq("euS")
    expect(reverseString("Steve")).to.deep.eq("evetS")
  })

  it("does not call the builtin `.reverse` method", function() {
    expect(reverseString.toString()).to.not.match(/\.split|\.reverse/)
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb2aa1-b3c3-11e8-884e-0102c2c4839e
* title: repeats
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

- If you pass it `"haha"` then it should return `true` because `"ha"` (the first half) equals `"ha"` (the second half)
- If you pass it `"yay"` then it should return `false` because it's odd
- If you pass it `"heehaw"` then it should return `false` because `"hee"` doesn't equal `"haw"`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('repeats', function() {

  it("returns true when given an empty string (which seems strange, but go with it :)", function() {
    expect(repeats(""), "Default value is incorrect").to.deep.eq(true)
  })

  it("returns true when the second half of the string equals the first", function() {
    expect(repeats("bahbah")).to.deep.eq(true)
    expect(repeats("nananananananana")).to.deep.eq(true)
  })

  it("returns false when the second half of the string does not equal the first", function() {
    expect(repeats("bahba")).to.deep.eq(false)
    expect(repeats("nananananann")).to.deep.eq(false)
  })

  it("does not use .repeat", function() {
    expect(repeats.toString()).to.not.match(/\.repeat/)
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb2aa2-b3c3-11e8-884e-0102c2c4839e
* title: everyOther
* standard_uuids: WD-AAEBCAgBDQk

### !question
Write a function named everyOther that returns every other character in the string

Example:

- If you pass it `"abcdef"` then it should return `"ace"` because those represent every other letter

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('everyOther', function() {

  it("returns an empty string when given an empty string", function() {
    expect(everyOther(""), "Default value is incorrect").to.deep.eq("")
  })

  it("returns a string with every other letter", function() {
    expect(everyOther("a")).to.deep.eq("a")
    expect(everyOther("ab")).to.deep.eq("a")
    expect(everyOther("abc")).to.deep.eq("ac")
    expect(everyOther("abc")).to.deep.eq("ac")
    expect(everyOther("abcd")).to.deep.eq("ac")
    expect(everyOther("abcde")).to.deep.eq("ace")
    expect(everyOther("Hello there")).to.deep.eq("Hlotee")
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb2aa3-b3c3-11e8-884e-0102c2c4839e
* title: allEqual
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named allEqual that returns true if every character in the string is the same

Example:

- If you pass `"aaa"` it should return `true`
- If you pass `"aba"` it should return `false`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('allEqual', function() {

  it("returns true when given an empty string", function() {
    expect(allEqual(""), "Default value is incorrect").to.deep.eq(true)
  })

  it("returns true when all letters are equal", function() {
    expect(allEqual("aaa")).to.deep.eq(true)
    expect(allEqual("bbbbb")).to.deep.eq(true)
  })

  it("returns false when all letters are not equal", function() {
    expect(allEqual("ab")).to.deep.eq(false)
    expect(allEqual("abbbbbbb")).to.deep.eq(false)
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb2aa4-b3c3-11e8-884e-0102c2c4839e
* title: sumLetters
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named sumLetters that returns the sum of every character in the string

Example:

- If you pass `"45"` it should return `9`
- If you pass `"246"` it should return `12`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('sumLetters', function() {

  it("returns 0 when given an empty string", function() {
    expect(sumLetters(""), "Default value is incorrect").to.deep.eq(0)
  })

  it("returns the sum of the numbers contained in the string", function() {
    expect(sumLetters("111")).to.deep.eq(3)
    expect(sumLetters("2233")).to.deep.eq(10)
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb2aa5-b3c3-11e8-884e-0102c2c4839e
* title: countVowels
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

- If you pass `"you"` it should return `2`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('countVowels', function() {

  it("returns 0 when given an empty string", function() {
    expect(countVowels(""), "Default value is incorrect").to.deep.eq(0)
  })

  it("returns the count of the vowels in a string (not counting 'y')", function() {
    expect(countVowels("aeiouy")).to.deep.eq(5)
    expect(countVowels("Hello")).to.deep.eq(2)
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb2aa6-b3c3-11e8-884e-0102c2c4839e
* title: split
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named split that takes a string and returns an array of the letters

Example:

- If you pass `"you"` it should return `["y", "o", "u"]`

NOTE: do not use the builtin `split` method

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('split', function() {

  it("returns an empty array when given an empty string", function() {
    expect(split(""), "Default value is incorrect").to.deep.eq([])
  })

  it("returns an array containing the characters of the string", function() {
    expect(split("Hello")).to.deep.eq(["H", "e", "l", "l", "o"])
    expect(split("hi")).to.deep.eq(["h", "i"])
  })

  it("does not use the builtin split method", function() {
    expect(split.toString()).to.not.match(/\.split/)
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb2aa7-b3c3-11e8-884e-0102c2c4839e
* title: getCodePoints
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

- If you pass `"Hello"` it should return `[ 72, 101, 108, 108, 111 ]`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('getCodePoints', function() {

  it("returns an empty array when given an empty string", function() {
    expect(getCodePoints(""), "Default value is incorrect").to.deep.eq([])
  })

  it("returns an array containing the codePoints of each letter in the string", function() {
    expect(getCodePoints("Hello")).to.deep.eq([ 72, 101, 108, 108, 111 ])
    expect(getCodePoints("hi")).to.deep.eq([ 104, 105 ])
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb51b0-b3c3-11e8-884e-0102c2c4839e
* title: letterMap
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

- If you pass `"Yo"` it should return `{Y: 0, o: 1}`
- If you pass `"Hello"` it should return `{H: 0, e: 1, l: 3, o: 4}`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('letterMap', function() {

  it("returns an empty object when given an empty string", function() {
    expect(letterMap(""), "Default value is incorrect").to.deep.eq({})
  })

  it("returns an object that maps letters to their _last_ position in the string", function() {
    expect(letterMap("up")).to.deep.eq({u: 0, p: 1})
    expect(letterMap("Hello")).to.deep.eq({H: 0, e: 1, l: 3, o: 4})
    expect(letterMap("aaa")).to.deep.eq({a: 2})
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb51b1-b3c3-11e8-884e-0102c2c4839e
* title: letterCount
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

- If you pass `"Yo"` it should return `{Y: 1, o: 1}`
- If you pass `"Hello"` it should return `{"H": 1, "e": 1, "l": 2, "o": 1}`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('letterCount', function() {

  it("returns an empty object when given an empty string", function() {
    expect(letterCount(""), "Default value is incorrect").to.deep.eq({})
  })

  it("returns an object that maps letters to the number of occurrences", function() {
    expect(letterCount("up")).to.deep.eq({u: 1, p: 1})
    expect(letterCount("Hello")).to.deep.eq({H: 1, e: 1, l: 2, o: 1})
    expect(letterCount("aaa")).to.deep.eq({a: 3})
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb51b2-b3c3-11e8-884e-0102c2c4839e
* title: threeOdds
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named threeOdds that takes 2 numbers and returns true if there are _at least_ 3 odd numbers _between_ those two numbers

Example:

- If you pass `0,2` it should return `false` because the only number between 0 and 2 is 1
- If you pass `0,6` it should return `true` because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('threeOdds', function() {

  it("returns false when passed 0s", function() {
    expect(threeOdds(0, 0), "Default value is incorrect").to.deep.eq(false)
  })

  it("returns true if there are at least 3 odd whole numbers between the numbers given", function() {
    expect(threeOdds(0,6)).to.deep.eq(true)
    expect(threeOdds(0,7)).to.deep.eq(true)
    expect(threeOdds(10,18)).to.deep.eq(true)
  })

  it("returns false if there are not at least 3 odd whole numbers between the numbers given", function() {
    expect(threeOdds(0,2)).to.deep.eq(false)
    expect(threeOdds(0,3)).to.deep.eq(false)
    expect(threeOdds(0,4)).to.deep.eq(false)
    expect(threeOdds(0,5)).to.deep.eq(false)
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb51b3-b3c3-11e8-884e-0102c2c4839e
* title: createString
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

- If you pass `3, "a"` it should return `"aaa"`
- If you pass `2, "b"` it should return `"bb"`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('createString', function() {

  it("returns an empty string when given 0 or a negative number", function() {
    expect(createString(0, "r")).to.deep.eq("")
    expect(createString(-1, "r")).to.deep.eq("")
  })

  it("returns a string of spaces of the specified length when given a positive number", function() {
    expect(createString(1, "r")).to.deep.eq("r")
    expect(createString(3, "w")).to.deep.eq("www")
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb51b4-b3c3-11e8-884e-0102c2c4839e
* title: factorial
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named factorial that takes a number and returns its factorial

Factorial of `4` means `4 * 3 * 2 * 1`

Example:

- If you pass `4` it should return `24` since that's `4 * 3 * 2 * 1`
- If you pass `5` it should return `120` since that's `5 * 4 * 3 * 2 * 1`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('factorial', function() {

  it("returns 1 when given 0", function() {
    expect(factorial(0)).to.deep.eq(1)
  })

  it("returns the factorial of the number", function() {
    expect(factorial(1)).to.deep.eq(1)
    expect(factorial(2)).to.deep.eq(2)
    expect(factorial(3)).to.deep.eq(6)
    expect(factorial(4)).to.deep.eq(24)
    expect(factorial(5)).to.deep.eq(120)
    expect(factorial(6)).to.deep.eq(720)
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb51b5-b3c3-11e8-884e-0102c2c4839e
* title: arrayOfNumbers
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

- If you pass `1` it should return `[1]`
- If you pass `3` it should return `[1,2,3]`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('arrayOfNumbers', function() {

  it("returns an empty array when passed 0", function() {
    expect(arrayOfNumbers(0)).to.deep.eq([])
  })

  it("returns an array of all of the numbers between 1 and that number, inclusive", function() {
    expect(arrayOfNumbers(1)).to.deep.eq([1])
    expect(arrayOfNumbers(2)).to.deep.eq([1,2])
    expect(arrayOfNumbers(3)).to.deep.eq([1,2,3])
    expect(arrayOfNumbers(4)).to.deep.eq([1,2,3,4])
    expect(arrayOfNumbers(5)).to.deep.eq([1,2,3,4,5])
    expect(arrayOfNumbers(6)).to.deep.eq([1,2,3,4,5,6])
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb51b6-b3c3-11e8-884e-0102c2c4839e
* title: evenOdd
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named evenOdd that takes two numbers and returns an object with the numbers and whether they are even or odd.

Example:

- If you pass `1,4` it should return `{"1": "odd", "2": "even", "3": "odd", "4": "even"}`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('evenOdd', function() {

  it("returns an empty object when passed 0s", function() {
    expect(evenOdd(0,0)).to.deep.eq({})
  })

  it("returns an object with all of the numbers between those numbers (inclusive), and whether they are even or odd", function() {
    expect(evenOdd(0,1)).to.deep.eq({0: "even", 1: "odd"})
    expect(evenOdd(11,15)).to.deep.eq({11: "odd", 12: "even", 13: "odd", 14: "even", 15: "odd"})
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb78c0-b3c3-11e8-884e-0102c2c4839e
* title: growingKeys
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named growingKeys that takes a number and a string and creates that many number of new keys according to the following example. The values for all of the keys will just be `true`.

Example:

- If you pass `2,"d"` it should return `{"d": true, "dd": true}`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('growingKeys', function() {

  it("returns an empty object when passed 0", function() {
    expect(growingKeys(0, "a")).to.deep.eq({})
  })

  it("returns an object with as many keys specified, with the keys growing by one each time", function() {
    expect(growingKeys(1,"a")).to.deep.eq({"a": true})
    expect(growingKeys(2,"b")).to.deep.eq({"b": true, "bb": true})
    expect(growingKeys(3,"c")).to.deep.eq({"c": true, "cc": true, "ccc": true})
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb78c1-b3c3-11e8-884e-0102c2c4839e
* title: every
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

- If you pass `[1,1], 1` it should return `true`
- If you pass `[1,2], 1` it should return `false`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('every', function() {

  it("returns true when passed an empty array", function() {
    expect(every([], "a")).to.deep.eq(true)
  })

  it("returns true when all elements match the given value", function() {
    expect(every([1, 1], 1)).to.deep.eq(true)
    expect(every(["A", "A", "A"], "A")).to.deep.eq(true)
  })

  it("returns false when not all elements match the given value", function() {
    expect(every([1, 2], 1)).to.deep.eq(false)
    expect(every(["A", "B", "A"], "A")).to.deep.eq(false)
  })

  it("does not use .every", function() {
    expect(every.toString()).to.not.match(/\.every/)
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb78c2-b3c3-11e8-884e-0102c2c4839e
* title: some
* standard_uuids: WD-AAEBCAgBDQk

### !question
Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

- If you pass `[1,2], 1` it should return `true`
- If you pass `[3,2], 1` it should return `false`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('some', function() {

  it("returns false when passed an empty array", function() {
    expect(some([], "a")).to.deep.eq(false)
  })

  it("returns true when at least one element matches the given value", function() {
    expect(some([1, 2], 1)).to.deep.eq(true)
    expect(some(["A", "B", "C"], "B")).to.deep.eq(true)
  })

  it("returns false when no elements match the given value", function() {
    expect(some([1, 2], 3)).to.deep.eq(false)
    expect(some(["A", "B", "A"], "D")).to.deep.eq(false)
  })

  it("does not use .some", function() {
    expect(some.toString()).to.not.match(/\.some/)
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb78c3-b3c3-11e8-884e-0102c2c4839e
* title: toSentence
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named toSentence that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

- If you pass `["Sue", "Will"]` it should return `"Sue and Will"`
- If you pass `["Sue", "Will", "Rachel"]` it should return `"Sue, Will and Rachel"`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('toSentence', function() {

  it("returns an empty string when passed an empty array", function() {
    expect(toSentence([])).to.deep.eq("")
  })

  it("returns a string with the elements joined by a comma, with the last element separated by 'and'", function() {
    expect(toSentence(["cat", "bird"])).to.deep.eq("cat and bird")
    expect(toSentence(["a", "b", "c"])).to.deep.eq("a, b and c")
    expect(toSentence(["a", "b", "c", "d"])).to.deep.eq("a, b, c and d")
  })

  it("does not use .join", function() {
    expect(toSentence.toString()).to.not.match(/\.join/)
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb78c4-b3c3-11e8-884e-0102c2c4839e
* title: acronym
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

- If you pass `["Sue", "Will"]` it should return `"SW"`
- If you pass `["Java", Script", "Object", "Notation"]` it should return `"JSON"`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('acronym', function() {

  it("returns an empty string when passed an empty array", function() {
    expect(acronym([])).to.deep.eq("")
  })

  it("returns a string that's an acronym of the items of the array", function() {
    expect(acronym(["cat", "bird"])).to.deep.eq("cb")
    expect(acronym(["how", "now", "brown", "cow"])).to.deep.eq("hnbc")
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb9fd0-b3c3-11e8-884e-0102c2c4839e
* title: index
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

```js
var array = [{ id: 1, name: 'Joe' }, { id: 2, name: 'Sue' }]

index(array, 'id') // { 1: { id: 1, name: 'Joe' }, 2: { id: 2, name: 'Sue' } }
index(array, 'name') // { Joe: { id: 1, name: 'Joe' }, Sue: { id: 2, name: 'Sue' } }
```

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('index', function() {

  it("returns an empty object when passed an empty array", function() {
    expect(index([], 'id')).to.deep.eq({})
  })

  it("returns an object indexed by the given property", function() {
    expect(index([{id: 1, name: "Will"}, {id: 2, name: "Sue"}], 'id')).to.deep.eq({
      1: {id: 1, name: "Will"},
      2: {id: 2, name: "Sue"},
    })

    expect(index([{name: "Will", age: 32}, {name: "Sue", age: 33}], 'name')).to.deep.eq({
      'Will': {name: "Will", age: 32},
      'Sue':  {name: "Sue", age: 33},
    })
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb9fd1-b3c3-11e8-884e-0102c2c4839e
* title: invert
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

- If you pass `{id: 1, name: "Joe"}` it should return `{1: "id", Joe: "name"}`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('invert', function() {

  it("returns an empty object when passed an empty object", function() {
    expect(invert({})).to.deep.eq({})
  })

  it("returns an object where the keys and values have been swapped", function() {
    expect(invert({a: "1", b: "2", c: "3"})).to.deep.eq({1: "a", 2: "b", 3: "c"})
    expect(invert({"hello": "world"})).to.deep.eq({world: "hello"})
  })

  it("does not use Object.keys or Object.values", function() {
    expect(invert.toString()).to.not.match(/Object\.keys|Object\.values/)
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb9fd2-b3c3-11e8-884e-0102c2c4839e
* title: addSignature
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named addSignature that takes a name and an object, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

- If you pass `"Fred", {"contract": "foo"}` it should return `{"contract-signed": "foo - Fred"}`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('addSignature', function() {

  it("returns an empty object when passed an empty object", function() {
    expect(addSignature({})).to.deep.eq({})
  })

  it("returns an object where the keys have '-signed' appended", function() {
    let input = {
      "Contract": "blah blah"
    }
    let expected = {
      "Contract-signed": "blah blah - Joe"
    }

    expect(addSignature("Joe", input)).to.deep.eq(expected)

    input = {
      "Agreement": "something",
      "Code of Conduct": "blah blah"
    }
    expected = {
      "Agreement-signed": "something - Beth",
      "Code of Conduct-signed": "blah blah - Beth"
    }

    expect(addSignature("Beth", input)).to.deep.eq(expected)
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bb9fd3-b3c3-11e8-884e-0102c2c4839e
* title: pairs
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

- If you pass `{name: "Will", age: 24}` it should return `["name - will", "age - 24"]`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('pairs', function() {

  it("returns an empty array when passed an empty object", function() {
    expect(pairs({})).to.deep.eq([])
  })

  it("returns an array with <key - value> as the elements", function() {
    expect(pairs({a: "b", c: "d"})).to.deep.eq(["a - b", "c - d"])
    expect(pairs({hey: "there"})).to.deep.eq(["hey - there"])
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bbc6e0-b3c3-11e8-884e-0102c2c4839e
* title: sumValues
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named sumValues that takes an object and returns the sum of the values

Example:

- If you pass `{a: 1, b: 2}` it should return `3`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('sumValues', function() {

  it("returns 0 when passed an empty object", function() {
    expect(sumValues({})).to.deep.eq(0)
  })

  it("returns the sum of the values", function() {
    expect(sumValues({a: 1, c: 5})).to.deep.eq(6)
    expect(sumValues({foo: 12, bar: 5, baz: 3})).to.deep.eq(20)
  })

  it("does not use Object.values", function() {
    expect(sumValues.toString()).to.not.match(/Object\.values/)
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bbc6e1-b3c3-11e8-884e-0102c2c4839e
* title: biggestProperty
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

- If you pass `{1999: 4036, 2000: 7654}` it should return `'2000'`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('biggestProperty', function() {

  it("returns undefined when passed an empty object", function() {
    expect(biggestProperty({})).to.deep.eq(undefined)
  })

  it("returns the name of the property that has the highest value", function() {
    expect(biggestProperty({a: 1, c: 5})).to.deep.eq("c")
    expect(biggestProperty({acme: 3, foo: 12, bar: 5, baz: 3})).to.deep.eq("foo")
  })

  it("does not use Math.max or Object.keys", function() {
    expect(biggestProperty.toString()).to.not.match(/Object\.keys|Math\.max/)
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bbc6e2-b3c3-11e8-884e-0102c2c4839e
* title: keyForValue
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

- If you pass `{1999: 4036, 2000: 7654}` and `4036`, it should return `'1999'`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('keyForValue', function() {

  it("returns undefined when passed an empty object", function() {
    expect(keyForValue({}, 12)).to.deep.eq(undefined)
  })

  it("returns the name of the property that has the matching value", function() {
    expect(keyForValue({a: 1, c: 5}, 5)).to.deep.eq("c")
    expect(keyForValue({foo: 12, bar: 5, baz: 3}, 12)).to.deep.eq("foo")
  })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 90bbedf0-b3c3-11e8-884e-0102c2c4839e
* title: containsValue
* standard_uuids: WD-AAEBCAgBDQk

### !question

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

- If you pass `{1999: 4036, 2000: 7654}` and `4036`, it should return `true`

### !end-question

### !placeholder

```js
// your code here
```

### !end-placeholder

### !tests

```js
describe('containsValue', function() {

  it("returns false when passed an empty object", function() {
    expect(containsValue({}, 2)).to.deep.eq(false)
  })

  it("returns true if the object has the value", function() {
    expect(containsValue({a: 1, c: 5}, 5)).to.deep.eq(true)
    expect(containsValue({acme: 3, foo: 12, bar: 5, baz: 3}, 12)).to.deep.eq(true)
  })

  it("returns false if the object does not have the value", function() {
    expect(containsValue({a: 1, c: 5}, 7)).to.deep.eq(false)
    expect(containsValue({acme: 3, foo: 12, bar: 5, baz: 3}, 45)).to.deep.eq(false)
  })

  it("does not use .includes", function() {
    expect(containsValue.toString()).to.not.match(/\.includes/)
  })

})
```

### !end-tests

### !end-challenge
