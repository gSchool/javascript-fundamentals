# npm

## How to use the Node Package Manager (npm)

### Objectives

- Install modules using npm

### Why is this important?

Being able to access a library of code that has already been used will allow you to implement your idea much faster. Also, having the dependencies managed by npm makes it much easier to share your code.

### Content

What is <a href="https://en.wikipedia.org/wiki/Npm_(software)">npm</a>?
`npm` is a package manager for Node.js and JavaScript. _Packages_, or _libraries_, are bits of code that are available for reuse.

One of the best features of Node.js is that it is _lightweight_; that is, Node itself provides minimal functionality. Most things are done with _modules_. npm packages are an example of [Modules](https://en.wikipedia.org/wiki/Modular_programming), which is a concept we see across many languages and frameworks.

npm was installed when node.js was installed. To check which version you have installed, run the following command.

`npm -v`

To output the help page, use the following command `npm -h`


### Initializing npm

When starting a new project, in which you will be using npm to manage your modules, you'll need to execute `npm init`. This command will walk you through initializing a project. The interactive prompt will ask a few questions about what you are working on. The final product of this process is a file named `package.json`, which looks as follows

```
{
  "name": "npm-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Now, when you install a package, it will be listed in this file.

### Installing packages

To install a module that you will be using in your application, you'll have to use `npm install --save module_name`. The `--save` argument adds and entry to the `packages.json` file.

If we run the command `npm install --save pad`, you'll see npm downloading the module. [Pad](https://www.npmjs.com/package/pad) is a very simple tool that pads strings in the left and right directions.

After installing `pad`, the package.json file looks like this:

```
{
  "name": "npm-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "pad": "^1.0.0"
  }
}
```

Notice the addition the `dependencies`. All the packages that are installed using the `--save` flag, will be added there. Also, if you look in the folder, you'll notice a new folder named `node_modules`. This is where the code for `pad` was added.

### Installing Development Dependencies

Sometimes there are packages that are very useful while developing an application, but are not necessary to have when an application is deployed. npm has a flag that allows you to make that distinction. The flag is `--save-dev`.

Let's install a testing tool that is very useful for development, but should not be deployed. [Mocha](https://mochajs.org/) is a testing framework.

To install Mocha as a development dependency, run the following command `npm install --save-dev chai`. After the installation, the package.json looks as follows:

```
{
  "name": "npm-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "pad": "^1.0.0"
  },
  "devDependencies": {
    "chai": "^2.4.5"
  }
}
```

Notice the new section, `devDependencies`. All packages installed with the `--save-dev` flag will be added there.

### Installing Global Packages

npm has the ability to install modules globally. There are some modules that expose command line options. Add the `--global` flag when installing a module. A good example of a module that is installed globally is [nodemon](https://www.npmjs.com/package/nodemon). This module can be installed using the command:

```
npm install --global nodemon
```

Nodemon will look at the file you pass and it will run the `node` command every time that file changes.

### The downside of using npm

The problem with using npm is that you are playing in someone else's merry-go-round. If one of the modules changes in an unexpected way, it may give your code unintended behavior.

The following link shares a story of such a case.

http://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/

# Slides

http://slides.com/lizh/npm
