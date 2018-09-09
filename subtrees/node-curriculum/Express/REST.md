## Objectives

- Describe what REST is.
- Explain why REST is important.
- Explain how REST works.
- Build a RESTful Express server.

## What's REST?

**Representational state transfer** (REST) is a way to structure client-server communication over HTTP. While the official definition of REST is quite formal, the basics of REST can be summarized with the following rules.

-  Clients are concerned with user interface.
-  Servers are concerned with data persistence.
-  Clients and servers communicate over a uniform HTTP interface.
-  Clients and servers think about data in terms of resources.
-  Clients send HTTP requests to create, read, update, and destroy resources.
-  Servers send HTTP responses to indicate the result of these operations.

## Why is REST so important?

REST is one way of structuring client-server HTTP communication. However, it's a very popular structure because it leads to a **separation of concerns** between clients and servers. Since the goals of clients and servers are well-defined, it's easy to develop and evolve clients and servers independently. In other words, you can easily:

1. Add and remove additional clients. (e.g. web and mobile)
1. Add and remove additional servers. (e.g. scale and replace)

## How does REST work?

Imagine a RESTful HTTP server manages the persistence of the following guest resources.

```javascript
var guests = [{ name: 'Teagan' }];
```

The server handles the following REST actions by mapping them to specific HTTP requests.

| REST Action       | Request Method | Request URL | Request Body |
|-------------------|----------------|-------------|--------------|
| Read (all)        | `GET`          | `/guests`   | N/A          |
| Read (individual) | `GET`          | `/guests/0` | N/A          |
| Create            | `POST`         | `/guests`   | `name=Mary`  |
| Update            | `PUT`          | `/guests/0` | `name=Don`   |
| Destroy           | `DELETE`       | `/guests/0` | N/A          |

The server handles each REST action by performing a unique operation on the guest resources. If the following REST actions are performed sequentially, the guest resources will look like the following after each operation.

| REST Action       | Guest Resources                      |
|-------------------|--------------------------------------|
| Read (all)        | `[{ name: 'Teagan' }]`               |
| Read (individual) | `[{ name: 'Teagan' }]`               |
| Create            | `[{ name: 'Teagan' }, { name: 'Mary' }]` |
| Update            | `[{ name: 'Don' }, { name: 'Mary' }]`    |
| Destroy           | `[{ name: 'Mary' }]`                 |

Once the REST action is complete, the server sends a specific HTTP response back to the client indicating the result of the operation.

| REST Action       | Response Status | Response Content-Type | Response Body          |
|-------------------|-----------------|-----------------------|------------------------|
| Read (all)        | `200`           | `application/json`    | `[{ name: 'Teagan' }]` |
| Read (individual) | `200`           | `application/json`    | `{ name: 'Teagan' }`   |
| Create            | `200`           | `application/json`    | `{ name: 'Mary' }`     |
| Update            | `200`           | `application/json`    | `{ name: 'Don' }`      |
| Destroy           | `200`           | `application/json`    | `{ name: 'Don' }`      |

A **safe** REST action is one that doesn't modify any resources. Which REST actions from the above example are safe?

## How do you build a RESTful Express server?

Building on the **Express: Middleware** article, refactor your `server.js` file to include the following RESTful middleware.

```javascript
'use strict';

var express = require('express');
var app = express();

var guests = [{ name: 'Teagan' }];

app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

var morgan = require('morgan');
app.use(morgan('short'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/guests', function(req, res) {
  res.send(guests);
});

app.get('/guests/:index', function(req, res) {
  var index = Number.parseInt(req.params.index);

  if (Number.isNaN(index) || index < 0 || index >= guests.length) {
    return res.sendStatus(404);
  }

  res.send(guests[index]);
});

app.post('/guests', function(req, res) {
  var guest = req.body;

  if (!guest) {
    return res.sendStatus(400);
  }

  guests.push(guest);

  res.send(guest);
});

app.put('/guests/:index', function(req, res) {
  var index = Number.parseInt(req.params.index);

  if (Number.isNaN(index) || index < 0 || index >= guests.length) {
    return res.sendStatus(404);
  }

  var guest = req.body;

  if (!guest) {
    return res.sendStatus(400);
  }

  guests[index] = guest;

  res.send(guest);
});

app.delete('/guests/:index', function(req, res) {
  var index = Number.parseInt(req.params.index);

  if (Number.isNaN(index) || index < 0 || index >= guests.length) {
    return res.sendStatus(404);
  }

  var guest = guests.splice(index, 1)[0];

  res.send(guest);
});

app.listen(app.get('port'), function() {
  console.log('Listening on', app.get('port'));
});
```

Now, start your Express server.

```bash
nodemon server.js
```

