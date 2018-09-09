## Objectives

- Explain what an Express router is.
- Explain why an Express router is useful.
- Use the Express router to organize RESTful routes.

## What's an Express `router`?

An **Express router** is a proxy that you can use for attaching groups of middleware. Once middleware has been attached to the router, it can be attached to an Express application itself.

To get see an Express router in action, create a new `hello_router` project.

```shell
mkdir hello_router
cd hello_router
```

Then, create a `greet.js` module and `server.js` module.

```shell
touch greet.js
touch server.js
```

Next, use NPM to initialize a `package.json` file.

```shell
npm init
```

Then, use NPM to install the `express` module locally and save it as dependency in the `package.json` file.

```shell
npm install --save express
```

Next, open the project in your text editor.

```shell
atom .
```

In the `greet.js` module, use an Express router to attach a group of greeting middleware. After the middleware has been attached, export the Express router.

```javascript
'use strict';

var express = require('express');
var router = express.Router();

router.get('/english', function(req, res) {
  res.send('Hello world');
});

router.get('/spanish', function(req, res) {
  res.send('Hola mundo');
});

module.exports = router;
```

Inside the `server.js` module, require the `greet.js` module and attach the router to an Express application. An Express router behaves like middleware itself, so you can use it as an argument to the `app.use()` method.

```javascript
'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

var greet = require('./greet');

app.use(greet);

app.listen(port, function() {
  console.log('Listening on port', port);
});
```

Save both modules and run the server with the `nodemon` command.

```shell
nodemon server.js
```

And you should see something like this.

![](https://i.imgur.com/6WPuMIc.png)

In a separate Terminal tab, send an HTTP request to the server.

```shell
http GET localhost:8000/english
```

And you should see something like this.

![](https://i.imgur.com/lZ3a5ei.png)

Then, send another HTTP request to the server.

```shell
http GET localhost:8000/spanish
```

And you should see something like this.

![](https://i.imgur.com/K2k51I2.png)

## Why is an Express router useful?

An Express router is useful because it allows you to organize a project's RESTful routes into separate, resource-specific file modules. For example, imagine your boss wants you to expand the `party` project to manage the following resources.

- Activities
- Drinks
- Foods
- Guests
- Prizes

Now, Node.js doesn't care if all the RESTful routes live in the same file. But it might be hard for you, as the developer, to build and maintain thousands of lines of code in a single file.

However, by using an Express router, you can split the RESTful routes for each resource into separate file modules. For example, it's common for an Express project to have a `routes` directory where all the route-related file modules can be stored.

```text
├── routes
│   ├── activities.js
│   ├── drinks.js
│   ├── foods.js
│   ├── guests.js
│   └── prizes.js
└── server.js
```

Each route-based file module would define the RESTful routes for their respective resource.

| RESTful Routes | File Modules           |
|----------------|------------------------|
| `/activities`  | `routes/activities.js` |
| `/drinks`      | `routes/drinks.js`     |
| `/foods`       | `routes/foods.js`      |
| `/guests`      | `routes/guests.js`     |
| `/prizes`      | `routes/prizes.js`     |

And a `server.js` module would require and attach all the resource-specific routers as well as any project-wide middleware.

```javascript
'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

var morgan = require('morgan');
var bodyParser = require('body-parser');

app.disable('x-powered-by');
app.use(morgan('short'));
app.use(bodyParser.json());

var activities = require('./routes/activities');
var drinks = require('./routes/drinks');
var foods = require('./routes/foods');
var guests = require('./routes/guests');
var prizes = require('./routes/prizes');

app.use(activities);
app.use(drinks);
app.use(foods);
app.use(guests);
app.use(prizes);

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
```

This kind of project structure can help developers understand and maintain a correct middleware chain while reducing the risk for accidental bugs and duplicate code.

## How do you use the Express router to organize RESTful routes?

Let's return to the `party` project from yesterday and create a new feature branch.

```shell
cd party
git checkout -b router
```

Next, create a resource-specific route module.

```shell
mkdir routes
touch routes/guests.js
```

Then, open the project in your text editor.

```shell
atom .
```

And add the following code the `routes/guests.js` route module.

```javascript
'use strict';

var fs = require('fs');
var path = require('path');
var guestsPath = path.join(__dirname, '../guests.json');

var express = require('express');
var router = express.Router();

router.get('/guests', function(req, res) {
  fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
    if (err) {
      console.error(err.stack);
      return res.sendStatus(500);
    }

    var guests = JSON.parse(guestsJSON);

    res.send(guests);
  });
});

router.get('/guests/:id', function(req, res) {
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

router.post('/guests', function(req, res) {
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

router.put('/guests/:id', function(req, res) {
  fs.readFile(guestsPath, 'utf8', function(readErr, guestsJSON) {
    if (readErr) {
      console.error(readErr.stack);
      return res.sendStatus(500);
    }

    var id = Number.parseInt(req.params.id);
    var guests = JSON.parse(guestsJSON);

    if (id < 0 || id >= guests.length || Number.isNaN(id)) {
      return res.sendStatus(404);
    }

    var guest = req.body.name;

    if (!guest) {
      return res.sendStatus(400);
    }

    guests[id] = guest;

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

router.delete('/guests/:id', function(req, res) {
  fs.readFile(guestsPath, 'utf8', function(readErr, guestsJSON) {
    if (readErr) {
      console.error(readErr.stack);
      return res.sendStatus(500);
    }

    var id = Number.parseInt(req.params.id);
    var guests = JSON.parse(guestsJSON);

    if (id < 0 || id >= guests.length || Number.isNaN(id) ) {
      return res.sendStatus(404);
    }

    var guest = guests.splice(id, 1)[0];
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

module.exports = router;
```

Then, in the `server.js` module, require the route module and use it to replace the route-specific middleware.

```javascript
'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

var morgan = require('morgan');
var bodyParser = require('body-parser');

app.disable('x-powered-by');
app.use(morgan('short'));
app.use(bodyParser.json());

var guests = require('./routes/guests');

app.use(guests);

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
```

Start your Express server.

```shell
nodemon serverExpress.js
```

And you should see something like this.

![](https://i.imgur.com/81pZjRq.png)

In a separate Terminal tab, send the following RESTful HTTP requests to your server and verify the HTTP responses.

```shell
http GET localhost:8000/guests
http GET localhost:8000/guests/0
http POST localhost:8000/guests name=Don
http PUT localhost:8000/guests/0 name=Kate
http DELETE localhost:8000/guests/0
```

Next, add and commit the latest changes.

```shell
git add .
git commit -m 'Refactor guests routes into a module'
```

Then, merge the commits into the `master` branch.

```shell
git checkout master
git merge router
```

With the commits merged in, it's safe to delete the feature branch.

```shell
git branch -d router
```

Now, deploy your project by pushing your local `master` branch to Heroku's `master` branch.

```shell
git push heroku master
```

Finally, send a RESTful HTTP requests to the server running on the production environment and verify the HTTP responses. Remember to replace `USERNAME` with your GitHub username.

```shell
http GET USERNAME-party.herokuapp.com/guests
http GET USERNAME-party.herokuapp.com/guests/0
http POST USERNAME-party.herokuapp.com/guests name=Don
http PUT USERNAME-party.herokuapp.com/guests/0 name=Kate
http DELETE USERNAME-party.herokuapp.com/guests/0
```

## Resources

### Node.js Modules Part 1

<iframe src="https://player.vimeo.com/video/142099942?byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

### Node.js Modules Part 2

<iframe src="https://player.vimeo.com/video/142102383?byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
