# Git Concepts

### Learning Objectives

_By the end of this lesson, you will be able to define and describe the following concepts:_

1. Git
1. Repositories
1. Commits
1. Cloning
1. Pushing / Pulling
1. Forking

### !vimeo
* id: 257610077

### !end-vimeo


## Git

Git is a distributed version control system, and you can learn more about it at https://git-scm.com/.

*Version Control* means that it can store snapshots of everything in a directory.

*Distributed* means that you can store the current version of your code, along with all previous versions, on multiple machines, and keep them in sync.

## Repository

Git stores all of your changes in a **repository**.  A repository is essentially a folder on your computer that also stores a history of all of the snapshots of your codebase.

## Commits

In order to take a snapshot of your code at a given point in time, you create a **commit**.  A commit is basically a named version of your code.

## Cloning

When a repository exists on GitHub (or any other remote Git server), you can download the repository by **cloning** it.

## Pushing / Pulling

Once you've cloned a repository, and you make changes locally, you create a commit.  In order to share that commit, you **push** your changes from your local machine to GitHub.

If somebody else made a change to the repository and pushed it to GitHub, you would need to **pull** those changes down to stay in sync.

## Forking

On Github, when you **fork** a repository, you create a personal copy of that repository on GitHub that you can work on without affecting anyone else's fork (copy).







### !challenge
* type: multiple-choice
* id: 06c28590-b3c9-11e8-86aa-2d44bc389978
* title: Question 1

##### !question
What do you need to do in order to make a copy of a GitHub repository within your GitHub account?
##### !end-question

##### !options
* Clone
* Push
* Pull
* Fork
* Commit
##### !end-options

##### !answer
Fork
##### !end-answer

##### !explanation
https://help.github.com/articles/fork-a-repo/
##### !end-explanation
### !end-challenge

### !challenge
* type: multiple-choice
* id: 06c2aca0-b3c9-11e8-86aa-2d44bc389978
* title: Question 2

##### !question
How do you get a repository from GitHub to your machine for the first time?
##### !end-question

##### !options
* Clone
* Push
* Pull
* Fork
* Commit
##### !end-options

##### !answer
Clone
##### !end-answer

##### !explanation
https://help.github.com/articles/cloning-a-repository/
##### !end-explanation
### !end-challenge


### !challenge
* type: multiple-choice
* id: 06c2aca1-b3c9-11e8-86aa-2d44bc389978
* title: Question 3

##### !question
How do you tell Git to store a new version of your code?
##### !end-question

##### !options
* Create a Repository
* Push
* Pull
* Fork
* Commit
##### !end-options

##### !answer
Commit
##### !end-answer

##### !explanation
https://help.github.com/articles/adding-a-file-to-a-repository-using-the-command-line/
##### !end-explanation
### !end-challenge


### !challenge
* type: multiple-choice
* id: 06c2aca2-b3c9-11e8-86aa-2d44bc389978
* title: Question 4

##### !question
Once you have a repository locally, how do you get new commits into GitHub?
##### !end-question

##### !options
* Create a Repository
* Push
* Pull
* Fork
* Commit
##### !end-options

##### !answer
Push
##### !end-answer

##### !explanation
https://help.github.com/articles/pushing-to-a-remote/
##### !end-explanation
### !end-challenge
