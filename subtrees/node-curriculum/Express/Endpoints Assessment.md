# 🚦 Endpoints Assessment

### !instructor
This assessment is an amalgamation of:

- [This Spring Assessment](https://github.com/gSchool/spring-curriculum/blob/master/Requests and Responses/Assessment.md)
- [And This Spring Assessment](https://github.com/gSchool/spring-curriculum/blob/master/JSON%20Requests/Assessment.md)

And was originally added for the Love's engagement.
### !end-instructor

## Setup express-drills

1. Fork and clone https://github.com/gSchool/express-drills
  - See [Github Help](https://help.github.com/articles/fork-a-repo/) if you need to
1. Add the original express-drills repo as the upstream

  ```
  git remote add upstream git@github.com:gSchool/express-drills.git
  ```

1. Make a feature branch for this assessment

  ```
  git checkout -b endpoints-assessment
  git push -u origin endpoints-assessment
  ```

For the duration of this assessment you should be able to just `git push`

## Description

You are tasked with building a Text service, that has 4 endpoints:

You must write request test for all endpoints.  Ideally, write your tests first 😉

Note that you can name your controller classes and methods whatever you like.

### Endpoint 1 - Camelize

Write an endpoint that maps to `GET /camelize` with two parameters:

- `original` (required) - a string in `snake_case`
- `initialCap` (optional) - a boolean

It should render the given `original` string in `camelCase`.  If `initialCap` is true, it uses `CamelCase` (the initial letter is capitalized).

**Examples**

```
GET /camelize?original=this_is_a_thing => thisIsAThing

GET /camelize?original=this_is_a_thing&initialCap=true => ThisIsAThing
```

### Endpoint 2 - Redact

Write an endpoint that maps to `GET /redact`.  The endpoint should take:

- A parameter named `original`, which is a String
- Multiple parameters named `badWord`

It should split the `original` String on spaces, and replace all `badWord`s with `*`s of the same length.

**Examples**

If you send the following request:

```
GET /redact?original=A little of this and a little of that&badWord=little&badWord=this
```

You should get the following response:

```
A ****** of **** and a ****** of that
```

If you send this request:

```
GET /redact?original=A little of this and a little of that&badWord=little
```

You should get the following response:

```
A ****** of this and a ****** of that
```

## Endpoint 3 - Encode

Build an endpoint that maps to `POST /encode` that accepts JSON data.  The request should have 2 properties:

- `message` - a message to decode
- `key` - the English alphabet, in some random order

It should take the message, and swap each letter for the letter at the same _position_ in the alphabet.

**Example**

If you send:

```
POST /encode
Content-Type: application/json

{"message": "a little of this and a little of that", "key": "mcxrstunopqabyzdefghijklvw"}
```

Then the response should be:

```json
{
  "encoded": "m aohhas zt hnog myr m aohhas zt hnmh"
}
```

So you take the `key` that was given, and line it up with the English alphabet:

```
abcdefghijklmnopqrstuvwzyz
mcxrstunopqabyzdefghijklvw
```

You see that "a" in the English alphabet is at the same index as "m" in the key.  So all `a` characters become `m`, hence:

```
a little of this and a little of that
m aohhas zt hnog myr m aohhas zt hnmh
```

## Endpoint 4 - Sed

Build an endpoint that maps to `PATCH /s/<find>/<replacement>`.  

The request body should contain a JSON object with the text, and the endpoint should return JSON with the text, replacing all instances of `find` with `replace`.

**Example**

```
PATCH /s/little/lot
Content-Type: application/json

{"text": "a little of this and a little of that"}
```

Would render:

```json
{
  "result": "a lot of this and a lot of that"
}
```

## Endpoint 5 - Simplify Activities

The goal of this application is to take in JSON from an activity feed, and simplify it.

Build an endpoint that maps to a `POST /activities/simplify` with a payload that looks like this:

```json
{
  "activities": [
    {
      "user": {
        "id": 1467,
        "username": "someuser",
        "emails": [
          {"id": 91, "address": "personal@example.com", "primary": true},
          {"id": 47, "address": "work@example.com", "primary": false}
        ]
      },
      "status": {
        "text": "Just went snowboarding today!",
        "date": "2017-04-02 01:32"
      }
    },
    {
      "user": {
        "id": 98732,
        "username": "otheruser",
        "emails": [
          {"id": 22, "address": "other@example.com", "primary": false},
          {"id": 35, "address": "otherprimary@example.com", "primary": true}
        ]
      },
      "status": {
        "text": "Great times!",
        "date": "2017-04-02 01:32"
      }
    }
  ]
}
```

There are two possible responses, based on a header.

When the "Accept" header is set to `application/vnd.galvanize.detailed+json` the response should be:

```java
[
  {
    "userId": 1467,
    "user": "someuser",
    "email": "personal@example.com",
    "date": "2017-04-02 01:32",
    "statusText": "Just went snowboarding today!"
  },
  {
    "userId": 98732,
    "user": "otheruser",
    "email": "otherprimary@example.com",
    "date": "2017-04-02 01:32",
    "statusText": "Great times!"
  }
]
```

When the "Accept" header is set to `application/vnd.galvanize.compact+json` the response should be:

```java
[
  {
    "user": "someuser",
    "date": "2017-04-02 01:32",
    "statusText": "Just went snowboarding today!"
  },
  {
    "user": "otheruser",
    "date": "2017-04-02 01:32",
    "statusText": "Great times!"
  }
]
```


## Running Tests

You should run your tests frequently as you develop.

But before submitting, double check that everything is working by running:

1. `npm test` to run _your_ tests
1. `npm run assess` to run _our_ test suite that verifies that your code meets the requirements


### !challenge
* type: project
* id: 9b80b432-43d5-4d9d-83b0-f210445fbf4e
* title: Endpoints Assessment

##### !question
## Endpoints Assessment

Once you've completed the [endpoints-assessment](https://github.com/gSchool/express-drills/tree/master/assessments/endpoints) and you've also run:

- `npm test`
- `npm run assess`

Submit the URL to your solution below!
##### !end-question

##### !placeholder
https://github.com/<your name>/express-drills/tree/endpoints-assessment/assessments/endpoints
##### !end-placeholder

##### !explanation
Thank you! 🎊 🎉 👌🏽
##### !end-explanation
### !end-challenge
