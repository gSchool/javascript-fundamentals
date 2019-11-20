# Accessing Objects

## Learning Objectives

By the end of this lesson you will be able to:

* Access, replace, and add new values with bracket notation and dot notation

### Dot notation vs. square bracket notation (Access)

To read the value of a key-value pair, we need to use dot notation or square bracket notation:

```javascript
var cat = {};
cat.firstName = "Felix";
cat.lastName = "The Cat";

console.log(cat);
// {firstName: "Felix", lastName: "The Cat"}

console.log(cat.firstName);  // "Felix"
console.log(cat["firstName"]); // "Felix"

console.log(cat.lastName); // "The Cat"
console.log(cat["lastName"]); // "The Cat"
```

Notice that we had to use quotation marks with the square bracket notation. If we didn't include the quotation marks, the JavaScript interpreter would mistake `firstName` and `lastName` to be variables, the contents of which are not associated with the `cat` object. An example will help elaborate this point:

```javascript
var cat = {
	firstName: "Felix",
	lastName: "The Cat"
};

var firstName = "Boooo";

console.log(cat.firstName);  // "Felix"
console.log(cat["firstName"]);  // "Felix"
console.log(cat[firstName]); // undefined (analogous to cat["Boooo"])

var foo = "firstName";
console.log(cat.foo); // undefined (cat has no value corresponding to the key of foo!)
console.log(cat[foo]); // "Felix"
```

### Delete key-value pairs

We can delete a key-value pair with the following syntax:

```
var person = {
  firstName: "Bruce",
  lastName: "Wayne"
};

delete person.firstName;

person
// {lastName: "Wayne"};
```

Deleting requires us to include the keyword `delete` in front of a key-value pair.

## Challenges

<!-- Question -->

## !challenge

* type: short-answer
* id: aef420b0-b3d9-11e8-92ed-57e3f4477ba5
* title: Update Objects Exercise

##### !question

How can we update Bruce Wayne's second favorite color to pink?

```javascript
var person = {
  firstName: 'Bruce',
  lastName: 'Wayne',
  favoriteColors: ['black', 'yellow']
};
```

##### !end-question

##### !answer

/person(..+|(\[['"].+['"]\]))\[1\]\s*=\s*['"][Pp]ink['"];*$/

##### !end-answer

##### !placeholder

Write JavaScript code here...

##### !end-placeholder

##### !explanation

##### !end-explanation

### !end-challenge
