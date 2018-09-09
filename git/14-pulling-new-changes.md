# Pulling New Changes

Forking is a great process for having your own version of code to work on. You can hack away at someone else's project and make it your own. However, you will sometimes want to pull down changes from the original repository to keep your version as up to date as possible.

Take a look at any local git repository you've both forked and cloned. Run the following command to see all of your git remotes:

```bash
git remote -v
```

Notice that your `origin` points towards your GitHub repository, _not_ the original repository. We can connect these new repositories by adding a new origin pointing towards the original repository.

For example, let's say our original repository was created by **Alan**. **Betty** has forked and cloned that repository. **Betty** has added a few commits on her own version of the repository but then sees that **Alan** has added a new commit on his original repository. **Betty** would then add Alan's latest version through something like:

```bash
git remote add upstream https://github.com/alan/alans-repo
```

She can now `fetch`, `merge`, and `pull` from the upstream remote instead of origin. For example:

```bash
git pull upstream master
```

## Challenges

<!-- Question -->

### !challenge

* type: project
* id: 86ae4450-b3cf-11e8-9c80-3f50f0d4f65c
* title: Pulling New Changes

##### !question

### Forking a Repository

Work with your partner from the last exercise. Have them make a change _to their repository_, commit, and push up _their_ changes to their original repository. Add _their_ repository as a new remote called `upstream` and pull the changes from _their_ remote. Make another change _on your own repository_, and then push up those changes to _your_ version of the repository. Paste the URL of _your_ forked repository below.

##### !end-question

##### !placeholder

https://github.com/<username>/<repository-name>

##### !end-placeholder

### !end-challenge
