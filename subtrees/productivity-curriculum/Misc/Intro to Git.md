## Objectives

- Explain what a version control system is.
- Explain why a version control system is important.
- Explain what Git is.
- Initialize a Git repository.
- Add and commit changes to a Git repository.
- Explain what GitHub is.
- Push commits from a local repository to a remote repository.

## What's a version control system?

A **version control system** (or VCS) is a tool that programmers use to track the changes made to files in a software project. Changes tracked by a VCS are usually identified by a number or letter code called a **revision**. Each revision is a snapshot in time of the files being tracked by the VCS.

For example, imagine an initial set of files in a VCS is known as revision 1.

```
┌──────────────┐
│              │
│  Revision 1  │
│              │
└──────────────┘
```

If a change is made to any file, then the resulting set of files in the VCS is known as revision 2.

```
┌──────────────┐        ┌──────────────┐
│              │        │              │
│  Revision 1  │───────▶│  Revision 2  │
│              │        │              │
└──────────────┘        └──────────────┘
```

If another change is made to any file, then the resulting set of files in the VCS is known as revision 3.

```
┌──────────────┐        ┌──────────────┐        ┌──────────────┐
│              │        │              │        │              │
│  Revision 1  │───────▶│  Revision 2  │───────▶│  Revision 3  │
│              │        │              │        │              │
└──────────────┘        └──────────────┘        └──────────────┘
```

**NOTE:** Common synonyms for a revision include **version** and **snapshot**.

### Exercise

Turn to a neighbor and explain what a version control system is in your own words. If helps, draw a picture of how a VCS grows over time.

## Why is a version control system important?

A version control system allows developers to revert a software project back to a specific revision. This is extremely useful for the times when you accidentally introduce a bug into a project. Everyone makes mistakes, even professional programmers with years of experience. With a VCS, making mistakes is no big deal. Just hop into your VCS time machine!

For example, imagine a VCS with three revisions.

```
┌──────────────┐        ┌──────────────┐        ┌──────────────┐
│              │        │              │        │              │
│  Revision 1  │───────▶│  Revision 2  │───────▶│  Revision 3  │
│              │        │              │        │              │
└──────────────┘        └──────────────┘        └──────────────┘
```

If a bug was accidentally introduced in revision 3, no big deal. Just revert the project back to revision 2.

```
┌──────────────┐        ┌──────────────┐
│              │        │              │
│  Revision 1  │───────▶│  Revision 2  │
│              │        │              │
└──────────────┘        └──────────────┘
```

Now, you've got another chance to add a feature that's bug free.

```
┌──────────────┐        ┌──────────────┐        ┌───────────────┐
│              │        │              │        │               │
│  Revision 1  │───────▶│  Revision 2  │───────▶│  Revision 3'  │
│              │        │              │        │               │
└──────────────┘        └──────────────┘        └───────────────┘
```

In a nutshell, a VCS allows developers to:

- Create revisions of a project.
- View previous revisions of a project.
- Revert to a previous revision of a project.

### Exercise

In your own words, write down why a VCS is so important. After about a minute, your instructor will cold call on the class and ask what was written down.

## What's Git?

There are many different version control systems on the market like Git, Mercurial, SVN, CVS, Perforce, TFS, etc. In this course, we'll use [Git](https://git-scm.com/) which is a free and open source version control system released in 2005 by Linus Torvalds, the creator of Linux.

Because Git is so powerful and flexible, it's incredibly popular among software development companies large and small. The good news is, if you understand Git, then it'll be easy to learn another VCS if the need arises.

In Git, a **repository** is a directory on your laptop's file system that's been initialized with Git version control system. A change made to a file in a Git repository can be in one of the following states at a time.

| State         | Description                                       |
|---------------|---------------------------------------------------|
| **Unstaged**  | The change won't be included in the next revision |
| **Staged**    | The change will be included in the next revision  |
| **Committed** | The change was included in a previous revision    |

In Git, a change made to a file moves from one state to the next in the above order. For example, it moves from unstaged to staged to committed. It cannot, for example, go from unstaged directly to committed.

**NOTE:** In Git, a revision is also known as a **commit**.

### Exercise

Turn to a neighbor and explain what Git is in your own words. Try to include some keywords like repository, unstaged, staged, comitted, and commit in your explanation.

## How do you initialize a Git repository?

