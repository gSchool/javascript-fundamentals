# HTTP and Node.js

Please skim through this entire document first. Specific instructions for what to do (and in which order) appear further down.

# Objectives
By the end of this lesson, you should be able to...

- Explain what an HTTP server is
- Explain why an HTTP server is useful
- Explain what an HTTP request is
- Explain what an HTTP response is
- Create a Node.js HTTP server with the `http` module
- Identify the parts of a Uniform Resource Locator (URL)
- Describe the parts of a URL
- Identify the two parts of a route (method and path)
- Access the parts of a URL with the url module

### Key terms:

- HTTP
- Network
- URL - Uniform Resource Locator
- IP address
- Query string parameters

## Dynamic Web App Concepts

<iframe src="https://player.vimeo.com/video/136579022?byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## What's a Web Server?

Node.js is commonly used to build HTTP servers. An **HTTP server** is a program that runs in an infinite loop, accepting HTTP requests from a client and sending HTTP responses back to it. Inside those responses, HTTP servers often include data like HTML, CSS, JavaScript, and JSON among other formats.

> Before browsers, before JavaScript, and believe it or not, before HTML, the Internet was originally designed as a file server. When a user wanted a file, they would use a terminal to submit a request, which included the location of the file--IP address and name of desired file--on a remote computer.

> The Internet that we now use is built on this foundation. The methods, however, have evolved. Instead of a terminal being the primary client, most users now use a web browser, such as the ones on their laptops and mobile devices. The request for a resource, such as a file, is submitted as a URL in a web browser and forwarded to a web server. The URL `https://www.yahoo.com/index.html`, for instance, would search for a server with the host name of `www.yahoo.com` and a file named `/index.html` would be returned if found.

