# Local Storage

## Learning Objectives

By the end of this lesson, you will be able to:

- Explain what local storage is.
- Explain why local storage is important.
- Perform CRUD operations on items in local storage.

## What's local storage?

On the frontend, we don't have direct access to a database where we can save user preferences. However, we do have access to Local Storage, a tool which allows to store small amounts of data on the frontend. With it, we can temporarily store user's preferences to make their experience of our website better.

* [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

As you may recall, a **data model** is the software representation of information. As an application is used, its data model will naturally change in response to events. For example, when a user submits a form, an application will update its data model with the form's information.

```javascript
// initialize the data model
let favoriteFood = '';

$('form').on('submit', () => {
  // update the data model
  favoriteFood = $('input[name="favoriteFood"]').val();
});
```

An application's **state** is a snapshot of its data model at any point in time. An application initializes state when it launches, changes state in response to events, and then destroys state when it quits. Sadly, all applications quit at some point due to a variety of causes. To quit a web application, a user could:

1. Refresh the page.
1. Close the tab.
1. Quit the browser.
1. Shutdown the computer.

When a user quits an application, the state of its data model is erased from memory. When state is erased, the user experience could range from no big deal, to mildly annoyed, to deeply upset.

Fortunately, there are a number of ways an application can persist (i.e. save) the state of its data model before it quits. One such way uses a technology called local storage. **Local storage** is a browser API that allows a web application to persist its state inside a user's web browser. Local storage can be used to persist information retrieved from sources like user events, HTTP responses, and calculated results. Here's a basic example of how local storage works in a web browser.

**NOTE:** Local storage only persists strings.

```javascript
localStorage.setItem('favoriteFood', 'Canned corn');

// Quit the application

// Launch the application

localStorage.getItem('favoriteFood');  // 'Canned corn'
```

As you can see, local storage persists key-value pairs. To persist state, the application provides local storage a key and a value. To retrieve state, the application provides local storage the same key. While local storage is very good at its job, it has a few technical restrictions.

1. State persisted to local storage is only available to pages on the same domain. If state is persisted for `favoritefoods.com` then it cannot be retrieved for `favorite-foods.com`.
1. State persisted to local storage is only available using the same web browser. If state is persisted using Chrome then it cannot be retrieved using Firefox, and vice versa.
1. Local storage only persists strings. If an application's state contains any other data type, it must be serialized to a string when it's saved and deserialized back to its original data type when it's retrieved.
1. Local storage has a limit of 5 MB, or 2.5 million characters, per domain.

Despite these restrictions, local storage is a very useful technique for persisting state.

### Exercise

Turn to a neighbor and explain what local storage is in your own words. Be prepared to share with the class.

## Why is local storage important?

Local storage is important because it improves a web application's user experience. One common use case is persisting information a user has built up over time.

For example, imagine an application that allows a user to pick a favorite food. When the application is first launched, there's no favorite food in its state. Then, the user is given the ability to pick a favorite food. When a user picks a favorite, perhaps the application renders a heart next to the food in the browser's window. However, when the user quits the application, the state of the favorite food is lost.

```text
                              ┏━━━━━━━━┓
                              ┃ Launch ┃
                              ┗━━━━━━━━┛
                                   │
                                   ▼
                       ┌───────────────────────┐
                       │ Get state from a user │
                       └───────────────────────┘
                                   │
                                   ▼
                       ┌───────────────────────┐
                       │      Render state     │
                       └───────────────────────┘
                                   │
                                   ▼
                               ┏━━━━━━┓
                               ┃ Quit ┃
                               ┗━━━━━━┛
```

However, if an application were to save the state of the user's favorite food to local storage, it could retrieve and use that state on subsequent launches.

```text
                              ┏━━━━━━━━┓
                              ┃ Launch ┃
                              ┗━━━━━━━━┛
                                   │
                                   ▼
                    ╔═════════════════════════════╗
                    ║ Is state in local storage?  ║
                    ╚═════════════════════════════╝
                                   │
                ┌───── Nope ───────┴─────── Yup ───────┐
                │                                      │
                ▼                                      ▼
   ┌───────────────────────┐           ┌───────────────────────────────┐
   │ Get state from a user │           │ Read state from local storage │
   └───────────────────────┘           └───────────────────────────────┘
                │                                      │
                ▼                                      │
┌───────────────────────────────┐                      │
│  Save state in local storage  │                      │
└───────────────────────────────┘                      │
                │                                      │
                └──────────────────┬───────────────────┘
                                   │
                                   ▼
                      ┌────────────────────────┐
                      │      Render state      │
                      └────────────────────────┘
                                   │
                                   ▼
                               ┏━━━━━━┓
                               ┃ Quit ┃
                               ┗━━━━━━┛
```

As you can see, persisting state to local storage before an application quits and then retrieving it on subsequent launches is quite powerful.

### Exercise

In your own words, write down why local storage is important. Think of a way you might use local storage in your own application. Be prepared to share with the class.

## How do you perform CRUD operations on items in local storage?

When it comes to state, there are four common persistence operations that make up the acronym CRUD.

1. Create
1. Read
1. Update
1. Delete

In the rest of this article, you'll perform these persistence operations on items in local storage. An **item** is simply state that's been persisted to local storage.

### Create

To create an item in local storage, pass a key and a value to the `localStorage.setItem()` method. Just remember that when creating an item, it'll be saved as a string. Here's an example of creating items in local storage from primitive values.

```javascript
localStorage.setItem('favoriteString', 'Canned corn');  // 'Canned corn'

localStorage.setItem('favoriteNumber', 42);             // '42'

localStorage.setItem('favoriteBoolean', true);          // 'true'
```

To see the items inside of local storage within Chrome, use the following steps.

1. Open the Developer Tools.
1. Click on the "Application" tab at the top.
1. Click on the arrow next to the "Local Storage" section on the sidebar.
1. Click on the child underneath the "Local Storage" section.

**NOTE:** Items in local storage are strings even if you don't see quotation marks.

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/540/Screen_Shot_2016-12-07_at_11.13.05_AM.png)

