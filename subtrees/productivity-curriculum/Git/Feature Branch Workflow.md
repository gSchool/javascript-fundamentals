## Objectives

- Explain what the Feature Branch Workflow is.
- Explain why the Feature Branch Workflow is important.
- Use the Feature Branch Workflow, without merge commits, in a team-based project.
- Use the Feature Branch Workflow, with merge commits, in a team-based project.
- Use the Feature Branch Workflow, with merge conflicts after a rebase, in a team-based project.

## What's the Feature Branch Workflow?

In the first quarter this course, you employed a Centralized Workflow to manage the Git commits of your projects. In Git, a **Centralized Workflow** uses a central `origin` repository with a single `master` branch to serve as the hub for all commits. In Git speak, this is simply referred to as the `origin/master` branch.

Most of your projects started off with at least one commit in the `origin/master` branch as your instructors gave you a solid foundation from which to build.

```text
origin/master
      │
      │
      │
      ▼
 ┌─────────┐
 │         │
 │ be282f7 │
 │         │
 └─────────┘
```

From here, you forked and cloned a central repository. Forking is the process of coping an existing GitHub repository to your GitHub account, while cloning is the process of copying a central repository to your local development environment. When you clone, all the commits from the central repository's `origin/master` branch are copied to your local repository's `master` branch.

```text
origin/master
   master
      │
      │
      │
      ▼
 ┌─────────┐
 │         │
 │ be282f7 │
 │         │
 └─────────┘
```

In your local repository, you created and modified files, added the changes to the local repository's staging area, and committed the staging area to the local `master` branch. These new commits, stored in the local `master` branch, were completely isolated from the central `origin/master` branch. This allowed you to defer synchronizing with the central repository until you reached a convenient stopping point.

```text
origin/master      master
      │               │
      │               │
      │               │
      ▼               ▼
 ┌─────────┐     ┌─────────┐
 │         │     │         │
 │ be282f7 │─────│ 4f7e591 │
 │         │     │         │
 └─────────┘     └─────────┘
```

When you were ready to publish your changes, you pushed your local `master` branch to the central `origin/master` branch. Pushing is the process of copying all the additional commits from the local repository to the central repository.

```text
               origin/master
                  master
                     │
                     │
                     │
                     ▼
┌─────────┐     ┌─────────┐
│         │     │         │
│ be282f7 │─────│ 4f7e591 │
│         │     │         │
└─────────┘     └─────────┘
```

As previously mentioned, this was more or less your Git workflow for the first quarter of the course. However, throughout the second quarter, you began to adopt a Feature Branch Workflow. The core idea behind the **Feature Branch Workflow** is that all commits related a specific feature, or bug fix, are developed and stored in a dedicated branch instead of the `master` branch.

The Feature Branch Workflow still uses a central repository and the `origin/master` branch still represents the official project history. But, instead of committing directly on your local `master` branch, you create a new branch each time you start work on a new feature or bug fix. Descriptive branch names, like `animate_menu_42`, help to give a clear, highly-focused purpose to each branch. It's common to suffix a branch name with the number of a corresponding issue in an issue tracker.

Each feature branch is created from the local `master` branch when it's synchronized with the central `origin/master` branch.

```text
               origin/master
                  master
              animate_menu_42
                     │
                     │
                     │
                     ▼
┌─────────┐     ┌─────────┐
│         │     │         │
│ be282f7 │─────│ 4f7e591 │
│         │     │         │
└─────────┘     └─────────┘
```

A branch is just a label that points to a commit and Git makes no technical distinction between the `master` branch and a feature branch. So you can add and commit changes to a feature branch just as you did in the Centralized Workflow. The only difference is that new commits are stored in the local `animate_menu_42` branch, completely isolated from any other branch.

Feature branches keep both the `master` and `origin/master` branches pristine and unchanged while you iterate on an idea. If a breaking change is accidentally committed while working, it won't immediately contaminate the `master` and `origin/master` branches. Thus you can continue developing and testing the project without polluting the centralized source of truth.

```text
               origin/master
                  master      animate_menu_42
                     │               │
                     │               │
                     │               │
                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │
│ be282f7 │─────│ 4f7e591 │─────│ dad1e7f │
│         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘
```

Once you're confident that your feature or bug fix doesn't break any existing code, ideally using automated tests, you're ready to publish. The first step is to merge the commits from the local `animate_menu_42` branch into the local `master` branch.

```text
                                  master
               origin/master  animate_menu_42
                     │               │
                     │               │
                     │               │
                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │
│ be282f7 │─────│ 4f7e591 │─────│ dad1e7f │
│         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘
```

Then, you can publish your code by pushing your local `master` branch to the central `origin/master` branch, adding the feature's commits into the official project history.

```text
                               origin/master
                                  master
                              animate_menu_42
                                     │
                                     │
                                     │
                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │
│ be282f7 │─────│ 4f7e591 │─────│ dad1e7f │
│         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘
```

