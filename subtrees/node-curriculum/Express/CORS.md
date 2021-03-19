# Connecting it All

## Learning Objectives

By the end of this lesson, you will be able to:

* Request information from a local server
* Solve CORS issues on a server-side application

## Connecting the front-end and back-end

Asynchronous JavaScript and XML (Ajax) is a technique that allows web applications to send and receive data in the background without interfering with the display and behavior of the existing page. In other words, Ajax allows web applications to dynamically load content from a server without doing a full page refresh. The XML part is less applicable today because most web APIs use JSON for the data exchange format.

You'll be learning to make AJAX Requests with the library [axios](https://github.com/axios/axios). In many examples on the web you will see jQuery being used instead of Axios. Ultimately, the syntax difference is mild. For example, here's a web request in jQuery and its corollary using Axios.

**jQuery**

```js
$.get('http://localhost:3000/cats')
  .then(function (result) {
    console.log(result)
  })
```

**Axios**

```js
axios.get('http://localhost:3000/cats')
  .then(function (result) {
    console.log(result)
  })
```

In both cases, each request returns a Promise. Axios has the benefit of automatically parsing JSON responses and is _only_ for making HTTP requests. jQuery comes with an additional, large DOM Manipulation library.

Making these kind of requests can be insecure, which is why web browsers have agreed to follow the Web Application Security Model. You can get around this by enabling CORS on your server.

