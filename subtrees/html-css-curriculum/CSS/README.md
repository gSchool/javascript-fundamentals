# Cascading Style Sheets

## Learning Objectives

By the end of this lesson, you will be able to:

* Include a `<style>` element in the `<head>` of your HTML document or a `<link>` element with reference to a stylesheet

## CSS - Rock star demos

To apply styles to our HTML we will first have to understand the basics and how to connect it with our HTML.

* [Introduction to CSS](http://www.cssbasics.com/introduction-to-css/)

For inspiration, check out a sampling of some awesome things that people have built:

- [A Single Div](http://a.singlediv.com/)
- [The Simpsons](http://pattle.github.io/simpsons-in-css/)
- [CSS Creatures](http://bennettfeely.com/csscreatures/)
- [CSS Coke Can](http://www.romancortes.com/ficheros/css-coke.html)

### Cascading Style Sheets (CSS)

CSS is a style sheet language used for describing the look and formatting of a document written in a markup language.  

It is used to manipulate the way elements appear on a web page, and CSS can interact with both HTML and JavaScript.

## Adding our First Styling

An easy (and heavily frowned-upon) way to add styling to an HTML element is by using the `style` attribute on the HTML element directly. As a first example, let's create a new `index.html` file and throw a `<div>` into it:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Kicking it with some Divs</title>
  </head>
  <body>
    <div>Here's my first div!</div>
  </body>
</html>
```

Let's use the `style` attribute to make give that div a width of 200px, a height of 200px, and a red background. Inside the `body` tag, change the div so that it looks like this:

```html
<div style="width: 200px; height: 200px; background-color: red;">Here's my first div!</div>
```

`width`, `value`, `background-color`, are all called _properties_. Their corresponding values (200px, 200px, and red) are, conveniently enough, called _values_.

Using inline styles is a bad practice, for a couple of reasons. For one, you're cluttering up your HTML, and mixing content from styling. Second, it's hard to keep your code DRY if you use inline style. If you wanted to add a second div with the same styling, you'd need to duplicate all that styling code. For example, let's add a second div to our html file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Kicking it with some Divs</title>
  </head>
  <body>
    <div style="width: 200px; height: 200px; background-color: red;">Here's my first div!</div>
    <div style="width: 200px; height: 200px; background-color: red;">Here's my second div!</div>
  </body>
</html>
```

Now all that styling code has been duplicated.

We can clean up this code (a.k.a. refactor it) by moving these style rules to a stylesheet. One place we can put our CSS is inside of the `head` of our HTML, as follows:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Kicking it with some Divs</title>
    <style>
      div {
        width: 200px;
        height: 200px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div>Here's my first div!</div>
    <div>Here's my second div!</div>
  </body>
</html>
```

But, it's a better practice to move styling to an external stylesheet. Let's create a file called `style.css` and put the CSS inside of your `style` tag into that file. We can then remove the style tags from our HTML, and replacing it with a link to our external stylesheet:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Kicking it with some Divs</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <div>Here's my first div!</div>
    <div>Here's my second div!</div>
  </body>
</html>
```

## CSS - CSS Specificity, Classes, and IDs

Suppose you change your stylesheet to look like the following:

```css
div {
  width: 200px;
  height: 200px;
  background-color: red;
}

div {
  width: 300px;
  height: 100px;
  background-color: blue;
}
```

Which style rules will win out?

The answer is that whichever rule comes _latest_ in the stylesheet will take precedence (this is what the _Cascading_ means). However, you can overwrite this default behavior by using a more _specific_ selector.

HTML Elements (`div`, `p`, `ul`, etc) are the least specific CSS selectors. The next level of specificity is provided by classes. To add a class to an element, we use a class attribute. For example, give your first HTML div a class of "red", and then change your stylesheet to look like this:

```css
.red {
  width: 200px;
  height: 200px;
  background-color: red;
}

div {
  width: 300px;
  height: 100px;
  background-color: blue;
}
```

(the dot in front of "red" indicates that we're targeting a class). Now the first div should be red. Even though the styling for `.red` comes before the styling for `div`, targeting a class is more specific than targeting an element.

The next level of specificty is an id. Let's add a third div with a class of red and an id of green; then change the stylesheet as follows:

```css
#green {
  background-color: green;
}

.red {
  width: 200px;
  height: 200px;
  background-color: red;
}

div {
  width: 300px;
  height: 100px;
  background-color: blue;
}
```

Even though the new div has a class of red, the id is more specific, so its background color is green. But where does its sizing come from?

Aside from specificity, what's the difference between a class and an id? For today, all we need to know is that ids for an HTML element should be _unique_: no two elements should share the same id, and no element should have more than one id. Classes, however, don't have these restrictions: an element can have multiple classes, and multiple elements can share the same class.

After ids, the next level of specificity is inline styling. After that is the `!important` tag. It's not a good practice to use either of these, though, so try to avoid them wherever possible.

More info: [The Difference Between ID and Class](https://css-tricks.com/the-difference-between-id-and-class/)

## Terms

Specificity
> The order by which rules are applied to an individual element depending on element, class, id, inline-styles, and the !important value.

Cascading
> Rules that appear later merge with and overwrite rules that appear earlier.

Modular
> Code that is sensibly separated so that it is more human readable.

Grok
> Understanding something deeply; knowing.

## Checks your Understanding

* What is a CSS Selector?
* How do we line up elements horizontally?
* What property refers to the spacing on the outside of the element?
* How could we find out the hex code for a color we want?
* How would we stack `li` tags horizontally instead of vertically?

## Assignment

[CSS Exercises](https://github.com/gSchool/css-exercises)

## Further Practice

- [CSS Selector Practice](http://flukeout.github.io/)
- [CSS Floats](https://github.com/gSchool/css-floats-exercise)
- [Wireframe Mockup 1](https://wireframe.cc/GuRoUr)
- [Wireframe Mockup 2](https://wireframe.cc/0ftEEJ)
- [Nav Challenge](https://github.com/gSchool/css-nav-challenge)
- [Card Flip](https://github.com/gSchool/css-card-flip)
- [HTML/CSS](https://github.com/gSchool/basic-html-practice)
- [HTML/CSS 2](https://github.com/gSchool/html_css_basics)
- [Grid Building](https://github.com/gSchool/css-grid-building)
- [CSS Wireframe Warmup](https://github.com/gSchool/cssWireframeWarmup)

## Slides

* [Slides #1](http://slides.com/wesleyreid/css-magic)

## Challenges

<!-- Question -->

### !challenge

* type: paragraph
* id: ce368416-7e5c-4002-8b31-11a6732b1191
* title: Linking Style Sheets

### !question

In your own words describe the difference between linking style sheets using the `style` element and linking style sheets with the `link` element.

### !end-question

#### !placeholder

Write your answer here

#### !end-placeholder

### !explanation

Thanks! An instructor will follow-up if they have any questions.

### !end-explanation

### !end-challenge
