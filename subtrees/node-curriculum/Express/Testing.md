## Testing with Mocha, Chai and Supertest

### Introduction

By now, you've built quite a few different express apps. In some cases, you've even had to build apps that pass a suite of tests. But you haven't yet had to write any tests yourself, at least not for a full-stack web project.

As you might expect, writing a tests for a web app is more complicated than writing tests for just one or two javascript functions. For example, how do you tell your test that it needs to go to a certain page in your app, or try to delete something from your database? As we'll see shortly, in order to really test our apps, we'll need to install another node module: [supertest](https://www.npmjs.com/package/supertest).

### Objectives

By the end of this lesson, you should be able to:

* Write tests for RESTful routes in Express apps using Supertest
* Write tests to handle errors in your Express apps
* Use express to send status codes in your responses

## Initial Setup

Writing tests for views is another topic altogether (and can be much more challenging), so for now let's keep things simple by building an express app that just returns JSON. Go through the following steps to create the boilerplate for your application:

* make a directory called `sloths_app`
* inside your directory, initialize a git repo, npm, and knex.
* create and set up your database (don't worry about any tables for now)
* Install the following node modules: `express`, `pg`, `knex`, and `body-parser`
* Install the following node modules for development: `chai`, `mocha`, and `supertest`
* Add and commit!

(We've intentionally omitted some details here - if you're having trouble getting through this process, it just means you need some more practice setting up CRUD apps in Express from scratch.)

Once you've got your boilerplate set up, let's create a `test` folder, and inside of it, a `test-app.js`. This is where we'll be writing all of the tests for our application.

Since we're still using `mocha` and `chai`, the overall structure of our test file should look familiar to you. The main difference is that, with `supertest`, we can make HTTP requests from our test file. This enables us to write test for our server side code (for example, checking that a GET to `/sloths` gives us a list of all of our sloths).

Of course, in order to use any of these node modules, we need to start by requiring them. We'll also need to require our application code, and set the environment to `test` (as opposed to `development`). So in your `test-app.js`, open with the following:

```js
process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');
const knex = require('../knex');
```

Before we can write tests, we now need to set up our test environment in knex! Be sure to modify your `knexfile` with settings for your `test` environment. The config should look something like this:

```js
'use strict';

module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://localhost/knex_sloths_test',
    debug:true
  }
};
```

(Be sure to create any additional databases that you need!)

## Writing our First Test

Our goal will be to write tests for 5 restful routes:

* `GET /sloths`
* `GET /sloths/:id`
* `POST /sloths`
* `PUT /sloths/:id`
* `DELETE /sloths/:id`

Let's make a describe block for each one of these routes:

```js
describe('GET /sloths', () => {
});

xdescribe('GET /sloths/:id', () => {
});

xdescribe('POST /sloths', () => {
});

xdescribe('PUT /sloths/:id', () => {
});

xdescribe('DELETE /sloths/:id', () => {
});
```

(What's the difference between `describe` and `xdescribe`?

Next, let's start with the first route. Since we want our server to return JSON back to us, let's first write a little test to confirm that when we make a `GET` to `/sloths`, we get JSON back. Just like with the tests we wrote in Unit 1, the code we'll write for this test will be wrapped inside of an `it` block:

```js
describe('GET /sloths', () => {
	it('responds with JSON', done => {
		request(app)
			.get('/sloths')
			.expect('Content-Type', /json/)
			.expect(200, done);
	});
});
```

What is this test doing? We're making a get request to `/sloths`, and expecting to a 200 status code in the response along with some JSON. The `done` method tells the test when we're finished; without it, the test won't know when it's finished, and you'll get a timeout error (we'll see this in just a minute).

Now that we've written a failing test, let's write some code to make the test pass! Since we're not actually testing very much here, it's possible to get the test to pass with a minimal amount of code. After writing out the typical boilerplate for setting up an Express app, let's handle the GET to `/sloths` in the following way:

```js
app.get('/sloths', (req, res) => {
  res.send({});
});
```

Now our tests should pass!

## `beforeEach`, and Writing Our Second Test

While this passes, our tests, it also doesn't really do what we want; the server should return data on all of our sloths, not just an empty object. However, at this stage, there's nothing in our test database, so there isn't really much we can test for.

The solution here is to put some data into our test database. It'll be easiest to reason about our test code if the database is in the same state before any test runs -- especially when we start modifying the database with POST, PUT, and DELETE requests -- so let's set some initial state in the database using a `beforeEach` at the top of our test code. The code inside of the `beforeEach` will run before each test. We can also clear our database using an `afterEach`. So our setup and teardown code might look something like this:

```js
beforeEach(done => {
  Promise.all([
    knex('sloths').insert({id: 1, name: 'Jerry', age: 4, image: 'https://gifts.worldwildlife.org/gift-center/Images/large-species-photo/large-Three-toed-Sloth-photo.jpg'}),
    knex('sloths').insert({id: 2, name: 'Sally', age: 2, image: 'http://www.wildlifeextra.com/resources/listimg/world/Africa/3_toed_sloth@large.jpg'}),
    knex('sloths').insert({id: 3, name: 'Sawyer', age: 1, image: 'http://www.rainforest-alliance.org/sites/default/files/styles/responsive_breakpoints_theme_rainforest_wide_1x/public/slideshow/header/three-toed-sloth.jpg'})   
  ]).then(() => done());
});

afterEach(done => { knex('sloths').del().then(() => done()) });
```

Let's now write a more robust second test, one that verifies the response has the desired data on our sloths. The test should look like this:

```js
describe('GET /sloths', () => {
	it('responds with JSON', done => {
		request(app)
			.get('/sloths')
			.expect('Content-Type', /json/)
			.expect(200, done);
	});

	it('returns an array of all sloth objects when responding with JSON', done => {
    request(app)
      .get('/sloths')
      .end((err, res) => {
        expect(res.body).to.deep.equal([{
          id: 1,
          name: 'Jerry',
          age: 4,
          image: 'https://gifts.worldwildlife.org/gift-center/Images/large-species-photo/large-Three-toed-Sloth-photo.jpg'
        }, {
          id: 2,
          name: 'Sally',
          age: 2,
          image: 'http://www.wildlifeextra.com/resources/listimg/world/Africa/3_toed_sloth@large.jpg'
        }, {
          id: 3,
          name: 'Sawyer',
          age: 1,
          image: 'http://www.rainforest-alliance.org/sites/default/files/styles/responsive_breakpoints_theme_rainforest_wide_1x/public/slideshow/header/three-toed-sloth.jpg'
        }]);
        done();
      });
  });
});
```

There are a few differences between this test and the last one. Note the use of the `end` method: this is what performs the request; inside of the request you then have access to the response. Once we have the response body, we're checking object equality (what's known as a deep equals comparison) to check that the objects in the response correspond to the data in our database.

Run the tests, and you should see this one failing. That's because our app code always just returns an empty object. At this point, we could go back to our server and fix that code, but since today is all about testing, let's write some more failing tests first.

### Exercise

Write some failing tests for `GET /sloths/:id`. You should write tests to:

* Verify that the server returns JSON
* Verify that the server returns data on the sloth with the given id (i.e. a GET to `/sloths/1` should return data on the sloth with an id of 1
* BONUS: Verify that the server returns a 404 error and custom message if there is no sloth with the given id

## Testing our POST Route

Let's move on to writing tests for creating new sloths. One of the big differences here is that we'll need to create a new sloth in our test, which we can then try to add to our database. So inside of our POST describe block, we can start by creating a new sloth:

```js
describe('POST /sloths', () => {

  var newSloth = {
    sloth: {
      id: 4,
      name: 'Veronica',
      age: 8,
      image: 'http://www.wherecoolthingshappen.com/wp-content/uploads/2016/01/1200.jpg'
    }
  };

});
```

Note that we are scoping `newSloth` just to this describe block, since we won't need it in order to test any of our other routes.

Now we can write start writing some tests. Let's begin, as before, by just checking that the server sends back JSON:

```js
describe('POST /sloths', () => {

  var newSloth = {
    sloth: {
      id: 4,
      name: 'Veronica',
      age: 8,
      image: 'http://www.wherecoolthingshappen.com/wp-content/uploads/2016/01/1200.jpg'
    }
  };

  it('responds with JSON', done => {
    request(app)
      .post('/sloths')
      .type('form')
      .send(newSloth)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
```

Here we are posting to `/sloths`, and passing in `newSloth` as though it the data had been sent over via a form. As before, we expect a 200 status code and to get JSON back.

Of course, we should probably do more than this. Let's also check to be sure the new sloth gets added to the database:


```js
describe('POST /sloths', () => {

  var newSloth = {
    sloth: {
      id: 4,
      name: 'Veronica',
      age: 8,
      image: 'http://www.wherecoolthingshappen.com/wp-content/uploads/2016/01/1200.jpg'
    }
  };

  it('responds with JSON', done => {
    request(app)
      .post('/sloths')
      .type('form')
      .send(newSloth)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('adds the new sloth to the database', done => {
    request(app)
      .post('/sloths')
      .type('form')
      .send(newSloth)
      .end((err, res) => {
        knex('sloths').select().then(sloths => {
          expect(sloths).to.have.lengthOf(4);
          expect(sloths).to.deep.include(newSloth.sloth);
          done();
        });
      });
  });

});
```

Both these tests should be failing. Let's write a couple more:

* We haven't specified what should be in the response to a POST request. Let's have the server send back the newly created sloth (this would be helpful in a single app if, for instance, you wanted to immediately add the new sloth's information to a list of all the sloths).
* BONUS: Write a test to do some error handling. For example, if the user tries to create a sloth with an age that isn't a number, the database will not be able to save the sloth. In this case, write a test to check that the app sends the user a 400 status code and an error.

## Testing our PUT Route

Our tests for PUT will look quite similar to those for POST. We'll still need to start with a sloth object that we'll be using throughout our tests:

```js
describe('PUT /sloths/:id', () =>{

  var updatedSloth = {
    sloth: {
      name: 'Homunculus',
      age: 500,
      image: 'http://i878.photobucket.com/albums/ab344/TheScav/FMA%20Characters/sloth.png'
    }
  };

});
```

Just to keep things simple, let's again start by testing that the server returns JSON. Let's also verify that the request updates the database:

```js
describe('PUT /sloths/:id', () =>{

  var updatedSloth = {
    sloth: {
      name: 'Homunculus',
      age: 500,
      image: 'http://i878.photobucket.com/albums/ab344/TheScav/FMA%20Characters/sloth.png'
    }
  };

  it('responds with JSON', done => {
    request(app)
      .put('/sloths/1')
      .type('form')
      .send(updatedSloth)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('updates the sloth in the database', done => {
    request(app)
      .put('/sloths/1')
      .type('form')
      .send(updatedSloth)
      .end((err, res) => {
        knex('sloths').where('id', 1).first().then(sloth => {
          expect(sloth.name).to.equal(updatedSloth.sloth.name);
          expect(sloth.age).to.equal(updatedSloth.sloth.age);
          expect(sloth.image).to.equal(updatedSloth.sloth.image);
          done();
        });
      });
  });

});
```

As you can see, these tests are very similar to the ones we've written before.

Now try your hand at writing the following additional tests to verify that the server:

* returns the updated sloth in the response
* BONUS: returns a 400 error if the user tries to update the sloth with bad data (i.e. an age that isn't a number)
* BONUS: returns a 404 error if the user tries to update a sloth that isn't there

## Testing our DELETE Route

Having done PUT and POST, the tests for DELETE should be very similar. Try to write them on your own as an exercise. Write tests to verify that the server:

* responds with JSON
* removes the given sloth from the database
* returns the deleted sloth in the response
* BONUS: returns a 400 error and custom message if there is no sloth with the given id

## Red, Green, Refactor

By now, you should have 17 failing tests (red) and only one passing test (green). Now's the time to build out the rest of your sloth app to try to make all the tests pass. Don't worry about any views for now; this should mostly be a review of CRUD on a single resource. When all the tests pass, congratulations! Now you can refactor your code if there are places where it doesn't seem very DRY, or if you're satisfied with what you've done, you can call it a day.

## Homework

[Movie Testing App](https://github.com/gSchool/movie_testing_app)
