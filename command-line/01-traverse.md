# Traverse the File System

## Learning Objectives

By the end of this lesson you will be able to:

* Traverse the file system using both relative and absolute paths

## A new kind of tree

The file system is built in a tree structure. What's a tree in programming? It looks something like this:

```bash
fundamentals/file-navigation-manipulation
├── 00-overview.md
├── 01-traverse.md
├── 02-manipulate.md
├── 03-wildcard.md
└── 99-checkpoint.md
```

In the above tree, the folder `fundamentals/file-navigation-manipulation` is a **parent** of a number of other files. Each `.md` file is **child** of the parent. When we click in and out of folders, we're traversing the tree.

But clicking is for n00bs. We're going to learn how to navigate the file system via the terminal. This may just seem like a neat trick but it is actually incredibly useful to increase our development speed. There are also times where we may be working with a computer that does not have a [GUI](https://en.wikipedia.org/wiki/Graphical_user_interface) so we must be comfortable on the command line.

The following will introduce you to the basics of file navigation.

## File system paths

In any computer system, a **path** represents a location in the file system. Similar to a URL, a path is a location to files or folders on your computer. An example path is:

```bash
/Users/galvanize/Projects/week01
```

* [Absolute Paths](#absolute-paths)
* [Relative Paths](#relative-paths)
* [Home Directory Paths](#home-directory-paths)
* [Exercise](#exercise)

---

## Absolute Paths

A path is **absolute** when it starts with `/`. An absolute path starts from the root of the hard drive.

**An absolute path to your user folder**

```bash
/Users/username
```

**An absolute path to your bin folder**

```bash
/usr/bin
```

## Relative Paths

A path is **relative** when it does not start with `/`. Examples of relative paths are as follows:

**Start with current folder, then look for `Projects` folder, then `week01` folder**

```bash
./Projects/week01
```

**Same idea, but start with current path**

```bash
Projects/week01
```

> Pro-tip: When trying to run files from the command line with relative paths, use the `./Folder/file.sh` way otherwise we will start by looking globally for a `Folder` command


## Home Directory Paths

On Macs we have a "home" directory for our computer user. This is stored at `/Users/username`. As a nice shortcut, we can use the tilde `~` character as a shorthand reference to our user directory. For example:

```bash
~/Documents
```

Is equivalent to writing:

```bash
/Users/galvanize/Documents
```

This is handy when we want to quickly get back to our user directory, or need to reference a path from our user directory.

## Exercise

* Is the path returned by the `pwd` command absolute or relative?
* If we wanted to access our Desktop using the home directory shortcut from the command line, what path would we use?

## Tab Completion

Hitting `<TAB>` autocompletes.  Hit `<TAB>` constantly. Try it right now! Type:

`$ cd ~/L` THEN HIT TAB!

This trick will save you so much time. Here's another trick, type:

`$ cd ~/` now DOUBLE TAP TAB. What happened?

This way you can easily see the competing outcomes of autocomplete. What happens if you type:

`$ cd ~/D` then double tap tab?

The competing options for me are `Desktop/`, `Documents/`, and `Downloads/`

## Benefits

The benefits to using `<TAB>` completion are threefold:

1. Autocomplete for you
1. Ensure paths are typed correctly
1. List current files in case you forgot

## Exercise

Spend three minutes navigating around your computer's file system from the command line. Use a mixture of relative and absolute paths to navigate around. See what dark corners you can discover in your operating system.

## Listing Files and Folders

### The `ls` command

One of the most frequently used commands is the `ls` command which lists the contents of the current working directory.

```bash
ls
```

![](https://i.imgur.com/tivSrqi.png)

### Exercise

In what order are the files and directories displayed?

### Command flags

**Command flags** are a common way to specify options for command line programs. If a command allows a command flag to be specified, it typically is a single dash `-` or double dash `--` immediately followed by a letter, number, symbol, or word. Some commands even accept multiple command flags to be specified at the same time. You'll see some examples of this shortly.

### Long format

Like many shell commands, the behavior of `ls` can be modified. By default, it displays the files and directories in your current working directory in alphabetical order spread over multiple columns. However, you can modify that behavior by providing one or more command flags.

The `l` flag changes the behavior of `ls` to display the items in a long format. So in addition to the file and directory names, it'll display permission, ownership, size, and the last modification time of each item in the directory.

```bash
ls -l
```

![](https://i.imgur.com/TzK8I2m.png)

### Exercise

How can you tell if an item is a file or directory?

**Hint:** Look at the first letter of each row.

### Human-friendly sizes

When using the `-l` flag with the `ls` command, the size of each item is displayed in bytes. To display sizes in a more human-friendly manner, you can use the `-h` flag and it'll add one of the following suffixes.

| Suffix | Meaning  |
|--------|----------|
| `B`    | byte     |
| `K`    | kilobyte |
| `M`    | megabyte |
| `G`    | gigabyte |
| `T`    | terabyte |
| `P`    | petabyte |

```bash
ls -hl
```

![](https://i.imgur.com/oUiKGx6.png)

### Hidden files and directories

You may not realize it, but there are **hidden files and directories** scattered throughout your computer's operating system. All it takes to hide a file or directory is to start its name with a period `.` prefix. Hidden items can be revealed by using the `-a` flag with the `ls` command.

```bash
ls -a
```

Many programs have configuration settings that they want stored out of plain sight from users. Traditionally, these settings are stored in hidden files and directories in your home directory. As a professional web developer, you'll want to access and modify these settings and, throughout this course, you'll be doing just that.

## Changing directories

[redhat: Changing directories with cd](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/4/html/Step_by_Step_Guide/s1-changing-dirs.html)

## Challenges

<!-- Question -->

### !challenge

* type: short-answer
* id: 869df0a0-b3cf-11e8-9c80-3f50f0d4f65c
* title: Listing Directory Content

##### !question

What command would be used to list the contents of a directory?

##### !end-question

##### !answer

ls

##### !end-answer

##### !explanation

Correct!

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: 869df0a1-b3cf-11e8-9c80-3f50f0d4f65c
* title: Current Path

##### !question

What command is used to print the current working directory path?

##### !end-question

##### !answer

pwd

##### !end-answer

##### !explanation

Correct! If you ever need to know the full path of your current directory, use the `pwd` command.

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: 869e17b0-b3cf-11e8-9c80-3f50f0d4f65c
* title: Traversing

##### !question

Take a look at the following tree:

```bash
project-practice
├── README.md
└── projects
    ├── Async_middleware.md
    └── group-randomizer
        ├── 00.png
        ├── 01.png
        └── INSTRUCTIONS.md
```

Let's say that we are currently _inside_ the `group-randomizer` folder. What command will move us up to the folder where the `README.md` file is?

##### !end-question

##### !answer

/cd \.\.\/\.\.\/{0,1}$/

##### !end-answer

##### !explanation

Correct! You will need to go up two directories.

##### !end-explanation

### !end-challenge
