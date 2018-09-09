## Objectives

- Use Git commands to add, modify, and remove files from a repository
- Explain the file lifecycle for Git
- Explain the difference between a local and remote repository
- Diagram a Git commit history

## Activities

[Git](http://git-scm.com/) is a powerful tool for managing source code, or any other type of file, that you wish to track the changes to over time. Git is not VCS, SVN, or any other source tool you have used in the past. Git contains some of the same concepts, but puts its own spin on things. This lesson is meant to give you a functional, hands-on ability to use `git` and will not review the internals of Git.

The objective is to learn the necessary commands and file lifecycle for beginning to use Git.

This  [diagram](https://git-scm.com/book/en/v2/book/02-git-basics/images/lifecycle.png) presents the file lifecycle for Git. The way to think about this is:
  1. _Untracked_ - the repository knows that the file exists since it is on the filesystem. However, the repository is **not** tracking the file.
  1. _Unmodified_ - the repository knows about the file beyond its mere existence on the filesystem, that is the file is tracked by Git. Unmodified means that but no changes have occurred to it since the last, committed change.
  1. _Modified_ - a tracked file has been modified, but not yet staged for commit.
  1. _Staged_ - The staging area is where the modified files are prepared to be committed. At the point that a file is staged, the changes to it are "frozen" and if additional changes are made, then the file will appear both as staged and modified. Staging is a checkpoint in time of the change set.
  1. _Committed_ - Files from the staging area, together with a [_commit message_](https://github.com/erlang/otp/wiki/Writing-good-commit-messages), form the new point from which the lifecycle begins again. Code that was staged was "frozen" at that point, the commit makes a history of that.

This is still rather abstract, so let's work through an example.

Any directory becomes a Git repository by typing:

```
git init
```

Running this command creates a `.git` directory inside of the directory where the command was executed. The `.git` directory contains all of the things that Git needs internally to work, it also helps Git know what is and is not a Git repository. If you try running any command beginning with `git` in a non-repository folder you will get an error.

Briefly, let's look at the contents of the `.git` directory:

```
ls -a .git
```

Git internals are outside of the objectives for this lesson, so it is sufficient to understand that running `git init` generates a `.git` directory that is used internally by Git. Again, we want to know how to use Git to track changes to files, which does not require a deep understanding of Git internals.

First, generate an Express application to have some sample files to work with:

```
express cars
cd cars
npm install
git init
```

At this point, none of the files are in the repository, you can see this by using:

```
git status
```

What does the output (copied below) of the command tell us? How does the output compare to the lifecycle listed above?

```
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	app.js
	bin/
	node_modules/
	package.json
	public/
	routes/
	views/

nothing added to commit but untracked files present (use "git add" to track)
```

For the purpose of this lesson, branches will not be covered. For now it is sufficient to know that `master` is a branch (whatever that means), and for our purposes, the only branch. `Initial commit` indicates that the repository has no history.

One small complexity we do want to know about upfront is the ability to tell Git to ignore certain files. In particular we don't want the `node_modules` directory to end up in our repository as it adds a lot of bloat and `package.json` handles things like versioning for us. To do this we simple create a `.gitignore` file containing:

```
// in .gitignore
node_modules/
```

If we re-run `git status` we will notice that `node_modules` is no longer listed under the `Untracked files:` section and instead we see the `.gitignore` file itself as untracked:

```
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.gitignore
	app.js
	bin/
	package.json
	public/
	routes/
	views/

nothing added to commit but untracked files present (use "git add" to track)
```

Since we don't have any files in our repository let's go ahead and stage (and commit) each of them using the `git add` command:

```
git add .gitignore
```

Re-run `git status`. What is this output telling you?

Since each Git commit should be a narrowly-focused set of changes, let's start by committing the `.gitignore`. To do this we will use `git commit`:

```
git commit -m "Add .gitignore"
```

Again run `git status`. What has changed?

The remaining untracked files all need each other so we add them all:

```
git add .
git status
```

`git add .` will add all files listed as modified or untracked. You may also use `git add` for a single file, we will see an example of that below.

We commit this change and [write a message](https://github.com/erlang/otp/wiki/writing-good-commit-messages):

```
git commit -m "Initial commit of Express application"
```

Again type `git status` and take note of the response:

```
On branch master
nothing to commit, working directory clean
```

How does this work for a file that we already have in the repository?

For the purpose of this demonstration, we can change the message on the default Express generator homepage:

```
// views/index.jade

extends layout

block content
  h1= title
  p Welcome to the best web application every produced.
```

If we go back to the terminal and run `git status`, we see:

```
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   views/index.jade

no changes added to commit (use "git add" and/or "git commit -a")
```

This shows us that a file, `views/index.jade`, that exists in the repository was modified from the last committed version. There are a few ways to look at the differences or _diff_ between the repository's previously committed version and the local modifications:
  1. `git diff`
  1. a graphical diff tool like [GitX](http://gitx.frim.nl/)

When you work with a Git repository and make changes, you will want to diligently check the diff before committing. After reviewing the changes:

```
git add views/index.jade
git commit -m "Make application awesome"
```

Git uses a few concepts from [Graph Theory](https://en.wikipedia.org/wiki/Graph_theory). Git has a commit tree that lines up with what a graph theoretic tree is. The commits made to a Git repository form a connected, Directed Acyclic Graph (DAG). Can you draw a DAG?

We've already seen that an acyclic graph is one in which no closed paths may be formed, that is, adding an edge to the graph creates a cycle. A directed graph is just like an undirected graph, but instead of each edge being "bi-directional" (or directionless) there is the ability for edges to have directionality. Can you think of an analogy or example from the real world of a directed graph? One analogy for a directed graph is that a directed graph is like a series of streets in a city; some have directionality in both ways, but often times they are just unidirectional (a "one way street").

After you make commits how do you see them? `git log` Gives a view of the commits in the tree. Can you draw a tree based on the output of running `git log`?

When we add another commit, the commit tree simply has an additional node added to it. The additional node points to the previous commit. Can you draw a diagram this concept?

**Exercise:** Create a new Git repository. Inside of the repository:

1. Create a blank text file, `responses.txt`, and commit it with the commit message "Initial commit"
1. Answer each of the following questions and commit it, you should have one commit per question:
  1. Would you rather change the past or be able to see into the future?
  1. Would you rather have to sneeze but not be able to or have something stuck in your eye for an entire year?
  1. Would you rather live one life that lasts 1,000 years or live 10 lives that last 100 years each?
