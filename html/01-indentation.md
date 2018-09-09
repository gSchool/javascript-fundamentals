# Indentation

## Learning Objectives

By the end of this lesson, you will be able to:

* HTML is properly indented

## Correctly indent your code

No matter what we code with we want to make sure our code is readable. This is not only the case for when we want to work on our code with other developers but is also helpful when the only developer is us! Take a look at the following two examples of HTML.

```html
<ul>
  <li>
    <a href="./home.html">Home</a>
  </li>
  <li>
    <a href="./about.html">About</a>
  </li>
</ul>
```

```html
<ul><li>
  <a href="./home.html">Home</a></li>
<li><a href="./about.html">About</a></li>
</ul>
```

The HTML in both is exactly the same. In fact, as far as our browsers are concerned there is no difference. However, I hope you'll agree that the first example is much easier to read!

A good rule of thumb to follow for HTML is that we **enter down a line and indent whenever we are nesting a new tag.** For example, take a look at the following snippet of HTML.

```html
<body>
  <div class="container">
    <h1>Hello World!</h1>
    <h2>My coding journey starts now!</h2>
  </div>
</body>
```

Notice that because the `div` element is inside of `body`, we enter down a line and indent it. The same is true for both of our headings but `h2` rests directly underneath `h1` because they do not nest inside of each other. Rather, they are siblings.

## Challenges

<!-- Question -->

### !challenge

* type: project
* id: aef11370-b3d9-11e8-92ed-57e3f4477ba5
* title: Indent HTML

##### !question

### Indentation Practice

* [JSFiddle](https://jsfiddle.net/gh/get/library/pure/gSchool/g67_fiddles/tree/master/indent-html)

Go to the above JSFiddle and fix the HTML so that it is properly indented. **Make sure you are logged in!** Once you've finished, hit "Save" and paste the new URL below.

##### !end-question

##### !placeholder

https://jsfiddle.net/<username>/<fiddle-id>

##### !end-placeholder

### !end-challenge
