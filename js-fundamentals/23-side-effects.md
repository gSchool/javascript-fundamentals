# Side Effects

## Learning Objectives

By the end of this lesson you will be able to:

* Write functions that cause side effects

## Resources

Another way to use functions is for their side effects. In programming, a side effect is something
that affects state outside of that particular function (i.e. changing a global variables state).

* [Wikipedia: Side Effect](https://en.wikipedia.org/wiki/Side_effect_%28computer_science%29)

## Challenges

<!-- Question -->

### !challenge

* type: paragraph
* id: 06caea00-b3c9-11e8-86aa-2d44bc389978
* title: Side Effects

##### !question

The following two snippets of code are different. Describe the difference and why it matters.

```js
function boom () {
  console.log('BOOM!')
}
```

```js
function boom () {
  return 'BOOM!'
}
```

##### !end-question

##### !placeholder

Describe the difference between the above two functions.

##### !end-placeholder

### !end-challenge
