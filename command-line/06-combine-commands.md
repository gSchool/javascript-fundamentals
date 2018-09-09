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
* id: ffe26010-b3d2-11e8-b5de-9f42ac92f790
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
* id: ffe26011-b3d2-11e8-b5de-9f42ac92f790
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
* id: ffe26012-b3d2-11e8-b5de-9f42ac92f790
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
