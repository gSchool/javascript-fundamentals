# Associations with Promises in Knex Part 2

Loading a set of records with associated records.

## Objectives

By the end of this lesson you should be able to:

- Fetch multiple rows with associated data for each row

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

You have a page where you want to show:

1. Several videos with their owners
1. All tags for those videos
1. The comment count for each video

So your final result set should look like this:

```js
[
  {
    id: 20,
    owner_id: 4,
    title: 'Video 1',
    owner_name: 'User 4',
    tags: [
      { id: 2, name: 'funny', tag_id: 10, video_id: 20 }
      // etc...
    ],
    commentCount: 4
  },
  {
    id: 21,
    owner_id: 5,
    title: 'Video 2',
    owner_name: 'User 5',
    tags: [
      { id: 2, name: 'funny', tag_id: 10, video_id: 20 }
      // etc...
    ],
    commentCount: 2
  }
]
```

There are a few approaches:

- Level 1: The naive approach (load all videos, the for each video load all comments and tags)
- Level 2: Using SQL `in` clauses to be more performant
- Level 3: Improving the Big O runtime

## Background

Independently they look like this:

```js
// 1.) Find some subset of videos
return knex('videos')
  .select(knex.raw('videos.*, users.name as owner_name'))
  .join('users', 'users.id', 'videos.owner_id')
  .limit(10)

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

But in order for the data from these 3 promises to be _useful_ in a web application, you need to somehow join all of this data together into a single JavaScript object.  Each query is asynchronous.

### Level 1: Naive / Brute force with nesting

If you build this query up one piece at a time, you may end up with something like this:

```js
function getVideos() {
  return knex('videos')
    .select(knex.raw('videos.*, users.name as owner_name'))
    .join('users', 'users.id', 'videos.owner_id')
    .limit(10)
    .then(function (videos) {

      // for each video, find the tags
      let tagPromises = videos.map(function (video) {
        return knex('tags')
          .join('taggings', 'taggings.tag_id', 'tags.id')
          .where('taggings.video_id', video.id)
      })

      // for each video, find all comments
      let commentPromises = videos.map(function (video) {
        return knex('comments')
          .select(knex.raw('comments.*, users.name as author_name'))
          .join('users', 'users.id', 'comments.author_id')
          .where('comments.video_id', video.id)
      })

      return Promise.all(tagPromises).then(function (tags) {
        return Promise.all(commentPromises).then(function (comments) {
          return videos.map(function (video, i) {
            video.commentCount = comments[i].length
            video.tags = tags[i]
            return video
          })
        })
      })

    })
}

return getVideos()
```

How terrible is that?  Pretty terrible 😝 - here's why:

This method makes 21 queries (n * 2 + 1)!!  1 to get the videos, then 10 queries for tags and 10 queries for comments.

In addition, it's pulling back all the data for comments even though it just needs the length.  

## Level 2: Fewer database calls

So right off the bat we can make a few optimizations:

- Only query the comment counts, instead of all rows/columns
- Reduce the number of queries to 3 (one for videos, on for tags, and one for comment counts)

```js
function getVideos() {
  return knex('videos')
    .select(knex.raw('videos.*, users.name as owner_name'))
    .join('users', 'users.id', 'videos.owner_id')
    .limit(10)
    .then(function (videos) {

      return knex('tags')
        .join('taggings', 'taggings.tag_id', 'tags.id')
        .whereIn('taggings.video_id', videos.map(video => video.id))
        .then(function (tags) {

          return knex('comments')
            .select('video_id')
            .count('id')
            .groupBy('video_id')
            .whereIn('comments.video_id', videos.map(video => video.id))
            .then(function (comments) {

              return videos.map(function (video) {
                let countRow = comments.find(function (commentCount) {
                  return commentCount.video_id === video.id
                })
                video.commentCount = countRow ? countRow.count : '0';

                video.tags = tags.filter(tag => tag.video_id === video.id)
                return video
              })
            })
        })
    })
}

return getVideos()
```

This is a little better.  It's only making 3 database calls, and it's no longer pulling back all data for the comments table.  There are still some significant issues with this code.

The Big O is suboptimal - can you calculate it?.  Here's a hint:

- It loops through the videos and for each video (n times)
  - It loops through all of the comment rows (m times)
  - It loops through all of the tag rows (o times)

So if there are 10 videos, and each video has 10 comment count rows and 3 tag rows, the runtime looks like this:

```
10 * (10 + 3) = 130 iterations
```

In Big O you might write `O(n(m + o))`.  Not the best we can do.

Let's tackle the Big O issue first.

## Level 3: Better runtime

After making 3 queries you'll have 3 arrays.  An array of Videos, and array of Comment Counts and an array of Tags.  The fastest theoretical runtime you can get is O(n) + O(m) + O(o) - that is, just looping through each array once.  How can that happen?  Grouping and indexing.

### Indexing Comment Counts

Focus for a moment on this segment from above:

```js
return videos.map(function (video) {
  let countRow = comments.find(function (commentCount) {
    return commentCount.video_id === video.id
  })
  video.commentCount = countRow ? countRow.count : '0';
})
```

In order to reduce the runtime of this snippet is to make the `countRow` something that happens in constant time, by making it into an object that looks like this:

```js
{
  20: {video_id: 20, count: '4'},
  21: {video_id: 21, count: '56'},
  22: {video_id: 21, count: '9'},
}
```

Here's what that looks like:

```js
let indexedCounts = comments.reduce(function (result, row) {
  result[row.video_id] = row
  return result
}, {})

