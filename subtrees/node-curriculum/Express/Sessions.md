# Baking Cookies Part II: Sessions

## Objectives

By the end of this lesson you will be able to:

- Describe the purpose and function of a session.
- Store a session in a cookie.
- Check for an existing session.
- Clear a session from a cookie.
- Use environment variables to store session key.

***

## Sessions

Broadly speaking, a session refers to an ongoing dialogue between two system. In the case of Express, the systems are the client and the server.

When a client makes a request to the server, the server creates a session token to identify the client. The server can then use that session token throughout the ongoing dialogue to keep track of who the client is.

Essentially, a session is a token which can provide:

- a way to identify the client.

A session can be stored:

- in databases like `mongo` or `postgres`.
- in memory data stores like `redis` or straight up node.
- in a `cookie` or a `JWT`.
- in many other forms.

Since anybody can create a cookie and falsify information, like a session token, the server needs a way to ensure the token is authentic and not fraudulent.

A session token can be signed cryptographically using secret keys to ensure the data has not been tampered with or falsified.

The server then sends the session token along with the signature.

The client responds with the session token and signature.

The server verifies signature by resigning the session token with it's secret key.

If the signatures match the server can be confident the session has not been modified.


**You Do:**

- Talk to everyone at your table, explain session token signing as if they were someone with no technical background.

## Example Authentication flow

1. Client sends login credentials to server
1. Server verifies credentials with database
1. Server sends back a cookie with a signed session set to the users id, username, or email
1. Client stores the cookie and sends it with each subsequent request.
1. Server verifies the cookie's signature, if it is valid then the user is authenticated.
1. The server can log out the client by clearing the cookie or clearing the session from the cookie.

***

## Sessions in Express

[Cookie-Session](https://github.com/expressjs/cookie-session) is a piece of middleware that is useful for storing, reading and signing sessions and storing them in a cookie.

Cookie session modifies the `req` object:

- `req.session` represents the session stored in the cookie.
- `req.sessionOptions` represents the settings of the session.

This means it provides:

- A way to set cookies and send them to the client.
- A way to sign cookies and verify their authenticity.

**You Do:**

Watch the following video, as you do consider the following questions:

- How do you set a cookie session using `cookie-session`?
- How do you clear a cookie session using `cookie-session`?
- How do you verify a cookie session using `cookie-session`?

<iframe src="https://player.vimeo.com/video/141306923?byline=0&portrait=0" width="500" height="375" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

### Using Cookie-Session

**You Do:** Follow along with the rest of the lesson.

Ensure you have the [cookie-session](https://github.com/expressjs/cookie-session) docs pulled up.

Create a and navigate into a directory for the session project.

Use `npm init` to create a `package.json`.

Use `npm` to install and save `cookie-session`, `express`

Set up the `cookie-session` middleware:

```javascript
var express = require('express');
var cookieSession = require('cookie-session')

var app = express();

app.use(cookieSession({
  name: 'session', //name of cookie to set
  // other cookie attributes like maxAge, expires,  domain can be set here
  keys: ['some_secure_key']
}));

app.get('/', function(){
  res.end('Hello Express')
})

app.listen(8080);
```

Use `node` or `nodemon` to launch the program.

Open up your browser to `localhost:8080` and ensure it reads Hello Express

Update the route to set a session:

```javascript
app.get('/', function(req,res){

  // set a session value
  req.session.views = 0;

  res.end();
});
```

Open up the `storage` and look for the cookie you sent.

Update the route to send the number of views to the user

```javascript
app.get('/', function(req,res){

  req.session.views = 0;

  res.end('<h1>I\'ve visited this page ' + req.session.views + 'times!</h1>');
});
```

Open up your browser and test.

Finally, increment the view counter:

```javascript
app.get('/', function(req,res){

  // check if the session exists already
  // this is how you would check if the user is logged in
  // if(req.session.username)
  if(req.session.views){
    req.session.views = parseInt(req.session.views, 10) + 1;
  }else{
    req.session.views = 1;
  }


  res.end('<h1>I\'ve visited this page ' + req.session.views + 'times!</h1>');
});
```

Test in browser.

Lets add a route to check if a user has a session.
This logic could be used to check if a user is authenticated.

```javascript
app.get('/check-session', function(req, res){

  var response = 'user does not have a session';

  if(req.session.views){
    response = 'user has a session';
  }

  res.send('<h1>'  + response + '</h1>');
});
```


Finally, add a route that will delete the session

```javascript
app.get('/reset', function(req, res){

  // delete the session
  req.session = null;

  res.end('<h1>Counter Reset</h1><a href="/">Start Counting Again!</a>');
});
```

Check in your browser storage that the cookie is gone.

For fun, let's add a link to the reset page:

```javascript
app.get('/', function(req,res){

  if(req.session.views){
    req.session.views = parseInt(req.session.views, 10) + 1;
  }else{
    req.session.views = 1;
  }

  res.end('<h1>I\'ve visited this page ' + req.session.views + 'times!</h1><a href="/reset">Start Over</a>');
});
```

Congrats! You now know how to use `cookie-session`.

### Generating secure keys and using dotenv to load them.

In the example above, we hard coded the key `some_secure_key`. We don't want to hard code our key because:

- it is hard to change.
- anyone who has access to the source code has access to the key.

In addition, `some_secure_key` could be easily brute forced by an attacker.

In a production environment you don't want anybody to know your keys. Otherwise, someone can use the keys to sign their own sessions. This is very bad because the malicious user can then falsify data and galavant around as an admin or someone else.

Let's create some secure keys:

**You Do:**

Generate at and save at least 3 keys using the following command:

```bash
node -e "require('crypto').randomBytes(48, function(ex, buf) { console.log(buf.toString('hex')) });"
```

> FUN: Try to break down and understand the command.

Since hard coding the keys is poor practice, an environment variable should be used for the keys

**You Do**

Create a `.env` file to store the keys:

```bash
KEY_ONE=somevalue
KEY_TWO=somevalue
KEY_THREE=somevalue
```

**You Do**

1. Update your project to make use of `dotenv` to load the `.env` file.
1. Replace the hard coded keys with the environment variable keys.

```javascript
//loads all key value pairs from .env file into shell as environment variables
require('dotenv').config();

var express = require('express');
var cookieSession = require('cookie-session')

app.use(cookieSession({
  name: 'session'
  // use environment variables to store secure information
  keys: [process.env.KEY_ONE, process.env.KEY_TWO, process.env.KEY_THREE]
}));
```

***

## Resources

- [Github: Cookie-Session](https://github.com/expressjs/cookie-session)
- [Wikipedia: HTTP Cookie](https://en.wikipedia.org/wiki/HTTP_cookie)
- [Github: dotenv](https://github.com/motdotla/dotenv)
