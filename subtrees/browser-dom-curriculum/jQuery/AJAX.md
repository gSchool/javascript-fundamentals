# Overview of $.ajax()

## Objectives

* Use jQuery's `$.ajax` to make requests from the client to a RESTful web server.

## Quick Review - Making simple requests with jQuery

In the past, we made requests using `$.getJSON` to make requests to a web server using the following template.

```javascript
var $xhr = $.getJSON('http://www.omdbapi.com/?t=Frozen');

$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        // The served an unsuccessful status code.
        return;
    }

    console.log(data);
});

$xhr.fail(function(err) {
    // The request was unsuccessful for some reason (ie. the server couldn't even respond).
    console.log(err);
});
```

Specifically, the template above does the following:
* It makes a request to the server at the URL specified (`'http://www.omdbapi.com/?t=Frozen'` in this example).
* It's performing a `GET` request (This is the `get` in `getJSON`).
* It's parsing the JSON in the response before `done` is called (This is the `JSON` in `getJSON`).

It's important to note that `$xhr` is jQuery's version of a promise. It's important to note that they are not exactly the same as promises that we learned in JavaScript. See [this article](https://abdulapopoola.com/2014/12/12/the-differences-between-jquery-deferreds-and-the-promisesa-spec/) to help understand the differences, but overall, they behave very similarly. We use `.done()` in place of `.then()` and `.fail()` in place of `.catch()`.

Our applications will be making different types of requests out to our RESTful server (namely different methods `POST`, `PATCH`, `DELETE`). For this, we use the `$.ajax` call. jQuery offers some excellent [documentation](http://api.jquery.com/jQuery.ajax/) on it. We will go through some examples:

## Examples

### Equivalent of `$.getJSON`

`$.getJSON` makes an HTTP request with the `GET` method to a specific URL, and parses the results as JSON.

```javascript
var $xhr = $.ajax({
  method: 'GET',  // GET is default
  url: 'http://localhost:8000/movies/?t=Frozen',
  dataType: 'json'
});
```

`$.ajax` needs the method to be specified using the `method` setting (`GET` is default). The `url` setting is same url in `$.getJSON`. To support both on heroku and locally, don't specify a host, specify the path. **Note the forward slash needed in the beginning.**

```javascript
var $xhr = $.ajax({
  method: 'GET',  // GET is default
  url: '/movies/?t=Frozen',
  dataType: 'json'
});
```

The `dataType` setting informs jQuery that the expected response is JSON, so that jQuery can parse the JSON back. The `$xhr` variable now stores a promise just like `$.getJSON`. You can apply the `done` or `fail` method accordingly.

```javascript
var $xhr = $.ajax({
  method: 'GET',  // GET is default
  url: '/movies/?t=Frozen',
  dataType: 'json'
});

$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        // The served an unsuccessful status code.
        return;
    }

    console.log(data);
});

$xhr.fail(function(err) {
    // The request was unsuccessful for some reason (ie. the server couldn't even respond).
    console.log(err);
});
```

**Note:** Want to have an easy way of adding query parameters. Specify them in the `data` setting as an object.

```javascript
var $xhr = $.ajax({
  method: 'GET',  // GET is default
  url: '/movies/',
  dataType: 'json'
  data: {
    t: 'Frozen'
  }
});
```

### A Note about Cookies

`$.ajax` also has a setting called `headers` for sending headers. The browser sends some default headers anyway _including cookies_. Therefore, there is no need to send cookies.

### POST request

```javascript
var $xhr = $.ajax({
  method: 'POST',
  url: '/movies/',
  dataType: 'json',
  contentType: 'application/json'
  data: '{"title": "Frozen 2: The Thaw", "rating": 6.8}'
});
```

You can send the data for the `POST` request using the `data`. **The data needs to be a string when sending JSON and specify the `contentType` as `application/json`.**. This is slightly different from how data was sent via HttPie. The client above is passing the data as JSON, so the datatypes are preserved. For example, the `rating` field will be a number vs in HttPie, it is a string.

```sh
$ http POST http://localhost:8000/movies/ "title=Frozen 2: The Thaw" rating=6.8
```

In this case, `rating` will be a string. You can send JSON through HttPie by doing the the following:

```sh
$ http POST http://localhost:8000/movies/ "title=Frozen 2: The Thaw" rating:=6.8
```

See the [documentation](https://github.com/jkbrzt/httpie#json) for HttPie on JSON.

### PUT request

`PUT` requests operate very similarly to `POST` requests.

```javascript
var $xhr = $.ajax({
  method: 'PUT',
  url: '/movies/1', // NOTE: this URL is for demo purposes
  dataType: 'json',
  contentType: 'application/json'
  data: '{"title": "Frozen 2: The Thaw", "rating": 6.8}'
});
```

### PATCH request

Same for `PATCH`.

```javascript
var $xhr = $.ajax({
  method: 'PATCH',
  url: '/movies/1', // NOTE: this URL is for demo purposes
  dataType: 'json',
  contentType: 'application/json'
  data: '{"title": "Frozen 2: The Thaw"}'
});
```

### DELETE request

Same for `DELETE`.

```javascript
var $xhr = $.ajax({
  method: 'DELETE',
  url: '/movies/1', // NOTE: this URL is for demo purposes
  dataType: 'json'
});
```
