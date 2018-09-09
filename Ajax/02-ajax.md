# Ajax
## What's Ajax?

Asynchronous JavaScript and XML (**Ajax**) is a technique that allows web applications to send and receive data in the background without interfering with the display and behavior of the existing page. In other words, Ajax allows web applications to dynamically load content from a server without doing a full page refresh. The XML part is less applicable today because most web APIs use JSON for the data exchange format.

With Ajax, the possibilities are limitless. For example, think of when you reach the bottom of the page on Facebook or Twitter. How do new stories and tweets magically appear at the bottom without you clicking on anything or reloading the whole page? Ajax.

![](http://images5.fanpop.com/image/photos/27100000/The-Internet-the-it-crowd-27191791-500-230.gif)

## Why does Ajax primarily transfer JSON data now?

The "X" in Ajax stands for XML, but as it turns out, most web applications transmit JSON these days. JSON was created by Douglas Crockford in 2001 as an alternative to XML. The primary advantage of JSON is that it's easily readable by both humans and computers, two qualities XML often lacks.

Here's some data about a fictitious person represented in XML.

```xml
<person>
  <firstName>John</firstName>
  <lastName>Smith</lastName>
  <isAlive>true</isAlive>
  <age>25</age>
  <address>
    <city>New York</city>
    <state>NY</state>
  </address>
  <favoriteColors>
    <color>Blue</color>
    <color>Orange</color>
  </favoriteColors>
</person>
```

And here's the same person data represented in JSON.

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 25,
  "address": {
    "city": "New York",
    "state": "NY"
  },
  "favoriteColors": ["Blue", "Orange"]
}
```


JSON looks like JavaScript, right? Remember, that JSON is just a data format and _not_ actual code.

Also notice how lightweight JSON is compared to XML. JSON tends to be both easier to read and to write for web developers as well as for JavaScript programs using the [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) and [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) functions.

A more accurate acronym for how people use this technique today would be Ajaj or Asynchronous JavaScript and JSON. But Ajaj sounds dumb, so we're stuck with Ajax regardless if web applications use XML, JSON, or whatever. Whenever you think of Ajax, just think about dynamically loading content from a server without doing a full page refresh.


## AJAX with Fetch API

The [Fetch API](https://jakearchibald.com/2015/thats-so-fetch/) is becoming the new standard for making AJAX calls. Unfortunately it is [not supported](http://caniuse.com/#search=fetch) in all browsers yet, but you _can_ use the [fetch](https://github.com/github/fetch) [polyfill](https://en.wikipedia.org/wiki/Polyfill) created by github to add support for all browsers.

You can try it yourself in Chrome dev tools:

```JavaScript
fetch('http://www.omdbapi.com/?t=Frozen')
  .then(function(data){
    console.log(data)
  });
```

Unfortunately the result might not be what you would expect:

```JavaScript
{
  body: ReadableStream,
  bodyUsed: false,
  headers: Headers,
  ok: true,
  status: 200,
  statusText: "OK",
  type: "cors",
  url: "http://www.omdbapi.com/?t=Frozen",
  __proto__: Response
}
```

Since an HTTP response is a (possibly infinite) stream, the new API returns it to us as such. Fortunately, if we want to turn the `body` into json, there's a method for that:

```JavaScript
fetch('http://www.omdbapi.com/?t=Frozen')
  .then(function(response) {
     return response.json()
   })
  .then(function(data){
    console.log(data)
  })
```

As you can see the `.json()` method also returns a promise, but once that resolves we have our data:

```JavaScript
{
  Actors: "Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad",
  Awards: "Won 2 Oscars. Another 72 wins & 57 nominations.",
  Country: "USA",
  Director: "Chris Buck, Jennifer Lee",
  Genre: "Animation, Adventure, Comedy",
  Language: "English, Icelandic",
  Metascore: "74",
  Rated: "PG",
  Released: "27 Nov 2013",
  Response: "True",
  Runtime: "102 min",
  Title: "Frozen",
  Type: "movie",
  Year: "2013",
  imdbID: "tt2294629",
  imdbRating: "7.5",
  imdbVotes: "441,791"
}
```


## Ajax with Axios

There are also many front-end javascript libraries that you can utilize to make Ajax requests. One of the most popular is called [axios](https://github.com/axios/axios). Below is some example code showcasing how a Ajax request would be done with axios.

```js
axios.get('http://localhost:3000/cats')
  .then(function (result) {
    console.log(result)
  })
```


Using fetch or axios, each request returns a Promise. Axios has the benefit of automatically parsing JSON responses. The main drawback to using axios is that it's not built into javascript. Meaning to utilize it you need to either download & link it to your HTML file or add it via CDN ([Axios CDN](https://cdnjs.com/libraries/axios)).

## Reflect

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 26a93a60-b3d9-11e8-89b8-f32133e66ea3
* title: Using Fetch

##### !question

What's the problem with the code below?
```js
fetch('http://www.omdbapi.com/?t=Frozen')
  .then(function(data){
    console.log(data.Rated);
  });
```

##### !end-question
##### !options

* `data.Rated` is undefined because the data needs to be converted into JSON.
* `data` is the incorrect parameter name. It needs to be called `response`.
* `fetch()` is not a valid function.

##### !end-options
##### !answer
`data.Rated` is undefined because the data needs to be converted into JSON.
##### !end-answer
### !end-challenge
