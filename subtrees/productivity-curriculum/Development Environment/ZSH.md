## Install and Configure Zsh

Because we'll be working with the shell often, it's important to make the experience as efficient and fun as possible. Remember, a shell is simply the user interface between you and your computer's operating system.

There are many command line shells available to choose from, each with their own strengths. We're all going to start together using Zsh and Oh My Zsh, but you can work with another in the future.

You should actually already have zsh installed! To check, run the following command.

```bash
zsh --version
```

You should receive some output that looks like this.

```bash
zsh 5.0.8 (x86_64-apple-darwin15.0)
```

That means all we need to do is install [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh), which is simply a framework for managing your zsh configuration. It's like icing on a delicious, shell cake. Read the instructions on how to install via the Github repository.

**TIP:** This will require your account password which **will not** appear on the screen as you type.

You should end up with something like the following:

![](http://i.imgur.com/AHD1JS5.png)

With zsh, we can set up some really great themes that will give us more information as we interact with the shell, making it much easier to use. We'll do that in the next session after we've installed Atom!

## Edit Your zsh Theme

Running the following command should open a file with atom:

```
atom ~/.zshrc
```

This is your zsh config file, which allows you to manage your shell's settings in all kinds of ways. You should see on or around Line 8 the following:

```
ZSH_THEME="robbyrussell"
```

What's between the `"`s is the name of the theme that's currently in play. There's a great website that allows you to preview the hundreds of themes available to zsh called [zshthem.es](http://zshthem.es/). A good theme should:

1. Give you some indication as to where you are in the file system.
1. Not be so cluttered that you can't distinguish between the theme and what you're typing.
1. When working with git, should give you some indication as to what branch you're on and if you have any uncommitted files.

To change your theme, you simply need to change the name from `robbyrussell` to whatever the name of the theme is. You could spend a lot of time doing this, so for now start with either `clean` or `ys`.

Once you have changed the file, save it (with `Command` + `S`) and then open up a new terminal window. You should see your new theme in place!
