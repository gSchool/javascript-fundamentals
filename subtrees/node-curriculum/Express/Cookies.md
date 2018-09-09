# Baking Cookies Part I: Intro

## Objectives

By the end of this lesson you will be able to:

- Explain the purpose and function of a cookie.
- Create and send cookies in a response using Express.
- Modify and clear cookies in a response using Express.
- Read cookies from a request using Express.

***

## HTTP Cookies

![](http://static1.squarespace.com/static/54c95d06e4b04d8d26f97dde/t/570d4048e707ebd28d303f32/1460486224633/)

### What is a Cookie?

Cookies are pieces of data sent from a server to a client.

**You Do:**

1. What kind of data do you think is stored in a cookie?

Cookies are sent in the `Response Header` called `Set-Cookie`.

Example HTTP Response Header:

```
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: theme=light
Set-Cookie: sessionToken=abc123; Expires=Wed, 09 Jun 2021 10:18:14 GMT
```

**You Do:**

1. Open up chrome.
1. Logout of [github.com](https://github.com)
1. Open up the `network` developer tools.
1. Select the `other` filter.
1. Login to [github.com](https://github.com).
1. Examine the `Response Headers`
1. Is there a `Set-Cookie` header?

The client typically reads the `Set-Cookie` `Response Header` and then stores the cookie.

> Note: The client isn't required to store the cookie.

**You Do:**

1. Open up chrome.
1. Open up the `resources` developer tools.
1. Navigate to [github.com](https://github.com).
1. Click on the `Cookies` dropdown.
1. Click on the `github.com` cookie.
1. Write down every column the cookies have.
1. `Expires / Max-Age` is generally used to store dates, what other values do you see there?


The client sends the cookie back to the server with each request in the `Request Header` `cookie`.

Wikipedia Summary:

- Cookies are arbitrary pieces of data, usually chosen and first sent by the web server, and stored on the client computer by the web browser.
- Cookies are set using the Set-Cookie HTTP header, sent in an HTTP response from the web server. This header instructs the web browser to store the cookie and send it back in future requests to the server
- Clients request contains a `Cookie` HTTP header, which contains the two cookies that the server instructed the browser to set
- The server would answer by sending the requested page, possibly including more Set-Cookie headers in the response in order to add new cookies, modify existing cookies, or delete cookies.


### What are Cookies used For?

Session Management

  - User details are sent in the cookie so the server doesn't have to authenticate or authorize every request.

> Note: Not the same as a Session-Cookie


Personalization

  - Settings are sent in the cookie to persist personalization settings.

**You Do:**

1. Can you think of any examples of where a personalization cookie might be useful?

Example:

  - An ebay user selects they want to have 50 results.
  - This data is stored in a cookie.
  - It is sent with every search request, and ebay only returns 50 results.


Tracking

  - Information about a user can be stored in a cookie.

**You Do:**

1. What kind of user information would be useful to store?

Example:

  - How many times a user has visited a site.
  - How much time has passed between different webpages
    - used to analyze how long a user was engaged on a page.
    - which pages did the user spend the most time on?
  - What items the person has shopped for on Amazon recently.
    - used to send advertisements to the user.


### Cookie Types and Attributes

Earlier you were asked to write down what columns the `github.com` cookie had. These attributes all affect the behavior of the cookie.

**name**

  - This attribute is just a useful identifier for the cookie.

**value**

  - This is the data stored in the cookie.

**domain / path**

  - This is the domain the cookie was sent from.

**expires / max-age**

  - This sets a time in which the cookie is invalid. These are known as `Persistent Cookies`.
  - Cookies that don't have this attribute are known as `Session Cookies`, and expire when the user closes the window (just like session-storage);


**secure / http-only**

  - Secure cookies can only be transmitted over `https`
  - HTTP Only cookies can only be transmitted via `http` or `https`

***

## Cookies in Express


### Reading and Parsing Cookies

[Cookie Parser](https://github.com/expressjs/cookie-parser) is a piece of Express middleware that parses cookies from the client into `req.cookie`.

Example:

```javascript
var cookieParser = require('cookie-parser')

app.use(cookieParser())

app.get('/', function(req, res) {
  console.log('Cookies: ', req.cookies)
})
```

### Setting Cookies

Express comes with [res.cookie](http://expressjs.com/en/api.html#res.cookie). This provides a way to set the `Set-Cookie` request header and send a cookie to the client:

```javascript
app.get('/', function(req, res) {
  var opts = {
    maxAge: 900000
    httpOnly: true
  };
  res.cookie('some_name', 'some_value', opts);
  res.end();
})
```

The options object be used to set any of the cookie attributes covered earlier.

When used with `body-parser` middleware the cookies value can be an object:

```javascript
res.cookie('some_json', { foo: 'bar', bazz: 'buzz'});
```

### Clearing Cookies

Express ships with [res.clearCookie](http://expressjs.com/en/api.html#res.clearCookie). This provides a convenient way to instruct a client to delete a cookie:

```javascript
res.clearCookie('name', { path: '/somepath' });
```

***

## Exercise

Build out an Express application from scratch for the following user stories:

1. When a user visits `/session-cookie`:
  - Send them a cookie which keeps track of how many times they have visited the page.
  - Print how many times they have visited the page.
  - Do not provide an expiration or max age.
1. When a user visits `/persistent-cookie`:
  - Send them a cookie which keeps track of how many times they have visited the page.
  - Print how many times they have visited the page.
  - Provide an expiration or max age.
1. When a user visits `/clear-all` clear all the cookies you have set.

Follow up questions:

- When you visit `/session-cookie` and then close your browser does the cookie still exist? What type of cookie is this?
- When you visit `/persistent-cookie` and then close your browser does the cookie still exist? What type of cookie is this?

***

## Resources

- [Github: Cookie Parser](https://github.com/expressjs/cookie-parser)
- [Express: res.cookie](http://expressjs.com/en/api.html#res.cookie)
- [Express: res.clearCookie](http://expressjs.com/en/api.html#res.clearCookie)
- [Wikipedia: HTTP Cookie](https://en.wikipedia.org/wiki/HTTP_cookie)

<iframe src="https://player.vimeo.com/video/141304889?byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
