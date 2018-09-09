# CSS Tips & Tricks

## Learning Objectives

By the end of this lesson, you will be able to:

* Split CSS into multiple pages and wholly exclude inline styles, id selectors, and !important

## Resources

Over the years many people have come up with a number of different "best practices" around CSS. These range from highly general tips to full architecture on how to structure the CSS for your website.

* [CSS Style Guides](https://css-tricks.com/css-style-guides/)

Some good rules of thumb include:

* Separate CSS into multiple files during development. You can separate by component (e.g. `navigation.css`) or by page (e.g. `about.css`) but don't let your CSS files get too long.
* If you _do_ have long CSS files, use comments!
* Do not use IDs, inline styling, or the `!important` keyword. If you're doing any of these things, you're probably avoiding a problem as opposed to solving one.
* Avoid nesting your selectors too deeply. Your CSS and HTML should be able to be understood on their own.
* If you're overriding your _own_ styles, you may need to change something.

## Challenges

<!-- Question -->

### !challenge

* type: paragraph
* id: 06bae470-b3c9-11e8-86aa-2d44bc389978
* title: CSS Best Practices

### !question

Take a look at the following style sheet. What changes would you make to it to improve it?

```css
body {
  background: white;
}

nav#navigation {
  background-color: black;
  color: white;
  font-size: 24px;
  height: 50px;
}

nav#navigation ul {
  margin: 0;
}

nav#navigation ul li a {
  color: magenta;
  text-decoration: none;
}

nav#navigation ul li a.current {
  color: teal;
  text-decoration: none;
}

nav#navigation ul li a:hover {
  color: blue;
}

section.about {
  margin: 25px;
  font-size: 10px;
}

section.about {
  border: 1px dashed red;
}
```

### !end-question

#### !placeholder

Write your answer here

#### !end-placeholder

### !explanation

Thanks! An instructor will follow-up if they have any questions.

### !end-explanation

### !end-challenge