Now that all three branches contain the same commits, you can safely delete the `animate_menu_42` feature branch.

```text
                               origin/master
                                  master
                                     │
                                     │
                                     │
                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │
│ be282f7 │─────│ 4f7e591 │─────│ dad1e7f │
│         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘
```

And thus you've successfully completing one cycle of the Feature Branch Workflow.

### Exercise

Turn to your partner and explain what the Feature Branch Workflow is in your own words. It may be helpful to draw a diagram together to visualize how branches change over time.

## Why is the Feature Branch Workflow important?

As you've seen, the Feature Branch Workflow makes it easy for you to work on a particular feature or bug fix without disturbing the main codebase. It protects the `master` and `origin/master` branches by minimizing the amount of broken code that's committed to them. Everyone commits broken code to the main codebase from time to time, even when using a Feature Branch Workflow. And that's okay because nobody is perfect. However, minimizing the amount of broken code in the main codebase is a huge advantage when working collaboratively. Here are a few reasons why.

1. A feature branch that's created from a known stable point in the codebase provides a solid foundation from which to build. If the `master` and `origin/master` branches contain broken code, how can you build a feature or fix a bug with any confidence?

1. A feature branch that's tied to a single feature or bug fix allows you to focus exclusively on it. It's easy to get lost or overwhelmed when you're trying to solve more than one problem at time.

1. A feature branch that's isolated from the main codebase allows you to start over if your work goes down the wrong path. It's much easier, and safer, to delete a feature branch rather than rollback commits in the `master` and `origin/master` branches.

1. A feature branch that's based on the `master` and `origin/master` branches gives you the confidence to publish well-tested code. If the code in a feature branch works correctly and that branch is based on a branch that's continuously deployed to other environments, there's a good chance the code will work correctly on those environments too.

### Exercise

Take a moment to write down why the Feature Branch Workflow is important. After about a minute, your instructor will cold call on the class and ask what was written down.

## How do you use the Feature Branch Workflow, without merge commits, in a team-based project?

Since you've been using the Feature Branch Workflow in your individual projects this quarter, let's use it in a team-based project. To get started, organize your Q2 Project team by completing the following steps.

1. Sit next to the people on your team.

1. Elect one project owner to fork the [Merge Conflict Chart](https://github.com/gSchool/wd-merge-conflict-chart) repository on GitHub. The only responsibility the project owner has over the other members of the team is to setup the project on GitHub.

1. Have the project owner enable GitHub Issues in the "Settings" section of the forked repository. By default, GitHub disables issues for forked repositories.

1. Have the project owner add the other team members as Collaborators which is also found in the "Settings" section.

Now, as a team, inspect the following areas of the repository.

- The commits on the `master` branch.
- The open issues.
- The contributors graph.

Then, have each team member clone the project owner's forked repository to their own development environment. Once cloned, change into the project directory.

```shell
cd wd-merge-conflict-chart
```

And open the `index.html` file in your browser.

```shell
open index.html
```

And it should look something like this.

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/275/Screen_Shot_2016-07-08_at_11.05.48_AM.png)

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

And you should see something that resembles this diagram.

```text
origin/master
HEAD ─> master
     │
     │
     │
     ▼
┌─────────┐
│         │
│ 2e0dc92 │
│         │
└─────────┘
```

Now, as a team, create the following issues in the issue tracker for your repository. Then, as a team, assign the issues to different team members.

**NOTE:** If your team has more members than issues, your team gets to practice pair-programming.

1. Change the dimensions of the chart
1. Change the colors of the chart

For team members with an assigned issue, create and checkout a corresponding feature branch in your local repository.

1. `git checkout -b dimensions_1`
1. `git checkout -b colors_2`

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `dimensions_1` feature branch should see something that resembles this diagram.

```text
   origin/master
       master
HEAD ─> dimensions_1
         │
         │
         │
         ▼
    ┌─────────┐
    │         │
    │ 2e0dc92 │
    │         │
    └─────────┘
```

And those working on the `colors_2` feature branch should see something that resembles this diagram.

```text
   origin/master
       master
  HEAD ─> colors_2
         │
         │
         │
         ▼
    ┌─────────┐
    │         │
    │ 2e0dc92 │
    │         │
    └─────────┘
```

Then, as a team, work toward solving the issues. Once you have a working solution, commit the changes to your respective feature branch.

**NOTE:** Please hold off on merging until the entire class is ready.

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `dimensions_1` feature branch should see something that resembles this diagram.

```text
   origin/master
       master       HEAD ─> dimensions_1
         │                   │
         │                   │
         │                   │
         ▼                   ▼
    ┌─────────┐         ┌─────────┐
    │         │         │         │
    │ 2e0dc92 │─────────│ 4f7e591 │
    │         │         │         │
    └─────────┘         └─────────┘
```

