# Request Tests (chai-http)

In this lesson you'll learn how to test Node Applications with chai-http.

## Objectives

By the end of this lesson you should be able to:

- Install and configure `chai-http`
- Test get requests, including query params
- Test post requests, including post bodies
- Set request headers
- Write expectations on the response

## Rationale

Request-level tests are the slowest to run, but they give you the highest confidence.  Using lower-level APIs, such as Node's `request` API can cause you to write a lot of boilerplate code, and libraries like `chai-http` or `supertest` can help make these tests much nicer to write.

NOTE: these are full integration tests.  They will, by default, exercise the entire stack - making database calls and external network calls.  Concepts related to managing databases, and mocking external service calls in tests will be covered in separate lessons.

## Setup your test

https://github.com/chaijs/chai-http

To start writing request tests with `chai-http` follow these steps:

**Run `yarn add chai-http --dev`**

- NOTE: if you haven't already done so, you should also run `yarn add mocha chai --dev`
- You should see three dependencies in the `devDependencies` section of `package.json`

**Add the following boilerplate to your test**

```js
const chai = require('chai')
chai.use(require('chai-http'))
const app = require('../app')         // <-- this is whatever the path is to your `app.js` file
const expect = require('chai').expect // <-- optional, but better 😉

describe("POST /some/path", () => {
})
```

**Make the request**

```js
const chai = require('chai')
chai.use(require('chai-http'))
const app = require('../app')
const expect = require('chai').expect

describe("POST /some/path", () => {

  it("renders the correct response", async () => {  // <-- NOTE the use of the `async` function here
    const response = await chai.request(app)        // <-- NOTE the use of `await` here
      .post('/some/path')
      .set('Accept', 'application/vnd.custom+json')
      .send(payload)

    // expectations will go here
  })

})
```

With `chai-http` you create a request to your app and it returns a promise, which resolves to a `response`.

So you can grab the response with `const response = await chai.request(app)...`

Then you can start building your request using the verb you choose, like so:

- `chai.request(app).get('/some/path')`
- `chai.request(app).post('/some/path')`
- `chai.request(app).patch('/some/path')`
- `chai.request(app).put('/some/path')`
- `chai.request(app).delete('/some/path')`

**Write Expectations**

```js
const chai = require('chai')
chai.use(require('chai-http'))
const app = require('../app')
const expect = require('chai').expect

describe("POST /some/path", () => {

  it("renders the correct response", async () => {
    const response = await chai.request(app)
      .post('/some/path')
      .set('Accept', 'application/vnd.custom+json')
      .send(payload)

    expect(response).to.have.status(200)
    expect(response).to.have.header('content-type', 'application/vnd.custom+json; charset=utf-8');
    expect(response.body).to.deep.equal({some: "object"})
  })

})
```

A few notes here:

- You almost _always_ want to use `.to.deep.equal()` over `.to.equal()`

## Sending Data

Read the docs at https://github.com/chaijs/chai-http in order to answer the following questions.

### !challenge
* type: multiple-choice
* id: e6578c53-1d43-4092-9266-4ed7a5ca972a
* title: chai-http JSON

##### !question
Imagine you have the following `chai-http` test:

```js
const response = await chai.request(app)
  .post('/some/path')
  .send({hello: "World"})
```

How would the "hello world" part be serialized?
##### !end-question

##### !options
* As a header
* As a cookie
* As a query parameter
* As a path parameter
* As url-encoded data in the request body
* As JSON-formatted data in the request body
##### !end-options

##### !answer
As JSON-formatted data in the request body
##### !end-answer
### !end-challenge



### !challenge
* type: multiple-choice
* id: a6244544-c5f1-4aa7-92ad-52004b2928c1
* title: chai-http querystring

##### !question
Imagine you have the following `chai-http` test:

```js
const response = await chai.request(app)
  .get('/some/path')
  .query({hello: "World"})
```

How would the "hello world" part be serialized?
##### !end-question

##### !options
* As a header
* As a cookie
* As a query parameter
* As a path parameter
* As url-encoded data in the request body
* As JSON-formatted data in the request body
##### !end-options

##### !answer
As a query parameter
##### !end-answer
### !end-challenge



### !challenge
* type: multiple-choice
* id: 071cdad2-bb26-4670-b7b6-aceef72d9329
* title: chai-http header

##### !question
Imagine you have the following `chai-http` test:

```js
const response = await chai.request(app)
  .get('/some/path')
  .set('hello', 'world')
```

How would the "hello world" part be serialized?
##### !end-question

##### !options
* As a header
* As a cookie
* As a query parameter
* As a path parameter
* As url-encoded data in the request body
* As JSON-formatted data in the request body
##### !end-options

##### !answer
As a header
##### !end-answer
### !end-challenge



### !challenge
* type: multiple-choice
* id: 54fd54aa-1301-48ed-a651-21a38bab1363
* title: chai-http form

##### !question
Imagine you have the following `chai-http` test:

```js
const response = await chai.request(app)
  .patch('/some/path')
  .field('hello', 'world')
```

How would the "hello world" part be serialized?
##### !end-question

##### !options
* As a header
* As a cookie
* As a query parameter
* As a path parameter
* As url-encoded data in the request body
* As JSON-formatted data in the request body
##### !end-options

##### !answer
As url-encoded data in the request body
##### !end-answer
### !end-challenge

## Under the hood

The following code can be a little difficult to understand the first time through, so here's a quick explanation of what's happening as far as asynchronous code execution goes:

```js
it("renders the correct response", async () => {
  const response = await chai.request(app)
    .post('/some/path')
    .set('Accept', 'application/vnd.custom+json')
    .send(payload)

  expect(response).to.have.status(200)
})
```

The `chai-http` requests are run asynchronously, so Mocha needs a way to know that the test is done running.  So Mocha has a rule that:

> When the function passed to `it` returns a promise, Mocha will wait until the promise resolves and _then_ report the results

And it turns out that async functions (the `async () => {}` part) return promises, so yay! 👍

Node executes the anonymous async function, and the first statement includes a call to `await chai.request()`, which returns a promise.  So Node will let that promise resolve, then assign the resolved value to `response`.

So the promise chain looks like this:

```
make a request, then
                    |----- run the expectations, then
                                                      |----- return to Mocha to report the results
```
