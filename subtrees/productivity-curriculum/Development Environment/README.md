This article will help you setup a web development environment on [macOS Sierra](http://www.apple.com/macos/sierra/) and above. By the end, your computer will be configured with the same state-of-the-art tools used by professional web developers.

This article assumes your computer is up to the task of coding.

- Is virus and malware free
- Uses the latest, stable version of its operating system
- Has a functioning screen, keyboard, and trackpad
- Has plenty of free hard drive space and memory
- Can reliably connect to wireless networks

## Objectives

By the end of this article, your development machine will have the following software installed and configured.

- [Slack](Slack.md) - a chat tool
- [Magnet](Magnet.md) - a window manager
- [Chrome](Chrome.md) - a web browser
- [LastPass](LastPass.md) - a password manager
- [Terminal](Terminal.md) - a terminal emulator
- [Homebrew](Homebrew.md) - a package manager
- [Fish](Fish.md) - a command line shell
- [Atom](Atom.md) - a text editor
- [Environment variables](Environment Variables.md) - for configuring your environment
- [Git](Git.md) - a version control system
- [Node](Node.md) - a JavaScript environment
- [Surge](../Deployment/Surge.md) - a deployment service

After you've finished setting up your development environment, you'll be able to complete the following tasks.

1. Create a tiny web page with a text editor
1. Test the web page in a browser
1. Commit the web page to a repository
1. Deploy the web page to a production environment with [Surge](../Deployment/Surge.md)

### What's an environment and why is it important?

In software, an **environment** is the place where an application is executed. An application's environment includes things like an operating system and a runtime system. Although web applications are often executed on many different environments, each with their own purpose, two environments are essential—production and development.

A **production environment** is a server, or collection of servers, that live somewhere on the Internet and is responsible for serving the web application to the public. When you visit https://duckduckgo.com/ in the browser, for example, you're making a request to a web application's production environment. Production environments are carefully configured and designed to process user requests as quickly as possible.

A **development environment** is a machine, like your laptop, that's used to create, test, commit, and deploy code to the production environment. For consistency, it's important that a development environment use the same technologies as its production counterpart. However, unlike production, a development environment is all about increasing developer productivity. As you can imagine, being able to create a development environment is a crucial skill for every developer.

### How do you create a development environment?

There are four essential tasks that web developers do on a daily basis.

1. **Write code** as efficiently as possible
1. **Test code** to ensure it works as expected
1. **Commit code** to a repository once it's correct
1. **Deploy code** to a production environment

Some developers prefer a development environment comprised of a single, monolithic tool called an Integrated Development Environment (or IDE). A few popular IDEs include Xcode, Visual Studio, and Web Storm. IDEs are great for people who don't want to think very hard about their tools.

However, we want you to think about your tools so you can understand what their trade-offs are. That's why, in this class, you'll learn how to build a development environment composed of multiple specialized tools. This approach is called the **Unix philosophy** and it emphasizes using modular and extensible tools. Though each tool has its own learning curve, any one of them is easily replaceable when the need arises.

The following instructions will help you install and configure a web development environment using tools that adhere to the Unix philosophy. Let's get started.

### Next Step

Install and configure [Slack](Slack.md)
