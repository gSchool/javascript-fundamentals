# Debugging JavaScript in the Browser

## Objectives

- Explain what logging vs debugging is.
- Explain when you use logging vs debugging.
- Use Chrome's debugger to visualize your code.
- Debug a JavaScript program that throws an error.

## Debugging Using Chrome

So far we've been debugging issues using `console.log` and while that is a fine place to start, once our programs become larger and more complex, we need better tools to diagnose and fix our errors! But first - let's examine the tool we will be using to do this!

## Chrome Developer Tools (Elements, Console, Network, Resources)

In short, Chrome Developer Tools are freaking sweet. Here is a brief walkthrough of some of the most useful features of the Developer Tools that you will be using with almost every single thing you build in WDI.

### The Elements Tab

This tab is extremely useful for looking at the DOM, and seeing your CSS styling. You can also use it to make changes to your HTML and CSS in real time, which is awesome when you are designing your pages.

### The Network Tab

This tab is an excellent resource for seeing if HTML, CSS, Fonts, JavaScript and other goodies on your page have loaded. You can also use this tab to see responses from a server (SUPER useful when we start doing back-end development and AJAX) and file paths which will help you debug issues of content not being loaded. You can also view how long these files take to load to help when focusing on page load performance.

### The Sources Tab

In this tab you can view the JavaScript your page is loading and make any changes to it. You can also add break points to stop the code and jump into any part of the code to see what your variables and any other data looks like. We will cover this more when we focus on JavaScript in the browser, but know this is one of the best resources for debugging your JS.

Toggle the Chrome Dev Tools by pressing the `Command` + `Shift` + `I` keys. Next, click the `Sources` panel and select a file from the file tree on the left. You should see something like this.

