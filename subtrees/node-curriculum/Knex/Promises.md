# Introduction to Promises

## What's a Promise?

Imagine you and a group of friends decide to stuff your faces at Applebee's on a busy Friday night. Because the restaurant is busy, the host tells you there's a wait. But instead of forcing you to wait in the immediate vicinity, the host gives you a pager that will beep when your table is ready. In other words, you're given some object that will be resolved into the table you desire at some point in the future.

From a very high level, promises in Javascript work in a similar way. A _promise_ is an object, which will be fulfilled at some (usually uncertain) time in the future. Promises also have a `then` method, which executes once the promise is fulfilled and have access to the fulfilled promise's data.

This might sound confusing; as with so many other things, the best way to build an understanding of promises is with some concrete examples. So let's dive in and examine promises in more detail. By the end of this section, you should have a solid understanding of promises. In turn, this will help you write more readable and maintainable asynchronous code. And that's a promise. (Pun very much intended.)

## Promises in jQuery

Although we haven't discussed them explicitly, you've already used promises in your code. In jQuery, for instance, you saw promises often.  The most common use case was an ajax call.  For example, you might have some code like this in jQuery:

```js
$.get("/puppies").done(function() {
  // do something here
}).fail(function() {
  // do something here
});
```

The object returned from the `$.get` method is jQuery's version of a promise.  A promise is an object that represents an action that is being executed asynchronously.  The promise can either be _fulfilled_ (the asynchronous action completed successfully) _rejected_ (the asychronous action failed for some reason), or _pending_ (neither fulfilled nor rejected...yet).  In the example above, if the ajax request to get puppies succeeds, the function specified by done will be called, otherwise, the fail function will be called.

To see how jQuery promises change over time, you can use the debugger. Try going to a webpage with jQuery enabled and writing something like:

```js
var promise = $.get('http://pokeapi.co/api/v2/pokemon');
debugger;
promise.then(function(data) {
    debugger;
});
```

**Exercise** Take a look at `promise` in each debugger. How are the objects different? How does the `data` argument relate to the promise?

So what is the advantage of a promise over a plain old callback? Well, you can think of a promise as something like a callback, but the great advantage of promises is that we can decouple the actions that need to be taken after some asynchronous task.  In other words, a promise allows the implementer to chain methods together in a flat, more readable way.

Let's take a look at a concrete example. Imagine you want to use the [Pokemon API](http://pokeapi.co/) to find a list of all the Pokemon, choose three Pokemon at random, and display their names and images on the page. This API isn't the most user-friendly, and getting the data you want can often require many nested API calls. So without making full use of jQuery's promises, your code might look something like this (try to understand what this code is doing!):

```js
$.get('http://pokeapi.co/api/v2/pokemon', function(data) {
    $.get('http://pokeapi.co/api/v2/pokemon/?limit=' + data.count, function(allData) {
        var allPokemon = allData.results;
        var randomIndices = [
            Math.floor(Math.random() * data.count),
            Math.floor(Math.random() * data.count),
            Math.floor(Math.random() * data.count)
        ];
        var randomPokemon = randomIndices.map(function(idx) {
            return allPokemon[idx];
        });
        var imgArr = [];
        $.get(randomPokemon[0].url, function(pokeData0) {
            imgArr.push({
                name: pokeData0.name,
                front: pokeData0.sprites.front_default,
                back: pokeData0.sprites.back_default
            });
            $.get(randomPokemon[1].url, function(pokeData1) {
                imgArr.push({
                    name: pokeData1.name,
                    front: pokeData1.sprites.front_default,
                    back: pokeData1.sprites.back_default
                });
                $.get(randomPokemon[2].url, function(pokeData2) {
                    imgArr.push({
                        name: pokeData2.name,
                        front: pokeData2.sprites.front_default,
                        back: pokeData2.sprites.back_default
                    });
                    $("body").empty()
                    imgArr.forEach(function(img) {
                        $("body").append(
                            $("<h1>", {text: img.name}),
                            $("<img>", {src: img.front}),
                            $("<img>", {src: img.back})
                        );
                    });
                });
            });
        });
    });
});
```

That's some serious nesting of our Javascript code. Code like this is commonly referred to as "callback hell," because the deep nesting of callbacks makes our code more difficult to read and reason about. As you can see, things already look pretty gnarly with just 5 levels of nesting; imagine how much worse things would be if you needed to nest 10, 20, or 50 API calls in a similar manner!

By Using the `then` method instead, we can flatten this chain of nested callbacks and make our code more readable. Here's one possible refactor:

```js
var imgArr = [];
var randomPokemon;
$.get('http://pokeapi.co/api/v2/pokemon').then(function(data) {
    return $.get('http://pokeapi.co/api/v2/pokemon/?limit=' + data.count);    
}).then(function(allData) {
    var allPokemon = allData.results;
    var randomIndices = [
        Math.floor(Math.random() * allData.count),
        Math.floor(Math.random() * allData.count),
        Math.floor(Math.random() * allData.count)
    ];
    randomPokemon = randomIndices.map(function(idx) {
        return allPokemon[idx];
    });
    return $.get(randomPokemon[0].url);
}).then(function(pokeData0) {
    imgArr.push({
        name: pokeData0.name,
        front: pokeData0.sprites.front_default,
        back: pokeData0.sprites.back_default
    });
    return $.get(randomPokemon[1].url);
}).then(function(pokeData1) {
    imgArr.push({
        name: pokeData1.name,
        front: pokeData1.sprites.front_default,
        back: pokeData1.sprites.back_default
    });
    return $.get(randomPokemon[2].url);
}).then(function(pokeData2) {
    imgArr.push({
        name: pokeData2.name,
        front: pokeData2.sprites.front_default,
        back: pokeData2.sprites.back_default
    });
    $("body").empty();
    imgArr.forEach(function(img) {
        $("body").append(
            $("<h1>", {text: img.name}),
            $("<img>", {src: img.front}),
            $("<img>", {src: img.back})
        );
    });
});
```