return videos.map(function (video) {
  let countRow = indexedCounts[video.id]
  video.commentCount = countRow ? countRow.count : '0';
  // etc...
})
```

### Grouping Tags

Grouping tags is similar - create an object that looks like this:

```js
{
  20: [{name: 'lulz'}, {name: 'funny'}],
  21: [{name: 'comedy'}, {name: 'lulz'}, {name: 'other'}],
}
```

```js

// iterate over comments once
let indexedCounts = comments.reduce(function (result, row) {
  result[row.video_id] = row
  return result
}, {})

// iterate over tags once
let groupedTags = tags.reduce(function (result, tag) {
  result[tag.video_id] = result[tag.video_id] || []
  result[tag.video_id].push(tag)
  return result
}, {})

// iterate over videos once, but only perform constant-time O(1) operations
return videos.map(function (video) {
  let countRow = indexedCounts[video.id]
  video.commentCount = countRow ? countRow.count : '0';

  video.tags = groupedTags[video.id]
  return video
})
```

So altogether that might look like this:

```js
function getVideos() {
  return knex('videos')
    .select(knex.raw('videos.*, users.name as owner_name'))
    .join('users', 'users.id', 'videos.owner_id')
    .limit(10)
    .then(function (videos) {

      return knex('tags')
        .join('taggings', 'taggings.tag_id', 'tags.id')
        .whereIn('taggings.video_id', videos.map(video => video.id))
        .then(function (tags) {

          return knex('comments')
            .select('video_id')
            .count('id')
            .groupBy('video_id')
            .whereIn('comments.video_id', videos.map(video => video.id))
            .then(function (comments) {

              let indexedCounts = comments.reduce(function (result, row) {
                result[row.video_id] = row
                return result
              }, {})

              let groupedTags = tags.reduce(function (result, tag) {
                result[tag.video_id] = result[tag.video_id] || []
                result[tag.video_id].push(tag)
                return result
              }, {})

              return videos.map(function (video) {
                let countRow = indexedCounts[video.id]
                video.commentCount = countRow ? countRow.count : '0';

                video.tags = groupedTags[video.id]
                return video
              })
            })
            .catch(function (err) {
              console.log(err);
            })
        })
    })
}

return getVideos()
```

## Level 4: More maintainable code

While the code above runs fairly efficiently, it's deeply-nested.  Recall from [Part 1](./Associations with Promises Part 1.md) that the ideal state is small, named functions that can be run in parallel.

In addition, it would be nice to separate IO (database calls) from logic (composing the object).  Some production-quality code might look like this:

```js
// -------- functional core ----------

// groups tags by video_id (pure function)
function groupTags(tags) {
  return tags.reduce(function (result, tag) {
    result[tag.video_id] = result[tag.video_id] || []
    result[tag.video_id].push(tag)
    return result
  }, {})
}

// indexes comment counts by video_id (pure function)
function indexCommentCounts(comments) {
  return comments.reduce(function (result, row) {
    result[row.video_id] = row
    return result
  }, {})
}

// efficiently adds commentCount and tags properties to each video
function populateVideos(videos, tags, comments) {
  let indexedCommentCounts = indexCommentCounts(comments)
  let groupedTags = groupTags(tags)

  return videos.map(function (video) {
    let countRow = indexedCommentCounts[video.id]
    video.commentCount = countRow ? countRow.count : '0';

    video.tags = groupedTags[video.id] || []
    return video
  })
}

// -------- imperative shell ----------

// finds all tags for the videos and groups them by video_id
function getTagsForVideos(videos) {
  return knex('tags')
    .join('taggings', 'taggings.tag_id', 'tags.id')
    .whereIn('taggings.video_id', videos.map(video => video.id))
}

// finds all tags for the videos and indexes them by video_id
function getCommentsForVideos(videos) {
  return knex('comments')
    .select('video_id')
    .count('id')
    .groupBy('video_id')
    .whereIn('comments.video_id', videos.map(video => video.id))
}

// find videos
function getVideos() {
  return knex('videos')
    .select(knex.raw('videos.*, users.name as owner_name'))
    .join('users', 'users.id', 'videos.owner_id')
    .limit(10)
}

// finds videos
// then in parallel finds tags and comments
// then composes the final object
function getVideosWithTagsAndComments() {
  return getVideos()
    .then(function (videos) {
      return Promise.all([
        getTagsForVideos(videos),
        getCommentsForVideos(videos)
      ]).then(results  => populateVideos(videos, ...results) )
    })
}

return getVideosWithTagsAndComments()
```

This code is awesome for all kinds of reasons 😀

- You can find videos, comment counts and tags independently, so those functions can be reused
- You can easily reuse and test the pure functions and the non-IO methods
  - You could easily make this a reusable group/index function as well
- The Big O runtime is as good as it'll get - O(n + m + n), or essentially O(n)
- It only makes 3 queries to populate the entire object
- It sends the minimal amount of data over the wire - just returning comment counts (see BONUS Challenge)

## BONUS Challenge

In the examples above there a 1-1 relationship between videos and comment counts.  The examples above showed them as being separate queries for the purposes of demonstration, but you could easily combine them into one.  Rewrite the example above making only 2 queries.
