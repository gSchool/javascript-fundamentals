# Deploying Static Sites w/ Firebase
========================

##Objectives
* Describe the differences between a static and dynamic web site.
* Use Firebase Command Line Tools to deploy web sites

##Content

###Static vs Dynamic

Static sites are defined as web sites served using fixed, static assets. The HTML, CSS, JavaScript, images, and the rest of the browser resources used to store the site can safely be cached, saved, etc. There is no dynamic function needed to create those assets.

On the other hand, a dynamic site may have assets that have been generated on a server. This could involve a server side language or database.

Static sites are often faster for browsers to load because all parts of the site can safely be cached and reused for future requests.

### Firebase

Firebase is a web host and api service for the creation of real-time applications. They have a series of command line tools and apis to integrate with common, real-time application environments such as Javascript in the Browser (Angular), iOS, and Android.

We are using Firebase because it is simple to set up a deploy a new site.

#### One-time setup

Sign up for a free Firebase account at [their website](https://www.firebase.com/login/). Note that if you don't have a google account, you can still sign up by clicking the link below the sign-in box.

Then install the Firebase Command Line tools by running `npm install -g firebase-tools`

> Note if Node.js is not installed, you'll need to do that first by running `brew install node`

After the command line tools are installed, you'll need to authorize your computer to have access to your Firebase account. Do this by running `firebase login`, which will open an authorization link in your browser. Click the link and you're good to go.

#### App Setup

First create a new app instance on Firebase via their account manager. (Note that you should be able to create a new app instance using the command line tools but this was not working at time of writing.) Then, in your terminal, `cd` to the directory of the static site you'd like to connect to the app instance. Once there, run `firebase init`. Following the prompts will create a `firebase.json` file in the current directory that is used by the firebase command line tools to connect the current project directory with the application instance on Firebase.

#### App Deployment

Now the only thing you need to do any time you want to deploy changes to your website is `cd` into your app's directory and run `firebase deploy`. It's that simple. Now you can share your newest creation with the world.

#### Resources

- [Firebase Hosting Docs](https://www.firebase.com/docs/hosting/)

## Slides

- [Deployment Slides](https://slides.com/dizehacioglu-1/static-deployment)
- [Deployment Slides](https://docs.google.com/presentation/d/1RSTWGJ0UB9ediyX4x5gPvK_t-7kSxcpQklMpE6AZRXE/edit?usp=sharing)

---

###Alternate Static Hosts
* [Github Pages](https://pages.github.com)
* [Amazon S3](https://aws.amazon.com/s3/)
* [Neocities](http://neocities.org/)

# Check for understandings

## Cold calling

*   What is a static site?
*   What is a dynamic site?
*   What is a deployment region?
*   Why is the deployment region setting important?

## Volunteer

*   Why are static sites faster for users?
*   Can you create a Firebase project when you run `firebase init`?
*   How long will the average user wait for your website to load?
*   You have made changes to a site that you have previously deployed, how do you push those changes to Firebase?

## Whiteboard

*   What is the command to set up a Firebase project?
*   What is the command to push a website to Firebase servers?
*   Is the iterations assignment a static or dynamic website?
*   What folder must your project files go in?