And those working on the `colors_2` feature branch should see something that resembles this diagram.

```text
origin/master
    master         HEAD ─> colors_2
      │                   │
      │                   │
      │                   │
      ▼                   ▼
 ┌─────────┐         ┌─────────┐
 │         │         │         │
 │ 2e0dc92 │─────────│ e19450b │
 │         │         │         │
 └─────────┘         └─────────┘
```

Assuming your staging area is clean, those who worked on the `dimensions_1` feature branch, checkout the local `master` branch.

```shell
git checkout master
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `dimensions_1` feature branch should see something that resembles this diagram.

```text
   origin/master
   HEAD -> master       dimensions_1
         │                   │
         │                   │
         │                   │
         ▼                   ▼
    ┌─────────┐         ┌─────────┐
    │         │         │         │
    │ 2e0dc92 │─────────│ 4f7e591 │
    │         │         │         │
    └─────────┘         └─────────┘
```

Pull down any new commits from the central `origin/master` branch to the local `master` branch. There should be no commits, but this is the habit you'll want to form.

```shell
git pull
```

Checkout the `dimensions_1` feature branch.

```shell
git checkout dimensions_1
```

Rebase the current `dimensions_1` feature branch with the `master` branch. A **rebase**, in this case, performs the following steps.

1. All the new commits on the current `dimensions_1` branch are saved to a temporary area.
1. The `dimensions_1` branch is reset to the same base commit as the `master` branch.
1. The changes from the saved commits are reapplied to the rebased `dimensions_1` branch, creating new commits.
1. The original saved commits are deleted.

In this case, the `dimensions_1` branch should be up to date with the `master` branch, but, again, you'll want to form this habit.

```shell
git rebase master
```

Checkout the `master` branch once again.

```shell
git checkout master
```

Merge the commits from the `dimensions_1` feature branch into the current `master` branch. Because the `dimensions_1` branch is directly ahead of the `master` branch, Git performs a **fast-forward merge** by simply moving the pointer forward.

```shell
git merge dimensions_1
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `dimensions_1` feature branch should see something that resembles this diagram.

```text
                    HEAD -> master
origin/master        dimensions_1
      │                   │
      │                   │
      │                   │
      ▼                   ▼
 ┌─────────┐         ┌─────────┐
 │         │         │         │
 │ 2e0dc92 │─────────│ 4f7e591 │
 │         │         │         │
 └─────────┘         └─────────┘
```

And push the local `master` branch to the central `origin/master` branch.

```shell
git push
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `dimensions_1` feature branch should see something that resembles this diagram.

```text
                    origin/master
                    HEAD -> master
                     dimensions_1
                          │
                          │
                          │
                          ▼
 ┌─────────┐         ┌─────────┐
 │         │         │         │
 │ 2e0dc92 │─────────│ 4f7e591 │
 │         │         │         │
 └─────────┘         └─────────┘
```

Finally, delete your `dimensions_1` feature branch.

```shell
git branch -d dimensions_1
```

Assuming your staging area is clean, those who worked on the `colors_2` feature branch, checkout the local `master` branch.

```shell
git checkout master
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `colors_2` feature branch should see something that resembles this diagram.

```text
origin/master
HEAD ─> master         colors_2
      │                   │
      │                   │
      │                   │
      ▼                   ▼
 ┌─────────┐         ┌─────────┐
 │         │         │         │
 │ 2e0dc92 │─────────│ e19450b │
 │         │         │         │
 └─────────┘         └─────────┘
```

Pull down any new commits from the central `origin/master` branch to the local `master` branch. There should be one commit pulled down.

```shell
git pull
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `colors_2` feature branch should see something that resembles this diagram.

```text
               origin/master
               HEAD -> master
                     │
                     │
                     │
                     ▼
┌─────────┐     ┌─────────┐
│         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │
│         │─┐   │         │
└─────────┘ │   └─────────┘
            │
            │   ┌─────────┐
            │   │         │
            └───│ e19450b │
                │         │
                └─────────┘
                     ▲
                     │
                     │
                     │
                  colors_2
```

Checkout the `colors_2` feature branch.

```shell
git checkout colors_2
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `colors_2` feature branch should see something that resembles this diagram.

```text
               origin/master
                  master
                     │
                     │
                     │
                     ▼
┌─────────┐     ┌─────────┐
│         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │
│         │─┐   │         │
└─────────┘ │   └─────────┘
            │
            │   ┌─────────┐
            │   │         │
            └───│ e19450b │
                │         │
                └─────────┘
                     ▲
                     │
                     │
                     │
              HEAD -> colors_2
```

Rebase the current `colors_2` feature branch with the `master` branch. Remember, a rebase, in this case, performs the following steps.

