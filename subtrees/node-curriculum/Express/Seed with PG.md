# Seed Data Notes
## Objectives

* Define "seed data"
* Describe the purpose of such "seed data"
* Use "prepared statements" to seed a postgres database

## Part 1: What Is Seed Data?

* Seed data is a set of static data that can be used to "seed" a brand new database instance with the values nessesary for a given application to run
	* Most applications are very data dependent -- most features won't work unless a database exists with valid values.
	* Thinking about the booklist application -- it's not particularly interesting when there are no books, and creating every book one by one every time you start the app is a pain.

* Seed data tries to solve these problems by providing:
	* Mock data for lighter-weight environments (like your local development env).
		* in the book list, this might be enough data for 2 or 3 book lists.
		* in general, it's enough data to make the app intersting to use, but small enough that it fits and runs quickly on your laptop.
	* Mandatory starting points for things like "valid value lists", such as a list of tags that a given blog post can have.
		* Some applications won't work at all if some fields are missing, these are also typically set with seed data.

## Part Two: Seeding a Database w/ pg

* You should know this can be done in raw SQL, or JS, and many frameworks (including Knex) have built in mechanisms for this.
* This way is "hella raw", but even when there is a mechanism, this code is pretty tedious to write. All jobs have bad parts, cest la vie!


First lets create a table to seed:

```sql
CREATE TABLE users (
    user_id bigint NOT NULL PRIMARY KEY,
    username text NOT NULL UNIQUE,
    email text NOT NULL UNIQUE,
    password text NOT NULL
);
```

Now some seeding action:

```js
"use strict"
var pg = require('pg');
var conString = "postgres://Tyler@localhost/seeds_example";

pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }

  seedUsers(client).then(function(responses){
    for(let i = 0; i < responses.length; i++) {
      console.log(responses[i].text, responses[i].values.toString());
    }

    done().then(process.exit);
  });
});

// return a promise so we can call done in the enclosing connection.
function seedUsers(client) {

  // Array instead of object because of the expectation of pg modules prepared statements.
  var users = [
    [1, 'teb', "teb@host.com", "verySafePassword"],
    [2, 'jeb', "jeb@host.com", "verySafePassword2"],
    [3, 'liz', "ldog@host.com", "verySafePassword3"],
    [4, 'jeff', "J_Bizzle@host.com", "verySafePassword4"],
    [5, 'foxworthington', "foxiestFox@host.com", "verySafePassword5"],
    [6, 'mad_grabs_McGee', "McGee@madgrabs.com", "verySafePassword6"]
  ];

  var insertPromises = [];
  for(let i = 0; i < users.length; i ++) {
    let user = users[i];

    // Parameterized SQL, as a "Prepared Statement".
    let curPromise = client.query({
      name: 'insertUserSeed',
      text: 'insert into users (user_id, username, email, password) values ($1, $2, $3, $4)'
    }, user);
    insertPromises.push(curPromise);
  }

  // MORE on promises on Monday.
  return Promise.all(insertPromises);
}
```