See this [Web sequence diagram going to google](http://www.websequencediagrams.com/?lz=dGl0bGUgQXV0aGVudGljYXRpb24gU2VxdWVuY2UKClVzZXIgLT4gQnJvd3NlcjogZ29vZ2xlLmNvbQoADQcgLT4gRE5TIFNlcnYAEw8ADQoANw1JUCBhZGRyZXNzADgMRwBVBQA-CUdFVCBIVFRQIFJlcXVlc3QgCgAUDQCBCA0yMDAgT0sAgQkILT5VAIEmBVJlbmRlciBIVE1MAIE2ElNlYXJjaCAicHVwcGllcyIAax8vP3MALAU9ACkHAGwhAIE0CHNwb25zZQCCIAwAgQ4PVFAgQm9keQ&s=napkin) for how it all works together.

## Why is an HTTP server useful?

In 1989, Tim Berners-Lee proposed a new project to his employer CERN. The goal of this project was to ease the exchange of information between scientists by using a hypertext system. In 1990, the project resulted in two programs—the world's first HTTP client and server.

Because exchanging information over HTTP is so effective, there are countless HTTP clients and servers in existence today. The most effective of these servers are able to handle [thousands of requests per second](https://www.techempower.com/benchmarks/), thus giving millions of people around the world the ability to access and exchange information every day. Without HTTP servers, the rapid and global exchange of information over the Internet would not exist.

> Previously, Node.js has been used as a mechanism for interacting with the filesystem with Node.js' `fs` module. Before beginning this lesson, make sure you can identify at least 2 reasons why `fs` is an important module in the Node.js ecosystem.

## Create an HTTP server with Node.js

Create a `helloServer.js` file on the Desktop.

```shell
mkdir -p ~/workspace/playground/node/http
cd ~/workspace/playground/node/http
touch helloServer.js
```

Open the `helloServer.js` file in your text editor.

```shell
atom .
```

And type in the following code.

```javascript
'use strict';

const http = require('http');
const port = process.env.PORT || 8000;

const server = http.createServer(function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world');
});

server.listen(port, function() {
  console.log('Listening on port', port);
});
```

Run the server with the `node` command.

```shell
node helloServer.js
```

Now, this server will _listen_ for **HTTP Requests** and then respond with an **HTTP Response**. We can test this several ways:

### Sending HTTP Requests with `httpie`

If you haven't installed it, you can install `httpie` with:

```
brew update
brew install httpie
```

In a new Terminal tab, send an HTTP request to the server.

```shell
http GET localhost:8000/
```

And you should see something like this.

![](https://i.imgur.com/UKpsNwY.png)

### Sending HTTP Requests with cURL

```
curl -v localhost:8000
```

### Sending HTTP Requests with Postman

- Open Postman ([Install it if you haven't already](https://www.getpostman.com/)) and enter `http://localhost:8000` as the URL
- Make sure the request type is "GET"
- Click Send

### Sending HTTP Requests with a Browser

The simplest and most familiar way to send an HTTP request is to use what you're used to creating them with, which is your browser.
Visiting [localhost:8000](http://localhost:8000/) in Google Chrome or a browser of your choice will send a request to the URL you put in the URL bar.

## What's an HTTP Request?

The client (or user agent) sends a plain-text message called an **HTTP request** to a server on behalf of the user. Aside from web browsers, other common user agents include web crawlers, native apps, and mobile apps.

An HTTP request is composed of the following parts.

1. A method (or verb)
1. A path
1. An HTTP version
1. Key-value headers
1. And an optional body

Here's an example of what an HTTP request looks like.

```text
GET / HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: localhost:8000
User-Agent: HTTPie/0.9.3
```

**QUESTION:** Looking at the above message, can you identify the parts of an HTTP request?

While an HTTP request can only contain one method, there are several different methods that a client can choose from. Each method instructs a server on how to process the request. Without the use of Ajax, web browsers are only capable of sending HTTP requests with the following methods.

| Method | Description                                                 |
|--------|-------------------------------------------------------------|
| `GET`  | Used retrieve a resource, like an HTML file, from a server. |
| `POST` | Used send information, like user input, to a server.        |

You'll learn about additional HTTP methods, like `PUT`, `PATCH`, and `DELETE`, when we encounter RESTful HTTP servers later in the course.

**QUESTION:** When does a web browser make `GET` requests? When does it make `POST` requests?


## What's an HTTP response?

When the server receives an HTTP request, its job is to process the request and sends a plain-text message, called an **HTTP response**, back to the client. In addition to Node.js, popular HTTP servers include Apache, Nginx, and Python's built-in `SimpleHTTPServer`.

An HTTP response is composed of the following parts.

1. An HTTP version
1. A status code
1. Key-value headers
1. And an optional body

Here's an example of what an HTTP response looks like.

```text
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 11
Content-Type: text/plain
Date: Mon, 13 Jun 2016 04:28:36 GMT

Hello world
```

**QUESTION:** Looking at the above message, can you identify the parts of an HTTP response?

While an HTTP response can only contain one status code, there are many different codes that a server can choose from. Each status code explains to the client how the server interpreted the request. Status codes are three-digit numbers that are grouped into the following categories.

| Status Code Group | Description                                             |
|-------------------|---------------------------------------------------------|
| `1XX`             | Request accepted, ready for the next one.               |
| `2XX`             | Request accepted, the server's work is complete.        |
| `3XX`             | Request accepted, but additional client work is needed. |
| `4XX`             | Request accepted, but there was an error on the client. |
| `5XX`             | Request accepted, but there was an error on the server. |

Here are a few websites that list the possible HTTP status codes and their meaning through cute photos of animals.

- [HTTP Status Cats](https://http.cat/)
- [HTTP Status Dogs](https://httpstatusdogs.com/)

And, of course, there's boring-old Wikipedia when you need the official, textual explanation.

- [Wikipedia - List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

**QUESTION:** The most common status codes are `200`, `302`, `304`, `404`, and `500`. Can you figure out why?


# Walkthrough : A Guest List

Next, create a `server.js` file.

```shell
touch server.js
```

And type in the following code to the `server.js` file.

```javascript
'use strict';

var http = require('http');
var port = process.env.PORT || 8000;

var server = http.createServer(function(req, res) {
  var guests = ['Mary', 'Don'];
  var guestsJSON = JSON.stringify(guests);

  res.setHeader('Content-Type', 'application/json');
  res.end(guestsJSON);
});

server.listen(port, function() {
  console.log('Listening on port', port);
});
```

Let's break down the server- how we set it up, and how it's configured:

3. We require the `http` module, which is included as part of Node's standard library.
4. We decide on a `port` to attach our server to. We're using `process.env.PORT`. `process.env` is an object that can read from all of the environment variables in our shell.
6. We're creating an instance of a `server`, using the `createServer` method of `http`. This makes a new instance of the class `Server`. We're passing in a function that will get called later.
14. We're telling our server to listen for any incoming **HTTP Requests** on the `port` we configured earlier. Anytime the server gets a request on that port, the function we defined on line 4 will run. Once the server attaches successfully to the port, it will run the callback function, letting you know the server has been set up properly. The server *can* fail to attach to the port if the port is already in use. Similar to how you can't dock two boats in the same port, you can't attach two servers to the same port!

Next, let's break down the **request handler**:

First, take a look at the callback function - it takes two arguments - `req` and `res`. These stand for `request` and `response`, respectively. You'll see them used throughout course materials, documentation, and stack overflow answers interchangeably. The callback's first `req` argument will contain the incoming HTTP request as an `http.IncomingMessage` object. The callback's second `res` argument will contain an empty outgoing HTTP response as an `http.ServerResponse` object. The goal of the callback is to correctly fill in the `res` object based on the information in `req` object.

7. We're just creating an ordinary array here, nothing special
8. We're just turning the array into a string. The only thing we can _really_ send via HTTP is a string, so we have to turn all of our data into strings before we send it.
10. We're configuring the information we need to send back to whoever sent us a request. Really, all we're doing is building up the string of text that you saw in the **"What is an HTTP Response?"** section. Using the `setHeader` method adds a key (the name of the header) and value to the response we'll be sending out.
11. The `end` method is our server's way of saying "ship it!" - it sends the response, and tells the client "there won't be more stuff coming after this".


See the Node.js API documentation to learn what properties and methods are available for each object type.

- [`http.IncomingMessage` object](https://nodejs.org/dist/latest-v6.x/docs/api/http.html#http_class_http_incomingmessage)
- [`http.ServerResponse` object](https://nodejs.org/dist/latest-v6.x/docs/api/http.html#http_class_http_serverresponse)

Now, save the `server.js` file and run it with the `node` command.

```shell
node server.js
```

And you should see something like this.

![](http://i.imgur.com/xoaBsw1.png)

In a separate Terminal tab, send the following HTTP request to the server.

```shell
http GET localhost:8000/
```

And you should see something like this.

![](https://i.imgur.com/CbkIni2.png)


Right now, your HTTP server handles every HTTP request the same way, regardless of the request's method or path. It would be much more useful if your HTTP server could send back different HTTP responses based on the information inside the HTTP requests.

Let's fix that by refactoring the `server.js` file with the following code.

```javascript
'use strict';

var http = require('http');
var port = process.env.PORT || 8000;

var server = http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/guests') {
    var guests = ['Mary', 'Don'];
    var guestsJSON = JSON.stringify(guests);

    res.setHeader('Content-Type', 'application/json');
    res.end(guestsJSON);
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

server.listen(port, function() {
  console.log('Listening on port', port);
});
```

Now, save the `server.js` file, terminate the existing server with `Ctrl + C`, and run it again with the `node` command.

```shell
node server.js
```

And you should see something like this.

![](http://i.imgur.com/xoaBsw1.png)

In a separate Terminal tab, send the following HTTP request to the server.

```shell
http GET localhost:8000/
```

And you should see something like this.

![](https://i.imgur.com/DZShb9I.png)

In a separate Terminal tab, send the following HTTP request to the server.

```shell
http GET localhost:8000/guests
```

And you should see something like this.

![](https://i.imgur.com/MM0aAYD.png)



Manually restarting a Node.js HTTP server gets old fast. Plus, it's easy to forget to do it every time you refactor your code. To speed up your development workflow, let's use a command-line utility, called [Nodemon](http://nodemon.io/), that'll run your server with Node.js and automatically restart it when the code changes.

To get started, use use NPM to install the `nodemon` package globally.

```shell
npm install -g nodemon
```

Terminate the existing server with `Ctrl + C`, but this time run it with the `nodemon` command.

```shell
nodemon server.js
```

And you should see something like this.

![](http://i.imgur.com/NWN2Jdg.png)

Send the following HTTP request to the server to verify everything works the same.

```shell
http GET localhost:8000/guests
```

Right now, your HTTP server sends a hardcoded guest list in the HTTP response. It would be much more useful if your HTTP server could send guest list that's read from the JSON-formatted `guests.json` file.

Let's fix that by refactoring the `server.js` file with the following code.

```javascript
'use strict';

var fs = require('fs');
var path = require('path');
var guestsPath = path.join(__dirname, 'guests.json');

var http = require('http');
var port = process.env.PORT || 8000;

var server = http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/guests') {
    fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
      }

      res.setHeader('Content-Type', 'application/json');
      res.end(guestsJSON);
    });
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

server.listen(port, function() {
  console.log('Listening on port', port);
});
```

Now, save the `server.js` file and add the following data to the `guests.json` file.

```shell
echo '["Mary", "Don"]' > guests.json
```

Send the following HTTP request to the server.

```shell
http GET localhost:8000/guests
```

And you should see something like this.

![](https://i.imgur.com/MM0aAYD.png)



Right now, your HTTP server can only send back all the records from the database. It would be much more useful if your HTTP server could send back individual records as well.

Let's fix that by refactoring the `server.js` file with the following code.

```javascript
'use strict';

var fs = require('fs');
var path = require('path');
var guestsPath = path.join(__dirname, 'guests.json');

var http = require('http');
var port = process.env.PORT || 8000;

var server = http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/guests') {
    fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
      }

      res.setHeader('Content-Type', 'application/json');
      res.end(guestsJSON);
    });
  }
  else if (req.method === 'GET' && req.url === '/guests/0') {
    fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
      }

      var guests = JSON.parse(guestsJSON);
      var guestJSON = JSON.stringify(guests[0]);

      res.setHeader('Content-Type', 'application/json');
      res.end(guestJSON);
    });
  }
  else if (req.method === 'GET' && req.url === '/guests/1') {
    fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
      }

      var guests = JSON.parse(guestsJSON);
      var guestJSON = JSON.stringify(guests[1]);

      res.setHeader('Content-Type', 'application/json');
      res.end(guestJSON);
    });
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

server.listen(port, function() {
  console.log('Listening on port', port);
});
```


Now, save the `server.js` file and send the following HTTP request to the server.

```shell
http GET localhost:8000/guests
```

And you should see something like this.

![](https://i.imgur.com/MM0aAYD.png)

Now, send the following HTTP request to the server.

```shell
http GET localhost:8000/guests/0
```

And you should see something like this.

![](https://i.imgur.com/loK2cj9.png)

Finally, send the following HTTP request to the server.

```shell
http GET localhost:8000/guests/1
```

And you should see something like this.

![](https://i.imgur.com/omCorko.png)


## Extending Routes

Using an `if` statement works for our two routes, but it doesn't scale well if we have many routes. Instead, we can create a file named `routes.js` and use an object to define routes in a more scalable way.

```javascript
// routes.js

routes = {
  '/special-message': function(req, res) {
    res.end("You're SPECIAL");
  },

  '/non-special-message': function(req, res) {
    res.end("You're boring!");
  }
};

module.exports = routes;
```

```javascript
// index.js
var http   = require('http');
var routes = require('./routes');

var handleRequest = function (req, res) {
  if(routes[req.url] !== undefined) {
    routes[req.url](req, res);
  } else {
    res.end("404, no such route");
  }
};

var server = http.createServer(handleRequest);

server.listen(8000, function() {
  console.log("Listening...");
});
```

If we submit a request to either `localhost:8000/special-message` or `localhost:8000/non-special-message`, we still receive our intended response.

### Exercises:

- [Building a simple HTTP server](https://github.com/gSchool/node-http-server-intro).
- [Parsing query strings](https://github.com/gSchool/node-query-string-parsing).
- [Pet Shop - Node.js HTTP Server](https://github.com/gSchool/fs-pet-shop/blob/master/http.md)

### Reading

- [The difference between the Web and Internet](http://www.webopedia.com/DidYouKnow/Internet/Web_vs_Internet.asp)
- [URL Parts](https://www.mattcutts.com/blog/seo-glossary-url-definitions/)
- [Web Sequence Diagrams](https://www.websequencediagrams.com/)
- [HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [Eloquent JS](http://eloquentjavascript.net/17_http.html)
- [How the web works](https://github.com/gSchool/g15/blob/master/curriculum/03-week/lessons/the-internet.md)
- [`http` Node module](https://nodejs.org/api/http.html)
- [`url` Node module](https://nodejs.org/api/url.html)
- [Nodejitsu HTTP server](https://docs.nodejitsu.com/articles/HTTP/servers)
- [Common HTTP Status Codes](http://www.smartlabsoftware.com/ref/http-status-codes.htm)
- [HTTP Header Fields (don't install firebug, use chrome dev tools)](http://www.tutorialspoint.com/http/http_header_fields.htm)
- [CORS Response Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#The_HTTP_response_headers)
- [Node.js API Documentation - `http.IncomingMessage`](https://nodejs.org/dist/latest-v6.x/docs/api/http.html#http_class_http_incomingmessage)
- [Node.js API Documentation - `http.ServerResponse`](https://nodejs.org/dist/latest-v6.x/docs/api/http.html#http_class_http_serverresponse)

### Video

[How does the Internet work?](https://www.youtube.com/watch?v=e4S8zfLdLgQ)

## Slides

- http://slides.com/chos-kim/creating-an-http-sever-with-node-js#/
- https://docs.google.com/presentation/d/1Tk79niqAcDWXNff5AUlafycYZHEtfQAHfaZ9jvy2UIw/edit?usp=sharing
- https://docs.google.com/a/galvanize.com/presentation/d/1tjUGGp8QqTKQIlnPvmZNb1UnAxrW7vqK-Rrhoy9ijJk/edit?usp=sharing