[git manual](https://git-scm.com/docs/git-init)

Initialize a new git repo in the current directory with:

```shell
git init
```

You can verify git was intialized by checking if a `.git` folder was created with `ls -a`.

[git manual](https://git-scm.com/docs/git-status)

When in a git repository, you can type `git status` to see any staged or unstaged changes pending.

In your git repository:

```shell
git status
```

Example Output:

```shell
$ git status
On branch g15

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	01_vcs.md
	02_basic_git.md
	03_github.md
	04_github_clone.md
	05_github_workflow.md
```

## How do you add and commit changes to a Git repository?

[git manual](https://git-scm.com/docs/git-add)

If you have any files that are brand new to the repo or have been changed, you can tell git to start tracking it with:

```shell
git add <file>
```

To add all new files and changes in a directory:

```shell
git add .
```

After adding a file or change to the repo,
  try running `git status` again to make sure it got staged.

[git manual](https://git-scm.com/docs/git-commit)

After staging files with `git add`,
  you can now commit the changes to save the current state of the project as a snapshot in time.

```shell
git commit -m "I fixed all of the bugs. :)"
```

This will create a commit in git that will be a snapshot of what the project currently is.

## What's GitHub?

Git and GitHub are NOT the same thing.
[Github](http://github.com/) is a web based service that hosts repositories on a server and allows developers to easily collaborate.
Github acts as a remote backup service for git repositories.
Once we've __pushed__ to a __remote__ such as GitHub, we know our code is safe.
Even if our hard drives die.
And if GitHub goes down, we can still work on our distributed repos offline.

### A Metaphor: Git is a Rocketship, Github is Mars

🚀

| Rocketship Version | Git Version |
|--------------------|-------------|
| Package | Unstaged change |
| Package on Launchpad | Staged change |
| Package in Rocketship | Commited change |
| Launch | Push |
| Launchpad | Staging area |
| Rocketship | Git repo |
| Mars | GitHub |

Let's say you want to deliver some packages to Mars with a rocketship. *You want to push changes to GitHub from your git repo*

1. Create some packages. *Make some changes to your files*

1. Choose which packages to place on the launchpad. *`git add` the changed files you want to push*

1. Put the packages on the launchpad into the rocketship. *`git commit`*

  * Any packages left off the launchpad and not in the rocketship will not be sent to Mars. *Any changes not staged with `git add` will not be committed and will not be pushed to GitHub*

1. Repeat the create packages, move to launchpad, and pack rocketship steps for any additional packages you want to send. *Change files, `git add`, `git commit`*

1. Set the rocketship coordinates for Mars. *`git remote add origin git@github.com:nasa/marooned-astronaut.git`*
  * We'll reuse our rocketship, so you only need to do this once per rocket!

1. When the rocketship is sufficiently loaded, we want to launch the rocketship to Mars. *`git push -u origin master`*

1. Astronaut on Mars will recieve your rocketship and be happy with their new packages. *Check your GitHub repo to make sure the changes were pushed*

## How do you push commits from a local repository to a remote repository?

[git manual](https://git-scm.com/docs/git-push)

If you are using GitHub or collaborating with another git repo, you can push any new commits to your default remote with:

```shell
git push
```

If you have your remote pointing to GitHub, you should now be able to see any changes on your GitHub page.

## Exercises

Try to do these without looking at the answer first!

### Basic Git Workflow

1. Create a new folder
1. Initialize a git repository
1. Create a new file
1. Check that the file is unstaged
1. Add the file to the staging area
1. Check that the file is staged
1. Commit the file

#### Answer

```bash
$ mkdir myProjectName
$ cd myProjectName
$ git init
$ touch readme.md
$ git status
$ git add readme.md
$ git status
$ git commit -m "Initial commit"
```

### Pushing to GitHub

1. Create a GitHub repository and don't initialize it
1. Create a local git repository
1. Create a file
1. Stage the file
1. Commit the file
1. Set the GitHub repo as the git remote
1. Push to GitHub

#### Answer

Create a GitHub repo:
![Hit the + Icon](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/86/create-github-repo-1.png)

![Hit Create](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/87/create-github-repo-2.png)

```bash
$ mkdir myProjectName
$ cd myProjectName
$ git init
$ touch readme.md
$ git status
$ git add readme.md
$ git status
$ git commit -m "Initial commit"
$ git remote add origin git@github.com:{userName}/{repoName}.git
$ git push -u origin master
```

## Resources

* [VCS on Wikipedia](https://en.wikipedia.org/wiki/Version_control)
* [Git SCM Manual](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
* [Pro Git book](http://git-scm.com/book/en/v2)
* [Tower Learn Version Control with Git book](https://www.git-tower.com/learn/git/ebook/command-line/introduction#start)
* [Try Git](https://try.github.io/)
* [Git Workflow](https://github.com/mjhea0/thinkful-mentor/blob/master/git-workflow.md)


## Git Cheatsheet
* [Tower Git Cheatsheet](http://www.git-tower.com/blog/git-cheat-sheet/)