* [CodeHeaven: How to use Axios as Your HTTP Client](http://codeheaven.io/how-to-use-axios-as-your-http-client/#first-steps)
* [Axios CDN](https://cdnjs.com/libraries/axios)

# CORS and Your API

In this article you're going to learn how to make two applications – your client application running HTML, CSS, & JS and your server side API – communicate with each other.

## Objectives

* Describe same origin policy and why it is enforced.
* Describe CORS and how it helps us work around the same origin policy.
* Configure an express application to accept requests from a client application.

## Key Terms
* CORS
* JSONP

## Why?
By now I'm sure that you have run into the dreaded message in your browser. Especially if you have an API deployed to a server like Heroku and a front end deployed to Firebase.

> ... is not allowed by Access-Control-Allow-Origin.

And your typical response may be to install a CORS plugin for Chrome that will then allow you to use your API.

However you may be left feeling that asking your users to install a plugin on Chrome just to use your web app is not the best way to go about things.

You would be correct.

But first lets go into why Chrome blocks your cross origin request in the first place.

## The CORS Web security model

All of the major web browsers have agreed to follow the Web Application Security Model outlined by the [w3c](http://www.w3.org) for [Same Origin Policy](http://www.w3.org/Security/wiki/Same_Origin_Policy).

What this means is that the browsers enforce the rules that the servers request. And if the browser doesn't set any rules, then the default behavior is to not allow scripts across different domains.

### Why did they do this?

It is easy to wonder why Chrome or any other browser is so strict in enforcing this Same Origin Policy. But the reason is that your code is not necessarily the only code that will run on the browser.

Remember that on your web app you will be using other libraries from github, or even advertisements. These libraries may have AJAX calls out to their own servers. Nefarious libraries may try to call your APIs and mess with your API server.

What you want to be able to do is tell the browser what domains are allowed to supply scripts that make these calls to your API, and deny all of the other ones.

### What are the options?

**JSON-P**

You may have heard of JSON-P. What it does is wrap your JSON requested from the server into a callback function and then executes it with exec.

This is a glorious hack that somehow works, but only for GET requests. This will not save you from POSTs, PUTs, DELETEs, or any other HTTP verb.

JSON-P was introduced as one way to solve this problem, but it was an early solution and we have many more advanced options now. There are still APIs that use this (namely, Google Maps!) but it's being phased out by the industry.

**CORS**

CORS stands for Cross Origin Resource Sharing. It is a standard for allowing browsers to request resources from apis on other domains. This is perfect for us, as this is exactly what we are looking for.

But how do we tell the browser that we want it to be allowed to access that api?

The answer is counterintuitive. The server will tell the browser who is allowed, and the browser then enforces those rules. This means that you, the programmer, must write some code in order to allow other origins.

For Node, that code comes in the form of middleware before the api routes.

```javascript
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
```

Lets go through this code one line at a time.

`res.header("Access-Control-Allow-Origin", "*");`

This is telling the browser that any other domain can access your api. You may want to change this from a '*' to the fully qualified domain name.

`res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");`

This is telling the browser what headers are allowed to be sent. If you want to add any additional headers, like a token header, you must add it here.

If you need to whitelist multiple domains, then you will need to make the middleware dynamic so that it will automatically choose what headers to send to the client.

## Exercise
## Server Setup

You should be getting more fluent with writing server side APIs in Express. Create a brand new API for a resource of your choice. Once that is complete, deploy to heroku and start setting up your client.

Note: For this exercise, you really only need a index route for any given resource, as your client will not perform full CRUD operations.

## Client setup

Now we'll set up a completely separate application in a separate directory with a completely separate github repo. It will include a couple of files:

```
- index.html
- app.js
- axios.js
```

The app can use any XHR library of your choice, but I recommend using axios because it has great built in promise support.

Just cd into your client app and curl the axios library into your api-client directory. `curl https://raw.githubusercontent.com/mzabriskie/axios/master/dist/axios.js > axios.js`

Next, you'll need to add your axios.js and app.js script tags in `index.html` to use them.

Once your directory is setup and axios is loaded, you should be able to use it in app.js like so:

```
axios.get('http://localhost:8008/api/items') // your API domain
  .then(function (response) {
    console.log(response);
  });
```

## An Error

`XMLHttpRequest cannot load http://localhost:8080/api/swords. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8081' is therefore not allowed access.`

This doesn't work because the browser forces a strict Same Origin Policy. Your request is being made from one domain to another and the browser just won't have that.

To understand the need for the Same Origin Policy and consequently for CORS, take the time to review all of the following material. After you dig into and digest the following material, you should be able to answer the following questions in your own words:

* Read: https://en.wikipedia.org/wiki/Same-origin_policy
* Read the question and first answer: http://security.stackexchange.com/questions/8264/why-is-the-same-origin-policy-so-important

### !challenge

* type: paragraph
* title: same origin policy
* id: 400

##### !question
What is the same origin policy? Why is it enforced?
##### !end-question

##### !placeholder
Write your answer
##### !end-placeholder

##### !explanation
##### !end-explanation

### !end-challenge

### !challenge

* type: paragraph
* title: what is jsonp
* id: 401

##### !question
What is JSONP?
##### !end-question

##### !placeholder
Write your answer
##### !end-placeholder

##### !explanation
##### !end-explanation

### !end-challenge

* Watch: https://www.youtube.com/watch?v=rlnhiwN8AnU
* Read: https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
* Read: https://en.wikipedia.org/wiki/JSONP

### !challenge

* type: paragraph
* title: what is cors
* id: 402

##### !question
What is CORS? How is it useful?
##### !end-question

##### !placeholder
Write your answer
##### !end-placeholder

##### !explanation
##### !end-explanation

### !end-challenge

### !challenge

* type: paragraph
* title: why is cors better than jsonp
* id: 403

##### !question
Why is CORS preferred over JSONP? What advantages does it give us over JSONP?
##### !end-question

##### !placeholder
Write your answer
##### !end-placeholder

##### !explanation
##### !end-explanation

### !end-challenge

## Rationalize

Phwew! That's a lot to take in. It's a lot to learn! You may be asking yourself why all of this is 100% needed to build apps. After all, you've been building fullstack applications without this information for a while now. Well, it all comes down to the need to separate our client from the server. It all comes from the need to build Single Page Applications (SPAs).

To review some of the benefits and rationalizations for SPAs, take a few minutes to watch this segment (just 10 min or so) of this conference talk on the YouTubes: https://www.youtube.com/watch?v=OrIFaWJ9Glo&feature=youtu.be&t=915

## Configure CORS

Alright, so CORS is needed to let us separate our client and server code.

## Setup

The good news is, the [cors](https://www.npmjs.com/package/cors) node module makes setting up CORS extremely simple. Once installed, it's as simple as including the middleware in your application.

```
var cors = require('cors')
app.use(cors())
```

Make sure that any Express middleware being used (such as CORS, in this case) is configured before the routes are matched.

Once this is installed, axios on the client will be able to communicate with the API as needed. You'll know it's configured correctly when axios is able to get data from the API. If you jump back over to your project making the axios request, the error should be gone and the data should be logged to the console. Success!

## Reflect

Setting that up was actually pretty simple with Express. It's just two lines of code, so we can assume it's doing a lot for us under the hood. Given what you know about CORS, consider the following:

## Challenges

<!-- Question -->

### !challenge

* type: paragraph
* id: 96f41879-d846-46b9-be79-0025c52d497f
* title: CORS

##### !question

In your own words, describe why you have to take special steps to enable external websites to access your API.

##### !end-question

##### !placeholder

##### !end-placeholder

### !end-challenge

### !challenge

* type: short-answer
* title: what ACAO header
* id: 404

##### !question
What `Access-Control-Allow-Origin:` header value must our application be using, given that we didn't specify any domain names?
##### !end-question

##### !placeholder
Write your answer
##### !end-placeholder

##### !answer
*
##### !end-answer

##### !explanation
* means that the resource can be accessed by any domain in a cross-site manner.
##### !end-explanation

### !end-challenge

### !challenge

* type: paragraph
* title: how to configure CORS specifically
* id: 405

##### !question
Review the npm cors module documentation. How would you configure CORS to only work with the client applications that you've approved of?
##### !end-question

##### !placeholder
Write your answer
##### !end-placeholder

##### !explanation
##### !end-explanation

### !end-challenge