1. All the new commits on the current `colors_2` branch are saved to a temporary area.
1. The `colors_2` branch is reset to the same base commit as the `master` branch.
1. The changes from the saved commits are reapplied to the rebased `colors_2` branch, creating new commits.
1. The original saved commits are deleted.

```shell
git rebase master
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `colors_2` feature branch should see something that resembles this diagram.

```text
               origin/master
                  master      HEAD -> colors_2
                     │               │
                     │               │
                     │               │
                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │
│         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘
```

Checkout the `master` branch once again.

```shell
git checkout master
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `colors_2` feature branch should see something that resembles this diagram.

```text
               origin/master
               HEAD -> master     colors_2
                     │               │
                     │               │
                     │               │
                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │
│         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘
```

Merge the commits from the `colors_2` feature branch into the current `master` branch. Because the `colors_2` branch is directly ahead of the `master` branch, Git performs a fast-forward merge** by simply moving the pointer forward.

```shell
git merge colors_2
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `colors_2` feature branch should see something that resembles this diagram.

```text
                               HEAD -> master
               origin/master      colors_2
                     │               │
                     │               │
                     │               │
                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │
│         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘
```

And push the local `master` branch to the central `origin/master` branch.

```shell
git push
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `colors_2` feature branch should see something that resembles this diagram.

```text
                               origin/master
                               HEAD -> master
                                  colors_2
                                     │
                                     │
                                     │
                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │
│         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘
```

Finally, delete your `colors_2` feature branch.

```shell
git branch -d colors_2
```

Those who worked on the `dimensions_1` feature branch can now synchronize their local `master` branch with the `origin/master` branch.

```shell
git pull
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `dimensions_1` feature branch should see something that resembles this diagram.

```text
                               origin/master
                               HEAD -> master
                                     │
                                     │
                                     │
                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │
│         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘
```

## How do you use the Feature Branch Workflow, with merge commits, in a team-based project?

Now, as a team, create the following issues in the issue tracker for your repository. Then, as a team, assign the issues to different team members.

1. Change the labels of the chart
1. Change the title of the page

For team members with an assigned issue, create and checkout a corresponding feature branch in your local repository.

1. `git checkout -b labels_3`
1. `git checkout -b title_4`

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `labels_3` feature branch should see something that resembles this diagram.

```text
                               origin/master
                                   master
                              HEAD -> labels_3
                                     │
                                     │
                                     │
                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │
│         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘
```

And those working on the `title_4` feature branch should see something that resembles this diagram.

```text
                               origin/master
                                   master
                              HEAD -> title_4
                                     │
                                     │
                                     │
                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │
│         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘
```

Then, as a team, work toward solving the issues. Once you have a working solution, commit the changes to your respective feature branch.

**NOTE:** Please hold off on merging until the entire class is ready.

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `labels_3` feature branch should see something that resembles this diagram.

```text
                               origin/master
                                   master     HEAD -> labels_3
                                     │               │
                                     │               │
                                     │               │
                                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │
│         │     │         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘     └─────────┘
```

And those working on the `title_4` feature branch should see something that resembles this diagram.

```text
                               origin/master
                                   master     HEAD -> title_4
                                     │               │
                                     │               │
                                     │               │
                                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ a7c7c3f │
│         │     │         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘     └─────────┘
```

Assuming your staging area is clean, those who worked on the `labels_3` feature branch, checkout the local `master` branch.

```shell
git checkout master
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `labels_3` feature branch should see something that resembles this diagram.

```text
                               origin/master
                               HEAD -> master     labels_3
                                     │               │
                                     │               │
                                     │               │
                                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │
│         │     │         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘     └─────────┘
```

Pull down any new commits from the central `origin/master` branch to the local `master` branch. There should be no commits, but this is the habit you'll want to form.

```shell
git pull
```

Checkout the `labels_3` feature branch.

```shell
git checkout labels_3
```

Rebase the current `labels_3` feature branch with the `master` branch. Remember, a rebase, in this case, performs the following steps.

1. All the new commits on the current `labels_3` branch are saved to a temporary area.
1. The `labels_3` branch is reset to the same base commit as the `master` branch.
1. The changes from the saved commits are reapplied to the rebased `labels_3` branch, creating new commits.
1. The original saved commits are deleted.

In this case, the `labels_3` branch should be up to date with the `master` branch, but, again, you'll want to form this habit.

```shell
git rebase master
```

Checkout the `master` branch once again.

```shell
git checkout master
```

Merge the commits from the `labels_3` feature branch into the current `master` branch. Because the `labels_3` branch is directly ahead of the `master` branch, Git performs a fast-forward merge.

```shell
git merge labels_3
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `labels_3` feature branch should see something that resembles this diagram.

```text
                                               HEAD -> master
                               origin/master      labels_3
                                     │               │
                                     │               │
                                     │               │
                                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │
