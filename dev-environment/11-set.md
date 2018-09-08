# Setting Environment Variables

## Learning Objectives

By the end of this lesson you will be able to:

* Define new environment variables for the existing terminal session and for future terminal sessions

## How do you set environment variables?

While the defaults are nice, you may at one point need to set your own environment variable. As with many things in programming, there are a number of ways to do so. We will show you two ways here:

### Temporarily Set an Environment Variable

Type the following commands into your terminal, making sure to change CITYNAME to your city's name:

```bash
export GALVANIZE_LOCATION="CITYNAME"
echo $GALVANIZE_LOCATION
```

Whatever value you set should have been echoed back to you via the `echo` command. `$GALVANIZE_LOCATION` is now available for you to use in this window. But now try opening a new terminal window and running _only_ the `echo` command. It's not there! `export` will only work for the session we're currently on.

### Sustainably Set an Environment Variable

If we wanted to use `$GALVANIZE_LOCATION` in more places, this process would become tedious. Instead, we can write this command in our Zsh Config. You can put this line anywhere but most people will try to group all `export` commands together. Try adding the following command in your Zsh Config:

```bash
export GALVANIZE_LOCATION="CITYNAME"
```

Now every subsequent window you open will have access to the `$GALVANIZE_LOCATION` environment variable.

## Challenges

<!-- Question -->

### !challenge

* type: paragraph
* id: 7ac9c890-b3bf-11e8-b825-0fe87e3c28a7
* title: Environment Variables

### !question

In your own words, describe the difference between running `export` on the command line and putting it in your Zsh Config.

### !end-question

#### !placeholder

Write your answer here

#### !end-placeholder

### !explanation

Thanks! An instructor will follow-up if they have any questions.

### !end-explanation

### !end-challenge
