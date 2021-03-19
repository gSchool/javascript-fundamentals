# Server-Side HTTP Requests

## Objectives

By the end of this lesson you should be able to:

- Contact external APIs with Node's `request` module
- Make both `http` and `https` requests
- Make both `GET` requests (no body) and `POST`/`PATCH` requests (with a body)

## Making HTTP Requests

In modern applications it's just as likely that you'll be contacting external APIs as it is that you'll contact your own database or message queue, so being fluent with HTTP requests is an essential skill.

## How this lesson works

1. Understand the problem / what you are trying to solve
1. Read this lesson + the official docs
1. Attempt the exercises
  1. If anything is still not clear, check the detailed walkthrough

## Why use Node's request? (over other libraries)

There are a _lot_ of server-side modules for Node that you can use in place of Node's builtin `request` module, and they are, for the most part, easier to use.  So why learn the builtin one?

Mostly because it gives you 100% control over how you want to manage the requests and responses.  It has a common pattern in Node that we call the "async accumulator pattern", and it also offers a great way to optionally learn how to turn a stream-based API into promises if you want.

## Getting Started

Online docs are there to be _interacted_ with.  And since the Node docs don't require any kind of framework, you can easily interact with these docs by:

- Creating a quick junk/scratch file named `junk.request.js`
- Copying the documentation examples into that file
- Tweaking the data (often times there's dummy data in docs)
- Running the script with `node junk.request.js`
- Playing around / adding removing things, logging / debugging things

In this case you'll be working with these docs:

- https://nodejs.org/api/http.html#http_http_request_options_callback
- https://nodejs.org/api/https.html#https_https_request_options_callback

And you should try to get the following requests to work:

1. Make a `GET` request to http://start.spring.io/dependencies and print the response body
1. Make a `GET` request to https://api.github.com/zen and print the response body (<-- NOTE this is an `https` request)
1. Make a `GET` request to https://www.reddit.com/r/programming.json (<-- NOTE this is an `https` request)

When you are interacting with documentation, it can be hard to know sometimes if your code is broken or some _other_ thing is broken.  So first check that these requests work from curl:

```
curl -H "Content-Type: application/json" http://start.spring.io/dependencies
curl https://api.github.com/zen
curl -H "User-Agent: `whoami`" https://www.reddit.com/r/programming.json
```

## Async Accumulator Pattern

The basic shape of the `request` looks like this:

```js
const req = http.request(options, (res) => {
  res.setEncoding('utf8')

  res.on('data', chunk => {
    // this gets called multiple times
  })

  res.on('end', () => {
    // this gets called once at the end
  })
})
```

The function passed to `on('data')` event will get called multiple times, each with some effectively random string.

So you need to concatenate that into one string, before called `JSON.parse` on it.  You can do this with the async accumulator pattern, like so:

```js
const req = http.request(options, (res) => {
  res.setEncoding('utf8')

  // this is the accumulator
  const data = []

  res.on('data', chunk => {
    // every time `data` is called, push the chunk to the data array
    data.push(chunk)
  })

  res.on('end', () => {
    // on the `end` event, you have everything
    const result = JSON.parse(data.join())
    console.log(result)
  })
})
```

## Testing `POST` requests locally

If you are working with `request`s in Node, you've probably built REST APIs before.  So find a local API that you've already built that has a simple endpoint, and use the docs to figure out how to send a POST request to your _own_ server running locally.

As with above:

- Check that it works in `curl` (or with Postman) first
- Use the examples from the docs as a starting point
- Adjust as necessary until it works!

## Questions

- How would you make `https` requests?
- How would you grab the data as a single JSON string?
