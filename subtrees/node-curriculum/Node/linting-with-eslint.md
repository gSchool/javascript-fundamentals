# Linting with ESLint

## Objectives

By the end of this lesson you will:

- Add linting to your server-side Node app

## Why?

Linting can help your team adhere to coding standards so that you minimize merge conflicts.  It takes some time to get used to, but once you get used to the rules of the project's linter, you should spend very little time mucking around with whitespace-based merge issues.

## Disclaimer!

You own the linting rules.  If you _ever_ write suboptimal code to satisfy a linter, you are doing it _wrong_.  Change the linter.  Linters are not some religious law and you will not be punished for relaxing a linter rule.  A linter is a tool with a very specific purpose: save time on the little stuff so you can focus on the big stuff.

If a linter is making development terrible, talk to your team and update the rules.

## Overview

1. Go to https://www.npmjs.com/package/eslint
1. Follow instructions to install

It's probably:

```
yarn add eslint --dev
./node_modules/.bin/eslint --init
```

This starts a wizard:

1. You may want to choose `airbnb` or `standard` as a stricter starting point.  Experiment and see what feels right.
1. You should use the `js` format so it's easier

Run the linter against your project to see it in action:

```
./node_modules/.bin/eslint .
```

## Configure

You probably want to override things.  You can do that in your `.eslintrc` file.  Here's an example `.eslintrc.js` file:

```js
module.exports = {
  extends: "airbnb-base",
  rules: {
    semi: 0,
  },
  plugins: [
    "import"
  ],
  env: {
    node: true
  },
  globals: {
    describe: true,
    it: true,
    beforeEach: true,
    afterEach: true,
  }
};
```

## Adding to package.json

You can run eslint lots of ways, but you almost certainly want to run it with your tests.

One super simple way to get started is to add this to your test script in `package.json`

```json
  "test": "NODE_ENV=test nyc mocha test --recursive && eslint .",
```


## Resources

- http://eslint.org/docs/user-guide/configuring
