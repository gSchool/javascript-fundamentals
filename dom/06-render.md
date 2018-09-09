# Render Function

## Learning Objectives

By the end of this lesson, you will be able to:

* Build a `render()` function that updates the DOM based on data stored in memory

## Refactoring our code to be more clear

The more JavaScript manipulation code we add, the more complex our JavaScript ends up looking. Further complicating this is that we now have two places where we can store data. Consider how we would represent a list of names in JavaScript:

```js
var names = [ 'Jason', 'Trini', 'Zack', 'Kimberly', 'Billy' ]
```

With JavaScript we can perform all kinds of operations on it. For example, to add a name we just need to do:

```js
names.push('Tommy')
```

When we're working with the DOM, it can be a little bit more complicated. In HTML we might represent this list as:

```html
<ul>
  <li>Jason</li>
  <li>Trini</li>
  <li>Zack</li>
  <li>Kimberly</li>
  <li>Billy</li>
</ul>
```

In order to add an item to this list, we need to do something like this:

```js
var ul = document.querySelector('ul')
var li = document.createElement('li')
li.textContent = 'Tommy'
ul.append(li)
```

In these two cases, our data is stored in different places. If I need to answer the question "How many names are a part of this list?" in the first case we'd look to `names.length` while in second case we need to look to the DOM.

Ultimately, both of these ways can be the "right" choice for your program. However, problems arise when we're trying to save data in too many places. If we attempt to store some information in JavaScript and some information in the DOM, it becomes more likely that this information will get out of sync. Ideally, we want to pick one place to store our information.

JavaScript is a much more powerful language to work with so we will encourage you to store the _state of your application_ in JavaScript. To reflect those changes on the DOM, we will build a `render` function. This function will handle all rendering dependent upon the application's current state as opposed to piecemeal.

## Challenges

<!-- Question -->

### !challenge

* type: paragraph
* id: ffe964f0-b3d2-11e8-b5de-9f42ac92f790
* title: The Render Function A

##### !question

Take a look at the following 3 JSFiddles. When you get to each page, make sure to hit the "Run" button so everything works correctly.

* (Information on the DOM) [Example A](https://jsfiddle.net/gh/get/library/pure/gSchool/g67_fiddles/tree/master/render-function-A)
* (Information in JavaScript) [Example B](https://jsfiddle.net/gh/get/library/pure/gSchool/g67_fiddles/tree/master/render-function-B)
* (Using the Render Function) [Example C](https://jsfiddle.net/gh/get/library/pure/gSchool/g67_fiddles/tree/master/render-function-C)

Compare the three sets of code. They all accomplish the same goal but in different ways. What are some of the ways they are different and what are benefits of the last example?

##### !end-question

##### !explanation

Thank you! An instructor will follow up if they have any questions.

##### !end-explanation

### !end-challenge
