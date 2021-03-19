# Intermediate Command Line

Now that you have had some time with the CLI. Let's introduce some more advanced features. As you spend more and more time with the command line, you'll want to get more and more out of it.

## Selecting Multiple Files with Wildcards (*)

You already know how to move a file using `mv`. But, what if you wanted to move a bunch of files? What if you wanted to move only the JavaScript files out of a directory into another?

If you had a folder called `src` that had a bunch of HTML and JavaScript files and you wanted to move only the JavaScript files into a `src/js` folder, how would you do it? Would you type each filename in one-by-one? No! Of course not! You would use a wildcard! A wildcard is an asterisk, `*`.

```sh
$ mkdir ./src/js
$ mv ./src/*.js ./src/js/
```

The wildecard can be read as "match anything". So `mv` will match anything that starts with `./src/`, contains anything, and ends with `.js`.

Many UNIX commands support wildcards. Not just `mv`.

* `cp`
* `ls`
* `grep`
* `rm`
* `cat`
* `git add`
* etc.

## Environment Variables

Environment variables are things defined by your system that can be used in programs or in the CLI.

Common uses for environment variables include:

* Specifying a server port
* Specifying a host URL
* Setting where binaries to be run are
* Defining a system as debug or production

### Get Environment Variables

There are a lot of environment variables predefined on your system.
Let's check out some of them. Type in the `env` command to see all of them. Warning, it will be a lot!

```sh
$ env
```

How do we look at only one?

```sh
$ echo $HOME
$ echo $PATH
```

We took one of the individual environment variables, `HOME`, and prepended it with a `$` to access it in BASH.

### Set Environment Variables

There are times when you'll want to modify the environment variables.
Say you have a program that runs a little differently when in DEBUG mode.
This tell your your program you want more verbose information when you are running.

```sh
$ export DEBUG=true
```

Now when you run a program you can inspect the `DEBUG` environment variable and do something more verbose to help you debug it! But how do we know we actually changed it?

```sh
$ echo $DEBUG
```

Okay cool, we certainly did change it.

Now go ahead and close your terminal window and reopen it.

```sh
$ echo $DEBUG
```

What the heck?! Where did it go? I had literally just set it!

Environment variables are per-session. Meaning the ones you set in the terminal are only known to that current instance of your terminal. Other terminal windows won't be aware of them and it doesn't survive closes.

## Monitoring Your System with ps, top, htop

Monitoring your system's memory & cpu usage can be done through the command line with ease. This is useful for servers that start rejecting HTTP requests. Often times the problem is there is not enough CPU or Memory to handle it and it gets dropped.

### ps

`ps` is a simple tool for monitoring process status.

```sh
$ ps -ax
```

![example of ps](http://i.imgur.com/KXbaGgP.png)

This will show all your current processes running on the computer. There will be many!

If you want to see if an individual process is running, combo `ps` with `grep`:

```sh
$ ps -ax | grep chrome
```

Cool, now I can see if a program is running! That seems marginally useful!

### top

Most Unix systems such as Linux and OSX come with a utility called `top`.

```sh
$ top
```

`top` is interesting when it is running because it is an interactive session. In order to quit `top`, hit `q`. To see more of what you can do, hit `?` to get help and see more commands.

### htop

`top` is cool and all, but `htop` is awesome. Go ahead and install `htop` using `brew`:

```sh
$ brew update
$ brew install htop
```

Run it with:

```sh
$ htop
```

![example of htop](http://i.imgur.com/dr9Pfyk.png)

This operates much the same as `top`, but with a much more pleasant interface. Commands you can do are listed at the bottom.

## cowsay & fortune

> Now for a little break. Something more fun. :)

### fortune

`fortune` is a tool for grabbing a random quote and piping it to stdout.

First let's install `fortune`:

```sh
$ brew update
$ brew install fortune
```

Then to run it, just type `fortune`:

```sh
$ fortune
```

![example of fortune](http://i.imgur.com/npNGwrC.png)

### cowsay

`cowsay` is a program that takes text from stdin and inserts it into a little ASCII image.

First let's install `cowsay`:

```sh
$ brew update
$ brew install cowsay
```

Then to run it, just `echo` something and pipe it into `cowsay`:

```sh
$ echo 'hi' | cowsay
```

![example of cowsay](http://i.imgur.com/6rj1pDu.png)

Tired of the cow? You can change it to some [other](https://github.com/schacon/cowsay/tree/master/cows) files too:

```sh
$ fortune | cowsay -f sheep
```

### Can We Combine the Two? Yes!

Run this command a few times:

```sh
$ fortune | cowsay
```

## alias

Maybe you want to do the sheep a lot, but can't remember to use the `-f` flag. We can create an `alias` to `cowsay -f sheep` to make it easier to type.

```sh
$ alias sheepsay='cowsay -f sheep'
```

Then to run the alias and make a sheep say something:

```sh
$ fortune | sheepsay
```

![example of sheepsay](http://i.imgur.com/UGoQ85i.png)

## BASH Scripting

BASH scripting is a useful tool to automate any common CLI commands you run. You can throw them into a BASH script and just run the script.

### Hello World!

To create a BASH script, you simply touch a file that ends in `.sh`

```sh
$ touch helloworld.sh
```

Edit the file and add this to the top of your file: `#!/bin/bash`. This is called a shebang. And it specifies to your computer what to run your script with. In this case we specify a path to BASH.

Then add in `echo Hello World!` to another line.

It should look like this:

```sh
#!/bin/bash
echo Hello World!
```

You've created your first BASH script!

### Running a BASH Script

What the heck? We didn't even run it! How do I know you aren't pulling my leg?

Alright alright. Let's run the script:

```
$ ./helloworld.sh
```

That didn't work? My terminal said `The file './helloworld.sh' is not executable by this user`? That's weird.

Let's take a look.

```sh
$ ls -la helloworld.sh
-rw-r--r-- .... helloworld.sh
```

Ah, we're missing the execute flag, `x`! Let's go ahead and fix that.

```sh
$ chmod +x helloworld.sh
$ ls -la helloworld.sh
-rwxr-xr-x .... helloworld.sh
```

And now let's try and run it.

```sh
$ ./helloworld.sh
Hello World!
```

Amazing! Now we can print out `Hello World!` without remembering the command to do so by running our script.

### A Little More Advanced

Let's write a program that takes an input from the user and stores it into a file formatted a specific way. We can do that with the `read` command and some other ones you already know.

Create a file called `person_gen.sh` and put these contents in:

```sh
#!/bin/bash
echo What is your name?
read NAME
echo What is your age?
read AGE
echo Storing person to \"$NAME.json\"
echo \{name: \"$NAME\", age: \"$AGE\"\} > $NAME.json
```

Now go ahead and run your new script

```sh
$ ./person_gen.sh
What is your name?
Danny
What is your age?
26
Storing person to "Danny.json"
$ cat Danny.json
{name: "Danny", age: "26"}
```

When prompted, type in your name and age. This will take the values you provided it and create a JSON file for you.

### I want to go further!

BASH is a programming language on its own. You can read much more about it [here](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)

## Congrats!

You are now way awesomer at the CLI now! And you're ready to start configuring your software through environment variables, glob multiple files with one command, and automate your way to time saved!

![XKCD Automation Comic](https://imgs.xkcd.com/comics/automation.png)

# Resources

- wildcards http://cli.learncodethehardway.org/book/ex16.html
- env http://cli.learncodethehardway.org/book/ex21.html
- export http://cli.learncodethehardway.org/book/ex22.html
- Bash Scripting http://cli.learncodethehardway.org/book/next.html