│         │     │         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘     └─────────┘
```

And push the local `master` branch to the central `origin/master` branch.

```shell
git push
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `labels_3` feature branch should see something that resembles this diagram.

```text
                                               origin/master
                                               HEAD -> master
                                                  labels_3
                                                     │
                                                     │
                                                     │
                                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │
│         │     │         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘     └─────────┘
```

Finally, delete your `labels_3` feature branch.

```shell
git branch -d labels_3
```

Assuming your staging area is clean, those who worked on the `title_4` feature branch, checkout the local `master` branch.

```shell
git checkout master
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `title_4` feature branch should see something that resembles this diagram.

```text
                               origin/master
                               HEAD -> master     title_4
                                     │               │
                                     │               │
                                     │               │
                                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ a7c7c3f │
│         │     │         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘     └─────────┘
```

Though you'll always want to synchronize a feature branch with the central `origin/master` branch before merging, accidents happen from time to time. Go ahead and "accidentally" merge the commits from the `title_4` feature branch into the current `master` branch. Because the `title_4` branch is directly ahead of the `master` branch, Git performs a fast-forward merge.

```shell
git merge title_4
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `title_4` feature branch should see something that resembles this diagram.

```text
                                               HEAD -> master
                               origin/master      title_4
                                     │               │
                                     │               │
                                     │               │
                                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ a7c7c3f │
│         │     │         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘     └─────────┘
```

Pull down any new commits from the central `origin/master` branch to the local `master` branch. There should be one commit pulled down.

```shell
git pull
```

But your text editor should open a window that looks somethings like this.

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/276/Screen_Shot_2016-07-12_at_1.37.46_PM.png)

In this scenario, Git asks your text editor to confirm a commit message for a special kind of commit—a **merge commit**—which is the result of a merge between three commits. But why?

In reality, the `git pull` command is short for `git pull origin master`, which is composed of the following two commands.

1. `git fetch origin master`
1. `git merge origin/master`

In other words, the commits on the `master` branch at the central `origin` repository are downloaded to the `origin/master` branch in the local repository. Then, Git merges the commits from the `origin/master` branch into the current `master` branch.

The problem, in this case, was the `master` branch was not directly ahead of the `origin/master` branch. In reality, the two branches had diverged, producing something that resembles this diagram.

```text
                                               origin/master
                                                     │
                                                     │
                                                     │
                                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │
│         │     │         │     │         │─┐   │         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘
                                            │
                                            │   ┌─────────┐
                                            │   │         │
                                            └───│ a7c7c3f │
                                                │         │
                                                └─────────┘
                                                     ▲
                                                     │
                                                     │
                                                     │
                                                  title_4
                                               HEAD -> master
```

Because the `master` branch was not directly ahead of the `origin/master` branch, Git couldn't perform a fast-forward merge. Instead, it performed a **three-way merge** between the `master` commit, the `origin/master` commit, and their common base commit.

A three-way merge always results in a merge commit. This is why your text editor opened a new window, like the one above, asking you to type in a commit message. Typically, the default message is good enough. When you're ready, save the file and close the window to instruct Git to accept the commit message.

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `title_4` feature branch should see something that resembles this diagram.

```text
                                               origin/master   HEAD -> master
                                                     │               │
                                                     │               │
                                                     │               │
                                                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │
│         │     │         │     │         │─┐   │         │   ┌─│         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘
                                            │                 │
                                            │   ┌─────────┐   │
                                            │   │         │   │
                                            └───│ a7c7c3f │───┘    
                                                │         │
                                                └─────────┘
                                                     ▲
                                                     │
                                                     │
                                                     │
                                                  title_4
```

As you can see, the merge commit, referenced by the `master` branch, joins the two divergent branches in history.

**QUESTION:** In Git, merging and rebasing are designed to handle this exact scenario. However, they handle it in very different ways. What would have happened if a rebase was performed instead of a merge?

Push the local `master` branch to the central `origin/master` branch.

```shell
git push
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `title_4` feature branch should see something that resembles this diagram.

```text
                                                               origin/master
                                                               HEAD -> master
                                                                     │
                                                                     │
                                                                     │
                                                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │
│         │     │         │     │         │─┐   │         │   ┌─│         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘
                                            │                 │
                                            │   ┌─────────┐   │
                                            │   │         │   │
                                            └───│ a7c7c3f │───┘    
                                                │         │
                                                └─────────┘
                                                     ▲
                                                     │
                                                     │
                                                     │
                                                  title_4
```

Finally, delete your `title_4` feature branch.

```shell
git branch -d title_4
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `title_4` feature branch should see something that resembles this diagram.

```text
                                                               origin/master
                                                               HEAD -> master
                                                                     │
                                                                     │
                                                                     │
                                                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │
│         │     │         │     │         │─┐   │         │   ┌─│         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘
                                            │                 │
                                            │   ┌─────────┐   │
                                            │   │         │   │
                                            └───│ a7c7c3f │───┘    
                                                │         │
                                                └─────────┘
```

