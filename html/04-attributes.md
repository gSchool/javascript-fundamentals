# HTML Attributes

## Learning Objectives

By the end of this lesson, you will be able to:

* HTML attributes and values are used to create images, links, unique ids, and inline style

## Resources

> Elements in HTML have attributes; these are additional values that configure the elements or adjust their behavior in various ways to meet the criteria the users want. - [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)

These attributes are key value pairs that go between the `<` and `>` symbols of many elements. For example, the `href` element refers to the URL of a linked resource. It is typically attached to an `a` element like so:

```html
<a href="http://google.com">Go To Google</a>
```

Multiple attributes can be added to HTML elements. For example:

```html
<a href="http://google.com" class="fancy purple" id="google">Go To Google</a>
```

The above link has an `href`, `class`, and `id` attribute. There are dozens of different attributes we can use with our HTML elements, all of which can be found here:

* [HTML attribute reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)

## Challenges

<!-- Question -->

### !challenge

* type: multiple-choice
* id: ffeb87d0-b3d2-11e8-b5de-9f42ac92f790
* title: HTML Attributes A

### !question

Which of the following will correctly show the image?

### !end-question

### !options

* `<img href="http://placehold.it/250">`
* `<img src="http://placehold.it/250">`
* `<img name="http://placehold.it/250">`
* `<img content="http://placehold.it/250">`
* `<img alt="http://placehold.it/250">`

### !end-options

### !answer

`<img src="http://placehold.it/250">`

### !end-answer

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: ffeb87d1-b3d2-11e8-b5de-9f42ac92f790
* title: HTML Attributes B

### !question

Which of the following will correctly style the element?

### !end-question

### !options

* `<p style="color: magenta;">Hello HTML!</p>`
* `<p class="color: magenta;">Hello HTML!</p>`
* `<p type="color: magenta;">Hello HTML!</p>`
* `<p value="color: magenta;">Hello HTML!</p>`
* `<p src="color: magenta;">Hello HTML!</p>`

### !end-options

### !answer

`<p style="color: magenta;">Hello HTML!</p>`

### !end-answer

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: ffeb87d2-b3d2-11e8-b5de-9f42ac92f790
* title: HTML Attributes C

### !question

Which element is valid?

### !end-question

### !options

* `<audio autoplay poster="sportz.jpg">`
* `<img autoplay src="extreme-sportz.webm">`
* `<poster="sportz.jpg">`
* `<map src="extreme-sportz.webm" poster="sportz.jpg">`
* `<video autoplay src="extreme-sportz.webm" poster="sportz.jpg">`

### !end-options

### !answer

`<video autoplay src="extreme-sportz.webm" poster="sportz.jpg">`

### !end-answer

### !end-challenge
