# Data Types & Variables

## Learning Objectives

_By the end of this lesson, you will be able to:_

* Create an instance of the most commonly used primitive data types in JavaScript
* Describe each primitive data type and its usage
* Declare new, well-named variables with var and assign values to them

## Data Types

A _Data Type_ is a format of information that behaves in a specific way.

The latest ECMAScript standard defines six _primitive_ data types:

- Boolean: True or False
- Number: Any number, integer or floating point
- String: Any text
- Undefined: A space in memory that has nothing in it _yet_
- Null: A space in memory that has been explicitly set to be empty
- Symbol: New in ECMAScript 6, Symbols are a neat new primitive type that can be helpful for metaprogramming in JavaScript. Symbols will not be a focus of this course.

A **primitive** is data that's immutable&mdash; in other words, data that can't be changed.

For example, the number `42` in JavaScript is a primitive. That means it can never be anything other than `42`. Adding `1` to it doesn't change it's value, but instead, results in the number `43`, a completely new and equally unchangeable number. This may sound a bit confusing and obvious, but it'll make more sense when you learn about Data Structures.

See [data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) and [primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) on the Mozilla Developer Network for more information.

### Comments

Before diving into primitive data types, you'll look at comments. These are an essential tool in any programmer's toolbox, especially as they gain understanding of the code around them. A comment is text inside of a file that is _ignored_ by the programming language.

Comments are used to add hints, notes, suggestions, or warnings to JavaScript code. This can make it easier to read and understand. They can also be used to disable code to prevent it from being executed which can be a valuable debugging tool. JavaScript has two ways of creating comments in code.

The first way is with the `//` style. This makes all text following it on the same line into a comment.

```javascript
// This is a one line JavaScript comment
```

The second way is the `/* */` style, which is more flexible. For example, you can use it on a single line.

```javascript
/* This is a one line JavaScript comment */
```

Or you can use it to make multiple line comments.

```javascript
/* This comment spans multiple lines. Notice
   that we don't need to end the comment on the first line. */
```

Most of the time, you'll use the `//` style because Atom can toggle a line to be commented or not using the `Command + /` keyboard shortcut. Go ahead, try it out!

```js
// console.log("I won't run!")
```

See the [comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Comments) documentation on the Mozilla Developer Network for more information.

### Boolean

A **Boolean** represents a logical entity and can have two values: `true` and `false`.

```javascript
// San Francisco is expensive
true;

// Seattle is cheap
false;
```

See the [boolean type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) and [`Boolean` global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) on the Mozilla Developer Network for more information.

### Number

According to the ECMAScript standard, there's only one number type, and it represents both integer and floating-point (i.e. decimal) numbers between -(2⁵³ - 1) and 2⁵³ - 1).

```javascript
// integer numbers
-3;
-2;
-1;
0;
1;
2;
3;

// floating-point (i.e. decimal) numbers
-42.42;
-2.718;
-0.25;
.66666667;
3.14;
199.99;
```

If you want to distinguish between integers and floats, there are a couple of ways to do this. The most modern approach, as of ES6, is to use the `Number.isInteger()` function.

```javascript
Number.isInteger(4);    // true
Number.isInteger(4.1);  // false
Number.isInteger(4.0);   // true
```

Additionally, the number type has three symbolic values: `Infinity`, `-Infinity`, and `NaN` (not-a-number). To determine if a number is finite or not-a-number, use the `Number.isFinite()` and `Number.isNaN()` functions, respectively.

Note that both of the `n` characters of `NaN` must be uppercase; otherwise, JavaScript will throw an error.

```javascript
Number.isFinite(100);       // true
Number.isFinite(Infinity);  // false
Number.isFinite(-Infinity); // false

Number.isNaN(200);  // false
Number.isNaN(NaN);  // true
```

See the [number type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) and [`Number` global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) on the Mozilla Developer Network for more information.

### String

JavaScript's string type is used to represent textual data. To create a string, simply append and prepend a series of characters with either single or double quotation marks. Which quotations you use is a matter of style preference. Just make sure that both opening and closing quotations are the same, or JavaScript will throw an error.

