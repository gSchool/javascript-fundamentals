## Single Page App Basics

So far, all of the requests to our server have been via form posts or links using anchor tags.  Why is this not the best experience?  Why would you want to use javascript and ajax instead?  What is a single page app?

### Objective

* Define a single page application
* Able to diagram single page app architecture
* Responds with JSON on the server side
* Why is a client side templating library like handlebars a requirement?

## Single Page Architecture

A single page application at the most basic level is an application in which the client side javascript is in charge of the app.  In other words, most if not all of the content on the page is modified or replaced using javascript.

Here are some features of a single page app:

* No full page refresh
* Server is mostly used as an api
* The majority of the display logic is written in javascript
* Usually starts from some html template that is loaded from the server

#### Example Single Page App

[Kindle Cloud Reader](https://read.amazon.com/)

### Creating a Single Page App Example

We are going to go through a the code of a single page app.  Clone a fresh version of the [knex library app part1 solution](https://github.com/gSchool/knex-library-app/tree/part1solution) to work on.  Then switch to the singlePageApp branch.  Here are the steps:

```
git clone https://github.com/gSchool/knex-library-app.git
cd knex-library-app
git checkout --track origin/singlePageApp
```

## Responding with JSON

Take a look at `router.get('/authors', ...` in `routes/authors.js`. Notice that it uses `res.format` to respond to the request.  Here is the code:

```javascript
router.get('/', function(req, res){
  knex('authors').select('id', 'name', 'age').then(function(authors){
    res.format({
      default: function() {
        res.status(406).send('Not Acceptable');
      },
      html: function() {
        res.render('authors/index', {authors: authors});
      },
      json: function() {
        res.send(authors);
      }
    });
  });
});
```

The `res.format` is responding in a different way based on the `Accept` header that is being sent to the server.  If the client accepts html, the function for html is run.  If the client accepts json, then the json function is executed.

__EXERCISE__

What exactly are the values of the `Accept` header that your browser would send to your server?  How would I get a JSON response back in postman?

## The HTML Template

The single page app needs some html to get started with loading the javascript.  In our app, the template that starts our single page app up is `views/home.jade`.  Most of the logic for the page is in the `views/layout.jade` file though.

When the initial GET request for `/` is sent to the server, our app returns html that loads an empty page plus all the javascript that will build the rest of the page.  Notice this line:

```javascript
  script(type="text/javascript", src="/js/authors.js")
```

That loads the `authors.js` file from `public/js/authors.js`.  Look at the contents of the file to get an idea of what the code is doing.

__EXERCISE__

Explain how the authors are showing up on the route for `/`.

## AJAX

In the client side, we make ajax request to our server to get the data we need.  We then load that data via DOM manipulation.  Here is an example in our `authors.js` file:

```
  $.getJSON('/authors').then(function(authors) {
    authors.forEach(function(author) {
      var html = authorTmpl(author);
      $("#all-authors").append(html);
    });
  });
```

## Handlebars

Handlebars is a client side templating library.  It is very similar to the server side libaries like EJS and Jade.  Handlebars can acutally be used on the server side as well, but it is more popular as a client side library.

A client side templating library is not only nice to have, it's actually required for security.  If you use javascript to create all of your html, you are going to be vulnerable to an attack called <a href="https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)">cross site scripting</a>], or XSS.

To use handlebars (and prevent XSS attacks), we need to first include the handlebars javascript:

```javascript
  script(type="text/javascript", src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js")
```

Then include a javascript file that makes some handlebars templates:

```javascript
  script(type="text/javascript", src="/handlebars/templates.js")
```

Now that we have handlebars installed, we can create some templates in the templates.js file.  Here is an example template:

```javascript
var indexTmpl = Handlebars.compile('<h3>All The Authors</h3><ul class="list-group" id="all-authors"></ul>');
```

This is just a very simple template that creates some html.  The `Handlebars.compile` method creates a function.  When that function is executed, it returns html.  So, `indexTmpl()` will return html as a string when executed.

Here is a more interesting example from the template.js file:

```
var editTmpl = Handlebars.compile('<form class="edit-form" action="/authors/{{id}}?_method=put" method="POST">' +
          '<label>Name<input type="text" value="{{name}}" class="name-input"></label>' +
          '<label>Age<input type="number" value="{{age}}" class="age-input"></label>' +
          '<input type="submit" value="Update" class="btn btn-primary"></form>');
```

This also returns a function, but now the function takes an object as a parameter that determines what the values of id, name and age should be.  So we would get our html string like this:

```
editTmpl({id: 1, name: "Mark Twain", age: 99});
```

Notice how this code is being used in authors.js:

```javascript
  $.getJSON('/authors').then(function(authors) {
    authors.forEach(function(author) {
      var html = authorTmpl(author);
      $("#all-authors").append(html);
    });
  });
```

__EXERCISE__

Implement adding an author and deleting an author all without refreshing the page.


## Homework

[Places I've Traveled](https://github.com/gSchool/placesIveTraveled)
