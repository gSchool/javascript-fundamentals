# Intro to the DOM: Introduction

## Objectives

***

By the end of this article you should be able to:

- Explain the relationship between the DOM and HTML.
- Explain what the DOM is.
- What is the document.
- Explore and interact with the DOM using browser dev tools.


## An Introduction to the DOM


### What is the DOM

***

Every web browser has something called the `DOM`, where DOM is an acronym for `Document Object Model`.

The DOM is an `API`, where API is an acronym for `Application Programming Interface`. Simply put, an API is a way for programs to interact with each-other.

That's a lot of technical jargon, so let's just illustrate what an API is with an example.

Let's say I wrote a program named `fs` in the language C++. The program could read and write files to a computer's filesystem. I also wrote an API that allowed other programs to tell `fs` to read and write files.

You are writing a program in Javascript for a client, and need it to read user settings from a file.  Your Javascript code could use my `fs` API to tell my program to read and write files.

```javascript
// use the fs API to tell the fs program to read settings.json
var userSettings = fs.readFile('/path/to/settings.json');
```

My `fs` API provided your program the ability to interact with the filesystem. It provided:

- a way to read files from the filesystem.
- a way to write files to the filesystem.


Similarly, the browser's DOM API provides other programs the ability to interact with the **document**. It provides:

- a way to represent a document as an object.
- a way to interact with a document.


### What is a Document

***

So what is a document anyway?

The most commonly used document is a web page.

A document can be represented (modeled) in a number of ways:

- A document can be textually represented via HTML (how the developer sees a web page).
- A document can be visually represented via the browser window (how the user sees a web page).
- A document can be digitally represented via the DOM (how the program sees a webpage).

>Note: a web page doesn't just have to be HTML, it may also be:
- XML
- SVG

### How the DOM models the document

***

The DOM models (represents) the document as an object.

Objects are nice because programs can interact with them easily. It would be hard if we had to interact with the document by having our programs read the HTML or use computer vision to interact with the browser window.

This isn't just any object, it is a special data structure known as a **tree**.

The data structure gets its name because it can be visually represented to look like a real world tree: a tree has a trunk, the trunk has branches, each branch can have more branches.

The data structure tree has a **root node** (trunk), the root node has **nodes** (branches), a node (branch) can have other nodes (branches).

The file system is a tree. The root directory `/` is the root node (trunk). It contains several other directories, each of these is a node (branch). Each of those directories contain other directories (nodes). Just like a directory:

- A node contained in another node is known as the **child node**.
- A node that contains another node is known as the **parent node**.

Let's walk through this HTML document:

```html
<html>
  <head>
    <title>Some Title</title>
  </head>

  <body>

    <h1>Some Header</h1>

    <div>
      <p>text inside p inside div</p>
    </div>

  </body>
</html>
```

The document could be modeled as a tree:

![A tree of the html above](http://courses.cs.washington.edu/courses/cse190m/07sp/lectures/slides/images/dom.png)

Lets walk through it how the HTML maps to the tree:

1. The `<html></html>` tag becomes the root node.
1. It has 2 child nodes: `<head></head>`, `<body></body`
1. The `<head></head>` node has a child node: `<title></title>`.
1. The `<body></body>` node has 2 child nodes: `<h1></h1>`, `<div></div>`.
1. The `<div></div>` node has a child node: `<p></p>`.


## Review

***

>The DOM is a fully object-oriented representation of the web page, and it can be modified with a scripting language such as JavaScript.

The DOM (Document Object Model) is an API that provides programs with:

- a model of the document as a tree.
- a way for programs to interact with the document.

A document is a web page.


### Interact using Dev Tools / Exercise

***

**You Do:**

1. In Chrome, press `CMND` + `OPT` + `j` to open up your dev tools.
1. Navigate to the `console` tab of the dev tools.
1. Type `document` in the console.
1. Right click on `#document` and click view in elements panel.
1. On the right select the `properties` tab, this will list all the properties of the `document` object.
1. Click the `#document` to drop down the `document` node's properties.
1. Find the property`childNodes` and expand the `html` node.
1. Find the property `childNodes` and expand the `body` node.
1. List three of the properties you find here.

**You Do:**

1. In Chrome, right click on this text.
1. Click `inspect`.
1. On the right select the `properties` tab, this will list all the properties.
1. Open up the `ol` dropdown.
1. Look through the properties to find the child node.
1. Look through the properties to find the parent node.


***

## Resources

***

- [The Basics of JavaScript DOM Manipulation](http://callmenick.com/post/basics-javascript-dom-manipulation)
- [MDN: Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN: DOM Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN: Document API Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document)(The `document` object)

## Slides

- [Slides](http://slides.com/lizh/the-document-object-model#/)

## Alternative Slides

- [Slides](https://docs.google.com/presentation/d/1dW_VJ9HgqKfDKekYIhNZewaC_bNHe2iSEvLiSkzwpFs/edit?usp=sharing)
- [Slides](https://docs.google.com/a/galvanize.com/presentation/d/1OSSS8pLkMeZmu19BAE1dvHKjmG5uN3-SiEteS2Fk3kQ/edit?usp=sharing)

## Assignment

See [https://github.com/gSchool/js-dom-tests](https://github.com/gSchool/js-dom-tests).

# Stretch Assignment

- [The Checkerboard Exercise](https://github.com/gSchool/checkerboard-exercise)
- [DOM Query](https://github.com/gSchool/dom-query-function)
- [Style with JavaScript](https://github.com/gSchool/style-with-javascript)
  - For reference:  [MDN HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)

---

Because of how the DOM gets loaded, when a page is rendered not every element will be on the page. Read the following page from MDN and try the Example code out in a fresh JSFiddle.

* [MDN: DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)

## Challenges

<!-- Question -->

### !challenge

* type: short-answer
* id: 97a2c937-8c66-4d18-a70a-3a18892724a5
* title: The DOM API

##### !question

What is API an acronym for?

##### !end-question

##### !answer

/application programming interface/i

##### !end-answer

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: eb8c63f7-2c46-4f8b-9052-c05da25c0b3e
* title: The DOM Tree

##### !question

The DOM represents the document as an object which is a tree structure. What HTML element is the root node of that tree structure?

##### !end-question

##### !answer

/html/i

##### !end-answer

### !end-challenge
