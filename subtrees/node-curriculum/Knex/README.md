# Introduction to Knex

## Objectives

- Explain what Knex.js is.
- Explain why Knex.js is useful.
- Use Knex.js to select rows from a PostgreSQL table.
- Use Knex.js to insert rows into a PostgreSQL table.
- Use Knex.js to update rows in a PostgreSQL table.
- Use Knex.js to delete rows from a PostgreSQL table.

## What is Knex.js?

<img src="https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/500/knex.png" style="background:white;border:none;width:80%;padding:30px;"/>

The "batteries included" SQL query builder.

---

**Knex.js** is a third-party JavaScript library that builds SQL commands and sends them to a relational database system like PostgreSQL. In other words, Knex.js allows you to build a Node.js-based PostgreSQL client that communicates with a PostgreSQL server.

Just like jQuery builds and sends HTTP requests to an HTTP server, Knex builds and sends SQL queries to a PostgreSQL server. Just remember that jQuery runs inside a web browser while Knex runs outside a web browser using Node.js.

```text
┌─── Client: Chrome ───┐               ┌─── Server: Node.js ──┐
│                      │─── request ──▶│                      │
│                      │               │                      │
│        jQuery        │               │       Express        │
│                      │               │                      │
│                      │◀── response ──│                      │
└──────────────────────┘               └──────────────────────┘




 ┌── Client: Node.js ──┐               ┌── Server: postgres ──┐
 │                     │─── request ──▶│                      │
 │                     │               │                      │
 │        Knex         │               │                      │
 │                     │               │                      │
 │                     │◀── response ──│                      │
 └─────────────────────┘               └──────────────────────┘
```

To see how this works in action, migrate and seed a database by running the following shell commands.

```shell
dropdb movie_junkies_dev
createdb movie_junkies_dev
curl -fsSL https://git.io/voXVD | psql movie_junkies_dev
```

Then, setup a new Node.js project by running the following shell commands.

```shell
mkdir movies
cd movies
npm init
npm install --save pg
npm install --save knex
touch knexfile.js
touch index.js
```

In the `knexfile.js` file, write and save the following code.

```javascript
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/movie_junkies_dev'
  }
};
```

In the `index.js` file, write and save the following code.

```javascript
'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

const sql = knex('movies').toString();

console.log(sql);

knex.destroy();
```

**NOTE:** The program won't terminate unless the `knex.destroy()` function is called. You'll learn why in a moment.

Then, execute the program by running the following shell command.

```shell
node index.js
```

And you should see something like this.

```text
select * from "movies"
```

As you can see, the `knex('movies').toString()` functions built a `SELECT` command and returned it as a string. Why on earth would you want a Node.js program to build an SQL command? To send it to a relational database system, of course! Just like jQuery builds and sends HTTP requests to an HTTP server, Knex builds and sends SQL queries to a PostgreSQL server.

Though it must feel like a lifetime ago, think back to last quarter when you used jQuery to send HTTP requests. Do you remember how jQuery's `$.getJSON()` function works? Here's a refresher, just in case.

```javascript
const $xhr = $.getJSON('www.omdbapi.com/?i=tt2294629');

$xhr.done((result) => {
  // Handle success
});

$xhr.fail(() => {
  // Handle error
});
```

The `$.getJSON()` function sends an HTTP request and returns an `$xhr` promise. A **promise** is an object that's used for asynchronous operations. Though at first it looks like just a regular callback, a promise is much more than that. A promise is an object that represents an operation that hasn't completed yet, but will in the future. The main benefit of a promise is its ability to separate the success handling logic from the error handling logic.

For example, the `$xhr` promise remains unresolved while it waits for the HTTP response. The `$xhr` promise has two methods, `done()` and `fail()`, that are given a callback each. If the HTTP response is successful, the `done()` function's callback is triggered. On the other hand, if the HTTP response generates an error, the `fail()` function's callback is triggered.

Just like how jQuery uses a promise to handle an HTTP response from an HTTP server, Knex uses promises to handle a SQL response from a PostgreSQL server. In fact, nearly all the functions in Knex return a promise as the preferred way of handling SQL responses. The main difference from jQuery is that Knex promises use the `then()` and `catch()` asynchronous functions instead of `done()` and `fail()`.

