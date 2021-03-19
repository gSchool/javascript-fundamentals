# Associations with Joins in Knex

## Objectives

By the end of this lesson you should be able to:

- Add the necessary code to create foreign keys and indexes.
- Explain how joins are used in Knex
- Compare and contrast different types of joins

## A quick review about joins, foreign keys + relationships between tables

We've seen previous that tables in relational databases can be joined to aggregate data and to remove the need for a large number of columns in one table (remember what normalization was? [no worries, LMGTFY](http://lmgtfy.com/?q=normalization)).

We've also examined a couple types of relationships / associations between tables - here is a quick refresher of some of them:

1. One to One
  - one person has one social security number
  - a social security number belongs to only one person
2. One to Many
  - one author has many books
  - a book belongs to an author
3. Many to Many
  - many students take many courses
  - many courses have many courses

## Adding a foreign key in a knex migration

We've also seen that we can add constraints on our columns (primary keys, foreign keys). Constraints ensure data integrity and prevent any potential orphaned records (not sure what that means? take a look at [this](http://www.techrepublic.com/article/ensure-data-integrity-with-proper-database-design/) oldie but goodie)

Inside of our migrations, if we want to add a column that is a foreign key, our migration needs to include something like this:

`table.integer('user_id').unsigned().index().references('users.id')`

All of the methods used here are specified in the [knex docs](http://knexjs.org/)

__EXERCISE__

1. List three types of associations and given an example for each one.
2. What is a foreign key? What constraint does it place on our database table?
3. What does `unsigned()` do?
4. What does `index()` do?
5. What does `onDelete('cascade')` do?
6. What does `notNullable()` do?


### Knex Examples

Knex is a powerful library that exposes most of SQL through its api.  Therefore, we can use knex to practice joins.  With the following tables in mind:

__students__

| id | name         | major |
|----|--------------|-------|
| 1  | John         | Math  |
| 2  | Jacob        | Computer Science|
| 3  | Jingleheimer | History |
| 4  | Schmidt      | Communications|

__enrollments__

| id | course_id | student_id |
|----|-----------|------------|
| 1  |  1        | 1          |
| 2  |  1        | 2          |
| 3  |  2        | 4          |
| 4  |  1        | 3          |
| 5  |  4        | 4          |

__courses__

| id | course_name  | credits|
|----|--------------|--------|
| 1  | Calculus         | 3
| 2  |   Chemistry    | 2
| 3  | English History |1
| 4  | Marketing    |3
| 5  | Advanced Fluid Dynamics| 5

Let's create a play area for us to test out knex.  First, create a new project:

```
mkdir schoolManyToMany
cd schoolManyToMany
createdb school-many-to-many
npm init --yes
npm install --save knex pg
knex init
```

Now we should have a `knexfile.js` and a `package.json` among other things. Let's configure `knexfile.js`. It should reference a database called `school-many-to-many`.  Your file should look similar to this:

```
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'school-many-to-many'
    },
    pool: {
      min: 1,
      max: 1
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    debug:true
  }
};
```

There may be other keys, but development is all we care about.  Next:

```
mkdir db
touch db/knex.js
```

In `db/knex.js`, write:

```javascript
var environment = process.env.NODE_ENV || 'development';
var config = require("../knexfile")[environment];
module.exports = require('knex')(config);
```

The next step is to create some migrations for the tables we want to query:

```
knex migrate:make create_students
knex migrate:make create_courses
knex migrate:make create_enrollments
```

Now you should have a migrations folder that has 3 files in it for the 3 different tables we want to make.  Here is a sample file for the students table creation:


```javascript
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', function(table) {
    table.increments();
    table.string('name');
    table.string('major');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students');
};
```

__EXERCISE__

* Fill in the code for the other two migrations.  Remember that the enrollments table will have 2 foreign keys.
* Once you have your 3 migrations ready, run the migrations.


Now that we should have a working test area, let's use it.  In your terminal, type `node` from the root of our new project. In the node prompt, type:

```javascript
var knex = require('./db/knex');
```

Now you can use knex, just like in your server.  First, create a simple query

```js
// this returns a promise, so we can't do anything with
// it unless we specify a .then callback.
knex('students');

// This is a nice way of seeing the qurey that is being created
knex('students').toString();

// console.log the results
knex('students').then(function(students) { console.log(students) });

// Given a student id (1 in this case), find all the classes the student
// is taking.
knex('courses as c').join('enrollments as e', 'e.course_id', 'c.id')
                    .where('e.student_id', '1')
                    .then(function(courses) { console.log(courses); });
```

__EXERCISE__

Find all courses that have students enrolled in the class and have greater than 2 credits (make sure your data has some classes that have less than 2 credits and a few classes that don't have anyone enrolled).

## Nested Routes

One to many relationships are often expressed in a RESTful way using nested routes.  For example, if I were to create an application with users, in which a user can have many pictures (like a very simple flikr), the routes could be nested like this:

| HTTP VERB | Path | View |
|-----------|------|------|
|  GET | /users    | index (users) |
|  GET | /users/:id | show (user) |
|  GET | /users/new | new (user)|
|  GET | /users/:id/edit | edit (user) |
|  POST | /users | |
|  PUT/PATCH | /users/:id |
|  DELETE | /users/:id
|  GET | /users/:user_id/pictures    | index (pictures) |
|  GET | /users/:user_id/pictures/:id | show (picture) |
|  GET | /users/:user_id/pictures/new | new (picture)|
|  GET | /users/:user_id/pictures/:id/edit | edit (picture) |
|  POST | /users/:user_id/pictures | |
|  PUT/PATCH | /users/:user_id/pictures/:id |
|  DELETE | /users/:user_id/pictures/:id

__EXERCISE__

If the pictures route is separated into it's own module, how would the app use the pictures module?  (Hint `app.use(...`)


### Assignment

Complete part 2 and 3 of the booklist app [here](https://github.com/gSchool/knex_booklist)
