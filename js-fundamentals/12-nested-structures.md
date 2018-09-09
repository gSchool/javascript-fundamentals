# Nested Arrays and Objects

## Learning Objectives

By the end of this lesson you will be able to:

* Create, access, and manipulate arrays/objects inside of arrays/objects

## Resources

You can not only place arrays in objects, but you can also place objects in arrays. This
can nest as deeply as you have the memory to support!

Read until Accessing Elements
[Galvanize: Creating Arrays](https://github.com/gSchool/javascript-curriculum/blob/master/10_Syntax/03_Arrays_Objects_Iteration.md#reading-nested-values)

## Challenges

<!-- Question -->

```javascript
let data = {
  users:[
    {
      user_id: 1,
      name: "Chris Rivers",
      mention_name: "chris",
      email: "chris@hipchat.com",
      title: "Developer",
      photo_url: "https:\/\/www.hipchat.com\/chris.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "away",
      status_message: "gym, bbl",
      is_group_admin :1,
      is_deleted :0
    },
    {
      user_id: 3,
      name: "Peter Curley",
      mention_name: "pete",
      email: "pete@hipchat.com",
      title: "Designer",
      photo_url: "https:\/\/www.hipchat.com\/pete.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "offline",
      status_message: "",
      is_group_admin: 1,
      is_deleted: 0
    },
    {
      user_id: 5,
      name: "Garret Heaton",
      mention_name: "garret",
      email: "garret@hipchat.com",
      title: "Co-founder",
      photo_url: "https:\/\/www.hipchat.com\/garret.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "available",
      status_message: "Come see what I'm working on!",
      is_group_admin: 1,
      is_deleted: 0
    }
  ]
};
```

### !challenge

* type: short-answer
* id: 86b39b80-b3cf-11e8-9c80-3f50f0d4f65c
* title: Accessing Nested Values A

##### !question

Write the JavaScript to access the email of user 1.

##### !end-question

##### !answer

/data(\.users|(\[['"]users['"])\])\[0\](\.email|(\[['"]email['"])\]);?/

##### !end-answer

##### !placeholder

Write JavaScript statement here...

##### !end-placeholder

##### !explanation

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: 86b39b81-b3cf-11e8-9c80-3f50f0d4f65c
* title: Accessing Nested Values B

##### !question

Write the JavaScript to access the title of user 5.

##### !end-question

##### !answer

/data(\.users|(\[['"]users['"])\])\[2\](\.title|(\[['"]title['"])\]);?/

##### !end-answer

##### !placeholder

Write JavaScript statement here...

##### !end-placeholder

##### !explanation

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: 86b39b82-b3cf-11e8-9c80-3f50f0d4f65c
* title: Accessing Nested Values C

##### !question

Write the JavaScript to access the user id of the first user in the users array.

##### !end-question

##### !answer

/data(\.users|(\[['"]users['"])\])\[0\](\.user_id|(\[['"]user_id['"])\]);?/

##### !end-answer

##### !placeholder

Write JavaScript statement here...

##### !end-placeholder

##### !explanation

##### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: 86b39b83-b3cf-11e8-9c80-3f50f0d4f65c
* title: Accessing Nested Values D

##### !question

Consider this example, courtesy of [Desmos.com](http://www.desmos.com):

```javascript
var graphObject = {
  version:1,
  graph:{
    viewport:{
      xmin:-10,
      ymin:-3.367158671586716,
      xmax:10,
      ymax:3.367158671586716
    }
  },
  expressions:{
    list:[
      {
        id:"1",
        type:"expression",
        latex:"y=x",
        domain:{
          min:0,
          max:1
        },
        hidden:false,
        color:"#C0504D",
        style:"normal"
      }, {
        id:"2",
        type:"expression",
        latex:"y=2x",
        domain:{
          min:0,
          max:1
        },
        hidden:false,
        color:"#4F81BD",
        style:"normal"
      }, {
        id:"4",
        type:"text",
        text:"Access me!"
      }, {
        id:"5",
        type:"expression",
        latex:"",
        domain:{
          min:0,
          max:1
        },
        hidden:false,
        color:"#8064A2",
        style:"normal"
      }
    ]
  }
};
```

Write the JavaScript to access the text "Access me!" from the object above.

##### !end-question

##### !answer

/graphObject(\.expressions|\[["']expressions['"]\])(\.list|\[['"]list['"]\])\[2\](\.text|\[['"]text["']\]);?/

##### !end-answer

##### !placeholder

Write JavaScript statement here...

##### !end-placeholder

##### !explanation

##### !end-explanation

### !end-challenge
