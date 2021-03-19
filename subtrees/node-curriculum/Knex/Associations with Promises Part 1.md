# Associations with Promises in Knex Part 1

Loading a single record and associated records.

## Objectives

By the end of this lesson you should be able to:

- Query multiple tables with Knex using nested Promises
- Query multiple tables with Knex using chained Promises with outer variables
- Query multiple tables with Knex using chained Promises without outer variables
- Query multiple tables with Knex using chained, named functions
- Query multiple tables in parallel using `Promise.all`

## Defining the problem

Let's say you have the following tables:

- users
  - id
  - name
- videos
  - id
  - title
  - owner_id
- tags
  - id
  - name
- taggings
  - id
  - tag_id
  - video_id
- comments
  - id
  - video_id
  - author_id
  - text

You have a page where you want to show a video, its related tags, its related comments and the authors of the comments, so you need to query the database in such a way that you end up with a data structure like this:

```js
  {
    id: 20,
    owner_id: 4,
    title: 'Video 1',
    owner_name: 'User 4',
    tags: [
      { id: 2, name: 'funny', tag_id: 10, video_id: 20 }
      // etc...
    ],
    comments: [
      { id: 3, video_id: 20, author_id: 1, text: 'secondz', author_name: 'User 1' }
      // etc...
    ]
  }
```
## To Promise or to Join?  That is the question

In order to get data out of the database and into the format listed above you have two options:

- Use joins, and then parse / filter out the duplicate data
- Use separate queries and join the data together in one result

Which technique you choose will depend on a number of variables, such as how many rows are in the database, how many rows get returned in the result set, how the indexes are setup on your database and how complex the queries are.  In this article you'll learn how to do both.

## Using Joins

One way to solve the problem is to fetch all the data you need at once, using joins.  In this example, your query might look something like this:

```sql
select
  videos.id,
  videos.title,
  videos.owner_id,
  users.name as owner_name,
  tags.id as tag_id,
  tags.name as tag_name,
  comments.id as comment_id,
  author_id,
  text,
  authors.name as author_name
from videos
inner join users on videos.owner_id = users.id
left join taggings on taggings.video_id = videos.id
inner join tags on taggings.tag_id = tags.id
left join comments on comments.video_id = videos.id
inner join users authors on comments.author_id = authors.id
where videos.id = 20
```

> NOTE: Since there are duplicate column names (such as id), your javascript object's `id` property will be overwritten, which is why you need to use aliasing in your `select` clause to fix it.

Which results in:

```
id |  title  | owner_id | owner_name | tag_id | tag_name | comment_id | author_id |   text    | author_name
---+---------+----------+------------+--------+----------+------------+-----------+-----------+-------------
20 | Video 1 |        4 | User 4     |     10 | funny    |          1 |         1 | firsties  | User 1
20 | Video 1 |        4 | User 4     |     10 | funny    |          3 |         3 | secondz   | User 3
20 | Video 1 |        4 | User 4     |     10 | funny    |          2 |         3 | too late! | User 3
20 | Video 1 |        4 | User 4     |     11 | lulz     |          1 |         1 | firsties  | User 1
20 | Video 1 |        4 | User 4     |     11 | lulz     |          3 |         3 | secondz   | User 3
20 | Video 1 |        4 | User 4     |     11 | lulz     |          2 |         3 | too late! | User 3
20 | Video 1 |        4 | User 4     |     12 | catz     |          1 |         1 | firsties  | User 1
20 | Video 1 |        4 | User 4     |     12 | catz     |          3 |         3 | secondz   | User 3
20 | Video 1 |        4 | User 4     |     12 | catz     |          2 |         3 | too late! | User 3
(9 rows)
```

Recall that you want 1 video object with a unique list of tag names, and a unique list of comments.  But the result set above shows certain facts multiple times - for example the video is repeated, as is the tag_name.  In order to get what you need from this result set, you'd need to:

