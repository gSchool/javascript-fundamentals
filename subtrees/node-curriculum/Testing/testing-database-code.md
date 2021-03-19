# Testing Database Code

In this lesson you'll learn how to test Node modules that make database requests.

## Objectives

By the end of this lesson you should be able to:

- Migrate the test database
- Clean data in a before block
- Insert test data before running expectations

## Rationale

While database tests are slow, they offer high confidence because they go all the way through the stack.

## Pre-reqs

This assumes that you've read through:

- [Setting up a Node library with tests](../Walkthroughs/library-with-tests.md)
- [Knex: Step-by-Step](../Knex/Step-by-Step.md)

## Migrating the test database

In order to run tests against a database, you need a separate database and that database needs to be up-to-date.  To ensure that, follow these steps:

1. Make sure that you have a `test` setup in `knexfile.js`

  ```js
  module.exports = {
    test: {
      client: 'pg',
      connection: 'postgres://localhost/myapp_test'
    },
    // development, production etc...
  }
  ```
1. Make sure you have a separate test database:

  ```sh
  createdb myapp_test
  ```

1. Run migrations using the test env:

  ```sh
  knex migrate:latest --env test
  ```

## Write your first test

Your test might look something like this:

```js
const expect = require('chai').expect
const db = require('../db/knex')
const model = require('../app/model')

describe("My model", () => {

  beforeEach(async () => {
    await db('books').del()
  })

  it("makes a query", async () => {
    const book1 = await db('books').insert({author: 'Eliza', title: 'Burn'}).returning('*')
    const book2 = await db('books').insert({author: 'Aaron', title: 'Dear Theodosia'}).returning('*')

    const result = await model.selectAll()

    expect(result).to.deep.equal([
      {id: book1[0].id, author: 'Eliza', title: 'Burn', description: null, rating: null},
      {id: book2[0].id, author: 'Aaron', title: 'Dear Theodosia', description: null, rating: null},
    ])
  })

})
```

Here are the various parts explained:

### Make a database connection

```js
const db = require('../db/knex')
```

When you run tests, this will connect to your test database.  But how does it know?

Recall that `db/knex.js` looks like this:

```js
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile.js')[environment]
module.exports = require('knex')(config)
```

Notice how it uses `process.env.NODE_ENV`.

Also recall that your package.json file should look like this:

```json
"scripts": {
  "test": "NODE_ENV=test mocha test --recursive",
  "start": "node ./bin/www",
  "migrate": "knex migrate:latest"
},
```

Notice how the test script sets the `NODE_ENV` environment variable.

And you defined your `test` database connection string in `./knexfile.js`

### Require your production code

You pull in your production code modules to your test just like you would any other module:

```js
const model = require('../app/model')
```

### Clear the database before each test

Your tests should always have a clear database, so you should delete / truncate any data that you have before the test runs.  As you get more sophisticated, this will become more complex, but for now you can keep it simple like so:

```js
  beforeEach(async () => {
    await db('books').del()
  })
```

It's a simple async function that calls `.del()` (which returns a promise) and `await`s until it's done before running your test.

### Write the test

```js
  it("makes a query", async () => {
    const book1 = await db('books').insert({author: 'Eliza', title: 'Burn'}).returning('*')
    const book2 = await db('books').insert({author: 'Aaron', title: 'Dear Theodosia'}).returning('*')

    const result = await model.selectAll()

    expect(result).to.deep.equal([
      {id: book1[0].id, author: 'Eliza', title: 'Burn', description: null, rating: null},
      {id: book2[0].id, author: 'Aaron', title: 'Dear Theodosia', description: null, rating: null},
    ])
  })
```

When you insert with `knex` you need to specify what it returns, and what it returns is always a result set.  So here `book1` is an array with 1 item.

Question:  Why can't you write `await db('books').insert({author: 'Eliza', title: 'Burn'}).returning('*')[0]`??

The test follows the common pattern:

1. Setup
1. Execution
1. Expectation

In this hypothetical example your production code might look like this:

```js
const db = require('../db/knex')

exports.selectAll = () => db('books')
```

## A note on CI

In CI, be sure to run migrations before running tests.
