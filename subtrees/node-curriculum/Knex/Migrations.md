# Knex Migrations

## Objectives

- Explain what the Knex migration system is.
- Explain why the Knex migration system is useful.
- Use Knex to migrate a PostgreSQL database.
- Explain what the Knex seed system is.
- Explain why the Knex seed system is useful.
- Use Knex to seed a PostgreSQL database.

## What's the Knex migration system?

The **Knex migration system** allows developers to automate the management of database tables in JavaScript. At the heart of the system are migration files. When defined, a migration file moves the database up and down, or forwards and backwards, through a set of changes applied to a single table.

Here's a diagram representing two Knex migration files that manage the `artists` and `tracks` tables respectively.

```text
┌───────────────────────────┐                      ┌───────────────────────────┐
│                           │                      │                           │
│                           │──── up / forward ───▶│                           │
│                           │                      │                           │
│ 20160621141318_artists.js │                      │ 20160621141319_tracks.js  │
│                           │                      │                           │
│                           │◀── down / backward ──│                           │
│                           │                      │                           │
└───────────────────────────┘                      └───────────────────────────┘
```

The name of a migration file is prefixed with a UTC timestamp. That way, the Knex migration system can identify and order the migrations based on when the files were created and what tables they affect.

Here's an example what the contents of the `20160621141318_artists.js` migration file might look like.

```javascript
'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('artists', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('artists');
};
```

As you can see, a migration file exports two functions—`up()` and `down()`. The `up()` function returns instructions to the Knex migration system on how to migrate the database forward. And the `down()` function returns instructions on how to migrate the database backward.

When the database is migrated forward, the `up()` function is translated into the following SQL command.

```sql
CREATE TABLE artists (
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL DEFAULT '',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);
```

And when the database is migrated backward, the `down()` function is translated into the following SQL command.

```sql
DROP TABLE artists;
```

### Exercise

Turn to a neighbor and explain what the Knex migration system is in your own words.

## Why is the Knex migration system useful?

Knex migrations are a consistent and convenient way to automate the management of database tables.

First, when the same sequence of Knex migration files are run on an empty database, they result in the creation of the same tables every time. This consistency is useful for reproducing the same tables in multiple databases. For example, when a development, test, and production environments, each with their own isolated database, are given the same table structure, the application code that successfully interfaces with one of them will work across all them.

Second, when a mistake in a Knex migration is caught early in the development process, the affected tables can be dropped, effectively rolling the database back to a known good state. This convenience is useful for correcting bugs that appear in a table's structure before they make it to production. For example, imagine a `price numeric(4, 2)` column is given a precision that's too low. This could lead to significant losses in revenue if the bug isn't corrected during development. With a Knex migration, you can roll the database back, fix the bug  before it's able to do damage, and migrate the database forward.

### Exercise

Turn to a neighbor and talk about when it might be useful to consistently create the same tables in multiple databases. Once you're satisfied, talk about when it might be useful to conveniently roll a database back.

## How do you use Knex to migrate a PostgreSQL database?

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

```shell
mkdir trackify
cd trackify
npm init
```

Initialize a new git repo.

```shell
git init
```

Tell git to ignore the usual files/folders.

```shell
echo '.DS_Store' >> .gitignore
echo 'node_modules' >> .gitignore
echo 'npm-debug.log' >> .gitignore
```

Before we can start creating migration files we need to create the database, `trackify_dev`. You should see it listed in the `psql -l` output.

```shell
createdb trackify_dev
psql -l
```

