# Testing Server-Side HTTP Requests

## Objectives

By the end of this lesson you should be able to:

- Write tests using `nock`

## Rationale

When you write tests for code that makes HTTP requests, your code will make _real_ HTTP requests by default.  This is bad for a few reasons:

- They make tests slow, because they incur network latency etc...
- They make tests brittle, because your tests can only pass if the API is:
  - up
  - not over the rate limit
  - returning the _exact_ data you expect
- It's hard to test edge cases
- You may not even have a test account you can send junk data to

So instead of testing with _real_ APIs you want to create a mock internet and test against that instead.

## How this lesson works

1. Understand the problem / what you are trying to solve
1. Read this lesson + [the official docs](https://github.com/node-nock/nock#how-does-it-work)
1. Attempt the exercises
  1. If anything is still not clear, check the detailed walkthrough

## Getting Setup

In order to get the most out of these docs, you'll want to start with a basic library with tests.  If you don't have a playground handy, you can quickly set one up by following [this walkthrough](../Walkthroughs/library-with-tests.md).

In order to have high confidence that you've fully understood the docs, you want a local playground app where you:

- Can see a real request
- Can see the tests passing with fake data

So in order to make this happen, add a `bin/run.js` file to your library app that looks like this:

```js
const myLib = require('../lib')

// you can call your code here...
console.log(myLib("world"))
```

Then you can run this file like any other node file:

```
node bin/run.js
```

## Getting it to work for real

As you learn new testing libraries, it's nice to start with working code.  That way you know if your tests are OK 😉

So in this case, make a simple request in `lib/index.js` (or whatever module you want) like this:

```js
const http = require('https')

module.exports = () => {
  const options = {
    hostname: 'www.reddit.com',
    path: '/r/programming.json',
  }

  return new Promise((resolve, reject) => {
    http.request(options, (res) => {
      res.setEncoding('utf8')
      const data = []
      res.on('data', chunk => data.push(chunk))
      res.on('end', () => resolve(JSON.parse(data.join(''))))
    }).end()
  })
}
```

Now in `bin/run.js` you could write this:

```js
const myRequest = require('../lib')

myRequest().then(console.log)
```

And when you run `node bin/run.js` you should see something like:

```
{ kind: 'Listing',
  data:
   { modhash: '',
     children:
      [ [Object],
        [Object],
        [Object],
        ...
        [Object],
        [Object] ],
     after: 't3_64y6nm',
     before: null } }
```

Great!  Now you are ready to write tests with `nock`

## Install `nock`

Before even adding `nock`, checkout what happens when you _don't_ have it:

```js
const expect = require('chai').expect
const myLib = require('../lib')
const nock = require('nock')

describe("myLib", () => {

  it("returns the correct response", async () => {
    const response = await myLib()
    expect(response).to.deep.equal({foo: "bar"})
  })

})
```

NOTE the use of `async...await` - this makes your tests much nicer 👍

When you run that, and look at the failure, you'll see that it shows the _entire_ response from Reddit.

Now you are ready to get started with `nock`.

```
yarn add nock --dev
```

In your test file, be sure to `require` it:

```js
const nock = require('nock')
```

Now you are ready to start reading the docs like a _boss_ 😉

## Play!

On real applications you'll be testing

- `GET` requests and `POST` requests (with request bodies)
- Query params
- Cookies
- Headers
- Multiple subsequent requests
- `http` and `https` requests

Read through the `nock` docs and find things that seem interesting and play around with them.

If you want to test requests with request bodies, like `POST` requests, then find a local REST server that you've built and you can watch and debug the requests coming in.
