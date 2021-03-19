# Node.js

## Objectives

- Describe what Node.js is.
- Explain why Node.js is important.
- Upgrade Node.js to the latest version.
- Run JavaScript code using the Node.js REPL.
- Run JavaScript code using the Node.js interpreter.
- Describe what I/O is.
- Describe what the two ways to perform I/O are.
- Use the `fs` and `path` modules to interact with the filesystem.

### How do I upgrade Node.js?

Before getting started, take a moment to ensure your laptop is using the latest version of Node.js.

```shell
brew update
brew outdated
brew upgrade node
brew cleanup
```

You can check the version of Node.js by running the following command.

```shell
node -v
```

## What's Node.js?

A **[runtime system](https://en.wikipedia.org/wiki/Runtime_system)** is the environment that enables a program to be executed. When JavaScript was released in 1995, its only runtime system was inside a web browser. That all changed in 2009 when Ryan Dahl created **Node.js**, a runtime system for executing JavaScript programs outside a web browser. By using Node.js, developers can write JavaScript programs that run directly on an operating system like Linux, Mac OS X, and Windows.

When a JavaScript program runs inside a web browser, it's only concerned with browser related tasks. As you've seen, JavaScript programs written for the browser have access functions such as:

- `document.querySelector()`
- `document.createElement()`
- `element.addEventListener()`
- `element.appendChild()`
- `element.removeChild()`

However, when a JavaScript program runs outside a web browser with Node.js, it's not concerned with browser-related tasks at all and has no access to the above functions. JavaScript programs written for Node.js are only concerned with operating system tasks and, instead, have access to functions such as:

- `fs.readFile()`
- `fs.writeFile()`
- `path.join()`
- `http.createServer()`
- `server.listen()`

In Node.js, most built-in functions are organized into modules. A **module** is a collection of functions that can be imported into a file using the `require()` function. For example, the `fs` module is one of the most popular modules because it allows JavaScript programs the ability to access and modify the filesystem.

Create a `readPaths.js` file on the Desktop.

```shell
touch ~/Desktop/readPaths.js
```

Open the `readPaths.js` file in your text editor.

```shell
atom ~/Desktop/readPaths.js
```

And type in the following code. There's no need to wrap this code in an IIFE as each file has its own scope when executed by Node.js.

```javascript
'use strict';

var fs = require('fs');

fs.readFile('/etc/paths', 'utf8', function(err, data) {
  if (err) {
    throw err;
  }

  console.log(data);
});
```

Now, save the `readPaths.js` file and run it with the Node.js runtime system.

```shell
node ~/Desktop/readPaths.js
```

The program only needs to require one module—the `fs` module—to import the filesystem functionality. And because the `readPaths.js` file is executed in its own scope, this functionality lives inside the local `fs` variable and doesn't pollute the global scope.

### Exercise

In your own words, think about what Node.js means to you and write it down.

## Why is Node.js so important?

Node.js is commonly used to build HTTP servers. An **HTTP server** is a program that runs in an infinite loop, accepting HTTP requests from a client and sending HTTP responses back to it. Inside those responses, HTTP servers often include data like HTML, CSS, JavaScript, and JSON among other formats. Throughout the second quarter of this program, you'll be building custom HTTP servers in Node.js that'll accept HTTP requests and send back HTTP responses containing JSON data.

Because of this capability, Node.js is similar to other runtime systems that execute HTTP servers written in languages like Go, Haskel, Java, Lisp, Perl, PHP, Python, and Ruby just to name a few. One of the advantages Node.js has over these other runtimes is that it allows front-end web developers to leverage their fluency in JavaScript to build back-end web applications.

As a developer, switching back and forth across the HTTP divide makes you more valuable for a company that builds client-server products. And as a company, allowing your JavaScript developers to switch roles is valuable because it's expensive to find, interview, hire, and onboard skilled developers. Long story short, Node.js has been beneficial for both web developers and companies alike.

Usage of Node.js varies from company to company and it's unlikely that any company operates solely on Node.js. Just like everything, Node.js has its [advantages](http://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js) and [disadvantages](http://www.quora.com/What-are-the-disadvantages-of-using-Node-js) which you can read about on your own.

### Exercise

Think back to your Q1 project. If you were designing your own custom JSON API for it, what would the response look like? Take a few moments to write it down.

## How do you run JavaScript code using the Node.js REPL?

Now that your laptop has the latest version of Node.js, let's learn about the various ways it can execute JavaScript code. Conveniently, Node.js comes with a built-in **REPL** which is short for read, evaluate, print, and loop. The Node.js REPL gives you a prompt where you can type JavaScript code. In order to execute it in the Node.js runtime, just press the `Enter` key and the results will be immediately displayed in the Terminal.

You can try out the REPL by launching your Terminal app and running the `node` command without any arguments.

```shell
node
```

You should see a greater than `>` symbol appear. This is the prompt symbol for the Node.js REPL.

![](https://i.imgur.com/LLdtQUl.png)

Type in `1 + 2`, press the `Enter` key, and verify Node.js can do basic arithmetic.

![](https://i.imgur.com/2unMiSC.png)

To quit the Node.js REPL, run the `.exit` command.

```shell
.exit
```

The Node.JS REPL is a handy way to play around with JavaScript before you commit your ideas to a file. In a way, it's similar to the browser console except that you can only access Node.js functions.

### Exercise

How can you tell when your Terminal is running the Node.js REPL? How can you tell when it's running your default shell?

## How do you run JavaScript code using the Node.js interpreter?

Additionally, the Node.js interpreter can run JavaScript code that lives in a file. An **interpreter** is a program that translates source code that lives in a file into executable code and then immediately runs it. Most of the time, you'll be interacting with the Node.js runtime using its interpreter. This was how you executed the `readPaths.js` file earlier.

Let's make another JavaScript program for the Node.js interpreter. Create a `addition.js` file on the Desktop.

```shell
touch ~/Desktop/addition.js
```

Open the `addition.js` file in your text editor.

```shell
atom ~/Desktop/addition.js
```

And type in the following code. Again, there's no need to wrap this code in an IIFE as each file has its own scope when executed by Node.js.

```javascript
'use strict';

console.log(1 + 2);
```

Now, save the `addition.js` file and run it with the Node.js interpreter using the same `node` command. By specifying a file path, the `node` command will start the interpreter.

```shell
node ~/Desktop/addition.js
```

### Exercise

What happens if you try to execute the expression `1 + 2` without the `console.log()` function using the Node.js interpreter?

## What's I/O?

Input/Output (**I/O**) is the communication between a program and its outside world. Inputs are data received by the program and outputs are data sent from it.

Possible input devices include:

- Keyboards
- Mice
- Trackpads
- Gamepads
- Touch screens
- Microphones

And possible output devices include:

- Screens
- Speakers
- Printers
- Haptic motors (i.e. vibration motors)

Additionally, programs can perform I/O with "devices" such as:

- Files
- Signals
- Pipes
- Sockets

In a moment, you'll get some more practice performing I/O with files. But first, you should know about the two ways to perform I/O.

## What are the two ways to perform I/O?

Operations that use an I/O device can be extremely slow compared to the operations that use a CPU. Many I/O devices incorporate mechanical components that must physically move, such as a hard drive seeking a track to read or write. Moving a mechanical component is often orders of magnitude slower than the switching of an electric current. For example, during a hard disk operation that takes 10ms to perform, a 1 GHz CPU would have performed ten million instruction-processing cycles.

A simple approach to I/O would be to start the operation and then wait for it to complete. This is called **synchronous** or **blocking** I/O because it blocks the progress of a program while the I/O operation is in progress. In other words, the program is stuck waiting for the I/O operation to complete leaving the CPU to idle. When a program makes many synchronous I/O operations, the CPU could spend almost all of its time waiting for the operations to complete.

To see an example of a JavaScript program performing synchronous I/O using Node.js, create a `syncIO.js` file on the Desktop.

```shell
touch ~/Desktop/syncIO.js
```

Open the `syncIO.js` file in your text editor.

```shell
atom ~/Desktop/syncIO.js
```

And type in the following code.

```javascript
'use strict';

var fs = require('fs');

var data = fs.readFileSync('/etc/paths', 'utf8');

console.log(data);
console.log(1 + 2);
```

Any exceptions generated by the I/O operation of a synchronous method, like `fs.readFileSync()`, are immediately thrown. For example, the file can't be found, the program doesn't have the correct permissions to access it, etc.

Now, run the `syncIO.js` file using the `node` command.

```shell
node ~/Desktop/syncIO.js
```

And you should see something like this.

![](https://i.imgur.com/zevFggD.png)

Alternatively, it's possible to start an I/O operation and then continue with the other operations that don't require the I/O to be completed. This approach is called **asynchronous** or **non-blocking** I/O. Any tasks that depend on the I/O operation to be completed still need to wait and are thus blocked. But other operations that don't have a dependency on the I/O operation can continue.

To see an example of a JavaScript program performing asynchronous I/O using Node.js, create a `asyncIO.js` file on the Desktop.

```shell
touch ~/Desktop/asyncIO.js
```

Open the `asyncIO.js` file in your text editor.

```shell
atom ~/Desktop/asyncIO.js
```

And type in the following code.

```javascript
'use strict';

var fs = require('fs');

fs.readFile('/etc/paths', 'utf8', function(err, data) {
  if (err) {
    throw err;
  }

  console.log(data);
});

console.log(1 + 2);
```

Asynchronous methods like `fs.readFile()` always take a completion callback as the last argument. Any exceptions generated by the I/O operation of an asynchronous method, are passed to the callback's first argument. Again, the exceptions could be - the file can't be found, the program doesn't have the correct permissions to access it, etc. When the I/O operation completes successfully, the callback's first argument is `null`. The callback may have other arguments, but it depends on the asynchronous method.

Now, run the `asyncIO.js` file using the `node` command.

```shell
node ~/Desktop/asyncIO.js
```

And you should see something like this.

![](https://i.imgur.com/23SC9st.png)

In this course, the vast majority of the JavaScript programs you build will perform asynchronous I/O.

### Exercise

What kind of programs do you think would prefer asynchronous I/O? What kind of programs would prefer synchronous I/O?

## How do you use the `fs` and `path` modules to interact with the filesystem?

Before using asynchronous I/O to build a Node.js HTTP server, it's a good idea to practice interacting with the filesystem first. For this, you use the `fs` and `path` modules.

The `fs` module is the built-in Node.js API for managing a computer's filesystem. As you can see from the [documentation][fs], the `fs` module can perform a plethora of I/O operations. Each operation has both an asynchronous and synchronous method (e.g. `readFile` and `readFileSync`).

The `path` module is the built-in Node.js API for handling and transforming file paths across different operating systems. The `path` module is indispensable when building cross-platform applications. On Unix-based operating systems, the path delimiter is the forward slash `/`. While on Windows, it's the back slash `\`. As you can see from the [documentation][path], the `path` module is just a collection of utilities that don't perform any I/O operations. In other words, the methods in the `path` module don't consult the filesystem to see whether or not a path is valid.

With the documentation handy, let's play around with the `fs` and `path` modules. Imagine you're throwing a party and you need to keep a database of all the guests you plan on inviting. Instead of maintaining a Google Spreadsheet, you decide to build a small, command-line application written in Node.js. The application will accept a few subcommands and log the results to the console. The subcommands will manage the content of a database which will be a JSON-formatted `guests.json` file.

To get started, you'll need to create a new project.

```shell
mkdir party
cd party
echo '[]' > guests.json
touch guests.js
git init
git add .
git commit -m 'Initial commit'
```

Open the `party` project in your text editor.

```shell
atom .
```

And type in the following code to the `guests.js` file.

```javascript
'use strict';

var fs = require('fs');
var path = require('path');
var guestsPath = path.join(__dirname, 'guests.json');

fs.readFile(guestsPath, 'utf8', function(err, data) {
  if (err) {
    throw err;
  }

  var guests = JSON.parse(data);

  console.log(guests);
});
```

Now, run the program using the `node` command.

```shell
$ node guests.js
[]
```

Then, add and commit the latest changes to the `party` project's repository.

```shell
git add .
git commit -m 'Add the basic scaffold'
```

Next, refactor the `guests.js` file by adding a `read` subcommand.

```javascript
'use strict';

var fs = require('fs');
var path = require('path');
var guestsPath = path.join(__dirname, 'guests.json');

var node = path.basename(process.argv[0]);
var file = path.basename(process.argv[1]);
var cmd = process.argv[2];

if (cmd === 'read') {
  fs.readFile(guestsPath, 'utf8', function(err, data) {
    if (err) {
      throw err;
    }

    var guests = JSON.parse(data);

    console.log(guests);
  });
}
else {
  console.error(`Usage: ${node} ${file} read`);
  process.exit(1);
}
```

Now, run the program using the `node` command, both with and without the `read` subcommand.

```shell
$ node guests.js
Usage: node guests.js read

$ node guests.js read
[]
```

Then, add and commit the latest changes to the `party` project's repository.

```shell
git add .
git commit -m 'Add the read subcommand'
```

Next, refactor the `guests.js` file by adding a `create` subcommand as well.

```javascript
'use strict';

var fs = require('fs');
var path = require('path');
var guestsPath = path.join(__dirname, 'guests.json');

var node = path.basename(process.argv[0]);
var file = path.basename(process.argv[1]);
var cmd = process.argv[2];

if (cmd === 'read') {
  fs.readFile(guestsPath, 'utf8', function(err, data) {
    if (err) {
      throw err;
    }

    var guests = JSON.parse(data);

    console.log(guests);
  });
}
else if (cmd === 'create') {
  fs.readFile(guestsPath, 'utf8', function(readErr, data) {
    if (readErr) {
      throw readErr;
    }

    var guests = JSON.parse(data);
    var guest = process.argv[3];

    if (!guest) {
      console.error(`Usage: ${node} ${file} ${cmd} GUEST`);
      process.exit(1);
    }

    guests.push(guest);

    var guestsJSON = JSON.stringify(guests);

    fs.writeFile(guestsPath, guestsJSON, function(writeErr) {
      if (writeErr) {
        throw writeErr;
      }

      console.log(guest);
    });
  });
}
else {
  console.error(`Usage: ${node} ${file} [read | create]`);
  process.exit(1);
}
```

Now, run the program using the `node` command, both with and without the `create` subcommand.

```shell
$ node guests.js
Usage: node guests.js [read | create]

$ node guests.js create
Usage: node guests.js create GUEST

$ node guests.js create Mary
Mary

$ node guests.js read
[ 'Mary' ]

$ node guests.js create Don
Don

$ node guests.js read
[ 'Mary', 'Don' ]
```

Finally, add and commit the latest changes to the `party` project's repository.

```shell
git add .
git commit -m 'Add the create subcommand'
```

And there you have it! You just built a small Node.js program to read and create party guests to a file-based database.

## Exercises

- [Filesystem Fundamentals](https://github.com/gSchool/node-filesystem-fundamentals)
- [Pet Shop: Node Filesystem](https://github.com/gSchool/fs-pet-shop)
- [Command Line To Do](https://github.com/gSchool/node-fs-todo-cli-example)

### Further Practice

- [Building a simple HTTP server](https://github.com/gSchool/node-http-server-intro).
- [Parsing query strings](https://github.com/gSchool/node-query-string-parsing).

## Resources

- [Node.js API Documentation - File System][fs]
- [Node.js API Documentation - Path][path]
- [Wikipedia - Event Driven Programming](http://en.wikipedia.org/wiki/Event-driven_programming)  
- <a href="https://en.wikipedia.org/wiki/V8_(JavaScript_engine)">Wikipedia - V8 (JavaScript Engine)</a>
- [Youtube - Introduction to Node.js](https://www.youtube.com/watch?v=pU9Q6oiQNd0)
- [Introduction to Node.js (video)](https://www.youtube.com/watch?v=pU9Q6oiQNd0)  
- [Event Driven Programming](http://en.wikipedia.org/wiki/Event-driven_programming)  
- [Companies that use Node](https://github.com/joyent/node/wiki/projects,-applications,-and-companies-using-node)
- [disadvantages](http://www.quora.com/What-are-the-disadvantages-of-using-Node-js)
- [advantages](http://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js)
- [Take a look at this table about IO](http://www.eecs.berkeley.edu/~rcs/research/interactive_latency.html)
- [Official About Node.js](https://nodejs.org/en/about/)
- [Wikipedia Node.js](https://en.wikipedia.org/wiki/Node.js)
- [Stack Overflow Q&A](http://stackoverflow.com/questions/1884724/what-is-node-js)
- [Video: What is NPM? (2:49)](https://docs.npmjs.com/getting-started/what-is-npm)


[fs]: https://nodejs.org/dist/latest/docs/api/fs.html
[path]: https://nodejs.org/dist/latest/docs/api/path.html

### Slides

- [Slides #1](https://docs.google.com/a/galvanize.com/presentation/d/1HhAUwBwn0PhzqcYy77OcVyVsnOsNcL5Ffd8a28WO780/edit?usp=sharing)
- [Slides #2](https://docs.google.com/presentation/d/100YfMyurFP87YdwCbUzYaxEUvSSoVGOrJvaXE3izVp0/edit?usp=sharing)
- [Slides #3](https://docs.google.com/presentation/d/1HEoACJT2P_o_saykrj1MOG4qRpwiBm8c3CiUWsQtKOU/edit?usp=sharing)