```javascript
'Jane';
"John";
```

Each character in the string occupies a position in the String. The first character is at index 0, the next at index 1, and so on. The length of a String is the number of characters in it.

```javascript
'melissa'.length;       // 7
'melissa'[0];           // 'm'
'melissa'.substr(1);    // 'elissa'
'melissa'.substr(2, 2); // 'li'
```

There are a number of built-in methods associated with strings, some of which are new additions as of ES6.

```javascript
'matt'.toUpperCase(); // 'MATT'
'MATT'.toLowerCase(); // 'matt'

'Matt'.indexOf('a');  // 1
'Matt'.indexOf('at'); // 1
'Matt'.indexOf('ab'); // -1

'Matt'.indexOf('t');      // 2
'Matt'.lastIndexOf('t');  // 3

// ES6
'Matt'.startsWith('Ma');  // true
'Matt'.endsWith('q');     // false
'Matt'.includes('t');     // true
```

See the [string type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) and [`String` global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) on the Mozilla Developer Network for more information.

Strings are for storing _text_. The reason strings exist is so that you can construct interfaces, or even blocks of HTML.

### Undefined

`undefined` represents **a value that hasn't been defined**. When you see `undefined`, it should signal to you that you likely haven't assigned anything to a variable. It signifies that you may have a label for a variable, but you don't necessarily have a value for it. Think of it as a question, prior to having an answer.

```javascript
var x;
x; // undefined

x = 3;
x; // no longer undefined
```

See the [`undefined` global property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) on the Mozilla Developer Network for more information.

### Null

The value `null` represents the **intentional absence of any value**. Unlike `undefined`, it's not explicitly set by default to unassigned variables. If you want something to be `null`, you must make it so.

```javascript
var x = null;
```

See the [`null` value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) on the Mozilla Developer Network for more information.

Further reading:

