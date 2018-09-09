# Print Environment Variables

## Learning Objectives

By the end of this lesson you will be able to:

* Print environment variables to the console

## What is an environment variable?

> **Remember:** A shell allows you to control the contents of its **environment variables**, which are a set of key-value pairs that can affect the way running programs behave. These environment variables are often set when a new shell starts so their contents are available throughout the entire duration of the shell's session.

To print out content to our shell we can use the `echo` command.

For example, try the following:

```bash
echo "I'm sorry Dave, I'm afraid I can't do that."
```

### Discover the `PATH` environment variable

A shell also relies on the `PATH` environment variable to specify a set of directories where other commands can be found. To see the contents of the `PATH` environment variable, run the following command.

```shell
echo $PATH
```

**TIP:** When reading the content of an environment variable, it must be prefixed with a dollar sign `$`.

And you'll see something like this.

![](https://i.imgur.com/9oOQq4F.png)

When you type a command that **doesn't** include a slash `/` character, these `PATH` directories are searched one after another. Once a file that matches the command is found, the searching stops and the corresponding file is run.

Notice the `/usr/local/bin` directory is listed before the following directories.

- `/usr/bin`
- `/bin`
- `/usr/sbin`
- `/sbin`

This means the `/usr/local/bin` directory has priority over all later searched directories.

Since Homebrew installs new commands to the `/usr/local/bin` directory, Homebrew-installed commands will be preferred over the pre-installed ones. In upcoming sections, you'll use Homebrew to install additional commands that override the pre-installed commands that come with macOS.

**NOTE:** Ask your instructor for help if the `/usr/local/bin` directory is not in the right order.

## Challenges

<!-- Question -->

### !challenge

* type: short-answer
* id: aeed9100-b3d9-11e8-92ed-57e3f4477ba5
* title: Printing One Environment Variable

### !question

What command can you use to print out the environment variable `$PWD`?

### !end-question

#### !placeholder

Write your answer here

#### !end-placeholder

### !answer

/echo/

### !end-answer

### !explanation

The `echo` command will print out environment variables.

### !end-explanation

### !end-challenge


<!-- Question -->

### !challenge

* type: short-answer
* id: aeed9101-b3d9-11e8-92ed-57e3f4477ba5
* title: Printing All Environment Variables

### !question

What command can you use to print out all the environment variables available to you? You will have to look this up on your own!

### !end-question

#### !placeholder

Write your answer here

#### !end-placeholder

### !answer

/set|printenv|env/i

### !end-answer

### !hint

If you're not sure, try Googling it: http://lmgtfy.com/?q=print+all+environment+variables

### !end-hint

### !explanation

You have a few options. `set`, `printenv`, and `env` will all work to print out all your environment variables.

### !end-explanation

### !end-challenge