- Iterate over every row
- Take the first instance of the video
- Take the first unique tag_name
- Take the first unique comment

One benefit to this is that it's not "chatty" - there's just 1 database call.

Some drawbacks to this method are:

- If videos / taggings / comments are all huge tables, you are doing a lot of joins (which are potentially slow)
- If there are lots of comments, you are sending duplicate data over the wire unnecessarily
- The JavaScript you need to write to parse this is somewhat custom / hard to generalize

## Using Multiple Queries

Another way to achieve the same result is to make multiple queries, and stitch the results together into an object.  This will execute more database calls, but each one will be simpler, and the code to make the calls will be more modular and likely easier to maintain.

When querying tables separately you'll need to:

- 1.) Get the video, along with the owner
- 2.) Get the tags
- 3.) Get the comments with their owners

So now there are 3 queries.  Independently they look like this:

```js
// 1.) Find a single video and its owner
return knex('videos')
  .select(knex.raw('videos.*, users.name as owner_name'))
  .join('users', 'users.id', 'videos.owner_id')
  .where('videos.id', videoId)
  .first()

// 2.) Find all tags for the video
return knex('tags')
  .join('taggings', 'taggings.tag_id', 'tags.id')
  .where('taggings.video_id', videoId)

// 2.) Find all comments for the video
return knex('comments')
  .select(knex.raw('comments.*, users.name as author_name'))
  .join('users', 'users.id', 'comments.author_id')
  .where('comments.video_id', videoId)
```

But in order for the data from these 3 promises to be _useful_ in a web application, you need to somehow join all of this data together into a single JavaScript object.  Each query is asynchronous.  There are a few ways to do this, each one increasing in awesomeness:

- Level 1: Nesting
- Level 2: Chaining with an outer variable
- Level 3: Chaining without an outer variable
- Level 4: Chaining named functions
- Level 5: Running named functions in parallel

### Level 1: Nesting

If you want to make those three calls and render the all three results to a template or a JSON response, your code might start off looking like this:

```js
return knex('videos')
  .select(knex.raw('videos.*, users.name as owner_name'))
  .join('users', 'users.id', 'videos.owner_id')
  .where('videos.id', 20)
  .first()
  .then(function(video) {

    return knex('tags')
      .join('taggings', 'taggings.tag_id', 'tags.id')
      .where('taggings.video_id', 20)
      .then(function(tags) {

        return knex('comments')
          .select(knex.raw('comments.*, users.name as author_name'))
          .join('users', 'users.id', 'comments.author_id')
          .where('comments.video_id', 20)
          .then(function(comments) {
            video.tags = tags
            video.comments = comments
            return video
          })

      });

  })
```

That code will work, but notice how it's just callback hell all over again.  We can do better.

### Level 2: Chaining w/ an outer variable

```js
const result

return knex('videos')
  .select(knex.raw('videos.*, users.name as owner_name'))
  .join('users', 'users.id', 'videos.owner_id')
  .where('videos.id', 20)
  .first()
  .then(function(video) { result = video })
  .then(function () {
    return knex('tags')
      .join('taggings', 'taggings.tag_id', 'tags.id')
      .where('taggings.video_id', 20)
      .then(function(tags) {
        result.tags = tags
      });
  })
  .then(function () {
    return knex('comments')
      .select(knex.raw('comments.*, users.name as author_name'))
      .join('users', 'users.id', 'comments.author_id')
      .where('comments.video_id', 20)
      .then(function(comments) {
        result.comments = comments
      })
  })
```

This is already _much_ better because you'll note that the level of nesting is capped at 2.  They'll never be more than one level of depth to the nesting.

But now the promise statements rely on an outer variable, so if you wanted to split these promises into multiple separate methods (which is one of the core benefits of promises) it would be awkward, since you'd have to pass `result` around to multiple functions.

So the next step is to eliminate that outer variable.

