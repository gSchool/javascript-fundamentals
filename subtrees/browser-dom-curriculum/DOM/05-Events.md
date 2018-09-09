# Event Listeners

## Learning Objectives

By the end of this lesson, you will be able to:

* Fire JavaScript functions using HTML event attributes and event listeners
* Attach event handlers to DOM elements
* Modify the DOM in response to an event
* Use callbacks in methods like addEventListener
* Explain the difference between `this` and `event.target` in event listeners
* Respond to the event `DOMContentLoaded` event

## Resources

In order to interact with out users, we need to listen for events that happen. Events are interactions the user is having with our webpage. There are many different types of events including clicking, mousing over something, and pressing a particular key on the keyboard.

* (Complete through the Cat-stache Challenge) [Khan Academy: Making Webpages Interactive](https://www.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/v/making-webpages-interactive-with-events)

## Introduction

Events are one of the most important underlying concepts in modern Javascript. Events add interactivity to a webpage and let us do all sorts of fun stuff!

Events are all over the place before we even write a line of code.  We can use the following code in the Chrome Dev Tools to see events as they happen:

```javascript
monitorEvents(window)
```

## Types

Some common event types in your browser:

* click
* keypress
* focus
* blur
* [lots more](https://developer.mozilla.org/en-US/docs/Web/Events)

## Event Listeners

In order to explore event listeners, we need some HTML! To kick things off, do the following:

1. Create a new HTML file, and inside of the HTML add a button.
2. Create a new JS file, and link it to your HTML.

### `addEventListener()`

[[MDN]](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

The following code adds an event listener to the entire `window` object.  Try typing it into your js file and then click anywhere on the webpage!

```javascript
window.addEventListener("click", function() {
  alert("You clicked on the page!");
});
```

Every single DOM element also has its own `addEventListener` method:

```javascript
var button = document.querySelector("button");

button.addEventListener("click", function(){
  alert("SOMEONE CLICKED THE BUTTON!!");
});
```

Now we've attached an event listener to a specific DOM node, a button on the page.  Now, we will see a `"SOMEONE CLICKED THE BUTTON!!"` alert when that particular button is pressed. The function passed into the event listener is an example of a callback; in this particular case, it's also referred to as an **event handler**.

### `removeEventListener()`

[[MDN]](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

You can also remove event listeners from DOM elements if you are no longer interested in the event. Let's return to our example from the previous section. After adding the event listener to the button, maybe you realize that alert messages are terrible, and decide to remove it. It may be tempting to write something like this in the JS console:

```javascript
var button = document.querySelector("button");

button.removeEventListener("click");
```

However, if you copy and paste this code you'll see that it has no effect. The reason for this is that `removeEventListener`, like `addEventListener`, requires two arguments: the type of event, and the callback function to execute.

Therefore, when you're adding a callback function that you might need to remove later, you need to be sure that the function isn't anonymous. You need to give it a name.

Try rewriting your `addEventListener` as follows:

```javascript
var button = document.querySelector("button");

var clickAlert = function() {
	alert("SOMEONE CLICKED THE BUTTON!!");
}

button.addEventListener("click", clickAlert);
```

Now you should be able to remove the event listener in the console with the following code:

```
button.removeEventListener("click", clickAlert);
```

**Exercise** What does the following code do?

```javascript
var button = document.querySelector("button");

var once = function() {
  console.log("Done.");
  button.removeEventListener("click", once);
}

button.addEventListener("click", once);
```

## Event Object

There is a parameter that we can pass into our event handler functions: the event object. The event object gives us lots of information about the event. For example, we can use it to log some text to the console whenever a user clicks on an HTML element:

```javascript
var logText = function(event) {
  console.log(event.target.textContent);
}

window.addEventListener("click", logText);
```

Let's take a closer look at the `event` object, and on `event.target` in particular. Inside of your JS file, add an event listener that console logs the event object AND the event.target when you click on the button.

Once you get this working, you'll see that the `event` object has a lot of details about the click event that was fired: where was the cursor? What time was the event fired? Was the shift key held down? And so on. Meanwhile, `event.target` points to the DOM element that was (in this case) clicked. This can be helpful if you want to modify the DOM based on user interaction.

**Exercise**: Create a variable called `clickCount` in your `js` file, and set it equal to 0. Modify your event listener so that every time you click on the button, the clickCount increments, and the button text changes to show the user how many times the button has been clicked.

### `event.target` vs. `this`

Let's return to our simple HTML page from before, and add an event listener that calls the `logText` button on a button click:

```javascript
var button = document.querySelector("button");

var logText = function(event) {
  console.log(event.target.textContent);
}

button.addEventListener("click", logText);
```

We can rewrite this code so that it doesn't reference the `event` object. We can use `this` instead!

```javascript
var button = document.querySelector("button");

var logText = function() {
  console.log(this.textContent);
}
button.addEventListener("click", logText);
```

So what's the difference between `this` and `event.target`, then? To answer this question, let's modify our HTML a bit. Wrap your button in a `div` like this:

```html
<div>
  <p>I'm a p tag!</p>
  <button>I'm a button!</button>
</div>
```

Let's now add the event listener to that parent `div`. Update your javascript so that it looks like this:

```javascript
var div = document.querySelector("div");

var logText = function() {
  console.log(this.textContent);
}

div.addEventListener("click", logText);
```

Refresh the page. You should see that no matter where you click -- on the `div`, on the `p` tag, or on the `button`, the same text gets logged to the console: all of the text inside of the `div`.

Now let's change our `logText` function back so that it references the `event` object again:

```javascript
var div = document.querySelector("div");

var logText = function(event) {
  console.log(event.target.textContent);
}

div.addEventListener("click", logText);
```

In this case, the text that's logged to the console depends on where you click. If you click on the `p` tag, you should see "I'm a p tag!" in the console. If you click on the `button`, you should see "I'm a button!" in the console. And if you click anywhere else in the `div`, you should see both exclamations logged to the console.

The example demonstrates the difference between `this` and `event.target` in the event handler. `this` refers to the DOM element that the listener was attached to. Put another way, whenever you write `foo.addEventListener('click', someFunction)` the context of `this` inside of `someFunction` will refer to `foo`. On the other hand, `event.target` will refer to the element that caused the event to fire. For example, when you click on the button, `event.target` will refer to the button, even if the listener is not attached to the button.

When the element that fires the event is the same as the element that has the listener on it, you should see that `this` and `event.target` are the same. But there are times when you'll want to add the event listener to an element that won't necessarily be the same as the element (or elements) that will be firing the event. Let's take a look at an example of this now.

### Attaching Listeners to Multiple Elements

Let's suppose we want to add a click listener to every `<p>` on a page. We can't simply use `querySelectorAll` and then set an `addEventListener` on that. (What type of error do you think you'll get?)

```
<div id="container">
  <p>Hello</p>
  <p>Bye</p>
  <p>Hello again!</p>
</div>
```

```javascript
//THIS DOES NOT WORK
var paragraphs = document.querySelectorAll("p");

paragraphs.addEventListener("click", function() {
 console.log("Woof!");
});
```

One option: we can set a listener on every individual element:

```javascript
var paragraphs = document.querySelectorAll('p');

var eventHandler = function() {
  console.log("Woof!");
}
for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener('click', eventHandler);
}
```

If you inspect one of these elements in the Elements tab and look under Event Listeners, you'll see that each one of these elements has a copy of `eventHandler` attached to it, as expected. This is fine for this simple little example, but if you have hundreds of DOM elements with their own copy of the same function, that isn't very efficient.

### Event Delegation

Another option: we can use event bubbling (more on this later) and attach a single event listener to the parent:

```javascript
var container = document.getElementById('container');

var eventHandler = function() {
  console.log('Woof!');
}
container.addEventListener('click', eventHandler);
```

In this case all p tags share one copy of `eventHandler` which they get from their parent container.

### `DOMContentLoaded`

When you're using Javascript to manipulate the DOM, you need to be sure that what you're trying to manipulate is available to you. To see what this means, consider the following example:

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Events!</title>
  <script src="app.js"></script>
</head>
<body>
  <img src="https://media.giphy.com/media/qANK09622WD5u/giphy.gif" alt="">
</body>
</html>
```

`app.js`

```javascript
var img = document.querySelector('img');

var imgLog = function() {
  console.log("You moused over Mega Man!");
}

img.addEventListener('mouseover', imgLog);
```

Without loading the page, you should be able to guess at what this code should do: when you mouse over the image, a message should get logged to the console.

However, when you load the HTML, you should find that no message is getting logged. What's the deal???

The deal is that the script is loading before the DOM has finished loading. Not convinced? Through a debugger in the first line and take a look at the `document` -- you'll see that the `body` hasn't loaded yet! Because of this, there's no `img` tag to grab with javascript, and so your `img` variable will be `null`.

When manipulating the DOM, it's important that your javascript code not load until the DOM is ready. There are a couple of ways to do this. The most common way is to use the `DOMContentLoaded` event:

```javascript
var imgLog = function() {
  console.log("You moused over Mega Man!");
}

document.addEventListener("DOMContentLoaded", function() {
  var img = document.querySelector('img');
  img.addEventListener('mouseover', imgLog);
});
```

This event fires when the document has been loaded and parsed. This happens before all assets (e.g. images, videos, stylesheets, etc.) have completely loaded. In other words, `DOMContentLoaded` gets fired before the window finishes loading.

Want to see the difference between `DOMContentLoaded` and `window.onload`? Check out [this example](http://web.archive.org/web/20150405114023/http://ie.microsoft.com/testdrive/HTML5/DOMContentLoaded/Default.html).

Note: putting your script tags at the bottom of the page can help resolve some of these issues, but it's still probably a good idea to wrap any DOM-manipulating functionality inside of an event listener to `DOMContentLoaded`.

## Event Propagation

[[JavaScript.info]](http://javascript.info/tutorial/bubbling-and-capturing)

Before finishing up, let's take a look at one more example. Let's return to our earlier example with a single `button`. In our Javascript file, let's add two event listeners:

```javascript
var body = document.querySelector('body');
var button = document.querySelector('button');

body.addEventListener('click', function() {
  alert("YOU CLICKED ON THE BODY!!!!");
});

button.addEventListener('click', function() {
  alert("YOU'RE REALLY PUSHING MY BUTTONS!!!!!");
});
```

Click on the button. You'll see that the button message is alerted, followed by the body message. Why is this the order, rather than the other way around? The answer has to do with _event propagation_.

When an event happens. It _captures_ down the DOM tree from `<html>` to the element where the event happened. Then, it _bubbles_ back up the DOM tree until it gets back to `<html>`. Along each element it passes, it fires the event.

These 2 phases -- event capturing and event bubbling -- are collectively known as event propagation.

There is a third Boolean parameter of `addEventListener` that specifies if you want the handler to fire on capture or bubble. It defaults to `false`, which is bubble. But if you set it to `true`, it will fire on capture.

### Event Capturing

When an event happens. It first fires a capture event on `<html>` and makes its way down the DOM tree to the element where the event actually happened.

```html
<html>
  <body>
    <div>
      <button>Click Me!</button>
    </div>
  </body>
</html>
```

Let's say you click on the `<button>`. This is how the capture event will be ordered: `<html>` -> `<body>` -> `<div>` -> `<button>`

The capture event will fire on each one of these elements.

```
               | |
---------------| |-----------------
| parent       | |                |
|   -----------| |-----------     |
|   |target    \ /          |     |
|   -------------------------     |
|                                 |
-----------------------------------
```

### Event Bubbling

After the capture event has gotten all the way down to the target element where the event happened, it is time for the bubble phase. The bubble phase starts at the target element, and then makes its way back up through its parents until `<html>`.

```html
<html>
  <body>
    <div>
      <button>Click Me!</button>
    </div>
  </body>
</html>
```

Let's say you click on the `<button>`. This is how the bubble event will be ordered: `<button>` -> `<div>` -> `<body>` -> `<html>`

The bubble event will fire on each one of these elements.

```
               / \
---------------| |-----------------
| parent       | |                |
|   -----------| |-----------     |
|   |target    | |          |     |
|   -------------------------     |
|                                 |
-----------------------------------
```

Let's return to our example, and change our event listener on the body to fire on the capture phase:

```javascript
var body = document.querySelector('body');
var button = document.querySelector('button');

body.addEventListener('click', function() {
  alert("YOU CLICKED ON THE BODY!!!!");
}, true);

button.addEventListener('click', function() {
  alert("YOU'RE REALLY PUSHING MY BUTTONS!!!!!");
});
```

You should now see that the alert messages pop up in the opposite order!

## Resources

- [[quirksmode]](http://www.quirksmode.org/js/events_order.html)
- [[MDN]](https://developer.mozilla.org/en-US/docs/XUL_Event_Propagation)
- http://eloquentjavascript.net/14_event.html

## Assignment

- Stoplight: https://github.com/gSchool/stoplight-event-exercise

### Further Practice

* Various Beginner Exercises: https://github.com/gSchool/event-exercises
* Event Propagation https://github.com/gSchool/js-event-delegation

## Slides

* [Slides](http://slides.com/lizh/domevents#/)

## Challenges

### !challenge

* type: code-snippet
* language: javascript
* id: 80ffb680-2b74-4e6a-86ea-726bcd61139e
* title: Event Listener

### !question

Add an event listener to the `picture` below so that when a user clicks on it the `count` is increased by 1.

### !end-question

### !setup

```js
let state = []
let document = {
  getElementById () {
    return {
      addEventListener (name, cb) {
        state = [ name, cb ]
      }
    }
  }
}
```

### !end-setup

### !placeholder

```js
var count = 0
var picture = document.getElementById('myPic')

// Add your code here
```

### !end-placeholder

### !tests

```js
describe('picture click', function() {
  it('correctly fires an event on click', function() {
    const [ name, cb ] = state
    expect(name, 'Your event type is not correct').to.equal('click')
    expect(cb, 'You must pass a callback function as the second argument').to.be.a('function')
  })

  it('increments the count by one on click', function() {
    const [ name, cb ] = state
    cb()

    expect(count, 'You must increment the count by one').to.equal(1)
  })
})
```
### !end-tests

### !end-challenge
