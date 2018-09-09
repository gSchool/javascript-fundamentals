# Additional Tools

You are not required to install any of these, but they are common in the industry.

### Chrome Developer Tools

They come pre-installed, and you can learn more about [Chrome Developer Tools](../Misc/Chrome Developer Tools.md)

### tree

**What is it? What will I be using it for?**

Tree is a very useful tool for looking at the contents of a folder from the command line. It gives you a nice tree-like structure and shows you what files are nested where.

**How do I install it?**

http://brewformulas.org/Tree

`brew install tree`

### Anki

We may be using Anki to create flashcards to help you memorize the fundamentals. You can install Anki at

http://ankisrs.net/

### Dash

Dash is a great documentation application available on the app store. It is a paid for app that has an unlimited trial license. It will bug you to pay for an account but will not stop you from using it for free.

https://itunes.apple.com/us/app/dash-3-api-docs-snippets./id449589707?mt=12

### Xcode

XCode is an IDE (Integrated Development Environment) that can be used for Mac and iOS development. This download is very long, so we suggest that you download and install Xcode while at home or after 5pm (if you on campus).

https://itunes.apple.com/us/app/xcode/id497799835?mt=12

## Cask

Installing programs on macs can be obnoxious. Thankfully, there is a tool that extends Homebrew that allows us to install programs without dragging and dropping. Instead, we can just use the command line to install about anything. This tool is known as [Cask](https://caskroom.github.io/). Their website has a searchable list of all programs that you can install using cask.

**Step One:** Open up a terminal and type the following to install Cask:

```bash
brew tap caskroom/cask
```

Cask works just like Homebrew, to install we would type `brew cask install <name of program>`.

**Resources:**
- [Cask](https://caskroom.github.io/)

## iTerm2

[iTerm2](https://www.iterm2.com/) is a highly configurable terminal program that has some developers prefer over Terminal.

**Step One:** Use Cask to install iterm2:

```bash
brew cask install iterm2
```

**Step Two:** Open iTerm by typing `cmd` + `space` and typing `iterm` and pressing `return`.

**Resources:**
- [iTerm2](https://www.iterm2.com/)

## Postman

[Postman](https://www.getpostman.com/) is a graphical tool for sending data over a network. This is really useful for testing HTTP, server and API code.

If you have Cask, you can install it with:

```bash
brew cask install postman
```

- [Postman](https://www.getpostman.com/)
