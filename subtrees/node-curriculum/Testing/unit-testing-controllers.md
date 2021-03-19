# Unit Testing Controllers

## Objectives

By the end of this lesson you should be able to

- Structure your code in such a way that you can unit test controllers
- Inject dependencies into your

## What's the problem you're trying to solve?

Look at this API test:

```js
const chai = require('chai')
chai.use(require('chai-http'))
const app = require('../../app')
const expect = require('chai').expect
const db = require('../../db/knex')

describe("POST /api/books", () => {

  beforeEach(async () => {
    await db('books').del()
  })

  it("renders the correct response", async () => {
    const book1 = await db('books').insert({author: 'Eliza', title: 'Burn'}).returning('*')
    const book2 = await db('books').insert({author: 'Aaron', title: 'Dear Theodosia'}).returning('*')

    const response = await chai.request(app).get('/api/books')

    expect(response.body).to.deep.equal([
      {id: book1[0].id, author: 'Eliza', title: 'Burn', description: null, rating: null},
      {id: book2[0].id, author: 'Aaron', title: 'Dear Theodosia', description: null, rating: null},
    ])
  })

})
```

There's a _lot_ of IO going on there.  This tests:

- Connects to your database, deletes records, inserts records, then the controller selects records
- `chai-http` spins up your _entire_ app and listens on a random port
- The tests makes full HTTP requests to that app

There's a _ton_ that you are testing there, so you get high confidence, but they are slow and it's relatively hard to test things like edge cases.

What you really want are fast, light controller unit tests.

## Unit testing controllers

Normally an Express controller looks like this:

```js
const express = require('express')
const router = express.Router()
const db = require('../../db/knex')

router.get('/books', async (req, res, next) => {
  // do work here
})

module.exports = router
```

So to test this module you need to require express and the router.  But what you _really_ want to test is just that function passed to `get`.

You could mock `require` and there are other ugly solutions, _or_ you could just restructure your code a bit 👍

## Overview

To do this you'll want to

- create one folder per Bounded Context
- write your controller as a simple object or class
- have a routes file that configures it
- probably export these routes in some index file

So your file structure might look like this:

```
.
├── app
│   └── books
│       ├── books-controller.js
│       ├── index.js
│       └── routes.js
├── app.js
├── bin
│   └── www
├── coverage
├── db
│   └── knex.js
├── knexfile.js
├── migrations
│   ├── 20170424214414_create_books.js
│   └── 20170424214415_create_authors.js
├── package.json
├── test
│   └── books
│       ├── books-api.test.js
│       └── books-controllers.test.js
└── yarn.lock
```

### The controller

The controller can be _very_ simple, like so:

```js
// app/books/books-controller.js
class BooksController {

  constructor(db) {
    this.db = db
    this.getBooks = this.getBooks.bind(this)
    this.getBook = this.getBook.bind(this)
  }

  async getBooks(req, res, next) {
    try {
      const records = await this.db('books')
      res.json(records)
    } catch (e) {
      next(e)
    }
  }

  async getBook(req, res, next) {
    try {
      const record = await this.db('books').where({id: req.params.id}).first()
      res.json(record)
    } catch (e) {
      next(e)
    }
  }

}

module.exports = BooksController
```

Note the following:

- All functions are async functions
- You need to bind them in the constructor
- You can use normal `await` / `try` / `catch` in here if you want (or you could get fancy and factor that boilerplate out)

As you can see below, you can unit test this class just like any other plain JavaScript object.

### The routes file

```js
// app/books/routes.js
const express = require('express')
const router = express.Router()
const db = require('../../db/knex')
const BooksController = require('./books-controller')
const controller = new BooksController(db)

router.get('/books', controller.getBooks)
router.get('/books/{id}', controller.getBook)

module.exports = router
```

This file:

- Requires all of the production dependencies
- Instantiates a controller (once at boot time)
- Sets up and exports the routes

The entire purpose of this file is to configure production dependencies, so this would never take part in a unit test.

### The index file

The index module is the root of the bounded context.  It can export all of the routes, models, service classes etc...

In this trivial example, just export the routes.

```js
// app/books/index.js
exports.routes = require('./routes')
```

Then in `app.js` you can `use` them:

```js
//./app.js

app.use('/api', require('./app/books').routes)
```

### The tests!!

OK - now for the moment you've been waiting for - the unit tests.

Now - before you look at this, realize that you can use Sinon or other mocking/stubbing libraries to be more elegant.  But this example shows how easy it is to create unit tests for controllers with no dependencies:

```js
const expect = require('chai').expect
const BooksController = require('../../app/books/books-controller')

describe("BooksController", () => {

  it("returns all books", async () => {
    // this is faking out some result you'd get from a database
    const mockResult = [{id: 1, name: "foo"}]

    // this is a test double for knex
    // knex is a function that returns a promise that resolves to a result set, so fake that out here
    const mockDb = () => Promise.resolve(mockResult)

    // this captures `res.json(records)` and stores it in a variable the test can later read
    let result = null
    const mockRes = { json(args) { result = args } }

    // since the controller method is async, you must await it
    await new BooksController(mockDb).getBooks({}, mockRes, () => {})

    // run normal expectations on what was called on the fake response
    expect(result).to.eq(mockResult)
  })

})
```

This test is arguably more complex, but runs _super_ fast and you can test things in isolation.

### But... how would you test the `getBook` method?

The `getBook` method is more complex because you have multiple chained calls like so:

```js
  async getBook(req, res, next) {
    try {
      const record = await this.db('books').where({id: req.params.id}).first()
      res.json(record)
    } catch (e) {
      next(e)
    }
  }
```

You have a few options:

- Use a mocking/stubbing library that can help you
- Write the chained stubbed calls yourself
- Use the real database for the test
- Move the complex calls out to a service class and inject it

Lots of options.  But that's the basic idea of how you unit test a controller in Express.
