### Express Custom Middleware and Form Validation

### Objectives

* Use application-level middleware to redirect all unauthenticated requests to all routes that appear "after" that middleware
* Use middleware sub-stacks to redirect all unauthorized requests to all routes that use that middleware
* Describe what Express middleware is and how next() works
* Draw a middleware chain when given an express app (including both application-level and route-level middleware)

### Key Terms

**Authentication**  
This refers to the process by which a server identifies a client
**Authorization**  
This refers to the process by which a server decides what a client can access

### Overview
This learning experience should prepare you to provide fine-grained access control to clients, and organize your authentication and authorization code.

Watch the 3 videos below and complete the following repo:

https://github.com/gSchool/express-middleware-practice

## Overview of Authorization

<iframe src="https://player.vimeo.com/video/137020748?byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

With Knex/Postgres:

```javascript
router.get('/articles/:id/edit', function(req, res, next){
	knex('articles').where({id:req.params.id}).then(function (article) {
		if (req.session.userId === article.creatorId) {
		res.render('edit', {article: article})
		} else {
			res.redirect('/signin')
		}
	})
});
```

### Further Reading
[Express Middleware](http://expressjs.com/en/guide/using-middleware.html) - Helpful if you find yourself asking, "what is middleware?"

## Middleware Theory

<iframe src="https://player.vimeo.com/video/137023216?byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

#### Examples from the video:

#### Mount Paths

```javascript
// will apply to 100% of all requests
app.use(function f1(req, res, next) {
	next()
})

// will only apply to requests to /about
app.use("/about", function f2(req, res, next) {
	res.send("here")
})

// will only apply to requests to /users
app.use("/users", function f3(req, res, next) {
	res.send("here")
})

```

#### HTTP Verbs (methods)

```javascript
// will apply to 100% of all requests
app.use(function f1(req, res, next) {
	next()
})

// will only apply to POST requests to /about
app.post("/about", function f2(req, res, next) {
	res.send("here")
})

// will only apply to GET requests to /users
app.get("/users", function f3(req, res, next) {
	res.send("here")
})

```

#### next()

```javascript
app.use(function f1(req, res, next) {
	next()
})

app.use(function f2(req, res, next) {
	res.send("here")
})

app.use(function f3(req, res, next) {
	res.send("not here")
})

```

#### next() matches mount path

```javascript
app.use('/about', function f1(req, res, next) {
	next()
})

app.use('/foo', function f2(req, res, next) {
	res.send("not here")
})

app.use('/about', function f3(req, res, next) {
	res.send("here")
})

```

#### next() matches method

```javascript
app.get('/about', function f1(req, res, next) {
	next()
})

app.post('/about', function f2(req, res, next) {
	res.send("not here")
})

app.get('/about', function f3(req, res, next) {
	res.send("here")
})

```

#### Routes are middleware

```javascript
// in app.js
app.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

// Similar to...

// in routes/index.js
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});
```

```javascript
// in routes/index.js
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});
module.exports = router;

// -------------------------------

// in app.js
var routes = require('./routes/index');
var users = require('./routes/users');

app.use('/', routes);
app.use('/users', users);

```

**`GET /about`**  
```javascript
router.use(function f1 (req, res, next) {
	next()
});

router.get('/about', function f2 (req, res, next) {
	res.send('here')
});

router.use('/about', function f3 (req, res, next) {
	res.send('over')
});

router.get('/other', function f4 (req, res, next) {
	res.send('not here')
});

```

**`GET /other`**  
```javascript
router.use(function f1 (req, res, next) {
	next()
});

router.get('/about', function f2 (req, res, next) {
	res.send('skips')
});

router.use('/about', function f3 (req, res, next) {
	res.send('here')
});

router.get('/other', function f4 (req, res, next) {
	res.send('not here')
});

```


## Middleware for Authentication / Authorization

<iframe src="https://player.vimeo.com/video/137031433" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Assignments
* [Express Middlware Practice](https://github.com/gSchool/express-middleware-practice)
* [https://github.com/gSchool/intro-to-express-validations-EXERCISE-1](https://github.com/gSchool/intro-to-express-validations-EXERCISE-1)
* [https://github.com/gSchool/intro-to-express-validations-EXERCISE-2](https://github.com/gSchool/intro-to-express-validations-EXERCISE-2)

## Resources

* http://alexperry.io/javascript/2015/08/06/what-is-express-middleware.html
