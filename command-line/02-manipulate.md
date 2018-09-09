# Manipulate Files & Folders

## Learning Objectives

By the end of this lesson you will be able to:

* Create, move, rename, and delete files and directories

## Changing files and folders from the command line

We've moved around the file system, now it is time for us to change it! We can create, modify, and remove new folders and files through the command line. Once again, this ends up being a faster process than constantly clicking and dragging around once we get used to it!

## Create, Rename, Delete for Files and Folders

- [Creating Folders with the `mkdir` command](#creating-folders-with-the-mkdir-command)
- [Creating Files with the `touch` command](#creating-files-with-the-touch-command)
- [Renaming or Moving Folders with the `mv` command](#renaming-or-moving-folders-with-the-mv-command)
- [Renaming or Moving Files with the `mv` command](#renaming-or-moving-files-with-the-mv-command)
- [Deleting Folders with the `rm` command](#deleting-folders-with-the-rm-command)
- [Deleting Files with the `rm` command](#deleting-files-with-the-rm-command)

> Pro-tip: Folders will also be called Directories or Directory

---

### Creating Folders with the `mkdir` command

You can make directories with the `mkdir` command. For web development, we should avoid using spaces in our folder names. This is because URLs and file paths are harder to navigate with spaces. Either replace them with underscores `_` or dashes `-` or a special casing such as CamelCase.

Whichever style we choose for naming our files and folders will be known as our **Naming Convention**.

>Pro-tip: WordsLikeThis are called CamelCase. Programmers frequently [argue about snake_case and CamelCase](http://programmers.stackexchange.com/questions/27264/naming-conventions-camelcase-versus-underscore-case-what-are-your-thoughts-ab)

**Try changing into a directory, then creating a new subfolder**

```
$ cd ~/Projects/week01

$ mkdir daily-journal
```

What command can you use to see the files in your new folder?

---

### Creating Files with the `touch` command

Let's `cd` into your new journal.  We can look around with `ls`, and `ls -la`, but there's nothing to see yet.

**Try adding files to your journal using todays date**

`$ touch 2017-04-17.txt`

We can also add multiple files at once by separating them with spaces

`$ touch 2017-04-18.txt 2017-04-19.txt`

What did the command `touch` do? You can use `touch` to do more than just create files. Try reading the man page for touch!

---

### Renaming or Moving Folders with the `mv` command

The `mv` command can act as a tool to rename or move folders. A rename is essentially a move. That means we could write:

`$ mv folder-name new-folder-name`

The first argument is the _current_ folder location. The second is the _destination_ for the folder. Each of these arguments are paths to the folders from your current directly. Make sure you understand how [paths](./subtrees/Paths.md) work when using the `mv` command.

There are some caveats to the `mv` command when renaming to a location that previously exists. Please see [this Q&A](https://askubuntu.com/questions/56326/how-do-i-rename-a-directory-via-the-command-line) for more info.

---

### Renaming or Moving Files with the `mv` command

Using the `mv` command we can rename or move files. A rename and move performed in the same manner. Renaming a file would look like:

`$ mv filename.txt new_filename.txt`

The first argument is the _current_ file location. The second is the _destination_ for the file. Each of these arguments are paths to the files from your current directly. Make sure you understand how [paths](./subtrees/Paths.md) work when using the `mv` command.

A move would look the same but probably inlcude a path to another folder.

**Try moving a file from one folder to its parent folder**

`$ mv filename.txt ../filename.txt`

---

### Deleting Folders with the `rm` command

Deleting a folder can be completed with the `rm` command. When deleting a folder, we will also be deleting all items inside of it (if any exist). For the command line to know we are intending to remove all contents as well, we need to include `-rf`:

`$ rm -rf folder-name`

The `-rf` means _recursive_ and _force_. Recursive includes all child folders. Force allows us to remove a directory with files inside of it.

> Pro-tip: This command **won't** confirm before performing the action. Make sure you have your paths correct!!

---

### Deleting Files with the `rm` command

Deleting a file is a simple command:

`$ rm filename.txt`

We can also remove multiple files at once:

`$ rm filename.txt filename2.txt`

> Pro-tip: This command **won't** confirm before performing the action. Make sure you have your paths correct!!

## Copying Files and Folders

To copy files, we use the `cp` command.  For files, it's a simple:

```
$ cp file1.txt file2.txt
```

`file1.txt` is the _source_. `file2.txt` is the _destintation_.

If we want to copy folders, we need to pass the recursive flag `-r`, or we will see errors:

```
$ cp foldername foldername2
```

### Exercise

- Create a file in a folder
- Copy that file into the same folder
- Create a new folder
- Copy a file into the new folder
- Copy the folder and all files in it to a new location

## Challenges

<!-- Question -->

### !challenge

* type: short-answer
* id: 869e65d0-b3cf-11e8-9c80-3f50f0d4f65c
* title: Create Directory

##### !question

What command is used to create a new directory called `workspace/`?

##### !end-question

##### !answer

/mkdir (\.\/)?workspace\/?/

##### !end-answer

##### !explanation

Correct! Use the `mkdir` command to create directories (folders). `mkdir` is short for 'make directory'.

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: 869e65d1-b3cf-11e8-9c80-3f50f0d4f65c
* title: Deleting Files

##### !question

What command would be used to remove a file called `index.html` from the current working directory?

##### !end-question

##### !answer

/rm (\.\/)?index.html/

##### !end-answer

##### !explanation

Correct! Use the rm command followed by a filename to remove/delete files.

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: 869e8ce0-b3cf-11e8-9c80-3f50f0d4f65c
* title: Creating Files

##### !question

What command would be used to create a new file called `bicycle.html`?

##### !end-question

##### !answer

/touch (\.\/)?bicycle.html/

##### !end-answer

##### !explanation

Correct! Use the touch command followed by a filename to create files.

##### !end-explanation

### !end-challenge
