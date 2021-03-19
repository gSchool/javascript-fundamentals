## Objectives

- Visualize the DAG using `git lola`
- Predict the effects of common git commands on the DAG

## Background

We've already learned about the `index` in [basic git](./basic_git_workflow.md), so now lets look into the graph database portion of git, referred to as the `commit log` or `DAG`. Internally, git stores your changes as commits. Each commit consists of a set of changed files (not deltas, like most people think). Every commit has 0-2 parent commits. Git uses the hash or `SHA` of the changed files and the `SHA` of the parent commits as the unique identifier for that commit. This technique is known as [hash chaining](https://en.wikipedia.org/wiki/Hash_chain), and it cryptographically ensures the integrity of the git database, makes it difficult to spoof or alter commits, ensures unique identifiers for all commits, and makes collisions unlikely.

Commits by themselves only exist in the `reflog`. If we want to do anything with them, we have to crate a `tag` or a `branch`. Commits themselves are only identified by a `SHA`. Tags and branches allow us to create a meaningful name which "points" at a particular commit. Since commits themselves point at parent commits, a branch or tag name transitively tells us the entire history of a particular set of work. When you `git checkout <branch>`, you are telling git to find the commit referenced by the branch name, walk backwards through the DAG until it hits a root, then begin extracting `blobs` from it's database and putting them into your working directory as files.

Commits that are not transitively referenced by a tag or branch as said to be `orphan` commits. You can see these commits with the `git reflog` command, and remove them with `git gc`. Since commits are immutable, much of what we do in git is simply moving the pointers (tags and branches) around. Since this work is inherently graph-based, it's extremely important to have a tool for visualizing that graph.

