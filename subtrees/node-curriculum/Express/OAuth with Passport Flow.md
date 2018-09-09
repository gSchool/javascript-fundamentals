# OAuth with Passport

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/452/sequence-diagram.png)

> **NOTE**: The steps below correspond to the numbers in the diagram

## Step 1: Initial Request

To initiate a session, your user visits `/auth/github`.

This is an endpoint that you need to setup yourself, like so:

```js
app.get('/auth/github', passport.authenticate('github'));
```

> Question: What must `passport.authenticate('github') return, in JavaScript?`

> Answer: A function that has 3 parameters: `req, res, next`

`passport.authenticate('github')` does the following:

- generates a url
- redirects you to that URL

```
https://github.com/login/oauth/authorize?
  response_type=code
  &redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fgithub%2Fcallback
  &client_id=someclientid
```

### Step 1 Preparation

In order for Step 1 to work, you need to do the following:

- Create an Application in GitHub
- Grab the Client ID and Secret
- Run `yarn add passport passport-github`
- Add the following to `app.js`
  ```js
  const passport = require('passport')
  const GitHubStrategy = require('passport-github').Strategy
  app.use(passport.initialize())

  passport.use(new GitHubStrategy(
    {
      clientID: 'your-client-id',
      clientSecret: 'your-client-secret',
      callbackURL: 'http://localhost:3000/auth/github/callback',
      userAgent: 'your-app-name.your-domain.com'
    },

    // will be filled in later
    function() {
    }
  ));
  ```

`GitHubStrategy` is a pretty simple package.  It contains basic info about the endpoints and how to deal with them, such as:

- The Authorization server URL
- The Resource server URL (the API)
- A function that can parse the results of the API

When you call `passport.use(new GitHubStrategy({}, fn))` you are doing two things:

- "Filling in the blanks" of the GitHubStrategy with your app data
- Providing a function that will be called after the API data comes back
  - (Step 3 in the drawing above)

## Step 2: Setting up the callback route

Recall where we are:

- A user visited `/auth/github`
- Your `app.get('/auth/github', ...)` route sent them to GitHub
- GitHub asked you to login / authorize the app
- GitHub redirected you to `/auth/github/callback`

So now you need to setup that route:

```js
app.get('/auth/github/callback',
  passport.authenticate('github', { successRedirect: '/',
                                      failureRedirect: '/login' }))
```

This line sets up a route that:

- Looks at the `req.query` for a code
- If it finds it
  - Makes a call to GitHub to get an Access Token
  - Uses the Access Token to make a call to GitHub's API
  - Call the function you passed to `new GitHubStrategy({}, fn))`

### Step 3 / 4: Handle the API data

Now that you have API data, you need to do something with it:

```js
  passport.use(new GitHubStrategy(
    {
      clientID: 'your-client-id',
      clientSecret: 'your-client-secret',
      callbackURL: 'http://localhost:3000/auth/github/callback',
      userAgent: 'your-app-name.your-domain.com'
    },

    // This function gets called after the GitHub API call returns
    function onSuccessfulLogin(token, refreshToken, profile, done) {

      // This is a great place to find or create a user in the database
      // This function happens once after a successful login
      User.findOrCreateBy(profile.email).then(user => {

        // Whatever you pass to `done` gets passed to `serializeUser`
        done(null, {token, user});
      })
    }
  ));
```

> **NOTE** I named this function `onSuccessfulLogin` just so we can refer to it

The `onSuccessfulLogin` function gets called once after a successful login.  

## Step 4:  

You typically find/create a user in your database at this point, then call the `done` function.  Whatever you pass to the `done` function will also get passed to `serializeUser`.

## Step 5: serializeUser

Recall that at this point:

- The user has authenticated with GitHub
- You have an accessToken
- You have their user data from the GitHub API
- You've created a user in the database, and you have the user's database ID

Now you need to help connect all this information to your session.

To get the session wired up, you need 3 things:

- A session library of some sort
- A `serializeUser` function
- `app.use(passport.session())`

The lines you will have to add look like this:

```js
// you could also use express-session here
const cookieSession = require('cookie-session')
app.use(cookieSession({ secret: 'keyboard cat' }));

// this wires up passport's session code to your session
app.use(passport.session())

passport.serializeUser((object, done) => {
  done(null, {token: object.token, id: object.profile.id})
})
```

In `serializeUser`, whatever you pass to `done` is the data that will be stored in your session (in this case in the session cookie).

You almost definitely want to put your user's database ID in the session, and you _may_ also want to put their access token (or you could store it in a database, or ignore it if you don't need to make further API calls).

## Step 6: Finding the user on every request

Every subsequent request will need to:

- Read the session to find the user's ID
- Find the user from that database with that ID
- Set `req.user` to that user object

So every request will trigger the function: `deserializeUser`:

```js
passport.deserializeUser((object, done) => {
  User.findById(object.id).then(user => {
    done(null, user)
  })
})
```

Whatever you pass to `done` will be available to you as `req.user`
