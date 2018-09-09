# Setting up a Node library with tests

In this walkthrough, you'll learn the steps necessary to setup a Node library with tests.

## Prereqs

Make sure that you have `yarn` installed:

```
which yarn
```

You should see something like:

```
/usr/local/bin/yarn
```

If you _don't_, then run:

```
npm install -g yarn
```

## Setup the project

Create the directories:

```
mkdir my-lib
mkdir my-lib/lib
mkdir my-lib/test
cd my-lib
```

Create `package.json`:

```
yarn init -y
```

Add `mocha` and `chai` (and others if you need it):

```
yarn add mocha chai --dev
```

At this point, your `package.json` should look like this:

```json
{
  "name": "my-lib",
  "version": "1.0.0",
  "main": "index.js",
  "author": "Galvanize <info@galvanize.com>",
  "license": "MIT",
  "devDependencies": {
    "chai": "^3.5.0",
    "mocha": "^3.2.0"
  }
}
```

_OPTIONAL_: This would be a good time to add tools like linters, code coverage tools etc...

## Setup the test script

Add the following lines to `package.json` (making sure the commas are correct):

```json
"scripts": {
  "test": "mocha test --recursive"
}
```

Your package.json should now look like:

```json
{
  "name": "my-lib",
  "version": "1.0.0",
  "main": "index.js",
  "author": "Galvanize <info@galvanize.com>",
  "license": "MIT",
  "scripts": {
    "test": "mocha test --recursive"
  },
  "devDependencies": {
    "chai": "^3.5.0",
    "mocha": "^3.2.0"
  }
}
```

## Write your first test

Create the test file:

```
touch test/index.test.js
```

In that test file, write a basic test:

```js
const expect = require('chai').expect
const myLib = require('../lib')

describe("myLib", () => {

  it("it greets the correct name", () => {
    expect(myLib("world")).to.deep.equal({hello: "world"})
    expect(myLib("moon")).to.deep.equal({hello: "moon"})
  })

})
```

Run your test with `npm test`.  You _should_ see:

```

> my-lib@1.0.0 test /private/tmp/my-lib
> mocha test --recursive

module.js:472
    throw err;
    ^

Error: Cannot find module '../lib'
    at Function.Module._resolveFilename (module.js:470:15)
    at Function.Module._load (module.js:418:25)
    at Module.require (module.js:498:17)
    ...
npm ERR! Test failed.  See above for more details.
```

## Make your test pass

Create the code file:

```
touch lib/index.js
```

Rerun the test with `npm test` and you should see:

```
  myLib
    1) it greets the correct name

  0 passing (9ms)
  1 failing

  1) myLib it greets the correct name:
     TypeError: myLib is not a function
      at Context.it (test/index.test.js:7:12)

npm ERR! Test failed.  See above for more details.
```

Make it pass by adding the following to `lib/index.js`:

```js
module.exports = (hello) => { return { hello } }
```

Then run `npm test` again and you should see:

```
> mocha test --recursive



  myLib
    ✓ it greets the correct name


  1 passing (7ms)
```

🎊 And you're done 🎉

Your final directory structure should look like this:

```
tree -I node_modules

.
├── package.json
├── lib
│   └── index.js
├── test
│   └── index.test.js
└── yarn.lock
```

## Check it in

If you are using git, then add a .gitignore:

```
touch .gitignore
```

And add the following lines to `.gitignore`

```
node_modules
npm-debug.log
```

Then create the git repo and make the first commit:

```
git init .
git add -A
git commit -m "initial commit"
```