![](https://i.imgur.com/xSIMANs.png)

### The Application Tab

In this tab you can view all of the information that has loaded on a page (images, scripts, stylesheets etc) as well as information about cookies, sessions and local storage (all things we will cover later in the course)

### The Console

You are probably going to find yourself in this tab most often. In the console you can play around with JavaScript as well as any of the JS you have included on your page. You can also see AJAX calls on the page (right click to check Log XMLHttpRequests) as well as any errors your browser is reporting. The console along with the sources tab are your best spots for debugging JavaScript and learning to work with them will make your life much easier as you continue to learn JS.

If you want to learn some more about Chrome Dev Tools, check out this free tutorial on [CodeSchool](http://discover-devtools.codeschool.com/?locale=en)

### Understanding JavaScript Errors

Before we take a look at the `sources` tab, let's make sure we have a good idea of what kind of errors we commonly encounter and why they happen. Understanding this fundamentally will make debugging faster and far less painful!

### Common JavaScript Errors

`TypeError` - Creates an instance representing an error that occurs when a variable or parameter is not of a valid type. What does that mean? Well try running this code in the console `undefined()` and you will get a very common error `undefined is not a function` - this means that the built in type `undefined` can not be invoked. Try this code:

```js
var person;
person.sayHi // what does this display?
```

`SyntaxError` - this one is pretty self explanatory, something is wrong with your syntax (make sure Array brackets, curly braces, quotes and parentheses close!)

`ReferenceError` - this happens when you try to access something that has not been declared. Type in the chrome console `testing` - what do you see?

`RangeError` - when you have a recursive function (a function that calls itself) and you don't return or exit the function before too many other functions are called, the call stack will exceed and you will get a range error or a Stack Overflow!

## Debugging JS + More Essential JS Concepts

As programmers we are all going to make mistakes. If you want some inspiration/understanding (or nostalgia) you can learn more here - https://www.youtube.com/watch?v=dQ7tIfWD_FM.

The most important thing to start doing once we make mistakes is to **READ THE ERROR**. This means looking at the type of the error (is it a RangeError? TypeError? ReferenceError?), reading the error message, seeing what line the error is occurring on and then taking a step back to think what the problem is. The more thinking you can do before jumping in and trying to fix things, the better off you will be - especially when you first start programming.

You can learn more about JS error types [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error).

### How do we debug?

There are many ways of debugging our code, the simplest ones involve trying to figure out what things are by placing `console.log`s throughout the code. While this can be effective for smaller pieces of code - this becomes incredibly challenging when there are multiple files with hundreds if not thousands of lines.

The tool that we are going to be using, which is one of the most commonly used professional debugging tools is the `sources` tab, which is part of the `chrome` developer tools. Let's head over to the sources tab in the developer tools (open with `command + option + j`). Inside the sources tab, we have 6 icons that help us debug our code and see what's going on. From the left to the right:

1. Pause/Resume - resume execution of the entire page until the next breakpoint (if there is)
2. Step over - run highlighted line and then step over to the next line of code
3. Step into - go down into whatever function is being called
4. Step out - return from the current function and go to its caller
5. Deactivate all breakpoints - remove all breakpoints in the code
6. Pause on exceptions

When you have paused the code, you can hover over variables and see their values and inherited properties and methods.

http://discover-devtools.codeschool.com/

https://developer.chrome.com/devtools/docs/javascript-debugging

## What's logging vs debugging?

There are many ways to find and resolve bugs in a computer program, but the two most common techniques are logging and debugging.

**Logging** is the act of recording events or computed values that occur within a program. In the browser, these records can be displayed in the console using the `console.log()` function.

**Debugging** is the act of using a dedicated tool, called a debugger, to pause and step through a running program and inspect its behavior. A debugger is a powerful tool that helps developers visualize how a running program executes. For example, create an `lunch.html` file and add the following code to it.

```html
<script>
  var food = 'sandwich';

  alert("I'm having a " + food + " for lunch.");
</script>
```

And then step through the following instructions to see Chrome's [built-in debugger](https://developer.chrome.com/devtools/docs/javascript-debugging) in action.

1. Open the `lunch.html` file in Chrome.
1. Open the Chrome Developer Tools by pressing `Command + Option + I`.
1. Click on the Sources tab.
1. Select the `lunch.html` file from the file tree on the left.
1. Add a breakpoint to line 1 by clicking on the line number in the gutter.
1. Refresh the page to engage the debugger.

A **breakpoint** tells the JavaScript interpreter to pause a running JavaScript program at that line number. Once a program is paused, you can inspect the variables inside the program's scope at that moment in time. You can also step through the program and watch how the variables change when each line is executed.

**NOTE:** When paused, you can hover over a variable to see what it contains.

## When do you use logging vs debugging?

So far, you've probably used logging way more than debugging for your own programs. Logging is a great tool for finding and fixing bugs in smaller programs. But once your programs become larger and more complex, you may want to reach for debugging as it'll help you visualize how scope changes over time.

## How do you use Chrome's debugger to visualize your code?

Inside the Chrome Developer Tools, the Sources tab has six clickable icons that represent the different actions the debugger can take.

| Action      | Description                                                    |
|-------------|----------------------------------------------------------------|
| Resume      | Resume execution until the next breakpoint.                    |
| Step over   | Execute the current line and then pause on next line.          |
| Step into   | Jump into the function about to be invoked.                    |
| Step out    | Execute the current function and pause where it was invoked.   |
| Breakpoints | Disable or enable all set breakpoints.                         |
| Exceptions  | Toggle engaging the debugger when the program throws an error. |

Update your `lunch.html` with the following code and play around with the various debugger actions.

```html
<script>
  var food = 'sandwich';

  var lunchTime = function(yumyum) {
    return "I'm having a " + yumyum + " for lunch."
  };

  var result = lunchTime(food);

  alert(result);
</script>
```

Using these debugger actions, we'll solve a few common JavaScript technical interview questions.

## How do you debug a JavaScript program that throws an error?

When a JavaScript program throws an error, the browser will display information about it in the Console tab. To start addressing the error, the most important thing to do is **read it**. Look at the error's type, message, and line number where it occurred. Then, take a step back and think about what might have caused the error. The more thinking you do before jumping in, the faster you'll be able to fix it.

Here are the kinds of errors you'll likely encounter and a brief explanation as to why they're thrown.

### `TypeError`

Thrown when a variable or parameter is not of a valid type. For example:

```javascript
var person;
person.name; // Uncaught TypeError: Cannot read property 'name' of undefined
```

### `SyntaxError`

Thrown when the JavaScript syntax is wrong. For example:

```javascript
var greet = function { // Uncaught SyntaxError: Unexpected token {
  console.log('Hello world');
};
```

### `ReferenceError`

Thrown when attempting to access something that has not been declared. For example:

```javascript
wishfulThinking(); // Uncaught ReferenceError: wishfulThinking is not defined
```

### `RangeError`

Thrown when the maximum call stack size is exceeded. Like when a recursive function calls itself too many times. For example:

```javascript
var factorial = function(n) { // Uncaught RangeError: Maximum call stack size exceeded
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

factorial(30000);
```

**NOTE:** A `RangeError` is also known as a stack overflow.

You can check out all the JavaScript [error types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) on the Mozilla Developer Network.

## Resources

- [Code School - Explore and Master Chrome DevTools](http://discover-devtools.codeschool.com/)
- [Command Line Fanatic - Using the Chrome Debugger Tools, part 3: The Sources Tab](http://commandlinefanatic.com/cgi-bin/showarticle.cgi?article=art035)
- [Google Chrome - Debugging JavaScript](https://developer.chrome.com/devtools/docs/javascript-debugging)
- [Google Chrome - Keyboard Shortcuts](https://developer.chrome.com/devtools/docs/shortcuts)

#### Additional Reading

More about the sources tab - http://commandlinefanatic.com/cgi-bin/showarticle.cgi?article=art035
Keyboard shortcuts for the developer tools, check this out - https://developer.chrome.com/devtools/docs/shortcuts

# Some full stack apps created with bugs for you to go through and debug!

* [repo one](https://github.com/gSchool/books-bugs)
* [repo two](https://github.com/gSchool/helpdesk)
* [repo three](https://github.com/gSchool/Artist-bugs)

All have branches with bugs, so git checkout bugs-1 .....bugs-2, bugs-3. The third repo has bugs on branches: bugs-1, bugs-2, bugs-4, bugs-5
