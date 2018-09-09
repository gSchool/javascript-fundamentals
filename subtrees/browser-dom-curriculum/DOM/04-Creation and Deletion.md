# Intro to the DOM: Creation and Deletion

## Objectives

- Create brand new DOM elements
- Manipulate DOM elements in-memory
- Move an existing DOM element
- Remove elements from the DOM

## Intro

We've just been manipulating parts of individual nodes. What about manipulating a document as a whole by adding, moving, or deleting nodes?

## Node Manipulation Methods

For each of the following methods, we'll talk about it together and then do the followup exercises

### `document.createElement()` [docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

We can call `document.createElement()` and pass a tag name in to automatically create the DOM element for the associated tag.

```javascript
var newArticle = document.createElement('article');

console.log(newArticle);
// <article></article>
console.log(newArticle.parentNode);
// null
console.log(newArticle.innerHTML);
newArticle.innerHTML = "I'm an article about the awesomeness of the DOM!"
```

In this example, a new article element is being created. Upon initial creation, the element is just floating in memory. It hasn't been attached to the Document anywhere as is evidenced by parentNode being null.

This element starts off empty and plain but we can do any sort of node manipulation that we want to at this point, such as assigning inner values, adding classes, etc.

_Pro tip_ If you're doing a lot of complex DOM manipulation, it is much quicker to do those operations while the node(s) are still in memory instead of attached to the document.

### `.appendChild()` [docs](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

To attach the newly created element to the document, we'll use `appendChild()` to attach it to a parent:

```javascript
document.body.appendChild(newArticle);
```

Note that append child always places the element as the last child of the specific parent; hence appending. To change the position of an inserted element, we'd need to use a different method.

### `.insertBefore()` [docs](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)

```javascript
document.body.insertBefore(newArticle, document.body.children[0]);
```

This inserts a value before the first item in the document body; in other words, this puts the article at the top of the body. After doing so, note that it didn't insert the article there _in addition_ to at the bottom. The element (node) can only have one parent, so it was moved.

#### __EXERCISE__

* Use javascript to create a nav menu with links for "Home", "Products", "Clients", "About Us", and "Blog".
* Create the links in a different order than they appear on the page, such as "Products", then "Home", then "Clients", then "Blog", then "About Us"

### `.cloneNode()` [docs](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)

If I wanted to have the article inserted at both the top and bottom of my body, I'd need to create a duplicate of the element to have it appear in both spots.

```javascript
var secondArticle = newArticle.cloneNode(true);
document.body.appendChild(secondArticle);
```

#### __EXERCISE__

* Simplify the creation of the previous nav by cloning and modifying nodes

### `.removeChild()` [docs](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)

```javascript
document.body.removeChild(secondArticle);

document.body.appendChild(document.createElement('footer'));
document.body.removeChild(document.body.children[document.body.children.length - 1]);
```

Note that if there's not a stored reference to the element, it will be garbage collected and removed from memory - permanently deleted. The first element, secondArticle, still exists because there is a stored reference - the `secondArticle` variable. The second article will be completely removed.

If you only have a specific element that you need to remove, you can reference it's parent node to then remove itself. This way you don't have to know where an element is located:

```javascript
document.body.appendChild(secondArticle);
secondArticle.parentNode.removeChild(secondArticle);
```

### `.replaceChild()` [docs](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild)

Often you may want to change one node out for another. This could be done by inserting a node before the one to be removed and then removing the other, but this may have other issues. Using replaceChild is a quick and easy way to handle the process

```javascript
var updatedArticle = document.createElement('article');
updatedArticle.innerHTML = "This article is slightly less enthusiastic about the DOM but still speaks about its versatility and necessity.";

newArticle.parentNode.replaceChild(updatedArticle, newArticle);
```

#### __EXERCISE__

* After creation of the nav, use setTimeout along with these methods to remove a link, wait a second, and then replace the next link with the one previous removed


### `createTextNode()` vs `innerHTML`

innerHTML allows full chunks of html to be added as the contents of an element. `createTextNode` does some basic escaping to try to just have text inserted. This should not be used as a sanitizing technique! See [this post](http://benv.ca/2012/10/02/you-are-probably-misusing-DOM-text-methods/).


## Exercises

After this, work on the Intro to the Dom exercise and then the DOM Checkerboard exercise.

## Challenges

<!-- Question -->

### !challenge

* type: project
* id: b3606dac-8abd-4f8e-a4ee-5f5f11640932
* title: DOM Manipulation

##### !question

### Build a Page

* [JSFiddle](https://jsfiddle.net/gh/get/library/pure/gSchool/g67_fiddles/tree/master/dom-manipulation)

Go to the above JSFiddle and complete the following:

1. Remove the entire div with a class of "remove-me"
1. Add a class of "galvanize-link" to the link in the footer
1. Change the "href" attribute so that the value is "http://galvanize.com"
1. Add an `h1` element to the top of the page with some text inside of it

**Make sure you are logged in!** Once you've finished, hit "Save" and paste the new URL below.

##### !end-question

##### !placeholder

https://jsfiddle.net/<username>/<fiddle-id>

##### !end-placeholder

### !end-challenge
