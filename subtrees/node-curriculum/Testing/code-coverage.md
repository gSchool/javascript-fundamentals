# Adding Code Coverage

## Objectives

By the end of this lesson you will:

1. Add code coverage to your node application

## Rationale

Code coverage tools can help teams inadvertently miss testing crucial parts of the application.

## Setting up

First install the `nyc` tool:

```sh
yarn add nyc --dev
```

Then add the following to your `package.json` test script:

```json
  "test": "NODE_ENV=test nyc mocha test --recursive",
```

Then when you run:

```
yarn test
```

You will see coverage printed like so:

```
  My model
    ✓ makes a query


  1 passing (54ms)

--------------------|----------|----------|----------|----------|----------------|
File                |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
--------------------|----------|----------|----------|----------|----------------|
All files           |      100 |       50 |      100 |      100 |                |
 knex-with-yarn     |      100 |      100 |      100 |      100 |                |
  knexfile.js       |      100 |      100 |      100 |      100 |                |
 knex-with-yarn/app |      100 |      100 |      100 |      100 |                |
  model.js          |      100 |      100 |      100 |      100 |                |
 knex-with-yarn/db  |      100 |       50 |      100 |      100 |                |
  knex.js           |      100 |       50 |      100 |      100 |                |
--------------------|----------|----------|----------|----------|----------------|
```

## Optionally fail the build based on thresholds

If you _wanted_ to fail the build if the coverage fell below a certain threshold, you could do so like this in your `package.json`

```json
  "nyc": {
    "check-coverage": true,
    "lines": 100,
    "statements": 100,
    "functions": 100,
    "branches": 100,
    "exclude": [
      "app.js",
      "config/*",
      "test/*",
    ]
  }
```

The example above shows how to ignore certain files and set various thresholds.
