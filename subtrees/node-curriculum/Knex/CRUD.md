
# CRUD

## Objectives

- Explain what a RESTful, database-driven HTTP server is.
- Explain why a RESTful, database-driven HTTP server is useful.
- Use Express and Knex to build a RESTful, database-driven HTTP server.

## What's a RESTful, database-driven HTTP server?

A **RESTful, database-driven HTTP server** is exactly what the name implies. It's a server that communicates with a client using a RESTful HTTP API. The sole purpose of the HTTP server is to manage information that's persisted to a database.

Here's a sequence diagram of the RESTful, database-driven HTTP server.

```text
┌─── Chrome ──┐               ┌── Node.js ──┐               ┌── postgres ─┐               ╔════════════ cluster ═══════════╗
│             │─── request ──▶│             │─── request ──▶│             │──── write ───▶║                                ║
│             │    JSON       │             │    SQL        │             │               ║  ┏━━━━━━━━ database ━━━━━━━━┓  ║
│   jQuery    │               │   Express   │               │             │               ║  ┃                          ┃  ║
│             │               │   Knex      │               │             │               ║  ┃  ┌──────┬ table ┬─────┐  ┃  ║
│             │               │             │               │             │               ║  ┃  ├──────┼───────┼─────┤  ┃  ║
│             │◀── response ──│             │◀── response ──│             │◀─── read ─────║  ┃  ├──────┼───────┼─────┤  ┃  ║
└─────────────┘    JSON       └─────────────┘    Row(s)     └─────────────┘               ║  ┃  ├──────┼───────┼─────┤  ┃  ║
                                                                                          ║  ┃  └──────┴───────┴─────┘  ┃  ║
                                                                                          ║  ┃                          ┃  ║
                                                                                          ║  ┃  ┌──────┬ table ┬─────┐  ┃  ║
                                                                                          ║  ┃  ├──────┼───────┼─────┤  ┃  ║
                                                                                          ║  ┃  ├──────┼───────┼─────┤  ┃  ║
                                                                                          ║  ┃  ├──────┼───────┼─────┤  ┃  ║
                                                                                          ║  ┃  └──────┴───────┴─────┘  ┃  ║
                                                                                          ║  ┃                          ┃  ║
                                                                                          ║  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━┛  ║
                                                                                          ║                                ║
                                                                                          ╚════════════════════════════════╝
```

For example, imagine a RESTful, database-driven HTTP server manages the persistence of the following rows in the `artists` table.

```text
 id |    name     
----+-------------
  1 | The Beatles
(1 row)
```

A RESTful server would handle the following HTTP requests by mapping them to a specific REST action.

| REST Action       | Request Method | Request URL  | Request Content-Type  | Request Body           |
|-------------------|----------------|--------------|-----------------------|------------------------|
| Read (all)        | `GET`          | `/artists`   | N/A                   | N/A                    |
| Read (individual) | `GET`          | `/artists/1` | N/A                   | N/A                    |
| Create            | `POST`         | `/artists`   | `application/json`    | `{ "name": "Prince" }` |
| Update            | `PATCH`        | `/artists/2` | `application/json`    | `{ "name": "⚥" }`      |
| Destroy           | `DELETE`       | `/artists/2` | N/A                   | N/A                    |

Once the operation is complete, the RESTful server would send a specific HTTP response back to the client indicating the result of the operation.

| REST Action       | Response Status | Response Content-Type | Response Body                          |
|-------------------|-----------------|-----------------------|----------------------------------------|
| Read (all)        | `200`           | `application/json`    | `[{ id: "1", "name": "The Beatles" }]` |
| Read (individual) | `200`           | `application/json`    | `{ id: "1", "name": "The Beatles" }`   |
| Create            | `200`           | `application/json`    | `{ id: "2", "name": "Prince" }`        |
| Update            | `200`           | `application/json`    | `{ id: "2", "name": "⚥" }`             |
| Destroy           | `200`           | `application/json`    | `{ "name": "⚥" }`                      |

