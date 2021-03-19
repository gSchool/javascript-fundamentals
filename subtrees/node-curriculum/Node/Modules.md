## Node Modules

### Objectives

By the end of this lesson, you should be able to:

- Explain what a Node.js module is.
- Split existing code into two modules.
- Export and require a function.
- Export and require an object.
- Explain what the three kinds of modules are.

### Key Terms

* `require()`
* module
* `module.exports`
* npm
* npm install
* caching

**Part 1**

Watch this video:  
<iframe src="https://player.vimeo.com/video/142099942?byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## What's a Node.js module?

As far as the Node.js is concerned, you could write all of your JavaScript code in one file. But to humans, it's really hard to manage thousands of lines of code in a single file. For example, imagine you wanted to reuse a piece of code in another project, but it was buried on line 25,436 of some file. Your only recourse would be to copy that code and paste it into the other project's file. Modules are an elegant solution to this problem.

In Node.js, a **module** is just a file that contains JavaScript code. And the module system in Node.js allows you to take pieces of code, split them out into separate files, and easily reuse them in different places. For example, imagine you have a `main.js` module and an `arithmetic.js` module. In this example, the `main.js` module will require some functionality from the `arithmetic.js` module.

```javascript
// main.js

'use strict';

var add = require('./arithmetic');
var result = add(1, 2);

console.log(result);
```

And the `arithmetic.js` module will export some functionality back to the `main.js` module.

**NOTE:** In Node.js, `module` is a global variable with a `exports` property that references an empty object by default.

```javascript
// arithmetic.js

'use strict';

module.exports = function(a, b) {
	return a + b;
};
```

The function that's exported effectively replaces the `require()` function. Another way to think of this is that the `add` variable is assigned the value of the `module.exports` object.

### Exercise

Turn to a partner and, in your own words, explain what a Node.js module is. Explain to each other how the `module.exports` object works and how the `require()` function works.

## How do you split existing code into two modules?

Here are the steps to split existing code into two modules.

1. Identify which piece of code to export.
1. Create a new module.
1. Move that code to the new module.
1. Assign that code to the `module.exports` object.
1. Require the new module in the original module using the `require()` function.

Modules can export any value such as a function, an object, a string, a number, a boolean—anything.

### Export a function

To export a function, you simply assign the function to the `module.exports` object. This is exactly what you did in the first example.

Because the `require()` function just returns a value, and the `arithmetic.js` module exports a function, you could immediately invoke that function in the `main.js` module like this.

**NOTE:** Sometimes this is handy and sometimes this makes the code hard to read.

```javascript
'use strict';

var result = require('./arithmetic')(1, 2);

console.log(result);
```

### Export an object

To export an object, you simply assign the object to the `module.exports` object. Here's an updated `arithmetic.js` module that exports an object that contains an `add()` method.

```javascript
'use strict';

module.exports = {
	add: function(a, b) {
		return a + b;
	}
};
```

When requiring the module, you assign the required object to a variable and then access its properties. Here's an updated `main.js` module that requires the above `arithmetic.js` module.

```javascript
'use strict';

var arithmetic = require('./arithmetic');
var result = arithmetic.add(1, 2);

console.log(result);
```

Here, the `arithmetic` variable references the entire object that's being exported. And so the `add()` method references the function that's part of the object being exported.

When you're exporting objects, there are three ways you can go about it. The first way is to assign a new object to the `module.exports` property.

```javascript
'use strict';

// version 1
module.exports = {
	add: function(a, b) {
		return a + b;
	}
};
```

Because `module.exports` is an object by default, the second way is to assign a value directly to one of its properties.

```javascript
'use strict';

// version 2
module.exports.add = function(a, b) {
	return a + b;
};
```

And because `exports` as a shorthand for `module.exports`, the third way is to assign a value directly to one of its properties.

**NOTE:** In Node.js, `export` is a global variable that references the `module.export` object by default.

```javascript
'use strict';

// version 3
exports.add = function(a, b) {
	return a + b;
};
```

Each of the above versions of `arithmetic.js` are equivalent.

## What are the three kinds of modules?

There are three kinds of modules in the Node.js.

1. Core modules
1. NPM modules
1. File modules

### Core modules

These are the built-in modules in Node.js like `fs`, `http`, and `path`. You require these modules by their name only.

```javascript
var fs = require('fs');
var http = require('http');
var path = require('path');
```

### NPM modules

