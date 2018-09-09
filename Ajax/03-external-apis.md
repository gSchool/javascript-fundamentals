# External APIs

## Learning Objectives

By the end of this lesson, you will be able to:

* Request information from an external API

## Using external APIs to bolster your applications

Building APIs allows you to offer information that you have to the rest of the world. It's a way for people to share data for free or make it easier to use various services. APIs are the engine for the web and make it easier to share information and build tools.

Thankfully, you're not the only one out there building APIs. There are hundreds of free-to-use APIs you can use to build all kinds of tools. To keep their platforms secure, these APIs will often require some kind of authentication -- for example, signing up and using an API Key. Others will be free to use for everyone.

Try going to the following URL but in place of `<username>` put your GitHub username:

* `https://api.github.com/users/<username>`

Because GitHub has set up this endpoint for us, you can build tools using it.

* [Todd Motto: Public APIs](https://github.com/toddmotto/public-apis)

## Resources

- [MDN - Ajax: Getting Started](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started)
- [MDN - Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN - JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON)
- [Wikipedia - Same Origin Policy](http://en.wikipedia.org/wiki/Same-origin_policy)

Here are some great simple starter APIs that are open and easy to use:

- [Star Wars API, swapi.co](https://swapi.co/)
- [Movie API, omdapi.com](http://www.omdbapi.com/)
- [Pokemon API, pokeapi.co](https://pokeapi.co)
- [List of public APIs](https://github.com/toddmotto/public-apis)
- [Galvanize APIs](https://github.com/Galvanize-IT/galvanize-apis)

## Technical Terms

Ajax
> Asynchronous JavaScript & XML. A technique that allows web pages to request data from a server without refreshing the page.

XML
> Extensible Markup Language. A markup language with the intent to be both human and machine readable. Allows developers to create tree structures from scratch with human language.

JSON
> JavaScript Object Notation. A data format that looks like a JavaScript object and is highly readable. Can be parsed with `JSON.parse()` and converted with `JSON.stringify()`.

CORS
> Cross Origin Request Sharing. CORS defines which browsers and servers can interact with each other and attempt to safely determine who can request what resource.

Race Condition
> Code can produce race conditions when the response from an evaluated expression is not immediate. The result is that your code can run in an order different than what you'd expect.


## Challenges

<!-- Question -->

### !challenge

* type: project
* id: 26a96170-b3d9-11e8-89b8-f32133e66ea3
* title: Git Duel

##### !question

To complete this assignment, do the following:

1. Fork and clone [this repository](https://github.com/gSchool/git-duel-ajax)

1. Complete the challenge as described

1. Submit your final, forked version below

##### !end-question

##### !placeholder

https://github.com/<github-username>/git-duel-ajax

##### !end-placeholder

### !end-challenge