### Exercise

Take a few moments to diagram how a RESTful, database-driven HTTP server works.

Once you're satisfied, turn to a neighbor and explain how information flows throw the system.

## Why is a RESTful, database-driven HTTP server is useful?

REST is one way of structuring client-server HTTP communication. It's a very popular structure because it creates a **separation of concerns** between clients and servers. Separation of concerns is a phrase that you'll hear quite often when working as a programmer. It is a design philosophy that encourages creating an architecture in your code such that when you make a change to one part of your code, it does not affect any other parts. REST implements this philosophy by *separating* the client and server and creating a *language* in which they can communicate. This is very beneficial for developers, because having a defined language helps keep intentions clear across the entire code base for all developers. Furthermore, since the goals of clients and servers are well-defined, it's easy to develop clients and servers independently.

- separation of concerns
- follows the principle of least surprise
- great way to organize data, relationships, processes
- process are independently scalable and replaceable

### Exercise

Take a few moments to read the paragraph above. When you're done, turn to a neighbor and explain why RESTful, database-driven HTTP servers achieve the 4 points above.

Be prepared to share with the class.

## How do you use Express and Knex to build a RESTful, database-driven HTTP server?

Here's an entity relationship diagram representing the data model the HTTP server will need to manage.

```text
┌───────────────────────────────────────────────────────────────┐
│                            artists                            │
├─────────────┬─────────────────────────┬───────────────────────┤
│id           │serial                   │primary key            │
│name         │varchar(255)             │not null default ''    │
│created_at   │timestamp with time zone │not null default now() │
│updated_at   │timestamp with time zone │not null default now() │
└─────────────┴─────────────────────────┴───────────────────────┘
                                ┼
                                │
                                ○
                               ╱│╲
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                          tracks                                          │
├─────────────┬─────────────────────────┬──────────────────────────────────────────────────┤
│id           │serial                   │primary key                                       │
│artist_id    │integer                  │not null references authors(id) on delete cascade │
│title        │varchar(255)             │not null default ''                               │
│likes        │integer                  │not null default 0                                │
│created_at   │timestamp with time zone │not null default now()                            │
│updated_at   │timestamp with time zone │not null default now()                            │
└─────────────┴─────────────────────────┴──────────────────────────────────────────────────┘
```

To get started, checkout a new feature branch.

```shell
git checkout -b http_server
```

Then, install the following dependencies locally and save them to the `package.json` file.

```shell
npm install --save express body-parser morgan
```

In a `server.js` file, type the following code.

```javascript
'use strict';

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

const morgan = require('morgan');
const bodyParser = require('body-parser');

const artists = require('./routes/artists');
const tracks = require('./routes/tracks');

const app = express();

app.disable('x-powered-by');

app.use(morgan('short'));
app.use(bodyParser.json());

app.use(express.static(path.join('public')));

app.use(artists);
app.use(tracks);

app.use((_req, res) => {
  res.sendStatus(404);
});

app.use((err, _req, res, _next) => {
  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
```

In both the `routes/artists.js` and `routes/tracks.js` files, type out the following code.

```javascript
'use strict';

const express = require('express');
const router = express.Router();

module.exports = router;
```

Then, install `nodemon` as a local development dependency, saving it to the `package.json` file.

```shell
npm install --save-dev nodemon
```

Add a `nodemon` script to the `package.json` file.

```javascript
"scripts": {
  "knex": "knex",
  "heroku-postbuild": "knex migrate:latest",
  "nodemon": "nodemon server.js"
},
```

Then, start the server with `nodemon`.

```shell
npm run nodemon
```

Add and commit the changes to your repository.

```shell
git add .
git commit -m 'Add an Express server'
```

In a `knex.js` file, type out the following code.

```javascript
'use strict';

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);

module.exports = knex;
```

In a `routes/artists.js` file, type the following code.