**NOTE:** jQuery 3.0 has switched over to use the `then()` and `catch()` functions as well.

In the `index.js` file, write and save the following code.

```javascript
'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

knex('movies').then((result) => {
  console.log(result);
  knex.destroy();
})
.catch((err) => {
  console.error(err);
  knex.destroy();
  process.exit(1);
});
```

Then, execute the program by running the following shell command.

```shell
node index.js
```

And you should see something like this.

```
[ anonymous {
    id: 1,
    title: 'Frozen',
    duration: 102,
    rating: 'PG',
    genre: 'Animation',
    is_3d: true,
    released_at: 2013-11-27T00:00:00.000Z,
    score: '7.6' },
  anonymous {
    id: 2,
    title: 'X-Men: Apocalypse',
    duration: 144,
    rating: 'PG-13',
    genre: 'Action',
    is_3d: true,
    released_at: 2016-05-27T00:00:00.000Z,
    score: '7.4' },
  anonymous {
    id: 3,
    title: 'The Princess Bride',
    duration: 98,
    rating: 'PG',
    genre: 'Adventure',
    is_3d: false,
    released_at: 1987-10-09T00:00:00.000Z,
    score: '8.1' },
  anonymous {
    id: 4,
    title: 'Pulp Fiction',
    duration: 154,
    rating: 'R',
    genre: 'Crime',
    is_3d: false,
    released_at: 1994-10-14T00:00:00.000Z,
    score: '8.9' } ]
```

This data probably looks familiar. By the way, congratulations on successfully querying a PostgreSQL database from Node.js! You're on your way to building dynamic web applications.

As it turns out, the `then()` function returns a promise too. This is why you can immediately chain a `catch()` function call to return value of the `then()` function. We'll study promises in more depth soon as they're essential for handling asynchronous operations. For now, just follow the coding pattern outlined above.

Before moving on, here's a quick explanation on how Knex connects to a PostgreSQL server. When the `require('knex')(config)` function is called, Knex opens two connections to a server. This allows Knex to send multiple SQL commands to a server concurrently. When the `knex.destroy()` function is called, Knex closes the connections. If the connections aren't closed, the program will run indefinitely.

