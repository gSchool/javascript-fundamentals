# The Grid System


## CSS Frameworks: Twitter Bootstrap

Instead of starting from scratch, we'll be using a CSS Framework to build our pages. CSS Frameworks often rely upon a grid system to structure layout.

* [What is a CSS Grid (Video)](https://youtu.be/0IrWRuEyXYA)
* [Introduction to Bootstrap](https://learn.galvanize.com/content/gSchool/html-css-curriculum/master/CSS/Frameworks/Bootstrap.md)
* [Nesting Rows & Columns](https://getbootstrap.com/docs/4.0/layout/grid/#nesting)

CSS Frameworks come in all kinds of different flavors, but the grid system is standard across many of them.

CSS frameworks, quite simply, are a large collection of CSS rules that play nice with each other. They make it easy for developers to worry less about the visual design of individual html elements, and more about the bigger picture of the page as a whole. CSS frameworks typically include default rules for common elements like `<div>, <span>, <ul>, <ol>, <li> ...` as well as rules for classes that can be applied to create common __layouts__ such as a grid.

In the end, all CSS frameworks are simply a collection of CSS stylesheets. Such frameworks save engineers lots of time, especially when starting a brand new website. No one wants to write the same 50 rules every time they start a webpage just to prevent your site from defaulting to the hideous HTML defaults. They also provide some common language (and classes) related to layouts.



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