```javascript
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/artists', (_req, res, next) => {
  knex('artists')
    .orderBy('id')
    .then((artists) => {
      res.send(artists);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/artists/:id', (req, res, next) => {
  knex('artists')
    .where('id', req.params.id)
    .first()
    .then((artist) => {
      if (!artist) {
        return next();
      }

      res.send(artist);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/artists', (req, res, next) => {
  knex('artists')
    .insert({ name: req.body.name }, '*')
    .then((artists) => {
      res.send(artists[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/artists/:id', (req, res, next) => {
  knex('artists')
    .where('id', req.params.id)
    .first()
    .then((artist) => {
      if (!artist) {
        return next();
      }

      return knex('artists')
        .update({ name: req.body.name }, '*')
        .where('id', req.params.id);
    })
    .then((artists) => {
      res.send(artists[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/artists/:id', (req, res, next) => {
  let artist;

  knex('artists')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if (!row) {
        return next();
      }

      artist = row;

      return knex('artists')
        .del()
        .where('id', req.params.id);
    })
    .then(() => {
      delete artist.id;
      res.send(artist);
    });
    .catch((err) => {
      next(err);
    });
});

router.get('/artists/:id/tracks', (req, res, next) => {
  knex('tracks')
    .where('artist_id', req.params.id)
    .orderBy('id')
    .then((track) => {
      res.send(track);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
```

Add and commit the changes to your repository.

```shell
git add .
git commit -m 'Route /artists'
```

In a `routes/tracks.js` file, type the following code.

```javascript
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/tracks', (_req, res, next) => {
  knex('tracks')
    .orderBy('id')
    .then((tracks) => {
      res.send(tracks);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/tracks/:id', (req, res, next) => {
  knex('tracks')
    .where('id', req.params.id)
    .first()
    .then((track) => {
      if (!track) {
        return next();
      }

      res.send(track);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/tracks', (req, res, next) => {
  knex('artists')
    .where('id', req.body.artist_id)
    .first()
    .then((artist) => {
      if (!artist) {
        const err = new Error('artist_id does not exist');

        err.status = 400;

        throw err;
      }

      return knex('tracks')
        .insert({
          artist_id: req.body.artist_id,
          title: req.body.title,
          likes: req.body.likes
        }, '*');
    })
    .then((tracks) => {
      res.send(tracks[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/tracks/:id', (req, res, next) => {
  knex('tracks')
    .where('id', req.params.id)
    .first()
    .then((track) => {
      if (!track) {
        return next();
      }

      return knex('artists')
        .where('id', req.body.artist_id)
        .first();
    })
    .then((artist) => {
      if (!artist) {
        const err = new Error('artist_id does not exist');

        err.status = 400;

        throw err;
      }

      return knex('tracks')
        .update({
          artist_id: req.body.artist_id,
          title: req.body.title,
          likes: req.body.likes
        }, '*')
        .where('id', req.params.id);
    })
    .then((tracks) => {
      res.send(tracks[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/tracks/:id', (req, res, next) => {
  let track;

  knex('tracks')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if (!row) {
        return next();
      }

      track = row;

      return knex('tracks')
        .del()
        .where('id', req.params.id);
    })
    .then(() => {
      delete track.id;
      res.send(track);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
```

Add and commit the changes to your repository.

```shell
git add .
git commit -m 'Route /tracks'
```

Merge the feature branch into the `master` branch.

```shell
git checkout master
git merge http_server
```

Now that it's merged, delete the feature branch.

```shell
git branch -d http_server
```

Note: Sometimes you want to format your objects before inserting them into postgres or sending them to the client. Because you've setup the database using *snake_case*, if you want to use *camelCase* on the client you need to `camelize` and `decamelize` object keys using the humps library.

```javascript
const { camelizeKeys, decamelizeKeys } = require('humps');

camelizeKeys({ 'artist_id': 3 }) // { artistId: 3 }
decamelizeKeys({ 'lastName': 'Torvalds' }) // { last_name: 'Torvalds' }
```

## Exercise

- https://github.com/gSchool/galvanize-bookshelf-solution/blob/master/2_express_knex.md
