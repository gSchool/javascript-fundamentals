# Coercion

## Learning Objectives

By the end of this lesson you will be able to:

* Coerce strings into numbers with ==

## Type Conversion

Sometimes, your code uses a value of one type when JavaScript expects a value of a different type. In this case, rather than throwing an error, JavaScript will convert the value into a type that makes sense.

For example, suppose you type the expression `1 + 'hi'`. For numbers, the `+` operator means addition; but for strings, it means concatenation. So how does JavaScript deal with this ambiguity? It converts the number into a string and then concatenates.

This **type conversion** also happens when you pass values into `if` statements. In a block of code like `if (x) {...}`, the `x` variable is expected to be a boolean. But if it's not, JavaScript will convert it to a boolean. Most values in JavaScript are "truthy". That is, they get converted into `true` should the need arise. In fact, there are only six "falsy" values in JavaScript.

1. `false`
1. `null`
1. `undefined`
1. `0`
1. `''`
1. `NaN`

See the [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) and [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) documentation on the Mozilla Developer Network for more information.

You can always check something's type in JavaScript using the `typeof` operator.

```javascript
typeof true // 'boolean'
typeof 42   // 'number'
typeof 'hi' // 'string'
```

See the [typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) on the Mozilla Developer Network for more information.

## Challenges

<!-- Question -->

### !challenge

* type: multiple-choice
* id: e8d4f9d7-a8f6-4f71-847b-2eb706192fef
* title: Type Conversion A

##### !question

What will the following evaluate to?

```js
10 == "10"
```

##### !end-question

##### !options

* true
* false

##### !end-options

##### !answer

true

##### !end-answer

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 1a0fb7b3-7586-4d2a-9d0a-cc64f1618a0a
* title: Type Conversion B

##### !question

What will the following evaluate to?

```js
typeof NaN === typeof 42
```

##### !end-question

##### !options

* true
* false

##### !end-options

##### !answer

true

##### !end-answer

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 83bfe312-3fc1-46de-8c2a-0709a5bfee5f
* title: Type Conversion C

##### !question

What will the following evaluate to?

```js
'' == undefined
```

##### !end-question

##### !options

* true
* false

##### !end-options

##### !answer

false

##### !end-answer

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: d405986f-6bad-4ae3-b06e-7722e8df5183
* title: Type Conversion D

##### !question

What will the following evaluate to?

```js
typeof null
```

##### !end-question

##### !options

* string
* number
* boolean
* undefined
* null
* object
* symbol

##### !end-options

##### !answer

object

##### !end-answer

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 22445e64-7c3f-48ec-b933-f3f67e85cbf4
* title: Type Conversion E

##### !question

What will the following evaluate to?

```js
typeof ''
```

##### !end-question

##### !options

* string
* number
* boolean
* undefined
* null
* object
* symbol

##### !end-options

##### !answer

string

##### !end-answer

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 8ded9282-3024-4cc5-8e4d-12db65ba9a3e
* title: Type Conversion F

##### !question

What will the following evaluate to?

```js
typeof Math.random()
```

##### !end-question

##### !options

* string
* number
* boolean
* undefined
* null
* object
* symbol

##### !end-options

##### !answer

number

##### !end-answer

### !end-challenge