- [What is the difference between null and undefined in JavaScript?](http://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript)
- [Why is typeof null "object"?](http://stackoverflow.com/questions/18808226/why-is-typeof-null-object)

### Symbol

Symbol is the newest primitive data type to be added to JavaScript. Talking about symbols is a bit advanced for the first day of JavaScript, especially since you haven't learned about objects yet. If you want a sneak peak, see the [`Symbol` global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) on the Mozilla Developer Network for more information.

## A mental model of variables

<iframe src="https://player.vimeo.com/video/142087926?byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

A Variable is a label for a place in your computer's RAM where you've stored some data, like the datatypes already discussed. A Variable lets you give a name to a value. Think of a variable as a bucket that can store one thing, with a single space for a label. To create a new variable, use the `var` **keyword** followed by the name of the variable.

```js
var person;
```

> A **keyword** is a word that has special meaning and is [reserved by the ECMAScript standard](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords).

The word variable means 'can change' or 'can vary'. In JavaScript, the value inside a variable can vary over time. Additionally, a JavaScript variable can store many different types of values. However, if you put a new value in a variable, the old one goes away. This is called *reassigning* a variable.

A variable that has _not_ been assigned a value is of data type `undefined`.

```js
var nothing;
console.log(nothing); // undefined
```

Remember, a variable only needs to be declared once using the `var` keyword.

```js
var name = 'Casey';
name = 'Francis';
name = 42;
```

Variable names in JavaScript can't contain spaces. The standard practice is to have variables start with a lowercase letter and capitalize each subsequent word. This is called camel case.

```js
var firstName = 'Paula';
```

Be careful with your variable names because it's easy to misspell them. Even if you just get the capitalization wrong, the JavaScript interpreter won't know what you mean.

```js
var lastName = 'Dean';
lastname; // ReferenceError
```

Variable names also can't start with numbers, but can contain numbers. If needed, it's common to add numbers at the end of a variable name.

```js
var person1;
var person2;
```

Variables can also store the result of any **expression**.

```js
var result = 2 + 2;
```

The following video will help you identify, and speak correctly about, key concepts in JavaScript code. The video is approximately 15 minutes long, but is well worth the watch. Please watch the whole video.

<iframe src="https://player.vimeo.com/video/141864271?byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Challenges

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 3034a030-b3c3-11e8-9ceb-f1ccefb688fa
* title: Primitive Types A

##### !question

Which of the following is an _incorrect_ way to create a string in JavaScript?

##### !end-question

##### !options

* `"Hello World"`
* `'Hello World'`
* `“Hello World”`
* None of the above

##### !end-options

##### !answer

`“Hello World”`

##### !end-answer

##### !explanation

Look closely. Those double quotation marks are not the same. These kind of quotations are called "curly quotes" and can be a programmer's worst nightmare. Often you'll come across these quotes when you are copying and pasting some text from the internet.

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 3034a031-b3c3-11e8-9ceb-f1ccefb688fa
* title: Primitive Types B

##### !question

Which of the following is _not_ a number? That is, when using `typeof` on the various values below, which will not return a response of `'number'`?

##### !end-question

##### !options

* `'0'`
* `4.2`
* `77`
* `NaN`

##### !end-options

##### !answer

`'0'`

##### !end-answer

##### !explanation

Remember that `NaN` is technically of the _type_ number even though it literally means "not a number."

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 3034c740-b3c3-11e8-9ceb-f1ccefb688fa
* title: Primitive Types C

##### !question

Choose the correct statement.

##### !end-question

##### !options

* `null` represents a value that has yet to be defined and `undefined` represents a value that is intentionally absent.
* `undefined` represents a value that has yet to be defined and `null` represents a value that is intentionally absent.
* `undefined` and `null` are equivalent and can be used interchangeably.
* None of the above are correct.

##### !end-options

##### !answer

`undefined` represents a value that has yet to be defined and `null` represents a value that is intentionally absent.

##### !end-answer

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 3034c741-b3c3-11e8-9ceb-f1ccefb688fa
* title: Reassigning Values A

##### !question

What will the final value of `cup` be?

```js
var cup = 'of coffee'
cup = 'of water'
var mug = 'of tea'
cup = mug
```

##### !end-question

##### !options

* `of coffee`
* `of water`
* `of tea`
* `undefined`

##### !end-options

##### !answer

`of tea`

##### !end-answer

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 3034c742-b3c3-11e8-9ceb-f1ccefb688fa
* title: Create Undefined Variables

### !question

Create two variables that will contain information you don't yet have:

```js
numHoursToLearnJavascript
numHoursToLearnTennis
```

### !end-question

### !placeholder

### !end-placeholder

### !tests

```js
describe('undefined Variables', function() {

    it("has a variable called numHoursToLearnJavascript, which is undefined", function() {
      expect(numHoursToLearnJavascript, "numHoursToLearnJavascript should be undefined!").to.be.undefined;
    })

    it("has a variable called numHoursToLearnTennis, which is undefined", function() {
      expect(numHoursToLearnTennis, "numHoursToLearnTennis should be undefined!").to.be.undefined;
    })

})
```
### !end-tests

### !explanation

When something is `undefined`, it's because you don't know what the value is, yet. It is the _default value_ of all variables, until you use the assignment operator.

### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 3034c743-b3c3-11e8-9ceb-f1ccefb688fa
* title: Create Null Variables

### !question

Create two variables that you already know will be `null`. Assign them the special keyword `null`.
```js
uglyKittens
boringPuppies
```

### !end-question

### !placeholder

### !end-placeholder

### !tests

```js
describe('Null Variables', function() {

  it("has a variable called uglyKittens, which is null", function() {
    expect(uglyKittens, "uglyKittens should be null, there are no ugly kittens!").to.be.null;
  })

  it("has a variable called boringPuppies, which is null", function() {
    expect(boringPuppies, "boringPuppies should be null, there are no boring puppies!").to.be.null;
  })

})
```
### !end-tests

### !explanation

Explicitly setting a value to `null` is for _communicating to other developers_ about the idea of "emptiness". Null is "empty on purpose", Undefined is "empty by default".

### !end-explanation

### !end-challenge
