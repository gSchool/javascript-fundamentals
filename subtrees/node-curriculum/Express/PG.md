## Express, now with 100% more SQL!

### Objectives

By the end of this lesson, you should:

- Review the structure of an Express application
- Integrate the `pg` module into your app
- Write SQL Queries against your Postgres database
- Use data from your database to serve views
- Collect data from views and put it into your database

### Key terms + Definitions

#### `pg`

A node PostgreSQL client for node.js

#### Connection String

A special URL that points to a database

#### Query

Some SQL that when interpreted by SQL, returns a result or performs an action.

#### Parameterized SQL

SQL that is interpreted specially by a driver, preventing SQL injection attacks and simplifying the interface for programmers.


### Getting Started with `pg`

Today we're going to build an Express application that will connect to a database using the `pg` module from npm.

The very first thing you should do is create a new database, called `pgteas`, and insert some data. Open `psql` and run:  

```sql
CREATE DATABASE pgteas;

CREATE TABLE teas (
	id serial PRIMARY KEY,
	name varchar(150),
	flavor varchar(150),
	in_stock bool
);

INSERT INTO teas (name, flavor, in_stock) VALUES ('green tea', 'greeny', TRUE);
INSERT INTO teas (name, flavor, in_stock) VALUES ('blue tea', 'blueish', false);
INSERT INTO teas (name, flavor, in_stock) VALUES ('red tea', 'reddish', TRUE);
INSERT INTO teas (name, flavor, in_stock) VALUES ('yellow tea', 'lemony', TRUE);
```

**Generate an app**  

First, [we're going to generate an app](http://expressjs.com/en/starter/generator.html). If you haven't done this before, the command is simply `express teas`. If you're using ejs, use `express -ejs teas`.

**Install pg**  
Next, we'll need to install the driver for Postgres. This driver will allow our node.js application to execute SQL, just as though we're in a `psql` shell. Use `npm install pg --save` in your application folder.

> Make sure you installed pg in your application folder, not the folder above.

**Connecting to `psql` with `node`**  
Now, we need to connect to postgres. Let's take a detour from our application, and jump into the `node` repl. Head over to a terminal, and open `node`.

First, require the `pg` module like so: `var pg = require('pg');`.

Next, we'll need to connect by giving our module a url where the database can be accessed. In order to do that, we'll need to construct a URL. Our database may be the first resource you've had to locate that wasn't a website. Recall that the url's structure looks like this:

```
protocol://subdomain.domain.tld:port/path/to/whatever
```

We'll use that same structure to construct our Uniform Resource Locator (url) to connect to our database. This URL is often called a *connection string*. Using the schema above, use these values:  
Protocol: `postgres`  
Domain: localhost  
Port: 5432  
Path: database name (use `pgteas`)  

It should result in something like this:  
```
postgres://localhost:5432/pgteas
```

Now, we're going to connect to Postgres using the `pg` module. From [the documentation](https://github.com/brianc/node-postgres):

```javascript
var client = new pg.Client("postgres://localhost:5432/pgteas");
client.connect();
```

Once this code has run, we can use our `client` to execute a *query*. Try it now.

```
client.query("SELECT id, name, flavor FROM teas;", function(err, result) {
	console.log(result.rows);
});
```

After verifying that works, you know your connection is functional. Now, let's insert it into your application.

* Open `app.js`. At the top, `require` your `pg` module.
* After the line that creates a new express app, (`var app = express();`), create a new `pg.Client` instance, and give it the same *connection string* we used earlier.
* Once you create a client, call `.connect()` on that client. This ensures your app connects once when the server starts, then hangs on to that connection while it runs.

### Writing Queries

In your application, you have a folder called `routes`. In this folder, there are several files that we currently require in app.js. Because we're connecting to the database client in our app.js file, we need to somehow get access to the database client we've created in these routes files. For this, we'll need to change how our routes work.

First, open index.js, and replace the contents with the following code:
```javascript
var express = require('express');

//Now the module exports a function instead of an object
module.exports = function(client) {
	var router = express.Router();

	/* GET home page. */
	router.get('/', function(req, res, next) {
	  res.render('index', { title: 'Express' });
	});

	return router;
}

```

Because the module exports a function rather than an object now, we must run our function upon requiring it, so change this line:
```javascript
var routes = require('./routes/index');
```

To this line:

```javascript
var routes = require('./routes/index')(client);
```
Make sure it comes after `client` is defined.



### Rendering Views (res.locals)
Now that we have access to our database `client` in our `router`, let's write some queries in order to put data in our views.

**Getting Teas**  
Query our tea table like we did earlier, by adding this code to our index route:  

```javascript
client.query("SELECT id, name, flavor FROM teas;", function(err, result) {
	console.log(result.rows);
});
```

Instead of logging our results however, we're going to put our results into our response. There is a mechanism to do this easily with `res.locals`. `res.locals` is an object that is passed to whatever view rendering engine you may be using with your server.

```javascript
router.get('/', function(req, res) {
	client.query("SELECT id, name, flavor FROM teas;", function(err, result) {
		res.locals.teas = result.rows;
		res.render('index');
	});
});
```
Then, alter your `index.ejs` file:

```html
<h1>Teas!</h1>
    <table>
    	<tr>
    		<td>ID</td>
    		<td>Name</td>
    		<td>Flavor</td>
    	</tr>
    	<% for (var i=0; i<teas.length; i++) { %>
    		<tr>
    			<td><%= teas[i].id %></td>
    			<td><%= teas[i].name %></td>
    			<td><%= teas[i].flavor %></td>
    		</tr>
    	<% } %>
    </table>
```

## Challenges

- https://github.com/brianc/node-postgres
- https://github.com/gSchool/raw-express-postgres-example
- https://github.com/gSchool/express-postgres-crud-routes-assessment
- https://github.com/gSchool/express-postgres-crud-routes-exercise
- https://github.com/gSchool/express-postgresql-crud
- https://github.com/gSchool/express-psql-raw-teas


### Inserting Data
Using the above method for connecting to your database, **create a form** that then inserts data into the database, then verify it shows up on the front page. Follow these steps:

- Get data from your form using req.body
- Insert the data from your form into your database
- Use [Parameterized SQL](https://github.com/brianc/node-postgres/wiki/Client#method-query-parameterized) to protect against [SQL Injection](https://xkcd.com/327/)- `INSERT INTO teas (name, flavor, in_stock) VALUES ($1, $2, $3)` is what this will look like.

**Stretch Goals**  

- Use AJAX to submit the form and update the page without refreshing it.

## Resources

- [pg in Node.js](https://github.com/brianc/node-postgres)

## Slides

[PG](https://docs.google.com/presentation/d/1rJgJPsk6hWjYj8Lb1Rftz8tEZWsdRG-2PkJbUdDTxag)