### Level 3: Chaining w/ no outer variable

```js
return knex('videos')
  .select(knex.raw('videos.*, users.name as owner_name'))
  .join('users', 'users.id', 'videos.owner_id')
  .where('videos.id', 20)
  .first()
  .then(function (video) {
    return knex('tags')
      .join('taggings', 'taggings.tag_id', 'tags.id')
      .where('taggings.video_id', 20)
      .then(function(tags) {
        video.tags = tags
        return video
      });
  })
  .then(function (video) {
    return knex('comments')
      .select(knex.raw('comments.*, users.name as author_name'))
      .join('users', 'users.id', 'comments.author_id')
      .where('comments.video_id', 20)
      .then(function(comments) {
        video.comments = comments
        return video
      })
  })
```

This may not _look_ like much of an improvement, but the fact that each promise is completely self-contained means that it's very easy and elegant to refactor to separate methods.

### Level 4: Chaining named functions

The example from Level 3 decomposes very nicely to the following functions:

```js
function getVideo(id) {
  return knex('videos')
    .select(knex.raw('videos.*, users.name as owner_name'))
    .join('users', 'users.id', 'videos.owner_id')
    .where('videos.id', 20)
    .first()
}

function addTagsToVideo(video) {
  return knex('tags')
    .join('taggings', 'taggings.tag_id', 'tags.id')
    .where('taggings.video_id', video.id)
    .then(function(tags) {
      video.tags = tags
      return video
    });
}

function addCommentsToVideo(video) {
  return knex('comments')
    .select(knex.raw('comments.*, users.name as author_name'))
    .join('users', 'users.id', 'comments.author_id')
    .where('comments.video_id', video.id)
    .then(function(comments) {
      video.comments = comments
      return video
    })
}

function getVideoWithTagsAndComments(id) {
  return getVideo(id)
    .then(addTagsToVideo)
    .then(addCommentsToVideo)
}

return getVideoWithTagsAndComments(20)
```

Whoa!  Look at how _nice_ that is.  The example above is starting to look decent, and will be easier to maintain than the previous 2 examples but it's not as efficient as it could be.

### Level 5: Fetching Associations in Parallel

Imagine for a moment that each query takes 1 full second to complete, your `getVideoWithTagsAndComments` method will take 3 seconds to complete:

1. find the video (1s)
1. _then_ find the tags (1s)
1. _then_ find the comments (1s)

In this particular case, each of those operations just needs a Video ID, so you can make all three queries _at the same time_ using `Promise.all`!  In the example below, the total time needed for `getVideoWithTagsAndComments` to resolve will roughly the length of the longest query, or 1s in this case:

```js
function getVideo(id) {
  return knex('videos')
    .select(knex.raw('videos.*, users.name as owner_name'))
    .join('users', 'users.id', 'videos.owner_id')
    .where('videos.id', id)
    .first()
}

function getTagsForVideo(videoId) {
  return knex('tags')
    .join('taggings', 'taggings.tag_id', 'tags.id')
    .where('taggings.video_id', videoId)
}

function getCommentsForVideo(videoId) {
  return knex('comments')
    .select(knex.raw('comments.*, users.name as author_name'))
    .join('users', 'users.id', 'comments.author_id')
    .where('comments.video_id', videoId)
}

function getVideoWithTagsAndComments(videoId) {
  return Promise.all([
    getVideo(videoId),
    getTagsForVideo(videoId),
    getCommentsForVideo(videoId),
  ]).then(function (results) {
    let [video, tags, comments] = results
    video.tags = tags
    video.comments = comments
    return video
  })
}

return getVideoWithTagsAndComments(20)
```

## Note on how chaining works

When you have nested promises, it forms a structure that looks like this:

```
do something
    |
    --------- _then_ do something else
                      |
                      --------------------- _then_ do some third thing
```

The resolved value of the inner-most promise is what's returned:

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/80/promise-chain-example.png)
