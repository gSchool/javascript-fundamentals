### Adding Assets

Let's install our first middleware. With our Express application we want to be able to serve assets **javascripts**, **stylesheets**, and **images**. By convention we generally put all these into a `public/` directory in our project.

`app.use(express.static(__dirname + "/public"))`

Now we can make subfolders in our `public` folder for our assets.

[Why use dirname?](http://stackoverflow.com/questions/16727045/node-js-express-js-relative-paths-dot-or-dirname-or-without-any-prefix)

Also, note that we've used two different methods on `app` in our js file: `app.set` and `app.use`. The former is often used to set Express application settings; the latter is used to explicitly call different pieces of middleware. You can check out the [Express documentation]() for more on the difference between the two.

```
mkdir public/javascripts
mkdir public/stylesheets
mkdir public/images

touch public/stylesheets/app.css
```

Inside of our `app.css` we can add some style for the body of our app.

```
body {
background-color: red;
color: white;
}
```


Then we just add a `link` tag in our `view` files.

Note that without using `express.static`, your static files won't be found! If you're curious, check out the Network tab in Chrome to see what happens when you include `express.static` vs. when you don't.

[How does static file serving really work?](http://stackoverflow.com/questions/18900990/express-js-node-js-how-does-static-file-serving-really-work)
