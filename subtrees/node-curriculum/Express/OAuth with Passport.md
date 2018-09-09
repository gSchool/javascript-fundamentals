# OAuth with Passport.js

## Objectives

There are two main goals for this lesson: to get familiar with Passport, and to hone your documentation interaction abilities.  Note "documentation interaction" - not "reading documentation".  Documentation is rarely a step-by-step tutorial.  Instead, it's an active process of knowing what to look for, seeking it out, pattern matching and only pulling in the few lines necessary to satisfy the errors you are getting.

By the end of this lesson, you should be able to:

- Describe and explain OAuth and it's role in web authentication (content)
- Carefully read error messages generated from framework code and reason through possible causes based on current knowledge of Express
- Use targeted searches in documentation to answer specific questions or inform hypothesis
  - use CMD+F on web pages
- Keep track of where you were on notecards, so you can maintain your place even when you have to solve smaller problems

You do _not_ need to memorize every step in this document.  Using framework code is all about combining what you know with your critical thinking skills and targeted documentation searches.  Most of this lesson is about non-cognitive behaviors.

## OAuth (content)

The basic OAuth2 web flow is:

![](https://docs.oracle.com/cd/E39820_01/doc.11121/gateway_docs/content/images/oauth/oauth_web_server_flow.png)

Referenced From: https://docs.oracle.com/cd/E39820_01/doc.11121/gateway_docs/content/oauth_flows.html

Some guiding questions are:

- How does Google / Facebook / LinkedIn etc... communicate with your _local_ web app during development?  Isn't that private (aka not published on the internet)??
- What part of your existing authentication / authorization flows does this replace?
- Why would you want to authenticate with Google / Facebook instead of storing the emails / passwords yourself?

Resources:

- https://developer.linkedin.com/docs/oauth2
- https://github.com/auth0/passport-linkedin-oauth2
- http://passportjs.org/docs
- http://passportjs.org/docs/configure#configure
- https://apigee.com/console/linkedin
- http://docs.mongodb.org/manual/reference/method/db.collection.update/#db.collection.update

## Activities

## Clear the stage

**Clear the stage**: Close any terminal tabs, atom windows, chrome tabs etc... that you have open.  Just have this doc open to start.

**Know what and why**: Have you really read the objectives and discussion above?  There's a lot of copy-pasting happening today - it'll be easy to forget _why_ you are here.  Keep the big picture in mind as you develop.

**Value process over product**: While finishing the exercise is important, it's not a race.  Take your time - research things you have questions about, _really_ read all of the questions here and discuss them with classmates.  There's no prize for finishing first :)


### Walkthrough - Start a new Express app

Create a new express app:  
`express --ejs --git linkedInLogin`  

Install your dependencies:
`cd linkedInLogin`  
`npm install`  
`npm install --save knex`  
`npm install --save passport`  
`npm install --save passport-linkedin`  
`npm install --save cookie-session`  
`npm install --save dotenv`  

Now initialize your app:  
`knex init`  
`git init`  
`git add .`  
`git commit -am"initial commit"`  

Next, make a `db` directory and a `knex.js` file  
`mkdir db`  
`touch db/knex.js`  

Now, add your config to `knex.js` and commit:  

**knex.js**

```javascript
var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
module.exports = require('knex')(config);
```

`git add db`  
`git commit -am"added db config"`  

Go to LinkedIn, then setup a new [oAuth Application](https://www.linkedin.com/developer/apps).
Most items in that form don't matter- the logo, application name, and description will be shown to the user who is trying to login to your app when you request access to their account. You'll also need to provide a logo for your app that is the same pixel length and width. The email, url, and website don't require you to know them or have them set up beforehand, just put something there because you can always change it later.

Once you have the client ID and client secret, you can store it in your .env file like so:

```shell
LINKEDIN_API_KEY='your client ID goes here'
LINKEDIN_SECRET_KEY='your client secret goes here'
```

Also, on the linkedin app config page, you'll see a field marked **Authorized Redirect URLs:**. Set it to "http://localhost:3000/auth/linkedin/callback".

### Implementing Passport

Next, create a routes file called `auth.js` and import it in `app.js`.

#### auth.js
```javascript
var express = require('express');
var router = express.Router();

router.get('/linkedin',
  passport.authenticate('linkedin', { state: 'SOME STATE'  }),
  function(req, res){
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
});

router.get('/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/',
  failureRedirect: '/'
}));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;

```

Now, add the following lines to `app.js` (in the appropriate places- see [this example](https://github.com/jaredhanson/passport-linkedin/blob/master/examples/login/app.js) for more details):

#### app.js
```javascript
var passport = require('passport');
var cookieSession = require('cookie-session');
var LinkedInStrategy = require('passport-linkedin').Strategy;

require('dotenv').load();

//get auth.js module
var auth = require('./routes/auth');

//add to middleware area, after bodyparser, before routes
app.use(cookieSession({
  name: 'session',
  keys: [process.env['SECRET_KEY']]
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  //later this will be where you selectively send to the browser an identifier for your user, like their primary key from the database, or their ID from linkedin
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  //here is where you will go to the database and get the user each time from it's id, after you set up your db
  done(null, obj);
});

passport.use(new LinkedInStrategy({
    consumerKey: process.env['LINKEDIN_API_KEY'],
    consumerSecret: process.env['LINKEDIN_SECRET_KEY'],
    callbackURL: "http://localhost:3000/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_basicprofile'],
  },
  function(token, tokenSecret, profile, done) {

      // To keep the example simple, the user's LinkedIn profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the LinkedIn account with a user record in your database,
      // and return that user instead (so perform a knex query here later.)
      return done(null, profile);
}));

//mount auth.js middleware
app.use('/auth', auth);

```

## Resources

[Passport](http://passportjs.org/docs)  
[passport-linkedin](https://github.com/jaredhanson/passport-linkedin)  
[Linkedin Passport Example](https://github.com/jaredhanson/passport-linkedin/blob/master/examples/login/app.js)  

## Assignment:
Read and complete the following exercise:  
[Express + Passport + Linkedin](https://github.com/gSchool/express-passport-linkedin)  

**Note:** The above exercise uses handlebars, but you may use the templating language of your choice. Make sure you understand what each command does before you copy and paste.
