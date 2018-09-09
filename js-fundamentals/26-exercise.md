# Exercise

This exercise will require you to use what you've learned from the previous lessons.

## Questions

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 86b5be60-b3cf-11e8-9c80-3f50f0d4f65c
* title: Functions Exercise A
* standard_uuids: WD-CAYKDAkEDQ4

### !question

Strings are intense if they end in three or more more ! marks.
However, having ! marks anywhere but the end makes for a non-intense
string

Intense Strings
* Hello!!!
* This is an intense string!!!!

Non-intense strings
* Hello
* This is ! not an intense string!!!!
* Also not intense!!

Implement the intenseString function below, where it will return true
when an intense string is passed in, and false otherwise.

### !end-question

### !placeholder
```js
function intenseString(str) {
  // your code here
}
```

### !end-placeholder

### !tests

```js
describe('intenseString', function() {

    it("can detect intense strings", function() {
      expect(intenseString('Hello!!!')).to.equal(true)
      expect(intenseString('Intense strings!!!!!')).to.equal(true)
    })
    it("can detect non-intense strings", function() {
      expect(intenseString('')).to.equal(false)
      expect(intenseString('Intense strings!')).to.equal(false)
      expect(intenseString('Intense strings!!')).to.equal(false)
      expect(intenseString('!Intense! strings!!!')).to.equal(false)
    })

})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 86b5e570-b3cf-11e8-9c80-3f50f0d4f65c
* title: Functions Exercise Mean
* standard_uuids: WD-CAYKDAkEDQ4

### !question

Implement the functions below for [mean](https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/mean-median-basics/a/mean-median-and-mode-review).

### !end-question

### !placeholder

```js
function mean(numbers) {
  // your code here
}
```

### !end-placeholder

### !tests

```js
describe('mean function', function() {

    it("can compute the mean", function() {
      expect(mean([10, 10, 15, 20, 20])).to.equal(15)
    })

})
```

### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* language: javascript
* id: 86b5e571-b3cf-11e8-9c80-3f50f0d4f65c
* title: Functions Exercise median
* standard_uuids: WD-CAYKDAkEDQ4

### !question

Implement the functions below for [median](https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/mean-median-basics/a/mean-median-and-mode-review).

### !end-question

### !placeholder

```js
function median(numbers) {
  // your code here
}
```

### !end-placeholder

### !tests

```js
describe('median function', function() {

    it("can compute the median of an odd numbered list", function() {
      expect(median([10, 10, 15, 20, 20])).to.equal(15)
    })
    it("can compute the median of an even numbered list", function() {
      expect(median([10, 10, 15, 20, 20, 21])).to.equal(17.5)
    })

})
```

### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* language: javascript
* id: 86b5e572-b3cf-11e8-9c80-3f50f0d4f65c
* title: Functions Exercise Mode
* standard_uuids: WD-CAYKDAkEDQ4

### !question

Implement the functions below for [mode](https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/mean-median-basics/a/mean-median-and-mode-review).

### !end-question

### !placeholder

```js
function mode(numbers) {
  // your code here
}
```

### !end-placeholder

### !tests

```js
describe('mean, median, mode functions', function() {

    it("can compute the mode", function() {
      expect(mode([10, 10, 15, 20])).to.equal(10)
    })

})
```

### !end-tests

### !end-challenge
