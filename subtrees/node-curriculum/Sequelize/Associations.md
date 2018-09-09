## Associations in Sequelize

## Objectives

By the end of this lesson you should be able to:

- Explain what an association is and list at least three kinds of associations
- Understand when to use certain types of associations
- Set up associations with Sequelize through migrations and models
- Leverage a tool like `locus` to debug node code without using `console.log`
- Use the methods added to Sequelize models when associations are set up correctly

## A quick review about joins, foriegn keys + relationships between tables

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

We've also seen that we can add constraints on our columns (primary keys, foreign keys) and we will be revisiting the later to ensure that we ensure data integrity and prevent any potential orphaned records (not sure what that means? take a look at [this](http://www.techrepublic.com/article/ensure-data-integrity-with-proper-database-design/) oldie but goodie)

## Setting up 1:M Associations in Sequelize

Right now we are going to learn how to set up one to many associations with To get started setting up associations in Sequelize we need to ensure we have done three things correctly.

1. Make sure we have added a `hasMany()` association in a Model
1. Make sure we have added a `belongsTo()` association in a Model
1. Added a column and foreign key (in the migration) for the belongs to Model

You can read more about associations [here](http://docs.sequelizejs.com/en/latest/docs/associations/)

Let's imagine we are building the start of a productivity app. We want to have users and each user can have many todos. Let's generate a model and pending migration for each of these resources and set up our associations

```shell
sqlize model:create --name User --attributes first_name:string,last_name:string,age:integer

sqlize model:create --name Todo --attributes task:string,isCompleted:boolean,UserId:integer

```

Notice here that we are including a column called "UserId" which will contain the id for the user who made the todo.

Let's change our Todo migration to look like this:

```javascript
'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      task: {
        type: Sequelize.STRING
      },
      isCompleted: {
        type: Sequelize.BOOLEAN
      },
      // THIS IS WHAT WE ARE CHANGING
      UserId: {
        type: Sequelize.INTEGER
        reference: "Users",
        referencesKey: "id"
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
    return queryInterface.dropTable('Todos');
  }
};
```

We are specifying that our UserId is not only an integer, but that it references the Users table and the id column. This code will allow us to add a foreign key to the column (if you are seeing a warning when you run the migration about this being deprecated in Sequelize 4.0.0, don't worry about it for now, the next version of Sequelize will have a "different" way of doing it, but it is not set in stone yet).

If we have done this correctly, we should see our FK in PSQL. You can run the following command to see your constraints for a table and you should see a constraint_type of FOREIGN KEY on the table.

```SQL
`SELECT * FROM information_schema.table_constraints WHERE              table_name='Todos';``
```

### Onto the models!

Now that our migration looks good, we can run `sqlize db:migrate` and move onto our models. In our models, Sequelize is nice enough to tell us exactly where associations go! If we look at our user model, we see this:

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

There is a classMethod called associate! Inside of here let's add the following code

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
        User.hasMany(models.Todo)
      }
    }
  });
  return User;
};
```

This tells the User model that it has many of the Todo model. With that in mind, try to set up the other side of the association in your Todo model.

Here is what it should look like

```javascript
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    task: DataTypes.STRING,
    isCompleted: DataTypes.BOOLEAN,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Todo.belongsTo(models.User)
      }
    }
  });
  return Todo;
};
```

But how do we possibly know if we set this up correctly?

### Using locus to debug and examine these associations

Let's install a module called `locus` that we can use to set a break point in our code an examine what our variables look like:

`npm install --save locus`

Now inside of our `models/index.js` let's add `require("locus")` and at the bottom of our code, before the `module.exports` lets add `eval(locus)` and run from the root directory of our application `node models/index.js`

We should be thrown in the debugger! Once inside here type `db.User.associations.Todos.accessors` and you should see this

```javascript
{ get: 'getTodos',
  set: 'setTodos',
  addMultiple: 'addTodos',
  add: 'addTodo',
  create: 'createTodo',
  remove: 'removeTodo',
  removeMultiple: 'removeTodos',
  hasSingle: 'hasTodo',
  hasAll: 'hasTodos',
  count: 'countTodos' }
```

What we are seeing right now are all the methods given to our User model now that our association is set up correctly! We can getTodos for that user, addTodos for that user and many more! If you do not see this, make sure your association is set up correctly and that you have created your database and run `sqlize db:migrate`!

Now try to access the methods for your Todo model! Type in `db.Todo.associations.User.accessors` and you should see:

```javascript
{ get: 'getUser',
  set: 'setUser',
  create: 'createUser' }
```

You can now access the User for that todo! Before we move on, ask yourself, what could be a better way to test if you have set your associations and validations up correctly instead of using locus/console.log/guessing?

If you said testing - you are 100% correct! Don't fret, we'll get there soon. But for now, let's finish this section by learning about what `hooks` are and how they work in Sequelize.

### Hooks in Sequelize

From the docs:

"Hooks (also known as callbacks or lifecycle events), are functions which are called before and after calls in sequelize are executed. For example, if you want to always set a value on a model before saving it, you can add a `beforeUpdate` hook."

What this means is we write our own custom functions to occur at certain points in our data's lifecycle - when would we want to do that? Well, a very common example is when you want to ensure that all child records for a parent are deleted when the parent is deleted. In fact, this is what the foriegn key constraint can enforce! Thankfully we do not have to write too much code on our own to make sure that when the parent is deleted, the removal "cascades" down to the children as well.

In our User model, let's make sure to replace our association code with the following. `User.hasMany(models.Todo, {onDelete: 'cascade', hooks:true});` This tells Sequelize to delete all Todos for that specific user so that we do not have orphaned records and so that we do not have to write our own hook!

### Questions

1. List three types of associations and given an example for each one.
2. What is a foreign key? What constraint does it place on our database table?
3. What is a hook in Sequelize? When would you use them?

### Assignment

Continue to build off of your library app from the previous lesson and add an additional resource - Books. Every book should have an author and one author can have many books.

You will need to create an additional model and pending migration and set up your associations in the models and ensure you have a column for the AuthorId of every book in your books table. Continue to keep your routes restful and remember that your books routes should be nested inside of your authors routes.