Those who worked on the `labels_3` feature branch can now synchronize their local `master` branch with the `origin/master` branch.

```shell
git pull
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `labels_3` feature branch should see something that resembles this diagram.

```text
                                                               origin/master
                                                               HEAD -> master
                                                                     │
                                                                     │
                                                                     │
                                                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │
│         │     │         │     │         │─┐   │         │   ┌─│         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘
                                            │                 │
                                            │   ┌─────────┐   │
                                            │   │         │   │
                                            └───│ a7c7c3f │───┘    
                                                │         │
                                                └─────────┘
```

When using a Feature Branch Workflow in a team-based project, it's common to reapply your commits from the local `master` branch on top of newer commits in the central `origin/master` branch. Imagine you and your team are hacking away at the intended linear history of a project's central `origin/master` branch. The fact that one of you happened to push commits to it slightly before the rest of the team is irrelevant. Producing a "merge bubble" in the `origin/master` branch because of a timing accident is counter-productive to understanding the history of your project.

Ask yourself do you want the history of `origin/master` to be littered with hundreds of merge commits or do you want the history to contain a handful of merge commits that represent intentional divergent development? If the answer is the later, perform a rebase instead of a merge when pulling the `origin/master` branch into the `master` branch.

You can either perform a rebase when pulling to the `master` branch on an individual basis.

```shell
git pull --rebase origin master
```

Or you can config Git to always rebase when pulling to the `master` branch.

```shell
git config --global branch.master.rebase true
```

## How do you use the Feature Branch Workflow, with merge conflicts after a rebase, in a team-based project?

As a team, create the following issues in the issue tracker for your repository. Then, as a team, assign the issues to different team members.

1. Change the data so less students understand
1. Change the data so more students understand

For team members with an assigned issue, create and checkout a corresponding feature branch in your local repository.

1. `git checkout -b less_5`
1. `git checkout -b more_6`

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `less_5` feature branch should see something that resembles this diagram.

```text
                                                               origin/master
                                                                  master
                                                               HEAD -> less_5
                                                                     │
                                                                     │
                                                                     │
                                                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │
│         │     │         │     │         │─┐   │         │   ┌─│         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘
                                            │                 │
                                            │   ┌─────────┐   │
                                            │   │         │   │
                                            └───│ a7c7c3f │───┘    
                                                │         │
                                                └─────────┘
```

And those working on the `more_6` feature branch should see something that resembles this diagram.

```text
                                                               origin/master
                                                                  master
                                                               HEAD -> more_6
                                                                     │
                                                                     │
                                                                     │
                                                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │
│         │     │         │     │         │─┐   │         │   ┌─│         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘
                                            │                 │
                                            │   ┌─────────┐   │
                                            │   │         │   │
                                            └───│ a7c7c3f │───┘    
                                                │         │
                                                └─────────┘
```

Then, as a team, work toward solving the issues. Be sure that each team member changes both data values so their sum is remains `600`. Once you have a working solution, commit the changes to your respective feature branch.

**NOTE:** Please hold off on merging until the entire class is ready.

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `less_5` feature branch should see something that resembles this diagram.

```text
                                                               origin/master
                                                                  master       HEAD -> less_5
                                                                     │               │
                                                                     │               │
                                                                     │               │
                                                                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │─────│ a1dc585 │
│         │     │         │     │         │─┐   │         │   ┌─│         │     │         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘     └─────────┘
                                            │                 │
                                            │   ┌─────────┐   │
                                            │   │         │   │
                                            └───│ a7c7c3f │───┘    
                                                │         │
                                                └─────────┘
```

And those working on the `more_6` feature branch should see something that resembles this diagram.

```text
                                                               origin/master
                                                                  master       HEAD -> more_6
                                                                     │               │
                                                                     │               │
                                                                     │               │
                                                                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │─────│ df3501f │
│         │     │         │     │         │─┐   │         │   ┌─│         │     │         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘     └─────────┘
                                            │                 │
                                            │   ┌─────────┐   │
                                            │   │         │   │
                                            └───│ a7c7c3f │───┘    
                                                │         │
                                                └─────────┘
```

Assuming your staging area is clean, those who worked on the `less_5` feature branch, checkout the local `master` branch.

```shell
git checkout master
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `less_5` feature branch should see something that resembles this diagram.

```text
                                                               origin/master
                                                               HEAD -> master      less_5
                                                                     │               │
                                                                     │               │
                                                                     │               │
                                                                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │─────│ a1dc585 │
│         │     │         │     │         │─┐   │         │   ┌─│         │     │         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘     └─────────┘
                                            │                 │
                                            │   ┌─────────┐   │
                                            │   │         │   │
                                            └───│ a7c7c3f │───┘    
                                                │         │
                                                └─────────┘
```

