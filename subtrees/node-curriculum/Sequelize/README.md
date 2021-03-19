## Getting started with Sequelize

## Objectives

By the end of this lesson you should be able to:

- Define what an ORM is and what their benefits and drawbacks are
- Understand how to set up a project with Sequelize and the Sequelize-cli
- Include validations at the model and migration level
- Perform CRUD on a resource using Sequelize model and instance methods

### Key terms + definitions

#### ORM

An ORM (Object Relational Mapper) is a piece/layer of software that helps map objects to our database. This means we can just use JavaScript to create and work with our data instead of writing raw SQL queries (the concept is very similar to what we build with the weekend lab!)

You can read some more about the benefits of using an ORM [here](http://stackoverflow.com/questions/1279613/what-is-an-orm-and-where-can-i-learn-more-about-it)

#### Sequelize

From the Sequelize docs "To put it in a nutshell, it's an ORM (Object-Relational-Mapper). The library is written entirely in JavaScript and can be used in the Node.JS environment." In other words, Sequelize is an ORM that works with relational databases and Node.js. It allows us to do many things including:

- Represent models and their data.
- Represent associations between these models.
- Validate data before they gets persisted to the database.
- Perform database operations in an object-oriented fashion.

#### DDL - Data Definition Language

DDL is abbreviation of Data Definition Language. It is used to create and modify the structure of database objects in database. Commands like `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE` are defined as DDL.

#### DML - Data Manipulation Language

DML is abbreviation of Data Manipulation Language. It is used to retrieve, store, modify, delete, insert and update data in database. Commands like `SELECT`, `INSERT`, `UPDATE` and `DELETE` are defined as DML.

#### Migration

Migrations (also known as ‘schema evolution’ or ‘mutations’) are a way of changing your database schema from one version into another. You can think of a migration as the creation or changes you want to make to a database table or column. Before you can start manipulating your models, you need to create and run a migration. Examples of migrations are creating, deleting and altering tables (and their existing columns). **Migrations are strictly for DDL**

#### Model

A model is a class that maps to the data relation (table) and potentially bridges tables. You can think of a model as the blueprint (class) for what each row of data is going to contain. Unlike a migration, you perform CRUD on instances of your models. **Migrations are strictly for DML**

### Getting started with Sequelize and the Sequelize CLI

#### Sequelize-cli and the alias sqlize

We are going to be using the sequelize-cli so that we can easily run commands in the terminal to initialize our project and to create migrations and models. This requires us to first install the sequelize-cli (CLI stands for Command Line Interface) using `npm install --save sequelize-cli`, and then in order to run a command we need to type `node_modules/.bin/sequelize`. This is a bit annoying to type over and over so first thing we should do is create an alias so that we don't have to remember/type this.

### Setup part 1 - getting the sqlize alias (you only have to do this once)

Before we even build our first app - we need to create an alias that we will be using for every single app we build with Sequelize. We're going to create an alias and called it `sqlize` and it will correspond to `node_modules/.bin/sequelize`.

In our .bash_profile or .zshrc file (remember these are in the `~` (home) directory). Open the file up and add this __exact__ text

`alias sqlize='node_modules/.bin/sequelize'`

Then either close your terminal (Command + q) and open it again or in the `~` (home) directory type `source .zshrc` (if you are using zsh)

If you type in `which sqlize` and you see your alias, you have done this correctly.

Another option if you would like, is to install the sequelize-cli globally using `npm install -g sequelize-cli` (this might have to be done using sudo).

**NOTE - Going forward all examples will be using the `sqlize` alias. If you have installed the sequelize-cli globally, use `sequelize`.**

### Setup part 2 - starting a new node project

Let's build our first app using Sequelize! First we need to create a node app and include our dependencies. __All in terminal__:

Create a new folder and add an app.js and .gitignore and initialize the repository

- mkdir firstapp
- touch app.js
- git init

Add the text 'node_modules in our .gitignore

- echo node_modules > .gitignore

Initialize our project and add/save dependencies (sequelize needs lodash and pg)

- npm init
- npm install --save express ejs pg lodash sequelize sequelize-cli

Create a database and initialize a sequelize project

- createdb firstapp
- sqlize init

### Setup part 3 - config.json, models and migrations:

In sublime we should now see a bunch of new folders. We now have config, migrations and models. This was created for us when we ran `sqlize init`. Let's start in the config folder and open up the config.json file. This file contains information about the database we are using as well as how to connect. We have three settings, one for development (what we will use now), test(for testing our code), and production(when we deploy our app). Let's change the config.json so it looks like this (we will not be using the test or production environments, so just ignore those for now - all that matters is "development").

```javascript
{
  "development": {
    "database": "firstapp",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

```

Once this is complete, let's move to the models folder.

## Creating a model and a matching migration

In order to create a model, we start with `sqlize model:create` and then specify the name of the model using the `--name` flag. Make sure your models are __always__ in the singular (remember table name in plural, model name in singular). After passing in the `--name` flag followed by the name of your model, you can then add an `--attributes` flag and pass in data about your model. When you generate your model, you will also generate a corresponding migration. You only need to do this once for your model.

Remember, if you want to make changes to your model after generating it - all you have to do is make a change and save it. If you want to make changes to your migrations, you have to re-run them (either by undoing the migration or by creating a new one that alters the migration).

Here is an example of a command to generate a User model with a first_name, last_name and age along with a corresponding migration. Make sure you do __not__ have any spaces for each of the attributes and their data types

`sqlize model:create --name User --attributes first_name:string,last_name:string,age:integer`

This will generate the following migration

```javascript
'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};
```

And a corresponding model:

```javascript
'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
```

## What is this "associate" thing in my model?

In this function, we specify any relations/associations (one to one, one to many or many to many) between our models (hasMany or belongsTo). We'll discuss this more in class, but always remember, the association goes in the model and the foreign keys go in the migration, but more on this in the next unit!

## Validations

Sequelize has a bunch of validations we can add to our models to ensure that our data has met certain criteria before we add it to our database. To include validations in your model, wrap them in a validate object. An examples of this is validating an email address (making sure it has a @ etc. as well as ensuring that it is never null):

```javascript
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {


    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
       }
    },
  },

    {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return User;
};
```

There are many different types of validations that we can add, some of them on our migrations and some on our models. You can read more about model validations with Sequelize [here](http://docs.sequelizejs.com/en/latest/docs/models-definition/#validations) and validations/constraints for migrations [here](http://docs.sequelizejs.com/en/latest/docs/migrations/#functions)

## Running a migration

Right now, our migration is in a state called "pending". We have told our program what changes we would like to make to our database (create a table called users), but we have not actually done it! If we look in `psql` and check out the tables in our database `\dt` - we won't find a users table! What we need to do is migrate our database (run all pending migrations and make a permanent change to our database). To do this, run the command `sqlize db:migrate`.

If you realize you have made a mistake in your migration, you can always undo your migration by running `sqlize db:migrate:undo`. This will run the code the `down` method in your migration file (just like running `sqlize db:migrate` runs the `up` method)

## CRUD with Sequelize (Using our User model)

For these examples, we're going to imagine that we are adding code to a file in our `routes` folder. In order to use the model methods (and their corresponding instance methods) we need to require the `index.js` file that is inside of our `models` folder. Fortunately, if we just require the models folder, node is smart enough to look for a file named `index.js`. So for each of these examples, image we had a line at the top of our code that does this:

```javascript

/* let's create a variable called db which is an object that stores all of our models. If we are in the routes folder, we need to go back a directory to gain access to the models folder */

var db = require("../models")
```

### Create

#### Using the combination of build + save

[build](http://docs.sequelizejs.com/en/latest/docs/instances/#building-a-non-persistent-instance)

```javascript


var newUser = db.User.build({
  first_name: 'Elie',
  last_name: 'Schoppik'
})

newUser.save().then(function(){
	// maybe go back to the index page so you can see the new user made?
})

// we can also chain the .save() method to .build() if we want to
```


#### Using the create method

[create](http://docs.sequelizejs.com/en/v3/docs/instances/#creating-persistent-instances)

```javascript
db.User.create({ first_name: 'Elie', last_name: 'Schoppik', age: 26 }).then(function(data) {
  // you can now access the newly created task via the variable data
}).catch(function(err){
  // handle an error here
})
```

### Read

[find](http://docs.sequelizejs.com/en/latest/docs/models-usage/)

```javascript
db.User.find(1).then(function(user) {
  // user will be an instance of User and stores the content of the table entry with id 1. if such an entry is not defined you will get null
}).catch(function(err){
  // handle an error here
})
```


[findOrCreate](http://docs.sequelizejs.com/en/latest/api/model/#findorcreateoptions-promiseinstance-created)

The methodfindOrCreate can be used to check if a certain element is already existing in the database. If that is the case the method will result in a respective instance. If the element does not yet exist, it will be created.

```javascript
db.User
  .findOrCreate({ first_name: 'Elie' })
  .then(function(user, created) {
    console.log(user.values) // returns info about the user
    console.log(created) // returns true if the user was created
  }).catch(function(err){
  // handle an error here
})
```

[findAll](http://docs.sequelizejs.com/en/latest/api/model/#findalloptions-promisearrayinstance)

```javascript
db.User.findAll().then(function(users) {
  // users will be an array of all User instances
}).catch(function(err){
  // handle an error here
})
```

### Update

[update](http://docs.sequelizejs.com/en/latest/docs/instances/#updating-saving-persisting-an-instance)

```javascript
// way 1

db.User.findAll({ where: { first_name: 'Elie' } }).success(function(user){
  user.first_name = 'Liz'
  task.save().then(function() {});
}).catch(function(err){
  // handle an error here
})

// way 2
db.User.findAll({ where: { first_name: 'Elie' } }).success(function(user){
  user.updateAttributes({
  first_name: 'Liz'
  }).then(function() {})
}).catch(function(err){
  // handle an error here
})
```

### Delete

[destroy](http://docs.sequelizejs.com/en/latest/docs/instances/#destroying-deleting-persistent-instances)

```javascript
db.User.find({ where: { first_name: 'Elie' } }).then(function(user){
  user.destroy().then(function() {})
}).catch(function(err){
  // handle an error here
})
```

## Promise syntax

As we can see, the Sequelize model and instance methods return promises which require the use of `.then` on them if we want to examine the data (or error) from the query. If we want to catch any errors we use the `.catch` property. If you see tutorials with sequelize methods like "`.ok`, `.sucesss`, `.error` and `.done` - these are deprecated in favor of the `then / catch / finally` syntax. You should **ALWAYS** strive to have a `.catch` at the end of your queries. You will not be able to see errors if you do not include a `catch` method as well, which makes developing quite difficult!

### Questions

1. What is an ORM? What additional functionality do they provide for us? What is a disadvantage of using an ORM?
2. What is a model?
3. What is a migration?
4. What is the difference between sequelize and the sequelize-cli?
5. What files/folders are created when `sqlize init` is run?
6. Write the terminal command necessary to generate a model and pending migration for a Todo that has a column called task (which is a string) and a column isCompleted (which is a boolean with a default value of false)

### Assignment

Over the next couple assignments we are going to start building a small library app. Right now we want to create an application where anyone can perform full CRUD on a single resource - authors.

A user should be able to see all the authors, create a new author, update an author and delete an author. This should all be done using Sequelize and with RESTful routing. We are going to build off of this assignment over the next couple lessons so completion is essential in order to move on!
