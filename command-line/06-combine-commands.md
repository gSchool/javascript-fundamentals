# Chaining Commands

## Learning Objectives

By the end of this lesson you will be able to:

* Combine multiple commands

## Chaining commands to one another

Often we will want to run multiple commands at the same time. Chaining operators are incredibly helpful for doing just that. With these we can also create conditionals so that some of our commands can run if something else fails!

* (Read only 3, 4, 7, 9, 10) [Chaining Operators](https://www.tecmint.com/chaining-operators-in-linux-with-practical-examples/)

## Challenges

<!-- Question -->

### !challenge

* type: short-answer
* id: 90571999-ae41-4522-8b0e-3a0d88953720
* title: Combine Commands A

##### !question

Write a command that will create a new directory called `galvanize/`, and then `cd` into it

##### !end-question

##### !answer

/(take (\.\/)?galvanize\/?)|(mkdir (\.\/)?galvanize\/? \&\& cd (\.\/)?galvanize\/?\.?)/

##### !end-answer

##### !explanation

Correct! You can combine commands with `&&`

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: fcab345f-caa5-4153-9e50-745f956d47f8
* title: Combine Commands B

##### !question

Write a command that lists out all environment variables with `printenv` and reads them with `less`

##### !end-question

##### !answer

/printenv \| less/

##### !end-answer

##### !explanation

Correct! You can pipe commands with `|`

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: a62afca3-c9ed-441b-87d7-b941a6b9c6bf
* title: Combine Commands C

##### !question

Write a command that attempts to `cd` into a directory called `javascript` in the current directory. If it doesn't exist, `echo` the phrase "The folder does not exist!"

##### !end-question

##### !answer

/cd (\.\/)?javascript\/? \|\| echo .+/

##### !end-answer

##### !explanation

Correct! You can use `||` to create an OR conditional.

##### !end-explanation

### !end-challenge
