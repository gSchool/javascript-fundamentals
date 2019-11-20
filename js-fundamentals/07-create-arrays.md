# Creating Arrays

## Learning Objectives

By the end of this lesson you will be able to:

* Create arrays with and without elements using the array literal syntax

## Arrays

Arrays describe a set of elements in a particular order. Arrays in Javascript are declared using square brackets. The simplest array is one with nothing in it:

```javascript
var arr = [];
```

The syntax we're using to create our array is referred to as an **array literal**. To be more specific, we would describe the above example as an empty array literal. We call it a **literal** because we use `[]` instead of `new Array()`. We describe it as empty because arrays are designed to store sequences of data, and this has no data.

Let's create an array literal and store four strings inside of it:

```javascript
var cats = ["Elie", "Janey", "Matt", "Parker", "Tim"];
```

For the syntax to be valid, each value needs to be **delimited** with commas.

Note that the above array happened to have all strings in it, but in Javascript it's not necessary that each element in an array have the same type. This array is also perfectly valid:

```javascript
var junkArray = ["hi", 3, null, [1, 2, 3], true, "bye"];
```

## Challenges

<!-- Question -->

### !challenge

* type: paragraph
* id: aef38470-b3d9-11e8-92ed-57e3f4477ba5
* title: What are the types?

##### !question

```javascript
var junkArray = ["hi", 3, null, [1, 2, 3], true, "bye"];
```

What are the _data types_ of elements in `junkArray` above?

##### !end-question

##### !answer

##### !end-answer

##### !placeholder

List the types.

##### !end-placeholder

##### !explanation

Did you find all of these types? Here they are in order: String, Number, Null, Array (with Numbers), Boolean, String?

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: aef38471-b3d9-11e8-92ed-57e3f4477ba5
* title: Write an Array with Strings

##### !question

Write an array literal with some of your hobbies as strings.

##### !end-question

##### !answer

/\[ ?(["'].+["'])+ ?\];?/

##### !end-answer

##### !placeholder

Write JavaScript code here...

##### !end-placeholder

##### !explanation

##### !end-explanation

### !end-challenge
