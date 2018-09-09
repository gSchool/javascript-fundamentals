# Templates

# Server-Side Templates

### Entry Ticket

* Create servers with Express.js
* Send data in response to a request

### Objectives

* Use `res.render` to compile a template and data into HTML
* Choose a server-side templating engine

### Overview

#### What is server-side templating?

Server-side templating is when we use specially-formatted view files that get read by a parser on the server, data gets _applied_ to the template, and then HTML is returned. We use a library typically to do this, but server-side templating happens anytime the server reads a file or a string and inserts dynamic data.

#### Example

This is EJS - Embedded JavaScript. Our parser can recognize that when it sees `<%`, some code, and `%>`, it's going to need to execute some code. This syntax is later removed from the output HTML. It also knows that `<%=` means it's going to evaluate an expression, and output the result.

#### EJS

```
<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
    <h1>All the Puppies</h1>
    <ul>
    <% puppies.forEach(function(pup) { %>
      <li>
        <a href="/puppies/<%= pup.id %>/edit">
          <%= pup.name %>
        </a>
      </li>
    <% }); %>
    </ul>

    <a href="/puppies/new">Add a Puppy</a>
  </body>
</html>
```

There are lots of different templating libraries. Some use normal HTML syntax with added server-side code demarcation. Some use an alternate syntax to ultimately generate HTML, such as Jade.

Here is the equivalent Jade template:

#### Pug

```pug
doctype html
html(lang="en")
  head
  body
    h1 All The Puppies
    ul
      each pup in puppies
        li
          a(href="/puppies/#{pup.id}/edit")= pup.name
    a(href="/puppies/new") Add a Puppy
```

As you can see, Jade is much more compact and expressive than ejs.  Jade figures out that a tag should be closed based on indentation.  In the above example, the `ul` should be closed once the the `a` tag is added because the `a` tag is on the same indentation level as the `ul`.

There is a distinction between scripting templates and logic-less templates. Handlebars is yet another example. Here's the equivalent syntax in Handlebars.

#### Handlebars

```html
<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
    <h1>All the Puppies</h1>
    <ul>
    {{#each puppies}}
      <li>
        <a href="/puppies/{{ id }}/edit">
          {{ name }}
        </a>
      </li>
    {{/each}}
    </ul>

    <a href="/puppies/new">Add a Puppy</a>
  </body>
</html>
```

The syntax is similar, but with Handlebars you'll notice, you reference the keys inside of an individual puppy directly (such as when we used `{{ name }}`).

Handlebars has no `if` statements, and so the flow of logic is different than in EJS and Jade, which does have them.

### Partials / Layouts

One of the most important features of a server-side templating library is it's ability to support layouts and partials. Often our HTML pages share similar components between them. The most common example of this is a navbar that appears on every page. In order to increase maintainability, we can keep this same navbar in one file, rather than duplicating our efforts across our application. Here's an example of that in Handlebars:

#### Handlebars Partials

**/views/index.ejs**

```
<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
    <% include partials/navbar %>
    <h1> All The Puppies </h1>
    <ul>
    <% puppies.forEach(function(pup) { %>
      <li>
        <a href="/puppies/<%= pup.id %>/edit">
          <%= pup.name %>
        </a>
      </li>
    <% }); %>
    </ul>

    <a href="/puppies/new">Add a Puppy</a>
  </body>
</html>
```

**/views/partials/navbar.ejs**

```
<nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">

        <div class="navbar-header">
            <a class="navbar-brand" href="#">
                <span class="glyphicon glyphicon glyphicon-tree-deciduous"></span>
                Puppies!
            </a>
        </div>

        <ul class="nav navbar-nav">
            <li><a href="/">Puppy List</a></li>
            <li><a href="/about">About</a></li>
        </ul>

    </div>
</nav>
```

In another popular framework called [Nunjucks](https://mozilla.github.io/nunjucks/), we have the concept of Layouts. These are similar to partials, but instead of composing a page from many pieces, we have a base layout with specific blocks inside. Here's an example of that:

**index.njk**

```
{% extends "base.njk" %}

{% block header %}
<h1>Puppy List</h1>
{% endblock %}

{% block content %}
<ul>
  {% for puppy in puppies %}
  <li>{{ puppy.name }}</li>
  {% endfor %}
</ul>
{% endblock %}
```

**base.njk**

```
<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
    <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">

            <div class="navbar-header">
                <a class="navbar-brand" href="#">
                    <span class="glyphicon glyphicon glyphicon-tree-deciduous"></span>
                    Puppies!
                </a>
            </div>

            <ul class="nav navbar-nav">
                <li><a href="/">Puppy List</a></li>
                <li><a href="/about">About</a></li>
            </ul>

        </div>
    </nav>

    {% block header %} <h1>Default Header Content</h1> {% endblock %}

    {% block content %} <p>Default Body Content</p> {% endblock %}

  </body>
</html>
```

In this example, blocks are like "slots" in the template, where corresponding chunks of content replace the default content.

## Server-side templating libraries

The best way to figure out which one you like best is to dive in! Remember that Express does not care which library you use. As long as you use the `app.set("view engine")` command, you can compile any views that have a node.js package written for them.

[Read the Express.js documentation about using View Engines](http://expressjs.com/en/guide/using-template-engines.html)  - it has a list of supported libraries with syntax examples. Try using at least two different ones- they have different philosophies about how to structure your view code.

Here are some we recommend:

* [Jade (Recently renamed to Pug)](http://jade-lang.com/)
* [Handlebars](http://handlebarsjs.com/)
* [Nunjucks](https://mozilla.github.io/nunjucks/)
* [EJS](http://www.embeddedjs.com/)
* [You can even develop your own!](http://expressjs.com/en/advanced/developing-template-engines.html)

### Reflect

1. How do you configure express to render a template?
2. How do you tell express to actually render a template, and send it to the client?
3. What kind of code goes into a partial?
4. Which do you prefer, Layouts or Partials? Why?


# Calculator Review

```js
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.send("HELLO WORLD!");
});

app.get('/hello/:name', function(req, res){
	res.render('index', {name:req.params.name})
});

app.get('/:operation/:x/:y', function(req, res){
	var operators = {
		add: "+",
		sub: "-",
		mult: "*",
		div: "/"
	}
	var operator = operators[req.params.operation]
	var result = eval(req.params.x + operator + req.params.y);
	res.render('index', {
		result: result,
		op1: req.params.x,
		op2: req.params.y,
		operator: operator
	});
});

// app.get('/add/:op1/:op2', function(req, res){
// 	var sum = Number(req.params.op1) + Number(req.params.op2)
// 	res.render('index', {result: sum})
// });

// app.get('/mult/:op1/:op2', function(req, res){
// 	var product = Number(req.params.op1) * Number(req.params.op2)
// 	res.render('index', {result: product})
// });

app.listen(3000, function(){
	console.log("STARTING SERVER ON 3000");
})
```

## Assignment

Reading: [Resource Naming](http://www.restapitutorial.com/lessons/restfulresourcenaming.html)

https://github.com/gSchool/express_library_app

- [Server Side Templating](https://github.com/gSchool/server-side-templating)

## Slides

- [SS Rendering Slides](https://slides.com/lizh/ss-templating)
