# Deploy with Surge

## Learning Objectives

By the end of this lesson, you will be able to:

* Deploy websites with a third party service

## Resources

Now that you've tested a site, it's time to deploy it to the internet! We will be using a simple tool called [Surge](https://surge.sh/) that allows us to very easily deploy a site for free!

## Install Surge

To deploy to Surge, you'll use a command line program that's installed via [npm](https://www.npmjs.com/), the package manager for JavaScript software that comes with Node.

To get started, run the following command.

`npm install -g surge`

Once it finishes, run the following command.

`surge -V`

**TIP:** Notice the flag uses a capital `V`.

And you'll see something like this.

![](https://i.imgur.com/vRRoJau.png)

## Start a new project

If you don't have one, make a directory to hold all of your upcoming projects for the first week.

```shell
mkdir -p ~/Projects/week01
```

Then change into the directory.

```shell
cd ~/Projects/week01
```

Now make a `GITHUB-USERNAME.surge.sh` project directory replacing `GITHUB-USERNAME` with your actual GitHub username.

```shell
mkdir wcrusher.surge.sh
```

And change into the directory.

```shell
cd wcrusher.surge.sh
```

You should see something like this.

![](https://i.imgur.com/PDDFaMu.png)

Next, initialize a new Git repository in this directory.

```shell
git init
```

And you should see something like this.

![](https://i.imgur.com/p6Xw9eq.png)

As the message suggests, an empty Git repository was initialized in your working directory.

### Create a tiny web page

Now that the project's directory contains a Git repository, let's create a tiny web page.

To get started, run the following command.

```shell
touch index.html
```

Open the project directory in Atom.

```shell
atom .
```

**TIP:** The period `.` represents the current working directory.

It looks like there's a new, empty `index.html` file inside our project directory. As you can see, a Git repository's staging area becomes dirty whenever a new file is created.

![](https://i.imgur.com/5wqLRFE.png)

Go ahead and type the following HTML code into the `index.html` file and save it.

```html
<h1>Hello world</h1>
```

It should look like this when you're finished.

![](https://i.imgur.com/F26QSWr.png)

### Test your tiny web page

To test your tiny web page, you'll need to open it with your browser. An easy way to open a web page from the Terminal is to run the following command.

```shell
open index.html
```

And your default browser should open the file.

![](https://i.imgur.com/8XUgHOh.png)

### Commit your tiny web page

With your tiny web page working as expected, it's ready to be committed into your Git repository.

First, add the `index.html` file to your repository's staging area.

```shell
git add index.html
```

And then commit the changes, with a message, to your repository.

```shell
git commit -m 'Add a tiny web page'
```

![](https://i.imgur.com/QE3ks9b.png)

### Prepare your tiny web page for deployment

You're almost ready to deploy your tiny web page to Surge. However, Surge will ask you for a desired domain name each time you deploy. To prevent this, you can save your a domain name to a `CNAME` file so you don’t have to type it every time you deploy.

To add a `CNAME` file to the project directory, run the following command.

```shell
touch CNAME
```

In Git your staging area is dirty.

Back in Atom, open the `CNAME` file and type in `GITHUB-USERNAME.surge.sh` replacing `GITHUB-USERNAME` with your actual GitHub username in **lower case** form. Save the file and it should look something like this.

**TIP:** The domain name in the CNAME file must be in lower case form.

![](https://i.imgur.com/BRuK4kA.png)

Now, add the `CNAME` file to your repository's staging area.

```shell
git add CNAME
```

And then commit the changes, with a message, to your repository.

```shell
git commit -m 'Add a CNAME'
```

In Git, your staging area is clean again, which you can see with `git status`.

![](https://i.imgur.com/AMzOTd3.png)

### Deploy your tiny web page

You're finally ready to deploy your tiny web page to Surge!

To get started, run the following command.

```shell
surge
```

You'll be asked for three pieces of information.

1. An email address
1. A password
1. A project path

Since you're probably creating a new Surge account, type in your email address and a unique, secure password. Be careful when you type in a password as the characters will **not** show up on the screen for security purposes.

When asked about the project path, just press the `Enter` key to use the current working directory. When you're finished, it should look something like this.

![](https://i.imgur.com/rh2I4gE.png)

Before moving on, **save your account credentials in your password manager**.

After having written down your Surge account credentials somewhere, open your deployed tiny web page in a browser by running the following command.

```shell
open http://wcrusher.surge.sh
```

**TIP:** Don't forget to use your tiny web page's domain name.

You should see something like this.

![](https://i.imgur.com/3koEnB4.png)

Bravo! 🎉

## Challenges

<!-- Question -->

### !challenge

* type: project
* id: 95a499c3-ddea-421f-b600-c035aedb91ac
* title: Deploying with Surge

##### !question

Copy the URL of the website you deployed below!

##### !end-question

##### !placeholder

http://<your-site>.surge.sh

##### !end-placeholder

### !end-challenge
