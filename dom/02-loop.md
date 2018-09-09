# Collections of Nodes

## Learning Objectives

By the end of this lesson, you will be able to:

* Loop over collections of nodes to manipulate multiple items

## Resources

Often we will need to perform operations on an entire list of elements. You may have already noticed that when you select multiple elements you get something back that looks like an Array.

```js
var pTags = document.getElementsByTagName('p')
console.log(pTags)
Array.isArray(pTags)
```

While it looks like an array, as you can see it is actually something different. In this case, what gets returned is an [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection). There are also instances where you could get a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) returned. These are different types of data structures that look like arrays but operate differently.

Regardless of the data structure returned, you can always loop over these with a regular `for` loop.

## Challenges

<!-- Question -->

### !challenge

* type: project
* id: 26b1ecf0-b3d9-11e8-89b8-f32133e66ea3
* title: Loop over DOM Elements

##### !question

### Dynamic Coloring

* [JSFiddle](https://jsfiddle.net/gh/get/library/pure/gSchool/g67_fiddles/tree/master/dom-looping)

Loop over each list item in the above JSFiddle and do the following:

1. When you get to the page, press the "Run" button so that it correctly loads.
1. If the number inside the `span` is less than 5, add a class to the span of `badge-danger`
1. If the number inside the `span` is less than 10, add a class to the span of `badge-secondary`
1. Otherwise, add a class to the span of `badge-danger`

**Make sure you are logged in!** Once you've finished, hit "Save" and paste the new URL below.

##### !end-question

##### !placeholder

https://jsfiddle.net/<username>/<fiddle-id>

##### !end-placeholder

### !end-challenge
