# Using the Node Interpreter

## Learning Objectives

By the end of this lesson you will be able to:

* Run JavaScript files with node and the repl

[Node](https://nodejs.org/) is an open-source, cross-platform runtime system for developing applications in JavaScript. In other words, it runs JavaScript outside the browser.

When you run JavaScript in Node, it runs in a slightly different environment.

### Install Node

To get started, run the following command.

```
brew install node
```

Once it finishes, run the following command.

```
node -v
```

And you'll see something like this.

![](https://i.imgur.com/s6yEpP9.png)

### Discover the Node Shell

The interactive **Node shell** provides a read-evaluate-print loop (REPL) for JavaScript programs.

To get started, launch the Node shell by running the following command.

```
node
```

And you'll see something like this.

![](https://i.imgur.com/tSVXigd.png)

After the prompt `>`, you can type a line of JavaScript code and then press the `Enter` key to run it. For example, type and run the following JavaScript program.

```
1 + 2
```

And you'll see something like this.

![](https://i.imgur.com/ZO8fIEw.png)

The Node shell is a great tool for learning and experimenting with JavaScript.

Play around with JavaScript on your own. When you're done, type `.exit` and press the `Enter` key to quit the Node shell.

**TIP:** You can also press the `Command` + `D` keys to exit the Node shell.

### Discover the Node Interpreter

Given a JavaScript program stored in a file, the **Node interpreter** reads it, evaluates it, and then quits.

Unlike the Node shell, the Node interpreter is _not_ interactive. In other words, the Node interpreter won't automatically print the result of each line or loop waiting for you to give it more input. It just reads and evaluates a JavaScript program file.

Despite these deficiencies, you'll use the Node interpreter more frequently. Let's try it out.

First, open a new JavaScript program file in Atom.

```
atom ~/Desktop/test.js
```

**TIP:** JavaScript program files end with a `.js` extension.

Then type the following program into the file.

```
1 + 2;
```

Save the file and run the program using the Node interpreter.

```
node ~/Desktop/test.js
```

Weird, nothing happened. Remember, the Node interpreter won't print anything unless told. Jerk! 😤

Change the program so it reads like this.

```
console.log(1 + 2);
```

Save the file and re-run the program.

```
node ~/Desktop/test.js
```

And you'll something like this.

![](https://i.imgur.com/13wlgTe.png)

Play around with JavaScript on your own. When you're done, remove the `test.js` file by running the following command.

```
rm ~/Desktop/test.js
```

## Challenges

<!-- Question -->

### !challenge

* type: paragraph
* id: aeee0630-b3d9-11e8-92ed-57e3f4477ba5
* title: JavaScript in Node

### !question

You can run short snippets of code by typing `-e` right after the `node` command, then entering some JavaScript between double quotation marks. Try running the following in your terminal.

```bash
node -e "console.log(window.location.origin)"
```

What comes back? Why is that happening?

### !end-question

#### !placeholder

Write your answer here

#### !end-placeholder

### !explanation

Thanks! An instructor will follow-up if they have any questions.

### !end-explanation

### !end-challenge
