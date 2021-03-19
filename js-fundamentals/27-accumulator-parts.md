# The Accumulator Pattern

## Learning Objectives

By the end of this lesson you will be able to:

* Identify the parts of the accumulator pattern

## Resources

Before looking at some real world examples, let's begin by looking at the parts of the
accumulator pattern.

# The Accumulator Pattern

## Objectives

By the end of this series of lessons you should be able to **write functions that use the accumulator pattern to solve problems**.

Specifically, you should be able to:

- Define a function using the correct number of parameters
- Declare and initialize an accumulator with a sensible default (and return it)
- Iterate for the correct number of times
- Alter the accumulator

## Rationale

The basic accumulator pattern is the basis for a huge number of algorithms.  Once you know how to solve basic problems using accumulator patterns you will have a strong fundamentals in algorithm design.

## What does the path look like?

Programming is the intersection of:

- Writing in a language
- Solving Problems
- Packaging those solutions (in this case, packaging them for the web)

One of the first and most important is to learn the Accumulator Pattern.

1. Start with the exercises in this unit.
  - Get as far as you can - don't worry if even the first problem is not doable
1. Finish reading the articles from this
1. Continue working through the exercises.


## How to get started

Right off the bat, it's important to know that you don't generally write code the way you write English.  When you write in English, you write top-to-bottom, left-to-right.  When you write code it's often best to write code from the outside in (not like how you write English).

To write an algorithm using the accumulator, here are the basic steps:

1. Define the functions
1. Declare and return the result variable
1. Set up the iteration
1. Alter the accumulator as necessary

Here's what that looks like:

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/391/accumulator-example.gif)

## Detailed Steps

The more detailed steps for creating a basic algorithm look like this:

1. Identify the inputs and write a function definition with those inputs
  - How many are there?
  - What are their types?

  ```js
  function joinWords (words) {

  }
  ```
3. Identify the output
  - What will the function return when the input is normal?
  - When will the function return when the input is empty?
4. Define the result variable and return it
  - Initialize it to whatever the output is _in the empty case_

  ```js
  function joinWords (words) {
    let result = ""

    return result;
  }
  ```
5. Determine how to iterate
  - How many times are you going to iterate?

  ```js
  function joinWords (words) {
    let result = ""
    for (var i = 0; i < words.length; i++) {
    }
    return result;
  }
  ```