In this tutorial, we use `git lola` because it is built into git, but many other [fine GUI tools](https://git-scm.com/downloads/guis) exist. Aside from visualizing the DAG, [three way merge](https://www.araxis.com/merge/documentation-windows/three-way-file-comparison-and-merging.en) is another important feature to consider when selecting a git GUI. When solving merge conflicts this becomes very important, but also just comparing work with other branches. IntelliJ idea has some great tools built right in, but to use them you need to set up a project, which can be overly burdensome.

Finally, it is important to be aware of all of the 3 different copies of the DAG:

![git stages](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/394/git_stages.png)

Committing a file moves it from the file system into a branch of the DAG (generally `master`). The next step is to merge it into your copy of `origin/master`. Finally, if you want this to be publicly accessible, you have to send your copy `origin/master` to `origin` using `git push`. `origin` in this example is just the name of a `remote`. Git is a peer-to-peer system, so repositories can have many remotes with arbitrary names. When pushing to a remote, you are essentially performing a merge, and remotes will generally be configured to reject non-fastforward merges. This means you'll need to `pull` first in order to get their changes, or do a `push -f`, which forcibly overwrites the branches on the remote to make them look like what you have locally. You should *never* `push -f` when working with a team unless you have an extraordinarilly good reason.


## Activities

### Activity 0: Setup

Install [meld](http://meldmerge.org/):

```
brew install homebrew/gui/meld
```

Add meld and [git lola](http://blog.kfish.org/2010/04/git-lola.html) to your `~/.gitconfig` using your favorite text editor:

```
[alias]
  lol = log --graph --decorate --pretty=oneline --abbrev-commit
  lola = log --graph --decorate --pretty=oneline --abbrev-commit --all
[diff]
  tool = meld
[merge]
  tool = meld
  ff = only
```

### Activity 1: clone

Work as a pair through the following scenarios. Start by forking [git playground](https://github.com/gSchool/xp_git_playground), then clone your new fork:

```
git clone https://github.com/xxxxxxxx/xp_git_playground.git
```

### Activity 2: Create some commits

Inspect the state of the git repository, using the following command:

```
$ git lola
fatal: your current branch 'master' does not have any commits yet
```

We got an error message because there are no commits! Let's create a commit, observing the results of each step:

```
$ echo 'hello world' >> readme.md
$ git status
$ git add readme.md
$ git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   readme.md

$ git commit -m "Added readme"
[master (root-commit) b73ff3a] Added readme
 1 file changed, 1 insertion(+)
 create mode 100644 readme.md

$ git lola
* b73ff3a (HEAD -> master) Added readme
```

- The `git status` shows you the current state of your working directory.
- `git lola` shows you the state of the DAG

We only see one commit:

```
* b73ff3a (HEAD -> master) Added readme
```

That's fine, but not super interesting. Let's make a change:

```
$ echo 'goodbye world' >> readme.md
$ git status
$ git add readme.md
$ git status
$ git commit -m "updated readme"
$ git lola
* 9f0fc11 (HEAD -> master) updated readme
* b73ff3a Added readme
```

Awesome, now we have two commits:

```
* 9f0fc11 (HEAD -> master) updated readme
* b73ff3a Added readme
```

### Activity 3: Create a branch

At this point we can see that we have one branch: `master`. We also have a tag called `HEAD`, which represents the commit that our working directory is currently at. `HEAD` is pointed at `master` which we can see by the arrow (`->`).

Now let's go back in time:

```
git checkout HEAD~1
```

We should get a nice warning about being in a "detatched HEAD" state:

```
You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b <new-branch-name>

HEAD is now at b73ff3a... Added readme
```

Let's see what that means:

```
$ git lola
* 9f0fc11 (master) updated readme
* b73ff3a (HEAD) Added readme
```

See how the `HEAD` tag is no longer pointed at our branch `master`? This is what git meant by "detached HEAD". Right now if we were to modify a file and try to commit it, git wouldn't know where to commit it to, because we're not on any branch!

What's more, our file system is now in the same state it was when we made our first commit:

```
$ cat readme.md
hello world
```

Let's follow git's recommendation and create ourselves a branch:

```
$ git checkout -b new_branch
$ git lola
* 9f0fc11 (master) updated readme
* b73ff3a (HEAD -> new_branch) Added readme
```

Now we can see git created a new branch, and pointed it at our `HEAD`!

### Activity 4: Switch branches

Now we can easily switch back and forth between these branches:

```
$ git checkout master
$ git lola
* 9f0fc11 (HEAD -> master) updated readme
* b73ff3a (new_branch) Added readme

$ cat readme.md
hello world
goodbye world

$ git checkout new_branch
$ git lola
* 9f0fc11 (master) updated readme
* b73ff3a (HEAD -> new_branch) Added readme

$ cat readme.md
hello world
```

See how we can move `HEAD` around anywhere we want? Git is just that easy.

### Activity 5: reset and stash

Now let's make a mistake:

```
$ echo '' > readme.md
$ cat readme.md

$ git status
On branch new_branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   readme.md

no changes added to commit (use "git add" and/or "git commit -a")
```

Uh-oh, it looks like our file has changed, and now there's nothing in it? Didn't something used to be there? Let's ask git:

```
$ git diff
diff --git a/readme.md b/readme.md
index 3b18e51..8b13789 100644
--- a/readme.md
+++ b/readme.md
@@ -1 +1 @@
-hello world
+
```

`-hello world` means we lost the "hello world" line. `+` means we have a blank line in it's place, but that's pretty non-intuitive. Instead, we can run:

```
$ git difftool
```

To open `meld` and see an nice interactive UI with the contents of both version of the file, and the ability to merge lines from the last commit into our local version of the file. Let's not do that though, let's just go back the the version from the last commit:

```
$ git reset HEAD --hard

$ git status
On branch new_branch
nothing to commit, working tree clean

$ cat readme.md
hello world
```

Be very careful when you `reset HEAD --hard`. Once a file has been commited to git, you can never lose work (* unless you clean), but this command replaces files that haven't yet been commited, so it's easy to lose work. If you `reset --hard`, make sure you know what you're doing. Sometimes though, you might want to go back to the last commit, but just for a little while. Maybe you did some important work:

```
$ echo 'Important work here' >> readme.md

$ cat readme.md
hello world
Important work here
```

But then your boss came in and said "stop working on that, I need you to work on something else!". You can stash your work away for later:

```
$ git stash
Saved working directory and index state WIP on new_branch: b73ff3a Added readme
HEAD is now at b73ff3a Added readme

$ git status
On branch new_branch
nothing to commit, working tree clean

$ cat readme.md
hello world
```

You can see you're back to the repo version again, except this time we haven't lost our work. We can see it is still there if we run:

```
$ git show stash
commit e665371fa696eebc4fcb8264cf379492ce80c247
Merge: b73ff3a 70c0d13
Author: Brent Gardner <bgardner@squarelabs.net>
Date:   Wed Sep 28 20:56:54 2016 +0100

    WIP on new_branch: b73ff3a Added readme

diff --cc readme.md
index 3b18e51,3b18e51..25699b2
--- a/readme.md
+++ b/readme.md
@@@ -1,1 -1,1 +1,2 @@@
  hello world
++Important work here
```

And we can get it back if we want to start working on it again:

```
$ git stash pop
On branch new_branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   readme.md

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (e665371fa696eebc4fcb8264cf379492ce80c247)
```

### Activity 6: Rewind a local branch


That's nice, but now we want to commit our work:

```
$ git lola
* 9f0fc11 (master) updated readme
* b73ff3a (HEAD -> new_branch) Added readme

$ git add readme.md
$ git commit -m "Important work"
[new_branch 545472a] Important work
 1 file changed, 1 insertion(+)

$ git lola
* 545472a (HEAD -> new_branch) Important work
| * 9f0fc11 (master) updated readme
|/  
* b73ff3a Added readme
```

Wait. We just realized that's not what we wanted at all. We never meant to commit that work, and `new_branch` should still point to the `Added readme` commit. If we had pushed to a `remote`, we can't undo history because we are sharing it with others, but since this is only in our local repo, we can do whatever we want. Let's move `new_branch` back to where it was:

```
$ git reset b73ff3a --hard
HEAD is now at b73ff3a Added readme

$ git lola
* 9f0fc11 (master) updated readme
* b73ff3a (HEAD -> new_branch) Added readme
```

We are on `new_branch`, and we've just `reset` it to point to commit `b73ff3a`. `git lola` now shows us we're right back where we were before. But what happened to commit `545472a`? We said "once commited to git, you can never lose work"... what if I want that back? `git lola` only shows commits that are referenced by a branch, tag, or another commit. `545472a` is now an "orphan commit" because nothing points to it, but it's still in our git database. The `log` (`lola`) just shows you whats used, but the `reflog` shows you everything:

```
$ git reflog
b73ff3a HEAD@{0}: reset: moving to b73ff3a
545472a HEAD@{1}: commit: Important work
b73ff3a HEAD@{2}: checkout: moving from master to new_branch
9f0fc11 HEAD@{3}: checkout: moving from new_branch to master
b73ff3a HEAD@{4}: checkout: moving from b73ff3af558502a359af9017b65f2c35569ca8e6 to new_branch
b73ff3a HEAD@{5}: checkout: moving from master to HEAD~1
9f0fc11 HEAD@{6}: commit: updated readme
b73ff3a HEAD@{7}: commit (initial): Added readme
```

See? `545472a` is still there. We could get it back by doing:

```
git checkout -b new_branch_name 545472a
```

### Activity 7: Rebasing

But instead, let's move on and get some work done:

```
$ git checkout new_branch
Already on 'new_branch'

$ echo 'Doing work now' >> readme.md
$ cat readme.md
hello world
Doing work now

$ git diff
diff --git a/readme.md b/readme.md
index 3b18e51..1466795 100644
--- a/readme.md
+++ b/readme.md
@@ -1 +1,2 @@
 hello world
+Doing work now

$ git add readme.md
$ git commit -m "Doing work now"
[new_branch e6dcca9] Doing work now
 1 file changed, 1 insertion(+)

$ git lola
* e6dcca9 (HEAD -> new_branch) Doing work now
| * 9f0fc11 (master) updated readme
|/  
* b73ff3a Added readme
```

Okay, neat. We're now on what's called a "feature branch". We're working on some stuff that is too cool (and unstable) for master. Let's keep going and do another commit:

```
$ echo 'More exciting work' >> readme.md
$ git add readme.md
$ git commit -m "More exciting work"
[new_branch 8bb1570] More exciting work
 1 file changed, 1 insertion(+)

$ git lola
* 8bb1570 (HEAD -> new_branch) More exciting work
* e6dcca9 Doing work now
| * 9f0fc11 (master) updated readme
|/  
* b73ff3a Added readme
```

Now we can see that our `new_branch` is 2 commits ahead of master. Let's pretend to be another pair, checkout master, and do some work:

```
$ echo 'very different work' > readme.md
$ echo 'definitely not the same stuff' >> readme.md
$ cat readme.md
very different work
definitely not the same stuff

$ git add readme.md
$ git commit -m "Different work in master"
[master 5102ec3] Different work in master
 1 file changed, 2 insertions(+), 2 deletions(-)

$ git lola
* 5102ec3 (HEAD -> master) Different work in master
* 9f0fc11 updated readme
| * 8bb1570 (new_branch) More exciting work
| * e6dcca9 Doing work now
|/  
* b73ff3a Added readme
```

Well this is interesting. Two teams did independent work on two different branches, and now they have diverged. Let's see how far apart they are:

```
$  git merge-base master new_branch
b73ff3af558502a359af9017b65f2c35569ca8e6
```

Git dutifully spits out the last commit that the two branches had in common. This can be helpful to figure out just how far two branches have diverged. But instead, let's just pretend we finished work on our `new_branch` feature, and we want to put it in master.

```
$ git checkout new_branch
Switched to branch 'new_branch'

$ git rebase master
First, rewinding head to replay your work on top of it...
Applying: Doing work now
Using index info to reconstruct a base tree...
M	readme.md
Falling back to patching base and 3-way merge...
Auto-merging readme.md
CONFLICT (content): Merge conflict in readme.md
error: Failed to merge in the changes.
Patch failed at 0001 Doing work now
The copy of the patch that failed is found in: .git/rebase-apply/patch

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
```

OH NO! The dreaded git "merge conflict". It's okay, take a deep breath. The first thing to understand, is that git is statefull. You are currently in a rebase. You can check by running `git status`:

```
$ git status
rebase in progress; onto 5102ec3
You are currently rebasing branch 'new_branch' on '5102ec3'.
  (fix conflicts and then run "git rebase --continue")
  (use "git rebase --skip" to skip this patch)
  (use "git rebase --abort" to check out the original branch)

Unmerged paths:
  (use "git reset HEAD <file>..." to unstage)
  (use "git add <file>..." to mark resolution)

	both modified:   readme.md

no changes added to commit (use "git add" and/or "git commit -a")
```

See `rebase in progress`? Any command you type now will have different meaning than when you are outside of rebase mode. If you ever get into a "weird state" where things aren't working, remember to run `git status` to see if you're in another mode.

`Unmerged paths` shows you the files that you have yet to fix. Let's take a look at `readme.md`:

```
$ cat readme.md
<<<<<<< 5102ec3d551fabafa431ac35c149b9e11769987e
very different work
definitely not the same stuff
=======
hello world
Doing work now
>>>>>>> Doing work now
```

Oh my, that's ugly. Git is trying to show you that `5102ec3` (master) has the lines:

```
very different work
definitely not the same stuff
```

And your file has the lines:

```
hello world
Doing work now
```

And it wants you to edit the file, and fix anything between `<<<<<` and `>>>>>`, then save, and `git add <filename>` to mark the conflict as resolved. Instead, let's use our mergetool to fix this graphically:

![3 way merge](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/392/Screen_Shot_2016-09-28_at_21.46.40.png)

What has happened is that git:

1. Rewound the commits on our branch, back to `merge-base`
1. Replayed the commits from master on to `new_branch`
1. Started playing our commits back on top of the ones from master
1. Ran into a conflict between master (where everything changed), and our first commit `e6dcca9 Doing work now`
1. Promptly stopped rebasing, and is asking us for help

We could click the arrows to merge over contents from the left or right window into the final results (middle window), but we can also just edit the contents of the middle window to make it look however we want. For the purposes of this exercise, let's say both are valid, and resolve it like this:

```
very different work
definitely not the same stuff
hello world
Doing work now
```

![Rebasing](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/393/Screen_Shot_2016-09-28_at_21.55.31.png)

Now we click "save" and "exit", and lets take a look at the resultant file:

```
$ cat readme.md
very different work
definitely not the same stuff
hello world
Doing work now
```

No more nasty `<<<<`! Let's see what our status is:

```
$ git status
rebase in progress; onto 5102ec3
You are currently rebasing branch 'new_branch' on '5102ec3'.
  (all conflicts fixed: run "git rebase --continue")

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   readme.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	readme.md.orig
	readme_BACKUP_16818.md
	readme_BACKUP_16883.md
	readme_BASE_16818.md
	readme_BASE_16883.md
	readme_LOCAL_16818.md
	readme_LOCAL_16883.md
	readme_REMOTE_16818.md
	readme_REMOTE_16883.md
```

Observations:

- `rebase in progress` - we're still in rebase mode
- `rebasing branch 'new_branch' on '5102ec3'` - a desription of what we are rebasing
- `all conflicts fixed` - we're done resolving conflicts!
- `run "git rebase --continue"` - helpful instructions on how to continue
- `modified:   readme.md` - a list of files with resolved conflicts
- `Untracked files:` - ignore these for now

Let's follow git's advice:

```
$ git rebase --continue
Applying: Doing work now
Applying: More exciting work
Using index info to reconstruct a base tree...
M	readme.md
Falling back to patching base and 3-way merge...
Auto-merging readme.md

$ git status
On branch new_branch
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	readme.md.orig
	readme_BACKUP_16818.md
	readme_BACKUP_16883.md
	readme_BASE_16818.md
	readme_BASE_16883.md
	readme_LOCAL_16818.md
	readme_LOCAL_16883.md
	readme_REMOTE_16818.md
	readme_REMOTE_16883.md

nothing added to commit but untracked files present (use "git add" to track)

$ git lola
* 94d4122 (HEAD -> new_branch) More exciting work
* c4c5fbc Doing work now
* 5102ec3 (master) Different work in master
* 9f0fc11 updated readme
* b73ff3a Added readme
```

Cool! We can now see that our feature branch (`new_branch`) is 2 commits ahead of `master`. Git has modified our commits so that they would play well on top of the new contents of `master`. Let's see what our revised commits look like:

```
$ git show c4c5fbc
commit c4c5fbc3b7af730eeebab22fdd5619fa7e1ab244
Author: Brent Gardner <bgardner@squarelabs.net>
Date:   Wed Sep 28 21:21:52 2016 +0100

    Doing work now

diff --git a/readme.md b/readme.md
index 3458e06..674faba 100644
--- a/readme.md
+++ b/readme.md
@@ -1,2 +1,4 @@
 very different work
 definitely not the same stuff
+hello world
+Doing work now

$ git show 94d4122
commit 94d41228ab492fbd24453bdac5056777c106d9ab
Author: Brent Gardner <bgardner@squarelabs.net>
Date:   Wed Sep 28 21:25:35 2016 +0100

    More exciting work

diff --git a/readme.md b/readme.md
index 674faba..090f2b9 100644
--- a/readme.md
+++ b/readme.md
@@ -2,3 +2,4 @@ very different work
 definitely not the same stuff
 hello world
 Doing work now
+More exciting work
```

`rebase` has now altered history, keeping the intent of our original commits, by modifying them so that they were compatible with the changes from master. This is okay, but it's only okay because these commits only exist on our local pairing station and we haven't pushed them yet.

### Activity 8: Merging

Since our commits now "play well" on master, our branch is said to be "ahead of master by 2 commits", and we can perform what git calls a "fast-forward" merge:

```
$ git branch
  master
* new_branch

$ git checkout master
Switched to branch 'master'
Your branch is based on 'origin/master', but the upstream is gone.
  (use "git branch --unset-upstream" to fixup)

$ git merge --ff new_branch
Updating 5102ec3..94d4122
Fast-forward
 readme.md | 3 +++
 1 file changed, 3 insertions(+)

$ git lola
* 94d4122 (HEAD -> master, new_branch) More exciting work
* c4c5fbc Doing work now
* 5102ec3 Different work in master
* 9f0fc11 updated readme
* b73ff3a Added readme
```

Awesome! `HEAD` now points at `master` and `new_branch`, and everything is in sync!

### Activity 9: Pushing

If this were a real codebase, we'd definitely want to run one command first:

```
npm test
```

If all tests pass, we might choose to inflict our changes on our fellow developers with a push to github:

```
git push origin master
```

### Activity 10: Cleaning

And our coworkers can now see our code. What's more, is that our history is a nice, clean line. There's only one problem:

```
$ git status
On branch master
Your branch is based on 'origin/master', but the upstream is gone.
  (use "git branch --unset-upstream" to fixup)
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	readme.md.orig
	readme_BACKUP_16818.md
	readme_BACKUP_16883.md
	readme_BASE_16818.md
	readme_BASE_16883.md
	readme_LOCAL_16818.md
	readme_LOCAL_16883.md
	readme_REMOTE_16818.md
	readme_REMOTE_16883.md

nothing added to commit but untracked files present (use "git add" to track)
```

It looks like git left behind some baggage. No bother, let's clean it up:

```
git clean -xfd
Removing readme.md.orig
Removing readme_BACKUP_16818.md
Removing readme_BACKUP_16883.md
Removing readme_BASE_16818.md
Removing readme_BASE_16883.md
Removing readme_LOCAL_16818.md
Removing readme_LOCAL_16883.md
Removing readme_REMOTE_16818.md
Removing readme_REMOTE_16883.md

$ git status
On branch master
Your branch is based on 'origin/master', but the upstream is gone.
 (use "git branch --unset-upstream" to fixup)
nothing to commit, working tree clean
```

`git clean` is another useful but dangerous command, because it deletes every file tracked by git. It's useful for returning to the state you'd be in if you just cloned a repo, but since it affects uncommitted files, there is no "undo" for this operation.

### Activity 11: Bisecting

Let's pretend there is one final issue. After we've done all this, we realize the tests aren't passing for some reason. Let's look at the log:

```
$ git lola
* 94d4122 (HEAD -> master, new_branch) More exciting work
* c4c5fbc Doing work now
* 5102ec3 Different work in master
* 9f0fc11 updated readme
* b73ff3a Added readme
```

We're absolutely sure the tests worked at `b73ff3a`, but we're equally sure they don't work now (`94d4122`). What can we do? We could go through an extensive debugging routine, or we could let git (and our tests) do the work for us:

```
$ git bisect start
$ git bisect good b73ff3a
$ git bisect bad 94d4122
Bisecting: 1 revision left to test after this (roughly 1 step)
[5102ec3d551fabafa431ac35c149b9e11769987e] Different work in master

$ git lola
* 94d4122 (new_branch, master, refs/bisect/bad) More exciting work
* c4c5fbc Doing work now
* 5102ec3 (HEAD) Different work in master
* 9f0fc11 updated readme
* b73ff3a (refs/bisect/good-b73ff3af558502a359af9017b65f2c35569ca8e6) Added readme
```

Git has found the commit half-way between "good" and "bad", and checked it out for us. Now all we need to do is run the tests, and tell it the result:

```
$ npm test
FAILED: Error on line 33

$ git bisect bad
Bisecting: 0 revisions left to test after this (roughly 0 steps)
[9f0fc11b507d02ca032703b0571428994f9cc49c] updated readme

$ git lola
* 94d4122 (new_branch, master) More exciting work
* c4c5fbc Doing work now
* 5102ec3 (refs/bisect/bad) Different work in master
* 9f0fc11 (HEAD) updated readme
* b73ff3a (refs/bisect/good-b73ff3af558502a359af9017b65f2c35569ca8e6) Added readme
```

Git has (again) found the commit half-way between "good" and "bad", and checked it out for us. Now all we need to do is run the tests, and tell it the result:

```
$ npm test
All tests passed! You win!

$ git bisect good
5102ec3d551fabafa431ac35c149b9e11769987e is the first bad commit
commit 5102ec3d551fabafa431ac35c149b9e11769987e
Author: Brent Gardner <bgardner@squarelabs.net>
Date:   Wed Sep 28 21:29:59 2016 +0100

    Different work in master

:100644 100644 d788591027246cc940d2d4b5110c863d47b77284 3458e06d34d408e2a365520ad9ee170e2cd97139 M	readme.md
```

Since the tests passed, we tell git that things are good, and it deduces that commit `5102ec3d551fabafa431ac35c149b9e11769987e` is the one that broke the build. Now we can, in the spirit of XP feedback, have a friendly conversation with `Brent Gardner` about why running tests is important before pushing his work.

### Activity 12: Blaming

Just in case we wanted to go down to the individual line, we could run `git blame` to see how edited that line last:

```
$ git blame readme.md
^b73ff3a (Brent Gardner 2016-09-28 20:12:41 +0100 1) hello world
9f0fc11b (Brent Gardner 2016-09-28 20:18:05 +0100 2) goodbye world
```

Whatever line caused the problem, it's clear that `Brent Gardner` was the culprit. One final word of caution: during merge conflicts, the editor of the line will appear to be the last person who resolved the conflict, so be careful before you `blame`.

### Stretch Goals

If you complete all these steps, then delete your repo, switch drivers, and go over this tutorial again:

```
$ rm readme.md
$ rm -rf .git/
$ ls -la
total 0
drwxr-xr-x  2 brent.gardner  staff   68 Sep 29 05:44 .
drwxr-xr-x  5 brent.gardner  staff  170 Sep 28 20:09 ..

$ git init .
Initialized empty Git repository in /Users/brent.gardner/workspace/w4d4/playground1/.git/
```

- Feel free to try more advanced scenarios this time.
- Try to think of situations that might occur in real life and simulate them in this sandboxed repository.
- Develop a simple express app, switching drivers, with each driver working in their own branch. After both drivers have some work in feature branches, take turns rebasing your work onto master.