When creating items in local storage from an object or an array, use the `JSON.stringify()` method to serialize the state first.

```javascript
localStorage.setItem('favoriteObject', JSON.stringify({ a: 1, b: 2 }));  // '{ "a": 1, "b": 2 }'

localStorage.setItem('favoriteArray', JSON.stringify([1, 2, 3]));        // '[1,2,3]'
```

If you forget to use the `JSON.stringify()` method, local storage will serialize the state to strings, but not as you would expect.

```javascript
localStorage.setItem('favoriteObject', { a: 1, b: 2 });  // '[Object object]'

localStorage.setItem('favoriteArray', [1, 2, 3]);        // '1,2,3'
```

In fact, it's a good idea to use the `JSON.stringify()` method for state that's not a string already to make it easy to retrieve later.

```javascript
localStorage.setItem('favoriteString', 'Canned corn');                   // 'Canned corn'

localStorage.setItem('favoriteNumber', JSON.stringify(42));              // '42'

localStorage.setItem('favoriteBoolean', JSON.stringify(true));           // 'true'

localStorage.setItem('favoriteObject', JSON.stringify({ a: 1, b: 2 }));  // '{ "a": 1, "b": 2 }'

localStorage.setItem('favoriteArray', JSON.stringify([1, 2, 3]));        // '[1,2,3]'
```

When in doubt, just use the `JSON.stringify()` method when creating an item in local storage.

### Read

To read an item from local storage, pass a key to the `localStorage.getItem()` method. Then, use the `JSON.parse()` method to deserialize any state that's been serialized.

```javascript
const favoriteString = localStorage.getItem('favoriteString');

const favoriteNumber = JSON.parse(localStorage.getItem('favoriteNumber'));

const favoriteBoolean = JSON.parse(localStorage.getItem('favoriteBoolean'));

const favoriteObject = JSON.parse(localStorage.getItem('favoriteObject'));

const favoriteArray = JSON.parse(localStorage.getItem('favoriteArray'));
```