6. Alter the accumulator `result`, using the information from the loop `words[i]`

  ```js
  function joinWords (words) {
    let result = ""
    for (var i = 0; i < words.length; i++) {
      result += words
    }
    return result;
  }
  ```

  # Choosing the initial value of the accumulator

  ## Objectives

  By the end of this lesson you should be able to:

  - Initialize the accumulator (the `result`) to an appropriate default

  ## Rationale

  Getting the initial value of the accumulator correct can greatly simplify your algorithm.  While you might be tempted to just pick an empty default like `[]`, `{}`, `0` or `""` those won't always be correct.  Luckily, the steps are easy to determine which value to choose.

  ## Understanding the empty case

  > Determine the output in the empty case, and set that as the default value

  When you write an algorithm there are two cases you should always consider:

  - The normal case
  - The empty case

  That is, you need to know what to do when your function was passed an input that would not require any iteration (the `for` loop would execute 0 times).  For example someone might pass you `0` or `[]` or `""` or `{}` and so your `for` loop will never execute.

  Most of the time, the accumulator (`result`) **should be initialized to whatever the return value of the empty case is**.

  ## Case #1 - Initialize the accumulator to a default

  Imagine you are writing a method to join an array of strings into one string.  It might look like this:

  ```js
  // when called with non-empty inputs (the "normal" case)
  join(["quick", "brown", "fox"]) // => "quickbrownfox"

  // when called with an empty input, it returns an empty string
  join([]) // => ""
  ```

  When `join` is called with empty input, the result should be an empty string `""`.

  Therefor when you write the `join` method, you would initialize the `result` variable (the accumulator) to an empty string:

  ```js
  function join (words) {
    let result = ""
    // ...
    return result
  }
  ```

  If you are writing a method that will sum the numbers in an array.  It might look like this:

  ```js
  // the "normal" case
  sum([1,2,3]) // => 6

  // the empty case
  sum([]) // => 0
  ```

  When the input is empty, the result should be 0.

  So when you write the method, you would initialize the `result` variable (the accumulator) to 0:

  ```js
  function sum (numbers) {
    let result = 0
    // ...
    return result
  }
  ```

  ## Case #2 - Don't initialize the accumulator

  There are lots of cases where the return value for the empty case is `undefined`.  For example:

  - What's the minimum/maximum value of an empty array?
  - What's the average of an empty array?

  You can't choose `0` because it won't be correct in every case.

  ```js
  minValue([-1,0,1]) // => -1

  minValue([]) // => undefined
  ```

  So when you write these methods, you typically _don't_ initialize the `result` variable:

  ```js
  function minValue (numbers) {
    let result
    // ...
    return result
  }
  ```

  ## Case #3 - Initialize the accumulator based on input

  In some cases you'll derive your accumulator from some input.  For example, if you wanted to get the max value of an array, you might initialize the accumulator (the `result` variable) to the first element in the array, then loop over the rest:

  ```js
  function max (array) {
    let result = array[0]
    for (let i = 1; i < array.length; i++) {
      if (array[i] > result) result = array[i]
    }
    return result
  }
  ```

  Notice how the initial value of `result` is replaced if any of the subsequent values in the array are greater than the initial value.

  ## Case #4 - Working with booleans

  Whenever you have a method that should return a boolean, you should _always_ return a boolean.  That is, `undefined` is not typically an acceptable value for methods that should return booleans.

  In these cases you need to commit to figuring out whether `true` or `false` make more sense in the empty case.

  This can sometimes be counter-intuitive.  For example, if you want to know if _all_ the values in an empty array meet some criteria, should that be `true` or `false`?  The answer often comes from actually writing the algorithm's normal case first, then figuring out the best default.

  # Choosing how to iterate

  ## Objectives

  By the end of this lesson you should be able to:

  - Choose how to iterate appropriately

  ## Rationale

  In even some very simple problems you'll be forced to break out of the default `for(var i = 0; i<thing.length...)` for loop.  If you are comfortable and fluent with figuring out how many times you need to loop, and altering the 3 arguments of the `for` loop accordingly, you'll be able to solve problems more quickly.

  ## Not just your basic `for`

  When you need to iterate, you have to figure out _how many times_ you need to iterate.

  If you are given an Array or a String, the most common case is to iterate over the entire array or string using a `for` loop:

  ```js
  for (let i = 0; i < array.length; i++) {
    // ...
  }
  ```

  If you are given an Object, use a `for in` loop:

  ```js
  for (let key in object) {
    let value = object[key]
    // ...
  }
  ```

  If you need to iterate a certain number of times, just use a simple `for` loop:

  ```js
  for (var i = 0; i < number; i++) {

  }
  ```

  But those aren't the only cases.  Sometimes things won't be that simple.

  ## A refresher on `for` loops

  Recall that a `for` loop needs:

  - An initial value
  - A conditional to tell it when to stop
  - An expression to run to alter the variable



  **Backwards**: Sometimes you have to iterate backwards through an input by altering the initial value, conditional _and_ the expression:

  ```js
  for (let i = array.length - 1; i >= 0; i--) {
    // ...
  }
  ```

  **Different initial value**: Sometimes you have to iterate starting _from_ some other initial value other than 0:

  ```js
  for (let i = startIndex; i < items.length; i++) {
    // ...
  }
  ```

  **Different conditionals**: Sometimes you have to iterate starting _to_ that's not exactly the size of the input:

  ```js
  for (let i = 0; i < items.length - 1; i++) {
    // ...
  }
  ```

  **Different expressions**: Sometimes you have to iterate by increasing the index by more than 1:

  ```js
  for (let i = 0; i < items.length; i += 3) {
    // ...
  }
  ```

  The questions to ask yourself are:

  - What's the starting value I need?
  - How many times do I need to iterate?
  - In what ways do I need to increase / decrease / change the iterator variable as I go?

  # Altering the accumulator

  ## Objectives

  By the end of this lesson you should be able to:

  - Access 2-to-3 pieces of data from inside the loop
  - Perform common mutations on the accumulator variable

  ## Rationale

  The code inside the loop typically requires the most thought of any part of the accumulator problem.  In order to get over "writer's block" and to not feel like you've just been dropped off a mental cliff, you need to have some tools in your tool belt.

  Knowing that there are 2-3 pieces of data you can access, and that you can mutate the accumulator in a few standard ways can help you come up with a reasonable hypothesis for how the solution might look.

  Like everything in programming, becoming fluent with these steps will help you solve any problem, even larger ones, more quickly.

  ## How it works

  OK - so you've gotten this far:

  ```js
  function prefix (items) {
    let result = []
    for (let i = 0; i < items.length; i++) {
      // WHAT NOW!??
    }
    return result
  }
  ```

  And now you have to _do_ something with the accumulator.  The "do something" part involves 2 steps:

  - Figuring out what data is available to you
  - Mutating the accumulator appropriately

  ## Accessing the data you need

  First, when you are inside the loop take stock of what's available to you inside the loop.

  When iterating over arrays and strings you'll often have:

  - The index (for example `i`)
  - The element/character at that index (for example `items[i]`)
  - The accumulator itself (for example `result`)

  ```js
  prefix(["brown", "fox"])

  function prefix (items) {
    let result = []
    for (let i = 0; i < items.length; i++) {
      // i is the index - 0, 1, 2 etc.
      // items[i] is the element in the array - "brown", "fox" etc.
      // result is the accumulator - [], ["1. brown", "2. fox"] etc.
    }
    return result
  }
  ```

  When iterating over objects you'll have:

  - The property (for example `key`)
  - The value for the object at that index (for example `object[key]`)
  - The accumulator itself (for example `result`)

  ```js
  function values (object) {
    let result = []
    for (let key in object) {
      // key is the property name - "name", "age" etc.
      // object[key] is the value at that property - "Joe", 24 etc.
      // result is the accumulator - [], ["Joe"], ["Joe", 24] etc.
    }
    return result
  }
  ```

  If you are iterating from one number to another, you'll just have that number, plus the accumulator.

  ## Mutating the accumulator

  **If it's a string**, you'll often perform string concatenation.  Note that sometimes you append to the end, sometimes you append to the front:

  ```js
  // append to the end
  result = result + items[i]
  result += items[i]

  // append to the front
  result = items[i] + result
  ```

  **If it's an array**, you'll often `push` or `unshift`:

  ```js
  // add to the end
  result.push(items[i] * 2)

  // add to the front
  result.unshift(items[i] * 2)
  ```

  **If it's an object**, you'll often set properties using bracket notation.  When you set properties, you'll almost always be setting those properties dynamically:

  ```js
  result[ items[i] ] = i
  ```

  **If it's a boolean**, you'll often change it conditionally:

  ```js
  result = result || items[i]

  result = result && (items[i] > 10)

  result = items[i] && result
  ```

  **If it's a number**, you'll often perform mathematical operations:

  ```js
  // addition
  result = result + items[i]
  result += items[i]

  // multiplication
  result = result * items[i]
  result *= items[i]

  // subtraction
  result = result - items[i]
  result -= items[i]
  ```

  ## Using conditionals

  Often times inside the loop you'll need logic.  For example if you are creating an algorithm that will allow you to filter the results of an array, you'll have a conditional (an `if` statement) of some sort that that will determine when you'll put elements into the array.

  Some common things that might trip you up:

  **Sometimes you will check if the accumulator has been initialized**: In this case you need to check if the accumulator is actually `undefined`, as `false`, `0` and `""` are all falsey:

  ```js
  function min (items) {
    let result
    for (let i = 0; i < items.length; i++) {
      if (typeof result === 'undefined') {
        // this is the first time through the loop
      }
    }
    return result
  }
  ```

  **Sometimes you will check the index**: This can happen when you need to know, for example, if you are on the last item in the array:

  ```js
  function min (items) {
    let result
    for (let i = 0; i < items.length; i++) {
      if (i === items.length - 1) {
        // this is the last time through the loop
      }
    }
    return result
  }
  ```

  There are several other cases here, but it's worth pointing out that the conditionals can use any of the data points available, and perform calculations and call methods on those values.

## Challenges

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: aef61c80-b3d9-11e8-92ed-57e3f4477ba5
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
