# Server Side Requests

__Objectives__

* Understand why you would want to make requests on the server side, give examples
* Use the request module to make GET and POST requests
* Make server side requests with express

## Reasons For Server Side Requests

__Questions for the class__

* What are some reasons for sever side requests?  
* What browser security policy might prevent us from using an api on the client side?
* Why would you want requests for a service like S3 to happen mainly on the server side?
* What are some other examples of APIs that you'd prefer on the server side?
* Define __Service Oriented Architecture__

### Request Promise Module
[NPM request-promise docs](https://www.npmjs.com/package/request-promise)

The request-promise module allows us to make server side HTTP requests.  Installing the request-promise module into your node app is the same as always:

```
npm install --save request-promise
```

#### GET Requests

Making a get request is also straight forward:

```js
var rp = require('request-promise');
rp({uri: 'https://fs-student-roster.herokuapp.com/'})
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });
```

This will default to making a get request to the student roster app we used before.

---

#### Exercise

Make 2 simple apps with node:

1. An app that simply makes a get request to the [student roster page](https://fs-student-roster.herokuapp.com/) by default and console logs the body of the response. However, if the user specifies a `command line argument` for a url, the app should make a request to the specified url instead.

2. Write a node app that takes a imdb id as a command line argument and then makes a get request to the [OMDB api](http://www.omdbapi.com/) for details about that movie.  

The app should console log:

* title
* year
* actors
* genre
* runtime (movie length)  

Keep in mind what type of data the body of the response is.  What does the following request return:

```
node app.js tt3899796
```

---

#### POST Requests

The request module provides a ```.post``` convenience method as well, but the easiest way to use post and specify json data is to use an options hash as a parameter to post.  Here is an example:

```js
var rp = require('request-promise');

var data = {
  name: 'Baxster',
  hobby: 'Surviving being thrown off bridges',
  avatar: 'http://cdn.bleedingcool.net/wp-content/uploads/2013/11/baxter-600x354.jpg'
};

var options = {
  uri: 'https://fs-student-roster.herokuapp.com/',
  method: 'POST',
  json: true,
  body: data
};

rp(options)
  .then(function(parsedBody) {
    console.log(parsedBody);
  })
  .catch(function(err) {
    console.log(err);
  });
```

#### Exercise

Follow the steps at the [google url shortener api docs](https://developers.google.com/url-shortener/v1/getting_started#APIKey) to get your own api key. When creating an API key there will be a field for providing an IP address which you do not need to fill in.  Look at the docs and figure out the requirements for making a url shortening request.  Write a node app that takes a url on the command line and shortens it. The app should console log the shortened url.  Take note of what type of object the body is when you get it back.

## Request Module With Express

What does the following express app do?

```js
var express = require('express');
var app = express();

app.get("/", function (req, res) {
  var responseStr = "Hello World";
});

app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});
```

![](http://2.bp.blogspot.com/-ahQdpvjvBFU/UTKWQHYSYXI/AAAAAAAAILw/D2GkbOfWVWI/s1600/a+a+a+garage+sale+gal+banner+385.jpg =700x0)

The take away is that the node app does not return a response until ```res.send``` or ```res.render``` is called.  So how can we integrate a server side request into our express app?


```js
var express = require('express');
var rp = require('request-promise');
var app = express();

app.get("/", function (req, res) {
  rp({uri: 'http://www.omdbapi.com/?i=tt4331680&plot=short', json: true})
    .then(function(movieData) {
      var result = "Title: " + movieData.Title + "<br>" + "Year: " + movieData.Year + "<br>";
      res.send(result);
    });
});

app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});
```

This code is a little problematic though.  If we get a non 200 response, we never return a response to the user.  Make sure to take care of the error cases as well:

```js
var express = require('express');
var rp = require('request-promise');
var app = express();

app.get("/", function (req, res) {
  rp({uri: 'http://www.omdbapi.com/?i=tt4331680&plot=short', json: true})
    .then(function(movieData) {
      var result = "Title: " + movieData.Title + "<br>" + "Year: " + movieData.Year + "<br>";
      res.send(result);
    })
    .catch(function(err) {
      res.send('Sorry there was an error: ', err);
    });
});

app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});
```

## Resources
* [Request Module](https://github.com/request/request)
* [res.format](http://expressjs.com/api.html#res.format)

# Exercises

[Library app with a server side request](https://github.com/gSchool/express_library_app_with_request)
