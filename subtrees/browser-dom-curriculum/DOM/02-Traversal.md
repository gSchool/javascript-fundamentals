# Intro to the DOM: Traversal

## Objectives

***

By the end of this article you should be able to:

- Query the the DOM for nodes using CSS selectors.
- Traverse the DOM using parent, sibling and children nodes.
- Access the values of HTML attributes and the `innerText` of a node.

## Traversing the DOM

***

The DOM allows for our programs to interact with the document. Just like the browser provides us with an object called `console` to interact with the console, it provides us with an object called `document` to interact with the document.

This object is at the core of every single Javascript framework.

The `document` allows us to find, access, modify, add and remove nodes.

### Querying the DOM

***

**You Do:**

1. Write down the CSS rule to style all elements with the class `pink` to have a pink background.
1. Write down the CSS rule to style all elements with an ID of `tk421` to have a white background.

CSS uses `selectors` to select elements from the document and apply styles to them.

Querying the document works the same way, we can use `selectors` to query for elements based on ID, class name, name and tag name.

For all of the following lessons:

**You Do:**

1. Open your favorite development browser to [developer.mozilla.org](https://developer.mozilla.org/en-US/).
1. Open up the console using `cmd` + `option` + `j`.


### document.getElementbyId



[MDN: getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

**You Do:**

1. In the console type `document.getElementById('home-q')` and press `return`.
1. What was the output?

We passed in the string containing the ID of an element to `document.getElementById` and it returned an [Element object](https://developer.mozilla.org/en-US/docs/Web/API/Element). We'll dive more into all the things we can do with an element later on.


### document.getElementsByTagName and document.getElementsByClassName



- [MDN: getElementsByTagName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)
- [MDN: getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)

**You Do:**

1. In the console type `document.getElementsByTagName('a')` and press return.
1. What was the output?
1. In the console type `document.getElementsByClassName('home-features')`
1. What was the output?

We passed in a string containing the tag of the elements to `document.getElementsByTagName` and `document.getElementsByClassName` and it returned a live [HTML Collection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection). Much like a functions `arguments` bonus parameter an HTML Collection is a lot like an array, but it is not; it is an object.

**Notice** how it returns something different than `getElementById`?

### document.querySelector



[MDN: querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

`querySelector` is really powerful, instead of passing in an id, class or tag name we can just pass in a valid CSS selector.

**You Do:**

1. In the console type `document.querySelector('.callout-newsletter')`.
1. What was the output?
1. In the console type `document.querySelector('input[name="q"]')`.
1. What was the output?

This method returns a single [Element object](https://developer.mozilla.org/en-US/docs/Web/API/Element) just like `getElementById`.

### document.querySelectorAll



[MDN: querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

`querySelectorAll` works similarly to `querySelector` where it lets you just select elements using CSS queries.

**You Do:**

1. In the console type `document.querySelectorAll('.column-callout')`.
1. What was the output?
1. In the console type `document.querySelector('div.center')`.
1. What was the output?

`querySelectorAll` returned a [Node List](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) which is an array like object filled with [Nodes](https://developer.mozilla.org/en-US/docs/Web/API/Node).

**Notice** how this is not the same as an HTML Collection.

### Nodes, Elements, HTML Collections and NodeLists Oh My!



It is very important to be conscious that the methods above all return different objects.

The methods above returned:
- Elements
- HTMLCollections
  - Contains Elements
- NodeLists
  - Contains ChildNodes

So lets learn a little bit more about some of returned items.

We are primarily going to focus on the [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) object.

**You Do:**

1. In the console, `document.querySelector('#home-q');`
1. Let's assign it to a variable so we don't have to type as much: `var homeSearch = document.querySelector('#home-q')`.
1. Now type, `homeSearch.attributes;`
1. What did that output?
1. What if you you type `homeSearch.attributes.placeholder`?

Cool we can access an element's attributes, `homeSearch` isn't just any element though, it is an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element. This provides us with some additional properties we can access.

**You Do:**
1. On the web page's search bar type `Hello Me!`.
1. In the console, type `homeSearch.value`. Cool!


### Traversing the DOM / Exercise



Elements have some useful properties that allow us to get related elements.

We are going to work through an exercise, by the end of it make sure you understand what the following properties do:

1. `childNodes` - targets all child nodes, returning a collection
1. `firstChild` - targets the first child node
1. `lastChild` - targets the last child node
1. `parentNode` - targets the parent node from the current node
1. `nextSibling` - targets the next node at the same level as the current node
1. `previousSibling` - targets the previous node at the same level as the current node

**You Do:** Work through [Traversing the DOM](http://javascript.info/tutorial/traversing-dom)

## Review



The document has several useful methods that allow us to query the DOM:

- `getElementbyID`
- `getElementsByClassName`
- `getElementsByName`
- `getElementsByTagName`
- `getElementsByTagNameNS`
- `querySelector`
- `querySelectorAll`

These methods do not all return the same thing. So it is important to be conscious of exactly what the method you are using is returning.

- `HTMLCollection` vs `NodeList`
- `Element` vs `Node`

We can access the HTML attributes of an element and some additional properties.

There are different types of Elements, so a `<input>` element might have different properties than a `<div>` element.

Elements and nodes have methods that allow us to get related elements:

- `childNodes`
- `firstChild`
- `lastChild`
- `parentNode`
- `nextSibling`
- `previousSibling`

---

## Resources

- [MDN: document reference](https://developer.mozilla.org/en-US/docs/Web/API/Document)
- [MDN: Element reference](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [MDN: HTMLCollection reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
- [MDN: Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)
- [MDN: NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
- [Traversing the DOM](http://javascript.info/tutorial/traversing-dom)
