# Integrating with Okta

## Objectives

By the end of this lesson you will:

- Integrate your Express API with Okta
- Allow users to authenticate via the API using a [Public API](http://developer.okta.com/docs/api/resources/authn.html#public-application)

## Why do this?

Okta provides a rich feature set for password recovery, multi-factor authentication, mobile SDKs, browser login widgets etc...  They allow you to focus on your app's business logic, not the auth plumbing.

## Get Setup

Visit https://www.okta.com/developer/signup/stormpath/ and sign up:

Go to your email to finish setting up your account.

Follow the [instructions here](http://developer.okta.com/docs/api/getting_started/api_test_client.html) to get setup with the API Key and test that everything works in Postman.

Once your API key is working in Postman, you should continue.

## Install and configure dotenv

Before you write any code you want to be _sure_ you never add security credentials to git, even for a single commit.

To keep secrets out of your app, use the `dotenv` npm package.

Dotenv is a package that makes it easy to load per-project ENV variables locally.

### Add the dependency

```
yarn add dotenv
```

At the top of `app.js` add:

```js
require('dotenv').config()
```

### Create the .env files

Next, create two files:

```
touch .env
touch .env.example
```

Add `.env` to `.gitignore`

```
echo .env >> .gitignore
```

Add a _sample_ to `.env.example` - this file be be committed and pushed so other developers know which keys they need to define.

```
# in .env.example
OKTA_API_KEY=api-key-here
OKTA_API_HOST=your-prefix.oktapreview.com
```

Then in `.env` paste the same code, but fill it in with your _real_ values for development.

## Make API calls

Here's a sample UsersController with a `list` method that allows you to list users:

```js
const http = require('https')

class UsersController {

  async list(req, res, next) {
    try {

      const options = {
        method: 'GET',
        hostname: process.env.OKTA_API_HOST,
        path: `/api/v1/users?limit=25`,
        rejectUnauthorized: false,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `SSWS ${process.env.OKTA_API_KEY}`
        }
      }

      const user = await new Promise((resolve, reject) => {
        http.request(options, (res) => {
          res.setEncoding('utf8')
          const data = []
          res.on('data', chunk => data.push(chunk))
          res.on('end', () => {
            const raw = data.join('')
            resolve(JSON.parse(raw))
          })
        }).end()
      })

      res.json({user})
    } catch (e) {
      next(e)
    }
  }

}

module.exports = UsersController
```

## Deploy to Heroku

Dotenv has no effect on Heroku because on Heroku you have real ENV variables.  So you need to set those:

```
heroku config:set OKTA_API_KEY=prod-api-key OKTA_API_HOST=prod-api-host -a your-production-app
```

Do that before you push, and your code will work the first time!
