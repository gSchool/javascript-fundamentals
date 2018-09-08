# Submitting Assignments

### Learning Objectives

_By the end of this lesson, you will be able to:_

1. Install git locally
1. Create a github account
1. Fork and clone a repository
1. Add, commit and push your changes
1. Submit your work to Galvanize

### !vimeo

* id: 258182715

### !end-vimeo

## Install Git

On a Mac:

- Install Homebrew - https://brew.sh/
- From Terminal run `brew install git` to get the latest version

On Windows:

- Download the one-click installer from https://git-scm.com/downloads
- Run it and follow the instructions

Linux:

- Use the appropriate package manager https://git-scm.com/download/linux

### Ensure that you have git installed

Run:

```
git --version
```

You should see something like this:

```
git version 2.13.0
```

You should have version 2 or higher.

## Create a Github account

Make sure it's on https://github.com/ and not on your company's Github Enterprise.

## Assignment Submission Flow

1. Fork a repo by clicking "Fork" in Github
1. Copy the URL and copy the repo to your local machine with:

  ```
  git clone <url>
  ```

1. `cd` into the repo
1. Open it in a text editor / IDE
1. Make changes
1. Add all of your changes with:

  ```
  git add -A
  ```

1. Commit your changes with:

  ```
  git commit -m "your message here"
  ```

1. Check the status of your local repository with:

  ```
  git status
  ```

1. Push your changes to github with:

  ```
  git push origin master
  ```

1. Copy the URL of _your fork_ and paste it into Learn



### !challenge
* type: short-answer
* id: 7aca8be1-b3bf-11e8-b825-0fe87e3c28a7
* title: Question 1

##### !question
What command will you use to push your changes to Github?
##### !end-question

##### !answer
/(git push origin master)|(git push)/
##### !end-answer

##### !placeholder
git ...
##### !end-placeholder

##### !explanation
`git push` is a shortcut that will work in some cases, and `git push origin master`
##### !end-explanation
### !end-challenge



### !challenge
* type: short-answer
* id: 7aca8be2-b3bf-11e8-b825-0fe87e3c28a7
* title: Question 2

##### !question
What command will you use to _stage_ all of your changes?
##### !end-question

##### !answer
git add -A
##### !end-answer

##### !placeholder
git ...
##### !end-placeholder

##### !explanation
While there are other ways to add, `git add -A` is the only one you'll need for Galvanize courses.
##### !end-explanation
### !end-challenge



### !challenge
* type: short-answer
* id: 7aca8be3-b3bf-11e8-b825-0fe87e3c28a7
* title: Question 3

##### !question
What command would you use to create a commit with the message `"this is my commit"`
##### !end-question

##### !answer
/git commit -m *["']this is my commit["']/
##### !end-answer

##### !placeholder
git ...
##### !end-placeholder

##### !explanation
##### !end-explanation
### !end-challenge



### !challenge
* type: short-answer
* id: 7aca8be4-b3bf-11e8-b825-0fe87e3c28a7
* title: Question 4

##### !question
What command would you use to see which files are staged or unstaged?
##### !end-question

##### !answer
git status
##### !end-answer

##### !placeholder
git ...
##### !end-placeholder

##### !explanation
##### !end-explanation
### !end-challenge



### !challenge
* type: short-answer
* id: 7aca8be5-b3bf-11e8-b825-0fe87e3c28a7
* title: Question 5

##### !question
Given the Github URL `https://github.com/gSchool/git-example`, what command would you use to clone it?
##### !end-question

##### !answer
git clone https://github.com/gSchool/git-example
##### !end-answer

##### !placeholder
git ...
##### !end-placeholder

##### !explanation
##### !end-explanation
### !end-challenge
