# Knex: Step-by-Step

## Objectives

By the end of this walkthrough you will:

* Be able to alter database schema using migrations
* Be able to alter a production database schema using migrations
* Be able to explain why migrations are important
* Be able to explain why migrations have unique identifying numbers
* Be able to rollback a migration in both a development and production environment

## Why you should care

Migrations are a convenient way to alter your database schema over time in a consistent and easy way. Migrations reduce the opportunity for human error and allow you to automate schema creation in both development and production.

You can think of each migration as being a new 'version' of the database. A schema starts off with nothing in it, and each migration modifies it to add or remove tables, columns, or entries.

These migrations also provide further documentation about your database schema for you, your team, and _future you!_

## Overview

Included in the exercise section of this article is a Library CRUD app. Your mission is to add `Books` and `Readers` schemas to this app using `knex` migrations.

Before you begin, be sure and delete any existing `library` database you might have from previous exercises.

#### Your Schemas Should Have:

__Books__

* id
* author
* title
* rating
* description

__Readers__

* id
* first_name
* last_name


After you get everything working locally, you will deploy this CRUD app to Heroku and use your migrations to add your `Readers` and `Books` schemas to your production database.

## Get Started!

### Installing and setting up knex and pg npm packages

```sh
yarn add pg knex      #install knex locally
```

You have two options for using the Knex cli, running globally, or creating scripts in `package.json`.  For now just install it globally:

```sh
npm install -g knex
```

---

### knexfile.js

`knex init` which creates a `knexfile.js` in the project root.  Add the following.

```js
module.exports = {

  test: {
    client: 'pg',
    connection: 'postgres://localhost/library_test'
  },

  development: {
    client: 'pg',
    connection: 'postgres://localhost/library'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
```

This file locally references a database named `library` and `library_test` so you'll need to create that:

```sh
createdb library
createdb library_test
```

---

### Migrations

Migrations are stored as files in the migrations directory, one for each migration. The name of the file is of the form CURRENTDATETIME_create_books.js, that is to say a UTC timestamp identifying the migration, followed by an underscore, followed by the name of the migration. Knex uses this timestamp to ensure each migration is unique and helps knex keep track of what migrations have already been run.

Of course, calculating timestamps is no fun, so Knex provides a generator to handle making it for you:

__The migration cli is bundled with the knex global install.__

---

### Knex migration tool

Create a new migration with the name create_books

```sh
knex migrate:make create_books
```

Update the new migration file `migrations/CURRENTDATETIME_create_books.js` accordingly:

```js
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table){
    table.increments();
    table.string('author');
    table.string('title');
    table.integer('rating');
    table.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
```

---

### Run the latest migrations using the development connection string

```sh
knex migrate:latest --env development
```

#### Confirm successful migration and proper schema

```sh
psql library -c "select * from books;"
```

You should see:

```
 id | author | title | rating | description
----+--------+-------+--------+-------------
(0 rows)
```

#### Where does knex store its log of what migrations have run?

If you are in your `library` database and run the describe table (`\dt`) command, you should see `knex_migrations`.

Go ahead and `select * from knex_migrations`. What do you see? What does this tell you about how Knex works?

---

### Establishing a Connection

__Initializing knex only once__
* Initializing the library should normally only ever happen once in your application
* This creates a connection pool for the current database
* You should use the instance returned from the initialize call throughout your library.

---

* Create a folder called `db`

* Inside the db folder create a new file `knex.js` with the following contents:

```js
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile.js')[environment]
module.exports = require('knex')(config)
```

* This initializes knex with the connection information obtained from the configuration in `knexfile.js` for the current environment

__NOTE:__ What npm module do you need to install to be able to use environment variables?

---

### Use the connection in your routes file

* In some `routes` file, require the `knex.js` file you created
* Write an endpoint that finds all books and renders the result as JSON

```js
const express = require('express')
const router = express.Router()
const db = require('../db/knex')

router.get('/', async (req, res, next) => {
  const books = await db('books')
  res.json(books)
});

module.exports = router
```

Run your app locally, and verify that it works with:

```
curl -i localhost:3000
```

__Using knex and migrations, get `Readers` wired up and confirm that your app is running as it should _locally__

---

### Get it working on Heroku

**Step 1**

Add the following scripts to `package.json` so you can run migrations:

```json
"scripts": {
  "start": "node ./bin/www",
  "migrate": "knex migrate:latest"
},
"engines": {
  "node": "7.7.1"
},
```

The `engines` property allows you to specify a modern version of node so you can use async / await.

**Step 2**

Create an app in heroku if you don't already have one:

```sh
heroku create
```

Then add postgres:

```sh
heroku addons:create heroku-postgresql
```

**Step 3**

Push your app to Heroku with `add`, `commit` and `push`.

**Migrate Your Production Database**

From the command line, run the following command:

```sh
heroku run npm run migrate
```

You should see:

```
Running npm run migrate on ⬢ evening-escarpment-76315... up, run.3480 (Free)

> knex-with-yarn@0.0.0 migrate /app
> knex migrate:latest

Using environment: production
Batch 1 run: 1 migrations
/app/migrations/20170424214414_create_books.js
```

To see that it worked:

```
heroku open
```

To get an interactive prompt you can run:

```
heroku pg:psql
```

Or to run a SQL command you can run:

```
heroku pg:psql -c "select * from books;"
```

### Helpful Notes

__Using the `dotenv` node module to config environment variables__

You'll need some help getting your app to talk to your environment variables, both locally as well as deployed.

Google `npm dotenv` and read the docs to help you get up and running with a `.env` file in your Node.js app.

Also, remember the __Entry Ticket__ list above? Visit the Learning Experiences listed there to review previous topics used here.


### Resources

Knex is not the only way to connect Node and Postres. Take a minute to explore some of the other options available to developers:

- Objection.JS - http://vincit.github.io/objection.js/ <-- absolutely _awesome_ ORM for Node
- Massive-JS - https://github.com/robconery/massive-js
- Basic Driver - https://github.com/brianc/node-postgres
- Basic Migrator - http://umigrate.readthedocs.org/projects/db-migrate/en/v0.10.x/
- Sequelize ORM - http://docs.sequelizejs.com/en/latest/
