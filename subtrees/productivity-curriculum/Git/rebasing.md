## Objectives

- Use rebasing strategy for git merges

## Activities

Rebasing is a powerful and advanced Git technique that allows us to fast forward the merge point and then apply the commits made in a branch on top of the fast forwarded merge point.

Begin by drawing a commit tree on the board:

```
(master) A <- B <- C <- D
```

Next, from `D` create a branch so that you end up with:

```
(feature)                 E <- F <- G
                         /
(master) A <- B <- C <- D
```

But suppose that more commits were added to `master` so that its tree grew while feature was being worked on:

```
(feature)                 E <- F <- G
                         /
(master) A <- B <- C <- D <- H <- I <- J
```

In a normal Git merge flow, the commits from the branch named `feature` would be applied after the final commit in `master` (`J`). In a rebase workfow, although the branch point was commit `B`, if we rebase `master` into `feature` and it will:

  1. Rewind the commits in `feature` to the branch point (`D`)
  1. Apply the commits of `master` to `feature`
  1. Replay the commits in `feature` after the latest commit in `master` (`J`)

This means that if an upstream change occurred in `master`, `feature` will treat it as if the branch point occurred at the latest commit of master. This looks like:

```
(feature)                                E <- F <- G
                                        /
(master) A <- B <- C <- D <- H <- I <- J
```

Again, rebasing is just another option for merging code from one branch into another. Rebasing has one upside to it that a regular merge does not; it makes it so that the work in the branch appears to be at the latest commit (`HEAD`) of `master`. Another way to think of this is that when the code in `feature` is merged into `master` there will be no merge conflicts.

Work through the following rebasing example:

```
mkdir rebase_example
cd rebase_example
git init
touch index.html

// in index.html
<!DOCTYPE html>
<html>
<head>
  <title>Git rebasing example!</title>
</head>
<body>
  <h1>This is a great website</h1>
</body>
</html>

// at CLI
git add index.html
git commit -m "Initial index"
git checkout -b feature/addContent

// in index.html
<!DOCTYPE html>
<html>
<head>
  <title>Git rebasing example!</title>
</head>
<body>
  <h1>This is a great website</h1>
  <p>I come along and decide to add some additional content</p>
</body>
</html>

// at CLI
git add index.html
git commit -m "My work first part"
```

But as you are working some other code is being added to `master`. For the purpose of this demonstration switch back to `master`:

```
// at CLI
git checkout master

// in index.html
<!DOCTYPE html>
<html>
<head>
  <title>Git rebasing examples are great!</title>
</head>
<body>
  <h1>This is a great website</h1>
</body>
</html>

// at CLI
git add index.html
git commit -m "Change title"

// in index.html
<!DOCTYPE html>
<html>
<head>
  <title>Git rebasing examples are great!</title>
</head>
<body>
  <h1>This is a great website</h1>
  <p>A lot of good content here</p>
</body>
</html>

// at CLI
git add index.html
git commit -m "Add page content"
```

Make sure that as you go through this example you are drawing the corresponding graphs on the whiteboard. Now that we have seen some changes in `master`, we go back to our branch:

```
git checkout feature/addContent
```

But now `master` is ahead of our work stream, so perhaps we should rebase it in, so that our commits come after the work that has occurred in `master` that does not exist in our branch:

```
git rebase master
```

Walk through each line of the error:

```
First, rewinding head to replay your work on top of it...
Applying: My work first part
Using index info to reconstruct a base tree...
M index.html
Falling back to patching base and 3-way merge...
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Failed to merge in the changes.
Patch failed at 0001 My work first part
The copy of the patch that failed is found in:
   /Users/andreas/workspace/gschool/allstate/experiments/rebase_example/.git/rebase-apply/patch

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
```

The first line is the most important though, it illustrates that our work is "rewinded" before the rebase occurs.

Next, work through the actual merge itself, resolving it to the following:

```
// in index.html
<!DOCTYPE html>
<html>
<head>
  <title>Git rebasing examples are great!</title>
</head>
<body>
  <h1>This is a great website</h1>
  <p>A lot of good content here</p>
  <p>I come along and decide to add some additional content</p>
</body>
</html>
```

Unlike a merge, here we just need to tell the rebase to continue:

```
git add index.html
git rebase --continue
```

At this point be sure to run `git log` and clarify that although the changes we applied ended up occuring anyway, the new commits in the branch (with `master` rebased into it) are actually a new commit.

#### Squash Merging

Bringing it all back together, we have so far only seen a "vanilla" merge. Now that we've rebased `master` into our branch, there is no real difference in what our branch has versus master.

Let's make an additional change in `index.hml` in the `feature/addContent` branch:

```
<!DOCTYPE html>
<html>
<head>
  <title>Git rebasing examples are great!</title>
</head>
<body>
  <h1>This is a great website</h1>
  <p>A lot of good content here</p>
  <p>I come along and decide to add some additional content</p>
  <p>We are able to make more changes in our branch still.</p>
</body>
</html>
```

And commit this change:

```
git add index.html
git commit -m "Add more content to index"
```

Let's quickly look at the difference in commits (as stored in the git log) next:

```
git log master..feature/addContent
```

So here we see that `feature/addContent` contains two commits that are not in `master`. At this point though let's think about `feature/addContent` as a feature rather than a group of commits. We could potentially bring all of this in to master as one commit:

```
git checkout master
git merge --squash feature/addContent
```

If we look at `git status` we see that there are some changes staged. Let's look at the difference that is queued to commit:

```
git diff --cached index.html
```

It's as if both pieces of code, introduced in separate commits, are going in to the same commit in `master`:

```
git add index.html
git commit -m "Add content feature"
```
