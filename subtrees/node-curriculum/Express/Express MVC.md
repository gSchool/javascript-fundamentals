# Model View Controller & Application Structure

This outline was the basis for [these slides](http://slides.com/tylerbettilyon/mvc). This is a WIP.

## Industrial Projects are bigger than anything we've created. Lets look at these codebases briefly on github to get a sense of scale.

  1. Wordpress Codebase

    * https://github.com/WordPress/WordPress
    * 32,000+ commits in it's lifespan
    * 20+ active branches currently
    * Nearly 500,000 lines of code
    * WordPress is notorious for having a 'spagetti' codebase

  2. iloveopensource

    * https://github.com/codio/iloveopensource
    * 255 commits
    * 2 active branches
    * 26,000 lines of code

  3. Kuma (MDN codebase)

    * https://github.com/mozilla/kuma
    * 10,000 + commits
    * 30+ active branches
    * 130+ unique contributors!!
    * 90,000+ lines of code

  4. Enterprise Fizz Buzz

  	* https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition
    * This is parody, but like the show Silicon Valley, it's too real.
    * Legacy Code gets messy
    * 2000 lines of code to do FizzBuzz
    * 2000 lines of code across like a billion files
    * 133 commits, for a *JOKE*

## In order to manage size and complexity, we create mental models.

1. No programmer has memorized all 500,000 lines of Wordpress
  * Instead we use patterns to help us identify __where__ the code is connected and __how__ those connections work.
  * Engineers place __constraints__ on themselves
  * These constraints are followed to varying degrees
  * These constraints often make any 1 task harder, but make starting new tasks easier as time goes on.

2. As the application becomes more complex, engineer productivity goes down
  * When we reach a crucial moment in low productivity, we typically need to refactor.
  * Sr. Engineers know that refactoring is a fact of life as a programmer
  * Sr. Engineers know that from scratch re-writes are nearly always a bad idea
  * Excellent teams increase times between refactoring by following good software engineering principles and by picking good mental models
  * DRY, KISS, YAGNI

3. Intro to Model View Controller
  * layer-cake metaphor, the layers are meant to complement each other and be eaten in one bite. In MVC you need one of each for a good result, and they need to be ready at the same time.
  * Models
  * Views
  * Controllers
  * "Separation of concerns"
  * Controllers and Views are tightly coupled, whereas Models are frequently shared across Controllers.
  * Rails bro

4. Intro to 'module based design' and 'micro services'
  * jelly bean metaphor, if you reach into a jelly bean jar, you can eat any one jelly bean and have a satisfactory result (unless you get buttered popcorn). Sometimes if you combine the right two jelly beans you can get a better (or at least different but still tasty), result. But any ONE jelly-bean is enough.
  * Folders are apps
  * Apps are self contained
  * Find a balance between global and app centric functionality
    * Difference between Company Branding CSS, and CSS that produces our mole picture
