# Bootstrap Intro

## Installing Bootstrap

Bootstrap's documentation offers up a number of installation options. To keep things simple, we're going to  but we're going to use the Bootstrap __CDN__.

**What's a CDN?**

Great question! A CDN (short for **C**ontent **D**elivery **N**etwork) is used to cache static content (e.g. JS/CSS files) across a geographically dispersed network of servers. When a user makes a request for a file hosted on the CDN, the server which is geographically closest to the user will serve up the requested file. In this way, load times are reduced, and users are less annoyed by slow page loads. (To learn more about CDNs, check out [Why Use a Content Delivery Network (CDN)?](https://gtmetrix.com/why-use-a-cdn.html).)

**How Can I link to the Bootstrap CDN?**

Open up a new HTML file in Sublime Text; let's call it `bootstrap-sandbox.html`. Fill it up with some HTML boilerplate:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Bootstrap Sandbox</title>
  </head>
  <body>
    <div>Hello, World!</div>
  </body>
</html>
```

As explained on the Bootstrap website, to hook in to the CDN you'll need to add the following code to your file:

```
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" integrity="sha384-aUGj/X2zp5rLCbBxumKTCw2Z50WgIr1vs/PFN4praOTvYXWlVyh2UtNUU0KAUhAX" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
```

Copy and paste that code above the `</head>` tag, and that's it! You're ready to start using Bootstrap.

## What's the Bootstrap framework?

A **framework** is software that provides a generic template of functionality which can be selectively changed and enhanced by writing additional code. **Bootstrap** is a modern, responsive, front-end framework. In short, Bootstrap has done most of the heavy lifting for you in terms of a cohesive visual language. Bootstrap provides a default set of stylized components that you can incorporate into your own application and tweak as necessary.

To see it in action, check out some of these components.

* [Alerts](https://getbootstrap.com/docs/4.1/components/alerts/)
* [Buttons](https://getbootstrap.com/docs/4.1/components/buttons/)
* [Cards](https://getbootstrap.com/docs/4.1/components/card/)
* [Dropdowns](https://getbootstrap.com/docs/4.1/components/dropdowns/)