Pull down any new commits from the central `origin/master` branch to the local `master` branch. There should be no commits, but this is the habit you'll want to form.

```shell
git pull
```

Checkout the `less_5` feature branch.

```shell
git checkout less_5
```

Rebase the current `less_5` feature branch with the `master` branch. Remember, a rebase, in this case, performs the following steps.

1. All the new commits on the current `less_5` branch are saved to a temporary area.
1. The `less_5` branch is reset to the same base commit as the `master` branch.
1. The changes from the saved commits are reapplied to the rebased `less_5` branch, creating new commits.
1. The original saved commits are deleted.

In this case, the `less_5` branch should be up to date with the `master` branch, but, again, you'll want to form this habit.

```shell
git rebase master
```

Checkout the `master` branch once again.

```shell
git checkout master
```

Merge the commits from the `less_5` feature branch into the current `master` branch. Because the `less_5` branch is directly ahead of the `master` branch, Git performs a fast-forward merge.

```shell
git merge less_5
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `less_5` feature branch should see something that resembles this diagram.

```text
                                                                               HEAD -> master
                                                               origin/master       less_5
                                                                     │               │
                                                                     │               │
                                                                     │               │
                                                                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │─────│ a1dc585 │
│         │     │         │     │         │─┐   │         │   ┌─│         │     │         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘     └─────────┘
                                            │                 │
                                            │   ┌─────────┐   │
                                            │   │         │   │
                                            └───│ a7c7c3f │───┘    
                                                │         │
                                                └─────────┘
```

And push the local `master` branch to the central `origin/master` branch.

```shell
git push
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `less_5` feature branch should see something that resembles this diagram.

```text
                                                                               origin/master
                                                                               HEAD -> master
                                                                                  less_5
                                                                                     │
                                                                                     │
                                                                                     │
                                                                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │─────│ a1dc585 │
│         │     │         │     │         │─┐   │         │   ┌─│         │     │         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘     └─────────┘
                                            │                 │
                                            │   ┌─────────┐   │
                                            │   │         │   │
                                            └───│ a7c7c3f │───┘    
                                                │         │
                                                └─────────┘
```

Finally, delete your `less_5` feature branch.

```shell
git branch -d less_5
```

Assuming your staging area is clean, those who worked on the `more_6` feature branch, checkout the local `master` branch.

```shell
git checkout master
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `more_6` feature branch should see something that resembles this diagram.

```text
                                                               origin/master
                                                                  master       HEAD -> more_6
                                                                     │               │
                                                                     │               │
                                                                     │               │
                                                                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │─────│ b070eef │
│         │     │         │     │         │─┐   │         │   ┌─│         │     │         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘     └─────────┘
                                            │                 │
                                            │   ┌─────────┐   │
                                            │   │         │   │
                                            └───│ a7c7c3f │───┘    
                                                │         │
                                                └─────────┘
```

Pull down any new commits from the central `origin/master` branch to the local `master` branch. There should be one commit pulled down.

```shell
git pull
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `more_6` feature branch should see something that resembles this diagram.

```text
                                                                               origin/master
                                                                               HEAD -> master       
                                                                                     │
                                                                                     │
                                                                                     │
                                                                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │─────│ a1dc585 │
│         │     │         │     │         │─┐   │         │   ┌─│         │─┐   │         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘ │   └─────────┘
                                            │                 │             │
                                            │   ┌─────────┐   │             │   ┌─────────┐
                                            │   │         │   │             │   │         │
                                            └───│ a7c7c3f │───┘             └───│ b070eef │    
                                                │         │                     │         │
                                                └─────────┘                     └─────────┘
                                                                                     ▲
                                                                                     │
                                                                                     │
                                                                                     │
                                                                                  more_6
```

Checkout the `more_6` feature branch.

```shell
git checkout more_6
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `more_6` feature branch should see something that resembles this diagram.

```text
                                                                               origin/master
                                                                                  master       
                                                                                     │
                                                                                     │
                                                                                     │
                                                                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │─────│ a1dc585 │
│         │     │         │     │         │─┐   │         │   ┌─│         │─┐   │         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘ │   └─────────┘
                                            │                 │             │
                                            │   ┌─────────┐   │             │   ┌─────────┐
                                            │   │         │   │             │   │         │
                                            └───│ a7c7c3f │───┘             └───│ b070eef │    
                                                │         │                     │         │
                                                └─────────┘                     └─────────┘
                                                                                     ▲
                                                                                     │
                                                                                     │
                                                                                     │
                                                                               HEAD -> more_6
