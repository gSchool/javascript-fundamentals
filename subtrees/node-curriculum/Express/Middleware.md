# Middleware

## Objectives

- Explain what Express middleware is.
- Explain why Express middleware is useful.
- Use Express middleware to log the request/response cycle.
- Use Express middleware to parse a request body.

## What's Express middleware?

An Express application is essentially a series of middleware function calls. Express middleware is a callback function that has access to the request object (`req`), the response object (`res`), and sometimes the next middleware callback (`next`).

Middleware functions can execute any JavaScript operation inside the callback function.

- Read and modify the `req` and `res` objects.
- Read and write to a file or database.
- Send HTTP requests to other servers.

However, middleware _must_ either end the request/response cycle with a function like `res.send()` or call the next middleware callback with `next()`.

## Why is Express middleware useful?

Express middleware allows an application's code to be organized into in a series of middleware callbacks. These callbacks can be reused in a flexible way.

![middleware](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/66/middleware-1.png)

## How does Express middleware work?

First we'll build **application level** middleware by hand. Then, we'll replace our hand-made middleware with third party middleware installed from npm.

---

## Before you begin
**Note** This exercise is building on the party project you built in a previous lesson. If you have already completed the previous lesson you can skip doing the following section of code. If you have not done that lesson, you can get up to speed by doing the following:

```shell
take party
git init
npm init -y
npm install express --save
touch serverExpress.js
echo '["Mary", "Don"]' > guests.json
git add -A
git commit -m "initial commit"
```
---

To get started, create a new `middleware` branch.

```shell
git checkout -b middleware
```

Next, type out the following code into the `serverExpress.js` file.

```javascript
'use strict';

var fs = require('fs');
var path = require('path');
var guestsPath = path.join(__dirname, 'guests.json');

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.disable('x-powered-by');

app.use(function(req, res, next) {
  var start = new Date();
  next();
  var end = new Date();
  console.log(req.method, req.url, res.statusCode, end - start, 'ms');
});

app.get('/guests', function(req, res) {
  fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
    if (err) {
      console.error(err.stack);
      return res.sendStatus(500);
    }

    var guests = JSON.parse(guestsJSON);

    res.send(guests);
  });
});

app.get('/guests/:id', function(req, res) {
  fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
    if (err) {
      console.error(err.stack);
      return res.sendStatus(500);
    }

    var id = Number.parseInt(req.params.id);
    var guests = JSON.parse(guestsJSON);

    if (id < 0 || id >= guests.length || Number.isNaN(id)) {
      return res.sendStatus(404);
    }

    res.set('Content-Type', 'text/plain');
    res.send(guests[id]);
  });
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
```

In a separate Terminal tab, send an HTTP request to your server.

```shell
http GET localhost:8000/guests/abracadabra
```

Look back into the tab running the Express server, you should see the following.