**NOTE:** If needed, Knex will open 10 connections in total. The minimum and maximum connections to open is a [configurable option](http://knexjs.org/#Installation-pooling) when initializing Knex.

### Exercise

Turn to a neighbor and explain what Knex.js is and how it works in your own words.

## Why is Knex.js useful?

Knex.js allows developers to build Node.js web applications that can create, read, update, and destroy the rows, tables, and even databases of a relational database system like PostgreSQL.

```text
┌─── Chrome ──┐               ┌── Node.js ──┐               ┌── postgres ─┐               ╔════════════ cluster ═══════════╗
│             │─── request ──▶│             │─── request ──▶│             │──── write ───▶║                                ║
│             │               │             │               │             │               ║  ┏━━━━━━━━ database ━━━━━━━━┓  ║
│   jQuery    │               │   Express   │               │             │               ║  ┃                          ┃  ║
│             │               │   Knex      │               │             │               ║  ┃  ┌──────┬ table ┬─────┐  ┃  ║
│             │               │             │               │             │               ║  ┃  ├──────┼───────┼─────┤  ┃  ║
│             │◀── response ──│             │◀── response ──│             │◀─── read ─────║  ┃  ├──────┼───────┼─────┤  ┃  ║
└─────────────┘               └─────────────┘               └─────────────┘               ║  ┃  ├──────┼───────┼─────┤  ┃  ║
                                                                                          ║  ┃  └──────┴───────┴─────┘  ┃  ║
                                                                                          ║  ┃                          ┃  ║
                                                                                          ║  ┃  ┌──────┬ table ┬─────┐  ┃  ║
                                                                                          ║  ┃  ├──────┼───────┼─────┤  ┃  ║
                                                                                          ║  ┃  ├──────┼───────┼─────┤  ┃  ║
                                                                                          ║  ┃  ├──────┼───────┼─────┤  ┃  ║
                                                                                          ║  ┃  └──────┴───────┴─────┘  ┃  ║
                                                                                          ║  ┃                          ┃  ║
                                                                                          ║  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━┛  ║
                                                                                          ║                                ║
                                                                                          ╚════════════════════════════════╝
```

Knex.js also prevents against SQL injection attacks. An **SQL injection** attack occurs when user input is not filtered for escape characters and is then passed into an SQL command. This results in the potential for a malicious user to manipulate the database commands that a web application performs. The following line of code illustrates this vulnerability.

```javascript
const sql = "SELECT * FROM users WHERE name = '" + userName + "';"
```

The intent of the SQL command is to select the rows that match a specified `name` column from the `users` table. However, if the `userName` variable is crafted in a specific way by a malicious user, the SQL command can do more than the author intended. For example, setting the `userName` variable to the following:

```javascript
const userName = "'; DROP TABLE users; -- ";
```

Would generate the following malicious SQL command.

```sql
SELECT * FROM users WHERE name = ''; DROP TABLE users; -- ';
```

To prevent SQL injection attacks, all you need to do is escape the special characters that a user, malicious or otherwise, may input into a web application. In SQL, a single-quote `'` character is escaped with another single-quote `'`.

```sql
SELECT * FROM users WHERE name = '''; DROP TABLE users; -- ';
```
So now the generated SQL command harmlessly looks for rows in the `users` table with a funny `name`. Thankfully, the Knex.js API will automatically escape characters for you.

In the `index.js` file, write and save the following code.

```javascript
'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

const sql = knex('users').where('name', userName).toString();

console.log(sql);

knex.destroy();
```

Then, execute the program by running the following shell command.

```shell
node index.js
```

And you should see something like this.

```text
select * from "users" where "name" = '''; DROP TABLE users; -- '
```

### Exercise

Draw a diagram of a database-driven, full-stack web application. Identify which part uses Knex.js and how it works.

Once you're satisfied, explain to a neighbor how user input from a malicious user could flow through the system.

## How do you use Knex.js to select rows from a PostgreSQL table?

At the heart of Knex is the query builder. The **query builder** is the API used to build and send SQL queries, such as `SELECT`, `INSERT`, `UPDATE`, `DELETE`, to a database system. Let's play around with selecting rows from a table.

### `SELECT` clause

The [`select()` method](http://knexjs.org/#Builder-select) creates a `SELECT` command. It accepts an optional list of column names as string arguments and adds them to the `SELECT` clause of a query. When no arguments are specified, it adds a `*` to the `SELECT` clause. Like most Knex methods, the `select()` method returns a promise. When the promise is resolved, the `then()` method's callback is triggered and given an array of objects for the matching rows in a table.

In the `index.js` file, write and save the following code.

```javascript
'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

knex('movies')
  .select('id', 'title', 'rating', 'is_3d', 'score')
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
```

Then, execute the program by running the following shell command.

```shell
node index.js
```

And you should see something like this.

```text
[ anonymous {
    id: 1,
    title: 'Frozen',
    rating: 'PG',
    is_3d: true,
    score: '7.6' },
  anonymous {
    id: 2,
    title: 'X-Men: Apocalypse',
    rating: 'PG-13',
    is_3d: true,
    score: '7.4' },
  anonymous {
    id: 3,
    title: 'The Princess Bride',
    rating: 'PG',
    is_3d: false,
    score: '8.1' },
  anonymous {
    id: 4,
    title: 'Pulp Fiction',
    rating: 'R',
    is_3d: false,
    score: '8.9' } ]
```

### `WHERE` clause

Several Knex methods exist to assist in adding dynamic `WHERE` clauses to a query. The first method to play with is the [`where()` method](http://knexjs.org/#Builder-wheres). It accepts two arguments—a column name as a string and a value to match against.

**NOTE:** Supplying `where()` with the `undefined` value will throw an error.

In the `index.js` file, write and save the following code.

```javascript
'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

knex('movies')
  .select('id', 'title', 'rating', 'is_3d', 'score')
  .where('id', 4)
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
```

Then, execute the program by running the following shell command.

```shell
node index.js
```

And you should see something like this.

```text
[ anonymous {
    id: 4,
    title: 'Pulp Fiction',
    rating: 'R',
    is_3d: false,
    score: '8.9' } ]
```

The `where()` method can also accepts three arguments—a column name as a string, and operator as a string, and a value to operate against.

In the `index.js` file, write and save the following code.

```javascript
'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

knex('movies')
  .select('id', 'title', 'rating', 'is_3d', 'score')
  .where('score', '>=', 7.5)
  .then((result) => {
    console.log(result);

    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
```

Then, execute the program by running the following shell command.

```shell
node index.js
```

And you should see something like this.

```shell
[ anonymous {
    id: 1,
    title: 'Frozen',
    rating: 'PG',
    is_3d: true,
    score: '7.6' },
  anonymous {
    id: 3,
    title: 'The Princess Bride',
    rating: 'PG',
    is_3d: false,
    score: '8.1' },
  anonymous {
    id: 4,
    title: 'Pulp Fiction',
    rating: 'R',
    is_3d: false,
    score: '8.9' } ]
```

To add `AND` clauses to a query, you can chain additional `where()` methods.

In the `index.js` file, write and save the following code.

```javascript
'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

knex('movies')
  .select('id', 'title', 'rating', 'is_3d', 'score')
  .where('score', '>=', 7.5)
  .where('rating', 'PG')
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
```

Then, execute the program by running the following shell command.

```shell
node index.js
```

And you should see something like this.

```text
[ anonymous {
    id: 1,
    title: 'Frozen',
    rating: 'PG',
    is_3d: true,
    score: '7.6' },
  anonymous {
    id: 3,
    title: 'The Princess Bride',
    rating: 'PG',
    is_3d: false,
    score: '8.1' } ]
```

The `where()` method also accepts one argument—an object with key-value pairs. The keys translate column names and the values translate to their respective comparison values. If an object with multiple key-value pairs is given, the `where()` method adds multiple `AND` clauses to the query.

In the `index.js` file, write and save the following code.

```javascript
'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

knex('movies')
  .select('id', 'title', 'rating', 'is_3d', 'score')
  .where('score', '>=', 7.5)
  .where({ rating: 'PG', is_3d: true })
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
```

Then, execute the program by running the following shell command.

```shell
node index.js
```

And you should see something like this.

```text
[ anonymous {
    id: 1,
    title: 'Frozen',
    rating: 'PG',
    is_3d: true,
    score: '7.6' } ]
```

The `orWhere()` method works exactly the same as the `where()` method, except it adds an `OR` clause to the query, grouping its arguments in parenthesis `()`.

In the `index.js` file, write and save the following code.

```javascript
'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

knex('movies')
  .select('id', 'title', 'rating', 'is_3d', 'score')
  .where('score', '>=', 7.5)
  .where({ rating: 'PG', is_3d: true })
  .orWhere('title', 'Pulp Fiction')
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
```

Then, execute the program by running the following shell command.

```shell
node index.js
```

And you should see something like this.

```text
[ anonymous {
    id: 1,
    title: 'Frozen',
    rating: 'PG',
    is_3d: true,
    score: '7.6' },
  anonymous {
    id: 4,
    title: 'Pulp Fiction',
    rating: 'R',
    is_3d: false,
    score: '8.9' } ]
```

Additionally, the Knex API includes the following `WHERE` clause methods.

- [Knex.js - `whereNot()`](http://knexjs.org/#Builder-whereNot)
- [Knex.js - `whereIn()`](http://knexjs.org/#Builder-whereIn)
- [Knex.js - `whereNotIn()`](http://knexjs.org/#Builder-whereNotIn)
- [Knex.js - `whereNull()`](http://knexjs.org/#Builder-whereNull)
- [Knex.js - `whereNotNull()`](http://knexjs.org/#Builder-whereNotNull)
- [Knex.js - `whereExists()`](http://knexjs.org/#Builder-whereExists)
- [Knex.js - `whereNotExists()`](http://knexjs.org/#Builder-whereNotExists)
- [Knex.js - `whereBetween()`](http://knexjs.org/#Builder-whereBetween)
- [Knex.js - `whereNotBetween()`](http://knexjs.org/#Builder-whereNotBetween)
- [Knex.js - `whereRaw()`](http://knexjs.org/#Builder-whereRaw)

Chaining an [`orderBy` method](http://knexjs.org/#Builder-orderBy) adds an `ORDER BY` clause to the query. It accepts two string arguments—a column name and a direction.

In the `index.js` file, write and save the following code.

```javascript
'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

knex('movies')
  .select('id', 'title', 'rating', 'is_3d', 'score')
  .where('score', '>=', 7.5)
  .where({ rating: 'PG', is_3d: true })
  .orWhere('title', 'Pulp Fiction')
  .orderBy('score', 'DESC')
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
```

Then, execute the program by running the following shell command.

```shell
node index.js
```

And you should see something like this.

```text
[ anonymous {
    id: 4,
    title: 'Pulp Fiction',
    rating: 'R',
    is_3d: false,
    score: '8.9' },
  anonymous {
    id: 1,
    title: 'Frozen',
    rating: 'PG',
    is_3d: true,
    score: '7.6' } ]
```

Chaining the [`limit()` method](http://knexjs.org/#Builder-limit) adds a `LIMIT` clause to the query. The method takes a single number argument—the limit value.

In the `index.js` file, write and save the following code.

```javascript
'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

knex('movies')
  .select('id', 'title', 'rating', 'is_3d', 'score')
  .where('score', '>=', 7.5)
  .where({ rating: 'PG', is_3d: true })
  .orWhere('title', 'Pulp Fiction')
  .orderBy('score', 'DESC')
  .limit(1)
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
```

Then, execute the program by running the following shell command.

```shell
node index.js
```

And you should see something like this.

```text
[ anonymous {
    id: 4,
    title: 'Pulp Fiction',
    rating: 'R',
    is_3d: false,
    score: '8.9' } ]
```

### `OFFSET` clause

- [Knex.js - `offset()`](http://knexjs.org/#Builder-offset)

### `JOIN` clause

- [Knex.js - `innerJoin()`](http://knexjs.org/#Builder-innerJoin)

### `DISTINCT` clause

- [Knex.js - `distinct()`](http://knexjs.org/#Builder-distinct)

### Aggregate methods

- [Knex.js - `count()`](http://knexjs.org/#Builder-count)
- [Knex.js - `max()`](http://knexjs.org/#Builder-max)
- [Knex.js - `min()`](http://knexjs.org/#Builder-min)
- [Knex.js - `sum()`](http://knexjs.org/#Builder-sum)
- [Knex.js - `avg()`](http://knexjs.org/#Builder-avg)

### Helper methods

- [Knex.js - `increment()`](http://knexjs.org/#Builder-increment)
- [Knex.js - `decrement()`](http://knexjs.org/#Builder-decrement)
- [Knex.js - `pluck()`](http://knexjs.org/#Builder-pluck)
- [Knex.js - `first()`](http://knexjs.org/#Builder-first)
- [Knex.js - `raw()`](http://knexjs.org/#Builder-raw)

### Exercise

Using Knex.js, build the following queries.

- Return the `id`, `title`, and `score` of the single lowest scoring movie in the table.
- Return the `id`, `title`, and `duration` of the "X-Men: Apocalypse" and "The Princess Bride" movies.
- Return the `id`, `title`, and `released_at` all the movies ordered by from oldest to newest.
- Return the `id`, `title`, `genre`, and `score` of all of the PG movies that scored between 7.5 and 8.5
- Return the `title`, `score`, `award_kind`, and `award_name` of all movies ordered alphabetically by its `title`.
- Return the `title`, `actor_name`, `role` of "Pulp Fiction" ordered by youngest to oldest actors.

## How do you use Knex.js to insert rows into a PostgreSQL table?

The [`insert()` method](http://knexjs.org/#Builder-insert) creates an `INSERT` command. It accepts an object of key-value pairs to be inserted into a row in the table. Like most Knex methods, the `insert()` method returns a promise. When the promise is resolved, the `then()` method's callback is triggered and given an object that contains the number of rows inserted.

In the `index.js` file, write and save the following code.

```javascript
'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

knex('movies')
  .insert({
    title: 'Deadpool',
    duration: 108,
    rating: 'R',
    genre: 'Action',
    is_3d: false,
    released_at: new Date('2016-02-12 00:00:00 UTC'),
    score: 8.2
  })
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
```

Then, execute the program by running the following shell command.

```shell
node index.js
```

And you should see something like this.

```text
{ command: 'INSERT',
  rowCount: 1,
  oid: 0,
  rows: [],
  fields: [],
  _parsers: [],
  RowCtor: null,
  rowAsArray: false,
  _getTypeParser: [Function: bound ] }
```

Additionally, the `insert()` method accepts a list of string column names as a second argument. This tells Knex what columns of the newly inserted row to pass into the `then()` method's callback. Commonly, an asterisk `*` is used to pass along all the columns of the row.

In the `index.js` file, write and save the following code.

```javascript
'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

knex('movies')
  .insert({
    title: 'Deadpool',
    duration: 108,
    rating: 'R',
    genre: 'Action',
    is_3d: false,
    released_at: new Date('2016-02-12 00:00:00 UTC'),
    score: 8.2
  }, '*')
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
```

Then, execute the program by running the following shell command.

```shell
node index.js
```

And you should see something like this.

```text
[ anonymous {
    id: 6,
    title: 'Deadpool',
    duration: 108,
    rating: 'R',
    genre: 'Action',
    is_3d: false,
    released_at: 2016-02-12T00:00:00.000Z,
    score: '8.2' } ]
```

## How do you use Knex.js to update rows in a PostgreSQL table?

The [`update()` method](http://knexjs.org/#Builder-update) creates an `UPDATE` command. Like the `insert()` method, the `update()` method accepts an object of key-value pairs to be updated into a row in the table. Like most Knex methods, the `update()` method returns a promise. When the promise is resolved, the `then()` method's callback is triggered and given a single value representing the number of rows updated.

In the `index.js` file, write and save the following code.

```javascript
'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

knex('movies')
  .update({
    is_3d: true,
    score: 9.1
  })
  .where('id', 5)
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
```

Then, execute the program by running the following shell command.

```shell
node index.js
```

And you should see something like this.

```text
1
```

Additionally, the `update()` method accepts a list of string column names as a second argument. This tells Knex what columns of the updated row to pass into the `then()` method's callback. Commonly, an asterisk `*` is used to pass along all the columns of the row.

In the `index.js` file, write and save the following code.

```javascript
'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

knex('movies')
  .update({
    is_3d: true,
    score: 9.1
  }, '*')
  .where('id', 5)
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
```

Then, execute the program by running the following shell command.

```shell
node index.js
```

And you should see something like this.

```text
[ anonymous {
    id: 5,
    title: 'Deadpool',
    duration: 108,
    rating: 'R',
    genre: 'Action',
    is_3d: true,
    released_at: 2016-02-12T00:00:00.000Z,
    score: '9.1' } ]
```

## How do you use Knex.js to delete rows from a PostgreSQL table?

The [`del()` method](http://knexjs.org/#Builder-del) creates a `DELETE` command. Unlike the other Knex methods, the `del()` method doesn't accept any arguments all. However, like most Knex methods, the `del()` method returns a promise. When the promise is resolved, the `then()` method's callback is triggered and given a single value representing the number of rows deleted.

**NOTE** The method is named `del()` because the token `delete` is a reserved word in JavaScript.

In the `index.js` file, write and save the following code.

```javascript
'use strict';

const env = 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);

knex('movies')
  .del()
  .where('title', 'Deadpool')
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
```

Then, execute the program by running the following shell command.

```shell
node index.js
```

And you should see something like this.

```text
1
```

## Challenges

- [SQL to Knex](https://github.com/gSchool/sql-to-knex-assignment)
- Complete the first part of the [booklist knex refactor](https://github.com/gSchool/knex_booklist)

## Resources

- [Knex.js - Home](http://knexjs.org/)
- [Knex.js - Knex Query Builder](http://knexjs.org/#Builder)
- [Knex Query Lab](http://michaelavila.com/knex-querylab/)
- [Wikipedia - SQL injection](https://en.wikipedia.org/wiki/SQL_injection)

## Videos

### Running an SQL Injection Attack - Computerphile

<iframe width="560" height="315" src="https://www.youtube.com/embed/ciNHn38EyRc" frameborder="0" allowfullscreen></iframe>

## Slides

- [Intro to Knex](https://slides.com/lizh/intro_to_knex/)

## Resources

* [http://knexjs.org/#Builder](http://knexjs.org/#Builder)
* [knex.js website and documentation](http://knexjs.org/)
* [knex query lab](http://michaelavila.com/knex-querylab/)
* [SQL to knex exercise](https://github.com/gSchool/sql-to-knex-assignment)