Callback hell is no more! Instead of being nested, each block of code is now written out sequentially: first do this, _then_ do this, _then_ do this, and so on.

In fact, we can clean this code up even further. The callback functions in the last three `then` methods have a very similar structure, so rewriting very similar code three times isn't very DRY. Luckily for us, jQuery also comes built with a `when` method, which can accept a comma separated list of promises and will execute a callback inside of `then` only when each promise has been fulfilled or rejected.

Try to refactor the above code using `when`. Here's one way you could do it:

```js
$.get('http://pokeapi.co/api/v2/pokemon').then(function(data) {
    return $.get('http://pokeapi.co/api/v2/pokemon/?limit=' + data.count);    
}).then(function(allData) {
    var allPokemon = allData.results;
    var randomIndices = [
        Math.floor(Math.random() * allData.count),
        Math.floor(Math.random() * allData.count),
        Math.floor(Math.random() * allData.count)
    ];
    randomPokemon = randomIndices.map(function(idx) {
        return $.get(allPokemon[idx].url);
    });
    return $.when(randomPokemon[0], randomPokemon[1], randomPokemon[2]);
}).then(function(p0, p1, p2) {
    $("body").empty();
    [p0, p1, p2].forEach(function(pokemon) {
        $("body").append(
            $("<h1>", {text: pokemon[0].name}),
            $("<img>", {src: pokemon[0].sprites.front_default}),
            $("<img>", {src: pokemon[0].sprites.back_default})
        );
    });
});
```

## Native Promises

As of ES2015, promises are native to the browser.  The implementation for promises in the browser is not 100% complete, but progress is being made. Take a look at the [MDN docs for promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

You can create a new promise using the `Promise` constructor function. The promise accepts a callback with two arguments: `resolve` and `reject`. Both are functions: `resolve` gets executed when the promise is fulfilled, `reject` gets executed when the promise is rejected. In the `then` callback, the first argument refers to `resolve`, and the second refers to `reject`.

**Exercise** Take a look at the following code. Describe what this code does in your own words.

```js
var p = new Promise(function(resolve, reject) {
  var time = Math.random() * 10000;
  setTimeout(function() {
    return time < 5000 ? resolve() : reject();
  }, time);
}).then(function() {
  return "Sweet, I didn't have to wait too long!";
}, function() {
  return "Ugh, this is taking too long, I'm outta here."
});
```

**Exercise**

Work your way throught the following:

1. Take a look at the following code. What will get logged to the console, and in what order?

	```js
	function log(val) {
		console.log(val);
	}

	function randomDelay(cb, val) {
		setTimeout(function() {
			cb(val);
		}, Math.random() * 3000);
	}

	randomDelay(log, 1);
	randomDelay(log, 2);
	randomDelay(log, 3);
	```

2. Let's use promises to refactor the above code so that the values will get logged in consecutive order. First, modify the `randomDelay` function so that it accepts a third argument called `resolve`. In the body of the function, after invoking the callback on `val`, invoke `resolve` on `val` (if `resolve` is defined). Then create a new function called `randomDelayedPromise` which takes in a callback and a value, and returns a new promise. The promise should take a single argument, a function which takes `resolve` as an argument and invokes `randomDelay(cb, val, resolve)`.

3. Use your `randomDelayedPromise` function along with the `then` method on promises to ensure that the values 1, 2, and 3 will be logged to the console in order.

4. Read about [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) Try to refactor your code using `Promise.all` to log the numbers in order.

## Error Handling

We've focused mostly on what happens when a promise is fulfilled. But it's also important to think about what your application should do if the promise is rejected. In jQuery, we can handle success using the `done` method and failure using the `fail` method, like so:

```js
$.get('http://pokeapi.co/api/v2/pokeyman')
.done(function(data) { console.log('boom!'); })
.fail(function(data) { console.log('fail!'); });
```

In this case, the URL in the `$.get` has a typo in it, so the response status will be 404 and the callback to `fail` will execute.

In native promises, we can catch errors using the `catch` method. Throw this code into a snippet and set some break points to understand what it's doing!

```js
new Promise(function(resolve, reject) {
  var x = Math.random();
  return x < 0.5 ? resolve() : reject([x, 1]);
}).then(function() {
  return new Promise(function(resolve, reject) {
    var y = Math.random();
    return y < 0.5 ? resolve() : reject([y, 2]);
  });
}).then(function() {
  console.log("Both promises sucessfully resolved!");
}).catch(function(val) {
  console.log("Promise #" + val[1] + " rejected :(; value was " + val[0]);
});
```