Next we install both `pg` and `knex`. When we install `knex` it comes the migration cli tool installed to `./node_modules/.bin/knex`. [We can use this instead of doing an `npm install -g knex` for the CLI tool.](http://knexjs.org/#Migrations-CLI)

```shell
npm install --save pg knex
```

```shell
touch knexfile.js
```

`knexfile.js`

```javascript
'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/trackify_dev'
  }
};
```

Run a test command to see the migration CLI at work. You shouldn't have a current version, **yet**.

`in your shell`

```shell
./node_modules/.bin/knex migrate:currentVersion
```

`package.json`

```javascript
"scripts": {
  "knex": "knex"
},
```

`in your shell`

```shell
npm run knex migrate:currentVersion
```

> You still should see a version of `none`, but at least `npm` is saving you from having to type, `./node_modules/.bin/knex`. 


Create a new migration with the name `artists`.

```shell
npm run knex migrate:make artists
```

This created a couple things for us.

`in your shell`

```shell
ls -hal
ls -hal migrations
```

`in your shell`

```shell
npm run knex migrate:currentVersion
```

Migrations are how we define and update our database schema.

`migrations/[SOME_TIMESTAMP]_artists.js`

```javascript
'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('artists', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('artists');
};
```

`in your shell`

```shell
npm run knex migrate:latest
```

> Hmm... what did that do? Having problems remembering?
>
> ```
> npm run knex -- --help
> ```

Check your current version now.

```shell
npm run knex migrate:currentVersion
```

It should be updated to timestamp on the migration file for your artists. 


Run through the following series of shell commands to get a better idea of knex and how it tracks migrations internally.

```shell
psql trackify_dev -c '\dt'
```

```shell
psql trackify_dev -c '\d knex_migrations'
```

```shell
psql trackify_dev -c 'SELECT * FROM knex_migrations;'
```

```shell
npm run knex migrate:rollback
```

```shell
npm run knex migrate:currentVersion
```

```shell
psql trackify_dev -c 'SELECT * FROM knex_migrations;'
```

```shell
npm run knex migrate:latest
```

```shell
npm run knex migrate:currentVersion
```

```shell
psql trackify_dev -c 'SELECT * FROM knex_migrations;'
```

Add migration locking so multiple services cannot try to run migrations at same time. This added a new lock table. If migrations are locked and migrations are run by another service it results in an error.

```shell
psql trackify_dev -c '\d knex_migrations_lock'
```


```shell
psql trackify_dev -c 'SELECT * FROM knex_migrations_lock;'
```

```shell
npm run knex migrate:make tracks
```

```shell
ls -hal migrations
```

`migrations/[SOME_TIMESTAMP]_tracks.js`

```javascript
'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('tracks', (table) => {
    table.increments();
    table.integer('artist_id')
      .notNullable()
      .references('id')
      .inTable('artists')
      .onDelete('CASCADE')
      .index();
    table.string('title').notNullable().defaultTo('');
    table.integer('likes').notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tracks');
};
```

```shell
npm run knex migrate:latest
```

```shell
npm run knex migrate:currentVersion
```

```shell
psql trackify_dev -c 'SELECT * FROM knex_migrations;'
```

```shell
npm run knex migrate:rollback
```

```shell
npm run knex migrate:currentVersion
```

```shell
psql trackify_dev -c 'SELECT * FROM knex_migrations;'
```

```shell
npm run knex migrate:rollback
```

```shell
npm run knex migrate:currentVersion
```

```shell
psql trackify_dev -c 'SELECT * FROM knex_migrations;'
```

```shell
npm run knex migrate:latest
```

```shell
npm run knex migrate:currentVersion
```

```shell
psql trackify_dev -c 'SELECT * FROM knex_migrations;'
```

## What's the Knex seed system?

The **Knex seed system** allows developers to automate the initialization of table rows in JavaScript.

## Why is the Knex seed system useful?

Most web application start with an initial set of table rows. It's useful to be able to seed a database with that set.

## How do you use Knex to seed a PostgreSQL database?

```shell
npm run knex seed:make 1_artists
```

```shell
ls -hal
ls -hal seeds
```

```javascript
'use strict';

exports.seed = function(knex) {
  return knex('artists').del()
    .then(() => {
      return knex('artists').insert([{
        id: 1,
        name: 'The Beatles'
      }, {
        id: 2,
        name: 'Adele'
      }]);
    });
};
```

```shell
npm run knex seed:run
```

```shell
psql trackify_dev -c 'SELECT * FROM artists;'
```

```shell
npm run knex seed:run
```

```shell
psql trackify_dev -c 'SELECT * FROM artists;'
```


```shell
npm run knex seed:make 2_tracks
```

```shell
ls -hal seeds
```

```javascript
'use strict';

exports.seed = function(knex) {
  return knex('tracks').del()
    .then(() => {
      return knex('tracks').insert([{
        id: 1,
        artist_id: 1,
        title: 'Here Comes the Sun',
        likes: 28808736
      }, {
        id: 2,
        artist_id: 1,
        title: 'Hey Jude',
        likes: 20355655
      }, {
        id: 3,
        artist_id: 1,
        title: 'Come Together',
        likes: 24438428
      }, {
        id: 4,
        artist_id: 1,
        title: 'Yesterday',
        likes: 21626039
      }, {
        id: 5,
        artist_id: 2,
        title: 'Send My Love',
        likes: 39658471
      }, {
        id: 6,
        artist_id: 2,
        title: 'Hello',
        likes: 538300301
      }, {
        id: 7,
        artist_id: 2,
        title: 'When We Were Young',
        likes: 112487182
      }, {
        id: 8,
        artist_id: 2,
        title: 'Someone Like You',
        likes: 112487182
      }]);
    });
};
```

```shell
npm run knex seed:run
```

```shell
psql trackify_dev -c 'SELECT * FROM tracks;'
```

```shell
npm run knex seed:run
```

```shell
psql trackify_dev -c 'SELECT * FROM tracks;'
```

```shell
git status
```

```shell
git add .
git commit -m 'Initial commit'
```
