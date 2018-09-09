# 🚦 Request Assessment

## Description

You are working on a Movie Review app that involves two apps:

- The Movies Service (which is provided for you)
- The Reviews Service (which you will be building)

Your app, the Reviews Service, will take review data and store some of it in the Movies Service, and store some of it in a local database.

All requests to the Movies Service must include the following header (in development):

`Authorization: Bearer 18394928-6684-43ca-9026-e19ed3028b17`

## Step 1: Build a `reviews` table

Using knex, build a `reviews` table that has the following columns:

- int id
- int movie_id
- varchar reviewer
- text comment
- decimal star_rating

Recall that you'll need to create migrations for this.

## Step 2: Build a "create" endpoint

When your app receives a POST request to `/reviews` with a request body like this:

```json
{
  "title": "Gremlins",
  "year": 1984,
  "reviewer": "Hercules Mulligan",
  "comment": "I loved it!",
  "starRating": 3.0
}
```

Then your application should send a `GET` request to the Movies Service like

```
GET /movies/find?title=Gremlins&year=1984
```

### If the movie was found (200)

If the movie was not found the Movies Service will return a `200 OK`.

The response will be:

```json
{
  "id": 5,
  "title": "Gremlins",
  "year": 1984
}
```

Take the ID from the database, and then create a Review using that database ID.

### If the movie was _not_ found (404)

If the movie was not found the Movies Service will return a `404 NOT FOUND`.

In that case you need to create it, by sending a `POST` request to `/movies` with the following body:

```json
{
  "title": "Gremlins",
  "year": 1984
}
```

The `POST /movies` call will return a `302` redirect, and the new location will be in the `Location` header.

Make a new request to whatever that URL is, and you'll get a response like this:

```json
{
  "id": 12,
  "title": "Gremlins",
  "year": 1984
}
```

Use that ID and create a Review record in the database.

Then your App should respond with:

```json
{
  "movie": {
    "id": 12,
    "title": "Gremlins",
    "year": 1984
  },
  "review": {
    "id": 358,
    "reviewer": "Hercules Mulligan",
    "comment": "I loved it!",
    "starRating": 3.0
  }
}
```

## Step 3: Ensure proper config

Your application must be configurable with the following two environment variables:

```
MOVIES_URL=https://api.example.com
MOVIES_TOKEN=765ertdfxghuhijlknbn
```

The `npm run assess` tests will ensure that you are making requests using this env data.

Consider using `dotenv` to manage local config values.

## Writing Tests

Testing the case where you must create the Movie in the Movies service is complex!  It will require you to:

- Clear the database in a `beforeEach` function
- Setup 3 separate mock expectations with `nock`
- Make the post to your endpoint
- Make expectations on the response

## Viewing in Development

### The Movies API

If you want to test your application against in development as you work, you may do that.

- In `express-drills` there is [an app located in `assessments/movies`](https://github.com/gSchool/express-drills/tree/master/assessments/movies)
- To run it, cd into that directory and run `nodemon`

You can also interact with the API via curl:

```
curl -i -H 'Authorization: Bearer 18394928-6684-43ca-9026-e19ed3028b17' "localhost:9090/movies/find?title=Gremlins&year=1984"

curl -i -X POST -H 'Authorization: Bearer 18394928-6684-43ca-9026-e19ed3028b17' -H 'Content-Type: application/json' -d '{"title": "foo", "year": 2019}' localhost:9090/movies
```

### !challenge

* type: project
* id: 07d84b9d-2932-4320-967a-6ab137111f29
* title: RestTemplate Assessment

##### !question
### RestTemplate Assessment

1. Ensure that you have forked and cloned https://github.com/gSchool/express-drills

  ```
  git checkout master
  git fetch upstream
  git rebase upstream/master
  git checkout -b request-assessment
  git push -u origin request-assessment
  ```

1. Write a test
1. Make it pass
1. Rinse and repeat until your app works

Before submitting:

- Run `npm test` which will run _your_ tests and ensure your test coverage is sufficient
- Run `npm run assess` to ensure your production code still meets the requirements (should be no change)

##### !end-question

##### !placeholder
https://github.com/<your name>/express-drills/tree/request-assessment/assessments/request-reviews
##### !end-placeholder

##### !explanation
You rock!  Thank you.
##### !end-explanation
### !end-challenge
