### Method Override

Unfortunately, HTML forms by default will only allow us to GET and POST. What happens when we want to update or delete? In order to do that, we first need to introduce two new HTTP verbs and describe how the `method-override` middleware works.

`PUT` - used for modifying a resource

`DELETE` - used for removing a resouce

In order to use `PUT` and `DELETE` we need to first install method override using `npm install --save method-override` and include these lines in our `app.js`

```
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
```

If we want to use a put request, we now specify it as a part of the query string in our forms:

```
<form action="/books/<%= book.id%>?_method=put" method="POST">
```

We still need to make sure we are using a method of POST in the form, and in our app.js we will need to use `app.put` or `app.delete` to ensure the correct routes are targeted. We do this since HTML forms don't accept `PUT` or `DELETE` methods by default.
