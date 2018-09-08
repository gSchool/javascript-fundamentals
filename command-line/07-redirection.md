## Redirection

## Learning Objectives

By the end of this lesson you will be able to:

* Redirect content from one file or command to another

## Redirecting commands

Redirection refers to commands that allow you to direct the inputs and outputs of various commands. These are incredibly helpful for making minor modifications to files without having to open a text editor as well as chaining together multiple commands.

* [LinuxCommand.org: I/O Redirection](http://linuxcommand.org/lc3_lts0070.php)
* [Quickleft Blog: Redirection](https://quickleft.com/blog/command-line-tutorials-redirection-pipes/)

## Challenges

<!-- Question -->

### !challenge

* type: short-answer
* id: 302a3ff1-b3c3-11e8-9ceb-f1ccefb688fa
* title: Redirection A

##### !question

Write a command that lists out all environment variables with `printenv` and writes them to a file called `envs.txt`

##### !end-question

##### !answer

/printenv \> envs\.txt/

##### !end-answer

##### !explanation

Correct! You can write to files with `>`. Remember that it will overwrite whatever is there!

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: 302a3ff2-b3c3-11e8-9ceb-f1ccefb688fa
* title: Redirection B

##### !question

Write a command that appends the text "END OF FILE" to the bottom of a file called `classmates.txt`

##### !end-question

##### !answer

/echo \"?.+\"? \>\> (\.\/)?classmates.txt/

##### !end-answer

##### !explanation

Correct! You can append to files with `>>`.

##### !end-explanation

### !end-challenge