```

Rebase the current `more_6` feature branch with the `master` branch. Remember, a rebase, in this case, performs the following steps.

1. All the new commits on the current `more_6` branch are saved to a temporary area.
1. The `more_6` branch is reset to the same base commit as the `master` branch.
1. The changes from the saved commits are reapplied to the rebased `more_6` branch, creating new commits.
1. The original saved commits are deleted.

```shell
git rebase master
```

And you should see something like this.

[INSERT IMAGE HERE]

This is what a merge conflict looks like while rebasing. To resolve the conflict, perform the following steps.

1. Find the conflict in the code.
1. Pick the winning code.
1. Remove all the conflict syntax.
1. Save the file.
1. Add the file.
1. And continue the rebase with `git rebase --continue`.

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `more_6` feature branch should see something that resembles this diagram.

```text
                                                                               origin/master
                                                                                  master        HEAD -> more_6
                                                                                     │               │
                                                                                     │               │
                                                                                     │               │
                                                                                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │─────│ a1dc585 │─────│ 358ea74 │
│         │     │         │     │         │─┐   │         │   ┌─│         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘     └─────────┘     └─────────┘
                                            │                 │              
                                            │   ┌─────────┐   │
                                            │   │         │   │
                                            └───│ a7c7c3f │───┘
                                                │         │
                                                └─────────┘
```

Checkout the `master` branch once again.

```shell
git checkout master
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `more_6` feature branch should see something that resembles this diagram.

```text
                                                                               origin/master
                                                                               HEAD -> master      more_6
                                                                                     │               │
                                                                                     │               │
                                                                                     │               │
                                                                                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │─────│ a1dc585 │─────│ 358ea74 │
│         │     │         │     │         │─┐   │         │   ┌─│         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘     └─────────┘     └─────────┘
                                            │                 │              
                                            │   ┌─────────┐   │
                                            │   │         │   │
                                            └───│ a7c7c3f │───┘
                                                │         │
                                                └─────────┘
```

Merge the commits from the `more_6` feature branch into the current `master` branch. Because the `more_6` branch is directly ahead of the `master` branch, Git performs a fast-forward merge** by simply moving the pointer forward.

```shell
git merge more_6
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `more_6` feature branch should see something that resembles this diagram.

```text
                                                                                               HEAD -> master
                                                                               origin/master       more_6
                                                                                     │               │
                                                                                     │               │
                                                                                     │               │
                                                                                     ▼               ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │─────│ a1dc585 │─────│ 358ea74 │
│         │     │         │     │         │─┐   │         │   ┌─│         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘     └─────────┘     └─────────┘
                                            │                 │              
                                            │   ┌─────────┐   │
                                            │   │         │   │
                                            └───│ a7c7c3f │───┘
                                                │         │
                                                └─────────┘
```

And push the local `master` branch to the central `origin/master` branch.

```shell
git push
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `more_6` feature branch should see something that resembles this diagram.

```text
                                                                                               origin/master
                                                                                               HEAD -> master
                                                                                                  more_6
                                                                                                     │
                                                                                                     │
                                                                                                     │
                                                                                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │─────│ a1dc585 │─────│ 358ea74 │
│         │     │         │     │         │─┐   │         │   ┌─│         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘     └─────────┘     └─────────┘
                                            │                 │              
                                            │   ┌─────────┐   │
                                            │   │         │   │
                                            └───│ a7c7c3f │───┘
                                                │         │
                                                └─────────┘
```

Finally, delete your `more_6` feature branch.

```shell
git branch -d more_6
```

Those who worked on the `less_5` feature branch can now synchronize their local `master` branch with the `origin/master` branch.

```shell
git pull
```

Show the commit logs of your local repository.

```shell
git log --oneline --graph --all --decorate=short
```

Those working on the `less_5` feature branch should see something that resembles this diagram.

```text
                                                                                               origin/master
                                                                                               HEAD -> master
                                                                                                  less_5
                                                                                                     │
                                                                                                     │
                                                                                                     │
                                                                                                     ▼
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│         │     │         │     │         │     │         │     │         │     │         │     │         │
│ 2e0dc92 │─────│ 4f7e591 │─────│ 8b4782c │─────│ c69fbd2 │─────│ 00131b9 │─────│ a1dc585 │─────│ 358ea74 │
│         │     │         │     │         │─┐   │         │   ┌─│         │     │         │     │         │
└─────────┘     └─────────┘     └─────────┘ │   └─────────┘   │ └─────────┘     └─────────┘     └─────────┘
                                            │                 │              
                                            │   ┌─────────┐   │
                                            │   │         │   │
                                            └───│ a7c7c3f │───┘
                                                │         │
                                                └─────────┘
```

## Resources

- [Atlassian Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
- [GitHub Help - Resolving merge conflicts after a Git rebase](https://help.github.com/articles/resolving-merge-conflicts-after-a-git-rebase)
- [Pro Git - Git Branching - Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
- [Pro Git - Git Branching - Rebasing](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)
- [StackOverflow - When should I use `git pull --rebase`?](http://stackoverflow.com/questions/2472254/when-should-i-use-git-pull-rebase/4675513#4675513)