When attempting to read a local storage item, sometimes `null` is returned because it hasn't been created. For example, the first time a user launches an application. For these cases, it's wise to initialize the application's state with a default value. This is where the `||` operator can be useful. The `||` operator returns the value on the left, if it's truthy, otherwise it returns the value on the right.

```javascript
const favoriteString = localStorage.getItem('favoriteString') || '';

const favoriteNumber = JSON.parse(localStorage.getItem('favoriteNumber')) || 0;

const favoriteBoolean = JSON.parse(localStorage.getItem('favoriteBoolean')) || false;

const favoriteObject = JSON.parse(localStorage.getItem('favoriteObject')) || {};

const favoriteArray = JSON.parse(localStorage.getItem('favoriteArray')) || [];
```

When in doubt, just use the `JSON.parse()` method when reading an item in local storage and provide a default value in case the item doesn't exist.

### Update

Local storage doesn't provide an explicit method for updating an item. Instead, use the `localStorage.getItem()` and `localStorage.setItem()` methods in conjunction. First, use the `localStorage.getItem()` method, or a default value, to initialize state. When an event is triggered, handle it by updating the state and then updating local storage with the `localStorage.setItem()` method.

**NOTE:** The `localStorage.setItem()` method completely replaces an item, just like updating the value of a variable in JavaScript.

```javascript
// initialize state
let favoriteObject = JSON.parse(localStorage.getItem('favoriteObject')) || { votes: 0 };

$('button').on('click', () => {
  // update state
  favoriteObject.votes += 1;

  // update local storage
  localStorage.setItem('favoriteObject', JSON.stringify(favoriteObject));
});
```

### Destroy

To destroy an item in local storage, pass a key to the `localStorage.removeItem()` method and the item is completely erased.

```javascript
localStorage.removeItem('favoriteObject');
```

### Exercise

With a neighbor, complete the following local storage exercise.

- https://github.com/gSchool/localstorage-exercise

## Resources

- [Chrome - Inspect and Manage Storage, Databases, and Caches](https://developers.google.com/web/tools/chrome-devtools/manage-data/local-storage)
- [CSS Tricks - Examples of Sites where localStorage should or is being used](https://css-tricks.com/localstorage-examples/)
- [Diving into HTML5 - The Past, Present & Future of Local Storage](http://diveintohtml5.info/storage.html)
- [MDN - Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)

## Challenges

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 8575800a-7397-47e9-8135-d3144d657f69
* title: Local Storage A
* standard_uuids: 813d09d6-eeb1-499c-91a7-c4d41fa261e7-V1

##### !question

If you want to create some new data, which `localStorage` method should you use?

##### !end-question

##### !options

* `localStorage.setItem`
* `localStorage.getItem`
* `localStorage.removeItem`

##### !end-options

##### !answer

`localStorage.setItem`

##### !end-answer

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 69d988fa-104f-49b1-8c0a-11a2292b9622
* title: Local Storage B
* standard_uuids: 813d09d6-eeb1-499c-91a7-c4d41fa261e7-V1

##### !question

If you want to remove some existing data, which `localStorage` method should you use?

##### !end-question

##### !options

* `localStorage.setItem`
* `localStorage.getItem`
* `localStorage.removeItem`

##### !end-options

##### !answer

`localStorage.removeItem`

##### !end-answer

### !end-challenge

<!-- Question -->

### !challenge

* type: multiple-choice
* id: 2d1147df-8d17-4c9e-bbcf-4a692c794fab
* title: Local Storage C
* standard_uuids: 813d09d6-eeb1-499c-91a7-c4d41fa261e7-V1

##### !question

What will the follow result be of the following code:

```js
typeof JSON.stringify({ location: 'Seattle, Washington' })
```

##### !end-question

##### !options

* 'object'
* 'string'
* '[Object object]'
* 'JSONObject'
* ReferenceError

##### !end-options

##### !answer

'string'

##### !end-answer

### !end-challenge
