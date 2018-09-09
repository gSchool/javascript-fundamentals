# The Grid System

## Learning Objectives

By the end of this lesson, you will be able to:

* Take components from Twitter's Bootstrap (henceforth simply Bootstrap) and apply them to your site.
* Understand how a css framework like Bootstrap works.
* Make an HTML file that matches a "mockup" using Bootstrap __without using__ any CSS rules.
* Rows are appropriately used with columns / smaller units and can be nested inside one another

## Content

## CSS Frameworks: Twitter Bootstrap

Instead of starting from scratch, we'll be using a CSS Framework to build our pages. CSS Frameworks often rely upon a grid system to structure layout.

* [What is a CSS Grid (Video)](https://youtu.be/0IrWRuEyXYA)
* [Introduction to Bootstrap](https://learn.galvanize.com/content/gSchool/html-css-curriculum/master/CSS/Frameworks/Bootstrap.md)
* [Nesting Rows & Columns](https://getbootstrap.com/docs/4.0/layout/grid/#nesting)

CSS Frameworks come in all kinds of different flavors, but the grid system is standard across many of them.

CSS frameworks, quite simply, are a large collection of CSS rules that play nice with each other. They make it easy for developers to worry less about the visual design of individual html elements, and more about the bigger picture of the page as a whole. CSS frameworks typically include default rules for common elements like `<div>, <span>, <ul>, <ol>, <li> ...` as well as rules for classes that can be applied to create common __layouts__ such as a grid.

In the end, all CSS frameworks are simply a collection of CSS stylesheets. Such frameworks save engineers lots of time, especially when starting a brand new website. No one wants to write the same 50 rules every time they start a webpage just to prevent your site from defaulting to the hideous HTML defaults. They also provide some common language (and classes) related to layouts.

## Bootstrap Introduction

[Bootstrap](http://getbootstrap.com/) is a front-end framework developed by Twitter. It's incredibly popular. New plugins and additions are added all the time. Libraries for __web frameworks__ (such as Ruby on Rails, or Python's Django) have been built to make it even easier to integrate the styles with all kinds of webservers.

Bootstrap has more than just CSS. It is packaged with plenty of JavaScript which can be used to trigger animations, create __modal dialog boxes__ and more. For now, we're going to focus __exclusively__ on the CSS aspects of Bootstrap. We'll circle back to the JS components when we're ready for it.

## Installing Bootstrap

Bootstrap's documentation offers up a number of installation options. To keep things simple, we're going to  but we're going to use the Bootstrap __CDN__.

**What's a CDN?**

Great question! A CDN (short for **C**ontent **D**elivery **N**etwork) is used to cache static content (e.g. JS/CSS files) across a geographically dispersed network of servers. When a user makes a request for a file hosted on the CDN, the server which is geographically closest to the user will serve up the requested file. In this way, load times are reduced, and users are less annoyed by slow page loads. (To learn more about CDNs, check out [Why Use a Content Delivery Network (CDN)?](https://gtmetrix.com/why-use-a-cdn.html).)

**How Can I link to the Bootstrap CDN?**

Open up a new HTML file in Sublime Text; let's call it `bootstrap-sandbox.html`. Fill it up with some HTML boilerplate:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Bootstrap Sandbox</title>
  </head>
  <body>
    <div>Hello, World!</div>
  </body>
</html>
```

As explained on the Bootstrap website, to hook in to the CDN you'll need to add the following code to your file:

```
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" integrity="sha384-aUGj/X2zp5rLCbBxumKTCw2Z50WgIr1vs/PFN4praOTvYXWlVyh2UtNUU0KAUhAX" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
```

Copy and paste that code above the `</head>` tag, and that's it! You're ready to start using Bootstrap.

Note: there are also a lot of Bootstrap themes that re-skin the default Bootstrap styles. This allows you to change the "look and feel" of your website, while still using the common layout language developed by Bootstrap. If you're interested, check out [http://www.bootstrapcdn.com/bootswatch/](http://www.bootstrapcdn.com/bootswatch/).

These installation options come straight from the Bootstrap folks. It's worth looking at all the other information on their ["Getting Started"](http://www.bootstrapcdn.com/bootswatch/) page, if only to realize that Bootstrap is big and powerful.

## Aside: Bootstrap Templates/Snippets

These plugins add snippets and autocomplete for bootstrap 3.

[Atom plugin](https://atom.io/packages/atom-bootstrap3)

[Sublime plugin](https://github.com/JasonMortonNZ/bs3-sublime-plugin)

## Back on Task, Using Bootstrap:

Honestly, the Bootstrap documentation is awesome. Bookmark this page [http://getbootstrap.com/css/](http://getbootstrap.com/css/). We're going to go over some things that the Bootstrap people assume web programmers already know, then we're going to turn several "mock ups" into beautifully rendered HTML using Bootstrap.

## Containers and the Grid System

Bootstrap has a lot to offer, and we don't have time to go over all of it (check out the [docs](http://getbootstrap.com/)  if you want to dig deeper). Our goal here is just to hit on some of the most important features that Bootstrap brings to the table.

One of the most important features of Bootstrap is its grid system. The grid system allows you to easily organize your content into a responsive design based around a 12-column grid. In order to make use of this grid, we need to wrap the main area of our content in one of Bootstrap's container classes: either `.container` or `.container-fluid`:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Bootstrap Sandbox</title>
  </head>
  <body class="container-fluid">
    <div>Hello, World!</div>
  </body>
</html>
```

To make use of the grid layout, we can add column classes to our divs. Every column needs to be inside of a div with the row class in order for Bootstrap's styling magic to work.

Let's throw some more divs into our html document to see a couple examples of Bootstrap's grid layout in action. (We'll throw in some of Bootstrap's default background classes as well, just to help make the columns easier to see.)

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Bootstrap Sandbox</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" integrity="sha384-aUGj/X2zp5rLCbBxumKTCw2Z50WgIr1vs/PFN4praOTvYXWlVyh2UtNUU0KAUhAX" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
    	<div class="col-md-12 bg-primary">Hello, World!</div>
      </div>
      <div class="row">
  	<div class="col-md-6 bg-success">Hello,</div>
  	<div class="col-md-6 bg-danger">World!</div>
      </div>
      <div class="row">
        <div class="col-md-2 bg-info">Hi!</div>
        <div class="col-md-2 bg-warning">Hi!</div>
        <div class="col-md-2 bg-info">Hi!</div>
        <div class="col-md-2 bg-warning">Hi!</div>
        <div class="col-md-2 bg-info">Hi!</div>
        <div class="col-md-2 bg-warning">Hi!</div>
      </div>
      <div class="row">
  	<div class="col-md-6 col-md-offset-3 text-center">Hello, World!</div>
      </div>
    </div>
  </body>
</html>
```

Take a few minutes to play around with the grid system. Don't be afraid to make changes and break stuff, the original is always right here. Try to answer these questions through experimentation:

1. What's the difference between `.container-fluid` and `.container`?

2. There are four families of column classes: `.col-lg-*`, `.col-md-*`, `.col-sm-*`, and `.col-xs-*`. What's the difference between them? (Hint: it may help to adjust the window dimensions as you explore!)

3. What happens if the numbers in your column classes add up to more than 12?

4. What happens if you try to nest a row inside of a column?

5. What does offsetting do?


## Glyphicons

The only other feature we want to directly call your attention to is a set of icons called [Glyphicons](http://getbootstrap.com/components/#glyphicons). To use a glyphicon, just create a `<span>` element and give it the class `.glyphicon`, along with whatever class is specific to the icon you want to use. For example, if you want to display the heart icon, you would need to write:

`<span class='glyphicon glyphicon-heart'></span>`.

Protip #1: The spans for your icons must always be empty!

Protip #2: It is super easy to misspell the word glyphicon. Watch out.

Protip #3: It's best practice to use `<button>` elements if you want to use buttons in Bootstrap. Check the [documentation](http://getbootstrap.com/css/#buttons) for more details.

## Assignment

Work on the landing page for [Galvanize Delivers](https://github.com/gSchool/galvanize-delivers/).

## Further Practice

- [Bootstrap Mocks Assignment 1](https://github.com/gSchool/BootstrapMocksAssignment)
- [Bootstrap Mocks Assignment 2](https://github.com/gSchool/bootstrap_mocks_assignment)
- [Bootstrap Challenge](https://github.com/gSchool/bootstrap-challenge)
- [Try some of these, but use bootstrap!](https://github.com/gSchool/css-week-1)

## Extra Resources

For more guided practice, try the codeschool lessons! [https://www.codeschool.com/courses/blasting-off-with-bootstrap](https://www.codeschool.com/courses/blasting-off-with-bootstrap)

## <a name="bootstrapresources"></a> Bootstrap Website Resources

- [Getting Started](http://getbootstrap.com/getting-started/)
- [CDN/Download](http://getbootstrap.com/getting-started/#download)
- [Community](http://getbootstrap.com/getting-started/#community)
- [Examples](http://getbootstrap.com/getting-started/#examples)
- [Browser and Device Support](http://getbootstrap.com/getting-started/#support)

## Technical Terms

Content Delivery Network (CDN)
> A way to access static content without having to download files individually. CDNs are created and accessed with speed and ease in mind.

Front-End Framework
> CSS & JavaScript files that allow you to easily structure and style your web pages.

Row
> A horizontal, typically `block` element that contains multiple columns.

Column
> A single unit of a row. Most grid systems are built with twelve columns in mind.

## Challenges

<!-- Question -->

### !challenge

* type: short-answer
* id: 6ca3932a-b145-45ee-ba86-5c91020169af
* title: CSS Layout A

### !question

How many columns are available to you in a Bootstrap Row?

### !end-question

### !answer

12

### !end-answer

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: 3d648554-22a4-4600-9304-09f5bad87204
* title: CSS Layout B

### !question

We can include external CSS with a CDN? What does it stand for?

### !end-question

### !answer

/content delivery network/i

### !end-answer

### !end-challenge

<!-- Question -->

### !challenge

* type: project
* id: 86ea61b9-ecd1-4bdf-990a-2b93176490e7
* title: CSS Layout C

##### !question

### Nesting and Balancing Rows & Columns

* [JSFiddle](https://jsfiddle.net/gh/get/library/pure/gSchool/g67_fiddles/tree/master/css-layout-rows-and-columns)

1. When you get to the page, press the "Run" button so that it correctly loads.
1. Balance the columns so that they all fit on the same row and are evenly spaced.
1. Add a new row to the final column with two columns inside of it.
1. **Make sure you are logged in!** Once you've finished, hit "Save" and paste the new URL below.

##### !end-question

##### !placeholder

https://jsfiddle.net/<username>/<fiddle-id>

##### !end-placeholder

### !end-challenge
