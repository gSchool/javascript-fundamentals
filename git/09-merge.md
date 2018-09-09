# Merging Branches

Branching is super useful for building new features but ultimately those features will need to come back to our master branch. The following articles will help show you how to do that.

* (Final 5 Lessons) [Git Branching on Codecademy](https://www.codecademy.com/en/courses/learn-git/lessons/git-branching/exercises/git-merge-i)
* (3rd Level) [LearnGitBranching.js.org](http://learngitbranching.js.org/)

When you have a merge conflict -- which will happen! -- it can be a bit scary. Feel free to grab an instructor the first few times it happens so that we can help walk you through it!

## Challenges

<!-- Question -->

### !challenge

* type: multiple-choice
* id: ffea7660-b3d2-11e8-b5de-9f42ac92f790
* title: Merging Branches A

### !question

You have your `master` branch and a feature branch called `new-signup-form`. You're done with your feature and want it to be back in master. What command should you run and which branch do you run it from?

### !end-question

### !options

* Run `git merge master` from the master branch
* Run `git merge new-signup-form` from the master branch
* Run `git merge master` from the new-signup-form branch
* Run `git merge new-signup-form` from the new-signup-form branch

### !end-options

### !answer

Run `git merge new-signup-form` from the master branch

### !end-answer

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: ffea7661-b3d2-11e8-b5de-9f42ac92f790
* title: Merging Branches B

### !question

You got a merge conflict but successfully resolved it. But, somehow you've found yourself back in vi! What command will allow you to quit and save?

### !end-question

### !options

* `:wq`
* `:q!`
* `:w`

### !end-options

### !answer

`:wq`

### !end-answer

### !end-challenge
