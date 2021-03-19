# Git

## Learning Objectives

By the end of this lesson you will be able to:

* Install git using brew

## Install Git

[Git](https://git-scm.com/) is a version control system which is a tool that allows you to track the changes you make to a project.

To get started, run the following command.

```bash
brew install git
```

Once it finishes, run the following command.

```bash
git --version
```

And you'll see something like this.

![git version](./images/git-version.png)

> Note: your version might be different.

### Configure Git

Like artists, programmers sign their work. Let's configure Git to sign your commits with your name and email address.

**WARNING:** Before running the following commands, replace `YOUR FULL NAME` and `YOUR EMAIL ADDRESS` with the name and email from [your GitHub account](https://github.com/settings/profile).

```
git config --global user.name 'YOUR FULL NAME'
git config --global user.email 'YOUR EMAIL ADDRESS'
```

Next, run this command to download and install some awesome Git colors, handy aliases for common Git sub commands, and extra Git configuration that'll make your life easier when connecting to GitHub from the command line.

```
curl -fsSL https://git.io/vXOvh | sh
```

We'll go over these later. For now, relish in your victory of making it this far. 🎉