And in a new Terminal tab, send an HTTP request to your server to read all the guest resources.

```bash
http GET localhost:5000/guests
```

And you should see something like this.

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 19
Content-Type: application/json; charset=utf-8
Date: Thu, 24 Mar 2016 15:43:00 GMT
ETag: W/"13-eZMtvf4MUiEAJpKhww5ZlQ"

[
    {
        "name": "Teagan"
    }
]
```

Send another HTTP request to read an individual guest resource.

```bash
http GET localhost:5000/guests/0
```

And you should see something like this.

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 17
Content-Type: application/json; charset=utf-8
Date: Thu, 24 Mar 2016 15:44:19 GMT
ETag: W/"11-0KyDlj1psIN3xnEMJsjMJg"

{
    "name": "Teagan"
}
```

Send an HTTP request to create an individual guest resource.

```bash
http POST localhost:5000/guests name=Mary
```

And you should see something like this.

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 15
Content-Type: application/json; charset=utf-8
Date: Thu, 24 Mar 2016 15:45:05 GMT
ETag: W/"f-pPOBaT8aXBbirJ2irXvIdg"

{
    "name": "Mary"
}
```

Send another HTTP request to read an individual guest resource.

```bash
http GET localhost:5000/guests/1
```

And you should see something like this.

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 15
Content-Type: application/json; charset=utf-8
Date: Thu, 24 Mar 2016 15:45:44 GMT
ETag: W/"f-pPOBaT8aXBbirJ2irXvIdg"

{
    "name": "Mary"
}
```

Send an HTTP request to read all the guest resources.

```bash
http GET localhost:5000/guests
```

And you should see something like this.

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 35
Content-Type: application/json; charset=utf-8
Date: Thu, 24 Mar 2016 15:46:18 GMT
ETag: W/"23-bh9WCahnDHTY1E+InF4FTA"

[
    {
        "name": "Teagan"
    },
    {
        "name": "Mary"
    }
]
```

Send an HTTP request to update an individual guest resource.

```bash
http PUT localhost:5000/guests/0 name=Don
```

And you should see something like this.

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 14
Content-Type: application/json; charset=utf-8
Date: Thu, 24 Mar 2016 15:47:36 GMT
ETag: W/"e-GMWKG7r0SW1dvTJlsqKZRA"

{
    "name": "Don"
}
```

Send an HTTP request to update an individual guest resource.

```bash
http GET localhost:5000/guests/0
```

And you should see something like this.

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 14
Content-Type: application/json; charset=utf-8
Date: Thu, 24 Mar 2016 15:48:25 GMT
ETag: W/"e-GMWKG7r0SW1dvTJlsqKZRA"

{
    "name": "Don"
}
```

Send an HTTP request to destroy an individual guest resource.

```bash
http DELETE localhost:5000/guests/0
```

And you should see something like this.

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 14
Content-Type: application/json; charset=utf-8
Date: Thu, 24 Mar 2016 15:50:27 GMT
ETag: W/"e-GMWKG7r0SW1dvTJlsqKZRA"

{
    "name": "Don"
}
```

Send an HTTP request to read all the guest resources.

```
http GET localhost:5000/guests
```

And you should see something like this.

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 17
Content-Type: application/json; charset=utf-8
Date: Thu, 24 Mar 2016 15:51:08 GMT
ETag: W/"11-EtwezO7FYAMu6cFoRdMVCA"

[
    {
        "name": "Mary"
    }
]
```

## Review Questions

- What is REST, in your own words?
- Can you update a resource with a GET request?
- What are the seven restful routes of CRUD?
- Write a sample url to show an individual resource.
- In express how do you access '/:id'?
- In express how do you access the body of request?
- In express how do you access the breed in '/puppies?color=red&breed=lab'?
- From a browser, how do you create an DELETE Request?
- From a browser, how do you redirect the page for the user?

## Challenges

- [Pet Shop - RESTful Express HTTP Server](https://github.com/gSchool/fs-pet-shop/blob/master/rest.md)
- [RESTful-exercise](https://github.com/gSchool/RESTful-exercise)
- [Movie Inventory CRUD Application](https://github.com/gSchool/movie-inventory-crud)
- [Booklist Refactor - MVC / Router](https://github.com/gSchool/booklist_express)

## Resources

- [Express 4.x - API Reference: Request](http://expressjs.com/en/4x/api.html#req)
- [Express 4.x - API Reference: Response](http://expressjs.com/en/4x/api.html#res)

## Slides

- [Slides](https://docs.google.com/presentation/d/1dSB6ODFkQN3rokVPNlmNH7WCVaSLOYV0mvEcxkaUUtI/edit?usp=sharing)
