## Objectives

- Explain what linting is.
- Explain why linting your JavaScript is useful.
- Use ESLint to lint your own JavaScript code.

## What's linting?

**Linting** is the process of running a program that analyzes code for potential errors. The word "linting" comes the `lint` Unix utility which flags suspicious and non-portable constructs in C language code. For Unix developers, linting their C code is useful because suspicious and non-portable constructs are likely to produce bugs when Unix is run on different hardware.

A **linter** is any tool that flags suspicious usage of coding constructs and syntactic style. In other words, linters are often used to debug code for common syntax errors or to highlight code that doesn't adhere to certain style guidelines.

In this lesson, you'll be using [ESLint][eslint] to analyze and improve JavaScript code you've already written in this course. By the end, you'll have a concrete picture of what linting is, why it's useful, and how to lint your own JavaScript code.

[eslint]: http://eslint.org/

## Why is linting your JavaScript useful?

When you're interviewing for a developer job, your code is going to be assessed by people who've been writing code for a long time. As you can imagine, this can be quite intimidating. Experienced developers will quickly spot code that's written by inexperienced developers, who are just started out, as it often lacks discipline and a complete knowledge of the language.

When coding, **discipline** is a critical skill because code has a large audience of people and machines who are responsible for reading and evaluating the code.

1. The first audience member is obviously the person doing the writing.
1. The second audience member is the runtime system that executes the code.
1. The third audience member is the maintenance team who will change the code as the product evolves.

A disciplined developer understands that each audience member has certain needs when reading and evaluating code. The writer needs to produce his or her work quickly. The runtime system needs to execute the code correctly and efficiently. And the maintenance team needs to quickly relearn how the code works so they can change it. Writing code that balances the needs of the audience requires discipline.

Writing balanced code also takes a **complete knowledge** of its programming language. As you've likely discovered by now, programming languages are comprised of many coding constructs, some that can accomplish the same thing. Take an `if...else` clause, for example. It performs the exact same thing a ternary `?:` operation. They both allow code to branch in one of two directions depending on the result of a logical expression.

But, as a developer, when do you choose an `if...else` clause over a ternary `?:` operation? When do you reach for the other? A person who's been writing code for a long time has gone through enough experiences, enough trial-and-error, to definitively answer these types of questions. However, you're probably not one of those people, yet.

So how do you quickly level up? One of the best ways is to start linting your code. Tools like ESLint will help you learn the habit of discipline and help you fill in the gaps of your JavaScript knowledge.

Long story short, if you want your code to look like you've been developing software for a long time, use a linter.

## How do you lint your JavaScript?

1. Read ESLint's [about page][eslint-about]
1. Read Ryan Sobol's [shareable ESLint configuration][eslint-config-ryansobol]

[eslint-config-ryansobol]: https://github.com/ryansobol/eslint-config-ryansobol
[eslint-about]: http://eslint.org/docs/about/
