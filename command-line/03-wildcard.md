# Using the Wildcard Characters

## Learning Objectives

By the end of this lesson you will be able to:

* Use the wildcard character to perform complex operations

## Resources

If you have to select or move a number of files, it can be a pain to do them all individually. The wildcard character can often come in handy to widen your search. From the following article, focus on just the "Star Wildcard" -- although the others can sometimes come in handy too!

* [How to Use Wildcards](http://www.linfo.org/wildcard.html)

## Challenges

<!-- Question -->

### !challenge

* type: short-answer
* id: 869e8ce1-b3cf-11e8-9c80-3f50f0d4f65c
* title: Select Multiple Files

##### !question

Write a command that lists _in long format_ all `.md` files in the current directory.

##### !end-question

##### !answer

/ls \-l (\.\/)?\*\.?md/

##### !end-answer

##### !explanation

Correct!

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: 869e8ce2-b3cf-11e8-9c80-3f50f0d4f65c
* title: Move Multiple Files

##### !question

Write a command that moves all `.md` files in the current directory up one level

##### !end-question

##### !answer

/mv (\.\/)?\*\.?md \.\.\/?/

##### !end-answer

##### !explanation

Correct!

##### !end-explanation

### !end-challenge
