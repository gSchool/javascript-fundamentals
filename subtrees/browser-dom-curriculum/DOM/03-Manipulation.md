# Intro to the DOM: Manipulation

## Objectives

By the end of this article you should be able to:

- Access properties of DOM elements such as text, html, value
- Set an element’s text
- Add, update, and remove attributes on elements
- Add, update, and remove styles on elements
- Add, update, and remove classes on elements
- Create and access data-attributes on elements

## Manipulating the DOM

Previously we tried accessing properties of elements, now lets try updating them.

For all of the following problems open up [google.com](https://google.com).

**You Do:**

1. Open up [google.com](https://google.com)
1. In the browser console query the dom for the Search Button.
1. Change the value property to 'Ask Jeeves';


Here is a solution:

```javascript
document.querySelector('input[name="btnK"]').value = 'Ask Jeeves'.
```

**You Do:**

1. Open up [google.com](https://google.com)
1. In the browser console query the DOM for the viewport div.
1. set the `style` properties `backgroundColor` property to `black`.
1. What happens when you refresh the page?

> Notice how we used a CSS property name in camelCase (`backgroundColor`), rather than in dash-case (`background-color`), so that they are accessible within the JavaScript file.

**You Do:**

1. See the `Advertising` button on the bottom left? Query the DOM to get it.
1. Once you have the element update the `innerText` property to `Hello innerText!`.

**You Do:**

1. Change the `src` of the Google logo's image to a picture from [placekitten.com](https://placekitten.com/)

**Note:** if you are on https://google you need to load https://placekitten. If you are on http://google you need your placekitten url to be http://placekitten.

**You Do:**

1. Select an element using the class `fbar`.
1. Try removing all classes from the element. If you don't know what property to manipulate try searching the documentation!
1. Now try adding the `fbar` class to it.

**You Do:**

1. Open up [npmjs.com](https://www.npmjs.com/).
1. Select the link at the bottom of the page that says `npm loves you`.
1. Change the link to go to [nodejs.org](https://www.nodejs.org/).

**You Do:**

1. On npmjs.com select the parent of the element with the class `h4 type-npm-pastel-3`
1. Change the class from `col-md-6` to `col-md-3` without removing or changing the other classes (`col-md-offset-3`)

## Resources

- [The Basics of Javascript DOM Manipluation](http://callmenick.com/post/basics-javascript-dom-manipulation)