These are modules inside packages that can be downloaded from the [NPM registry](https://npmjs.org) using the `npm install` command. To see where NPM modules are installed, run the following commands in the Terminal.

```shell
npm -g root
npm root
```

NPM modules are required just like core modules.

```javascript
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
```

Remember, the above `require()` expressions won't work unless you've installed these NPM modules globally with `npm install -g` or locally with `npm install`.

### File modules

These are modules that you've created on your own, such as the `arithmetic.js` module. When creating a file module, you add values to a `module.exports` object using one of the above mentioned techniques.

When requiring a file module, you provide a path to the module, minus the `.js` extension. These paths must start with `/`, `./`, or `../` to indicate where on the filesystem Node.js can find the file module.

```javascript
var myModule1 = require('/myModule1');   // absolute path
var myModule2 = require('./myModule2');  // same path as the current module
var myModule3 = require('../myModule3'); // parent path of the current module
```

### Issues with Memory / Module Caching

In programming caching means roughly 'saving a computed value for future use'. In node.js the first time a module is required during any given run of a script, that module is cached. For example, lets say we have two files that both require the same node module called `someFile.js`.

someFile.js:

```js
module.exports.ms = 500;
```

myFile.js:

```js
var result = require('./someFile');

// result now points to an object in memory with a single property ms which is 500 (for now)
console.log(result.ms); // logs 500

require('./alternate-file');

// Now, even though we did not use result = require('./alternate-file'); the value of result.ms
// has been changed, due to node.js and module caching.

console.log(result.ms);
```

alternate-file.js:

```js
var resultTwo = require('./someFile');

// resultTwo points to the same object that result (in myFile.js) points to.

resultTwo.ms = "foo";
// Now, even for results in myFile.js, the value of ms is "foo"
```

**Part 2**

Watch this video and dig deep into the memory model of modules:  

<iframe src="https://player.vimeo.com/video/142102383?byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Exercises

- [https://github.com/gSchool/module-caching-example](https://github.com/gSchool/module-caching-example)
- [Module Exploration](https://github.com/gSchool/module.exports)
- [Node Server](https://github.com/gSchool/node-http-server-intro/)

## Slides

- [Slides](https://docs.google.com/presentation/d/1HEoACJT2P_o_saykrj1MOG4qRpwiBm8c3CiUWsQtKOU/edit?usp=sharing)
- [Slides - npm](http://slides.com/lizh/npm#/)


## Further Reading

- [File System Pet Shop](https://github.com/gSchool/fs-pet-shop)
- [node.js Modules Documentation](https://nodejs.org/api/modules.html)
- [Eloquent JavaScript Chapter 20: Node - Modules](http://eloquentjavascript.net/20_node.html#h_BOlGLA/wK7)
- [Art of Node - Modular Development Workflow](https://github.com/maxogden/art-of-node#modular-development-workflow)
- [Learning Node - Chapter 4 - The Node Module System](https://www.safaribooksonline.com/library/view/learning-node/9781449326128/ch04.html)
- [Node.js core modules source code](https://github.com/nodejs/node/tree/master/lib)
- [Export This: Interface Design Patterns for Node.js Modules](http://bites.goodeggs.com/posts/export-this/)

## Checks for Understanding

What is the problem that the node Module system solves?
> Avoiding Large files, easily share common functionality

What built-in function is used to import a module?
> require('filename')

What built-in object is used to export a module?
> module.exports

What values can a module export?
> functions, objects, arrays, strings/numbers/booleans


What are 3 ways to export an object?

```js
	module.exports = {
		add: function(a, b) {
			return a + b;
		}
	}

	module.exports.add = function(a, b) {
		return a + b;
	}

	exports.add = function(a, b) {
		return a + b;
	}
```

What are 3 kinds of modules?
- Core modules (fs, http etc...)
- File modules (your own files)
- npm modules (node_modules)

How do you require npm and core modules?
> require('packagename')

How do you require file modules?
> `require('./filename')`, `require('/filename')` or `require('../filename')`

Name and describe any 3 core modules:
> https://github.com/nodejs/node/tree/master/lib

How does require determine what module to load?
> https://nodejs.org/api/modules.html#modules_all_together

How do you create a module that is an entire folder?
> Entry point in package.json (index.js) (https://nodejs.org/api/modules.html#modules_folders_as_modules)

What command is used to generate a package.json file for your module?
> npm init

How do you save module dependencies to the package.json file?
> npm install --save modulename
