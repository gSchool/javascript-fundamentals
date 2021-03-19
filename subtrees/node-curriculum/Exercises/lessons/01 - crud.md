# Express Lessons: CRUD Endpoints

## Description

You already have the List and Create endpoints for lessons done.  So now add the other 3:

### Endpoint #3: GET /lessons/:id

Create an endpoint that:

1. Takes a `GET` request to `/lessons/5`
1. Renders JSON like this:

  ```json
  {
    "id": 5,
    "title": "JPA"
  }
  ```

### Endpoint #4: PATCH /lessons/:id

Create an endpoint that:

1. Takes a `PATCH` request to `/lessons/5` with a body such as:

  ```json
  {
    "title": "Recursion"
  }
  ```
1. Updates the lesson in the database
1. Renders JSON like this:

  ```json
  {
    "id": 5,
    "title": "Recursion"
  }
  ```

### Endpoint #5: DELETE /lessons/:id

Create an endpoint that:

1. Takes a `DELETE` request to `/lessons/5`
1. Deletes the lesson from the database

## Seeing it in Development

You should be writing tests for this.  But you may also want to see it running in your dev environment.  Here are a few options:

### cURL

```
curl -i localhost:8080/lessons

curl -i -X POST -H 'Content-Type: application/json' -d '{"title": "SQL"}' localhost:8080/lessons

curl -i localhost:8080/lessons/5

curl -i -X PATCH -H 'Content-Type: application/json' -d '{"id": 5, "title": "SQL"}' localhost:8080/lessons/5

curl -i -X DELETE -H 'Content-Type: application/json' localhost:8080/lessons/5
```

### Postman

You can use [Postman](https://www.getpostman.com/) (free chrome extension).


### !challenge
* type: project
* id: c8ab57b5-49e8-458b-a680-908414c1db46
* title: CRUD Lessons

##### !question

1. Write a test for one endpoint
  - Clear and seed the database in a before block
1. Make the test pass
1. Rinse and repeat 2 more times
1. Commit and push your changes to GitHub

Then paste the URL to your branch of the repo below
##### !end-question

##### !placeholder
https://github.com/<your name>/express-playground
##### !end-placeholder

##### !explanation
Thank you!
##### !end-explanation
### !end-challenge