![](https://i.imgur.com/xHGcjJa.png)

This is the hand-made logging middleware you just built! Now let's replace it with `morgan`, a more powerful third-party middleware.

**NOTE:** Before you install `morgan`, make sure your shell's working directory is the `party` directory.

```shell
npm install --save morgan
```

Now refactor `serverExpress.js` with the following code.

```javascript
'use strict';

var fs = require('fs');
var path = require('path');
var guestsPath = path.join(__dirname, 'guests.json');

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

var morgan = require('morgan');

app.disable('x-powered-by');
app.use(morgan('short'));

app.get('/guests', function(req, res) {
  fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
    if (err) {
      console.error(err.stack);
      return res.sendStatus(500);
    }

    var guests = JSON.parse(guestsJSON);

    res.send(guests);
  });
});

app.get('/guests/:id', function(req, res) {
  fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
    if (err) {
      console.error(err.stack);
      return res.sendStatus(500);
    }

    var id = Number.parseInt(req.params.id);
    var guests = JSON.parse(guestsJSON);

    if (id < 0 || id >= guests.length || Number.isNaN(id)) {
      return res.sendStatus(404);
    }

    res.set('Content-Type', 'text/plain');
    res.send(guests[id]);
  });
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
```

Now send another HTTP request to your server.

```shell
http GET localhost:8000/guests
```

You should see the following server log.

![](https://i.imgur.com/m8cmiGI.png)

This is the `morgan` middleware in action!

Next, add and commit the latest changes to the `party` project's `middleware` branch.

```shell
git add .
git commit -m 'Add morgan middleware'
```

We will now add another middleware to parse the body of an HTTP POST request. Refactor your `serverExpress.js` file again.

```javascript
'use strict';

var fs = require('fs');
var path = require('path');
var guestsPath = path.join(__dirname, 'guests.json');

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

var morgan = require('morgan');

app.disable('x-powered-by');
app.use(morgan('short'));

app.use(function(req, res, next) {
  var bodyJSON = '';

  req.on('data', function(chunk) {
    bodyJSON += chunk.toString();
  });

  req.on('end', function() {
    var body;

    if (bodyJSON !== '') {
      body = JSON.parse(bodyJSON);
    }

    req.body = body;

    next();
  });
});

app.get('/guests', function(req, res) {
  fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
    if (err) {
      console.error(err.stack);
      return res.sendStatus(500);
    }

    var guests = JSON.parse(guestsJSON);

    res.send(guests);
  });
});

app.post('/guests', function(req, res) {
  fs.readFile(guestsPath, 'utf8', function(readErr, guestsJSON) {
    if (readErr) {
      console.error(readErr.stack);
      return res.sendStatus(500);
    }

    var guests = JSON.parse(guestsJSON);
    var guest = req.body.name;

    if (!guest) {
      return res.sendStatus(400);
    }

    guests.push(guest);

    var newGuestsJSON = JSON.stringify(guests);

    fs.writeFile(guestsPath, newGuestsJSON, function(writeErr) {
      if (writeErr) {
        console.error(writeErr.stack);
        return res.sendStatus(500);
      }

      res.set('Content-Type', 'text/plain');
      res.send(guest);
    });
  });
});

app.get('/guests/:id', function(req, res) {
  fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
    if (err) {
      console.error(err.stack);
      return res.sendStatus(500);
    }

    var id = Number.parseInt(req.params.id);
    var guests = JSON.parse(guestsJSON);

    if (id < 0 || id >= guests.length || Number.isNaN(id)) {
      return res.sendStatus(404);
    }

    res.set('Content-Type', 'text/plain');
    res.send(guests[id]);
  });
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
```

Now you will send another HTTP GET request to your server.

```shell
http GET localhost:8000/guests
```

You should see a similar HTTP response.

![](https://i.imgur.com/TxC5tYS.png)

Next, send an HTTP POST request, with a JSON body, to your server.

```shell
http POST localhost:8000/guests name=Kate
```

You should see a similar HTTP response.

![](https://i.imgur.com/4G1cu7K.png)

Finally, check to see if your guest list has been modified.

```shell
http GET localhost:8000/guests
```

You should see a similar HTTP response.

![](https://i.imgur.com/ySdlgI9.png)

This is the hand-built body parsing middleware. Now we'll convert this to use the `body-parser` third-party middleware.

**NOTE:** Before you install `body-parser`, make sure your shell's working directory is the `party` directory.

```shell
npm install --save body-parser
```

Refactor your `serverExpress.js` file with the following code.

```javascript
'use strict';

var fs = require('fs');
var path = require('path');
var guestsPath = path.join(__dirname, 'guests.json');

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

var morgan = require('morgan');
var bodyParser = require('body-parser');

app.disable('x-powered-by');
app.use(morgan('short'));
app.use(bodyParser.json());

app.get('/guests', function(req, res) {
  fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
    if (err) {
      console.error(err.stack);
      return res.sendStatus(500);
    }

    var guests = JSON.parse(guestsJSON);

    res.send(guests);
  });
});

app.post('/guests', function(req, res) {
  fs.readFile(guestsPath, 'utf8', function(readErr, guestsJSON) {
    if (readErr) {
      console.error(readErr.stack);
      return res.sendStatus(500);
    }

    var guests = JSON.parse(guestsJSON);
    var guest = req.body.name;

    if (!guest) {
      return res.sendStatus(400);
    }

    guests.push(guest);

    var newGuestsJSON = JSON.stringify(guests);

    fs.writeFile(guestsPath, newGuestsJSON, function(writeErr) {
      if (writeErr) {
        console.error(writeErr.stack);
        return res.sendStatus(500);
      }

      res.set('Content-Type', 'text/plain');
      res.send(guest);
    });
  });
});

app.get('/guests/:id', function(req, res) {
  fs.readFile(guestsPath, 'utf8', function(err, newGuestsJSON) {
    if (err) {
      console.error(err.stack);
      return res.sendStatus(500);
    }

    var id = Number.parseInt(req.params.id);
    var guests = JSON.parse(newGuestsJSON);

    if (id < 0 || id >= guests.length || Number.isNaN(id)) {
      return res.sendStatus(404);
    }

    res.set('Content-Type', 'text/plain');
    res.send(guests[id]);
  });
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
```

Now you will send another HTTP GET request to your server.

```shell
http GET localhost:8000/guests
```

You should see a similar HTTP response.

![](https://i.imgur.com/ySdlgI9.png)

Next, send an HTTP POST request, with a JSON body, to your server.

```shell
http POST localhost:8000/guests name=Teagan
```

You should see a similar HTTP response.

![](https://i.imgur.com/mRXnhQu.png)

Finally, check to see if your guest list has been modified.

```shell
http GET localhost:8000/guests
```

You should see a similar HTTP response.

![](https://i.imgur.com/00buBZP.png)

This is the `body-parser` middleware in action!

Next, add and commit the latest changes to the `party` project's `middleware` branch.

```shell
git add .
git commit -m 'Add body-parser middleware'
```

Finally, merge the commits from the `middleware` branch to the `master` branch, run the following commands.

```shell
git checkout master
git merge middleware
```

With the commits merged in, it's safe to delete the `middleware` branch.

```shell
git br -d middleware
```

## Resources

- [Express - Using Middleware](http://expressjs.com/en/guide/using-middleware.html)
