# Q3 - Angular: Week 5

Group Project Week!

## "Company" standup

Let's keep it focused on _tech_ as opposed to general news.  If we can get it to under 2 minutes, it would be ideal.

## Team Standup

These happen every day.

For this week, run the standup in this format:

- Everyone _quickly_ goes around and says:
  - What you worked on the night before
  - What you plan to work on that day
  - What, if anything, you are blocked on / need help with
- _Quickly_ figure out who's working on / pairing on what

## Inception

Typically happens once at the beginning of a project or phase of a project.  The idea is to cover:

- What are the personas who will use the app?
- What are the workflows they'll go through?
- What are the concrete activities they'll do?

The output of an inception is a backlog of stories.

## Iteration Planning Meetings

The purpose of an iteration planning meeting, here at Galvanize, is to make sure that every story is assigned and prioritized and that the backlog matches reality.

## Design Meetings

These can be technical (data models / architecture), or more customer-facing (wireframes), or could even be as detailed as how apps will be structured etc...

## Agile Overview

The Values, Principles, and Practices of Extreme Programming are defined in Kent Beck's book [_Extreme Programming Explained: Embrace Change, Second Edition_](http://www.amazon.com/Extreme-Programming-Explained-Embrace-Edition/dp/0321278658). The Keynote presented in class can be found [here](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/82/introduction_to_extreme_programming.key) and PDF [here](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/81/introduction_to_extreme_programming.pdf).

The Values, Principles, and Practices are provided here for reference:

  * Values
    1. Communication
    1. Simplicity (MVP)
    1. Feedback
    1. Courage
    1. Respect
  * Principles
    1. Humanity
    1. Economics
    1. Mutual Benefit
    1. Self-similarity (copying what works)
    1. Improvement ([kaizen](http://uk.kaizen.com/about-us/definition-of-kaizen.html))
    1. Diversity
    1. Reflection
    1. Flow
    1. Redundancy
    1. Failure
    1. Quality
    1. Baby steps
    1. Accepted Responsibility
  * Practices
    1. Sit together
    1. Whole team
    1. Informative workspace
    1. Energized Work
    1. Pair Programming
    1. Stories
    1. Weekly Cycle
    1. Quarterly Cycle
    1. Slack
    1. Ten-minute build
    1. Continuous integration
    1. Test-first Programming (TDD)
    1. Incremental Design

## Objectives

- Explain the role of Pivotal Tracker in an XP workflow

## Activities

In the interest of being able to use terms like "story" and "epic" with respect to the planning process. It is good to introduce Pivotal Tracker upfront. Throughout these notes the instructor should have `https://www.pivotaltracker.com` up; begin by creating a project for the class demo.

### Stories

There are four types of story in Pivotal Tracker:

  1. Feature - This is where each unit of feature work will be kept. Stories should be written to reflect the user role involved, the justification for the feature, and acceptance criteria for the feature. The Pivotal approach advocates thinking of the story as a placeholder for conversation; make sure to document things in the story, but when something is unclear work with your team to have a conversation about it rather than just deferring to the tool or saying things like "well the story doesn't say it, so... we don't need to think about it!" Stories are a great spot for developers to communicate with project managers about evolving requirements or details that are discovered during the implementation phase.
  1. Bug - Work that was released in a previous (or current) cycle that does not behave as expected. When working on a bug the developer should first write a test that confirms the bug. More details on writing good bug reports will follow.
  1. Chore - Work that does not effect the team's velocity. This [article](http://www.agileventures.org/projects/esaas-managing-online-teams/documents/managing-chores) does a great job of explaining how to frame chores. In short, chores do not have an obvious business value, but are things that must be done. One such example is setting up a development environment; while it is necessary it doesn't contribute directly to business value.
  1. Release marker - Come in two main flavors; with a date and without a date. All release markers should be placed at the end of the work that needs to be released. Using velocity, project managers can also estimate an approximate date for release. When a date is added, as work is completed (or not), the release marker will indicate if all of the previously planned work will make the release or not. This is one way that project managers can help manage scope creep and negotiate with business owners who want to stay on mark for a date-driven release.

Stories that are related to feature work go through a few phases:

  1. Unscheduled - The work has been documented, the story has been written, but it is not currently being worked on. Work in this state is in the "Icebox".
  1. Scheduled - When a story has been pulled into an iteration plan it will be moved into the "Backlog" where it will remain until a developer picks it up to work on it.
  1. Started - Development is in process and a developer-owner of the work has been assigned/established.
  1. Finished - Generally development work has been finished, but perhaps a QA cycle needs to occur or other quality assurance measure like code review. At this point developers should deploy code to a production-like "staging" environment to make sure it works. At this point the code is merged to master upon a successful build.
  1. Delivered - This indicates that the developers/QA/anybody involved in the process before delivery to the business believes that the unit of work is deliverable and ready to be shipped to production. At this transition point a product owner may do acceptance or give the product a look in a production-like environment. In Pivotal Tracker, once "Deliver" is clicked the story will show "Accept" and "Reject" options. In some team workflows, the successful passing of the work on CI and through QA will be the trigger for a merge; it all depends on the team's workflow.
  1. Acceptance - Work is completed and quality has been deemed good enough for a production environment, now a product owner can ensure that the work satisfies the story. If a story is "rejected" the product owner should indicate why, outlining what in the story was not delivered on. A rejection should not be something like "I don't like how this looks" because there have been other steps in the process at which they should have been able to see what is going on in a staging environment. A rejection should take the form of "There is a bug here: [bug details]" or "This behavior does not meet XYZ acceptance criteria."

When a story has been accepted it means that it is ready for production and should be shipped as soon as the project allows.

Stories can have "labels" associated with them which is a powerful way to indicate things about the story for the purpose of later reporting. Epics will automatically create labels that allow you to track how many stories from a given epic are completed in a given iteration.

#### Handling Technical Debt

Technical debt, regardless of who wrote it, should be reflected in a lower velocity. In the case of attacking technical debt, the team should use Chores to indicate that a cleanup is occurring.

Technical debt as such so that the team can understand at the end of each cycle how much time is devoted to working on broken code from the past, as opposed to new feature work for the future. If a team sees that it is technical debt heavy they may decide, in conjunction with management, to devote 1 iteration of every 8 to being purely technical debt or similar. With the requisite data it is much easier to show non-technical managers that there is a compelling case to adjust the team's workload to better address those issues.

### Epics

An epic is simply a grouping of stories. Another way to think about an epic is that while a story is a single, deliverable unit of work, an epic encapsulates the overall goal that each of those stories (units) is building towards. To draw an analogy to software an epic is like the system itself, whereas a story may be a single unit (class) of the system. Epics can be an effective way to manage things like versioning; the same functionality may be broken into multiple, versioned epics.

## Objectives

- Explain what an XP cycle looks like from inception to weekly commitments (pre-IPM, IPM, Retro)
- Compare and contrast an XP planning cycle and a Waterfall planning cycle
- Identify how to break down a requirement into user roles, features, and stories
- Explain what a week of project work looks like

## Activities

In this course we have been focused on using XP as interpreted by Pivotal Labs. In the interest of keeping with that theme, we will present a workflow that is very similar to what Pivotal Labs uses. Since this course is provided on a shorter cycle than a team would normally work on, we will omit certain parts of the cycle and try to fill them in other parts of the cycle. Notes regarding what we will omit will follow this section.

### Inception

During an inception developers, business owners, product owners, and project managers work together to capture the dream product that the business is trying to build. It is important for the people working on the day-to-day progress of the project (developers, product owners, project managers) to understand what the business' *dream* product is, while coaching the business to use XP values in the delivery of this product.

In particular, during the inception phase, the business should be presenting the "pie in the sky" product while understanding that by using MVP and gathering quick feedback, they can better inform decisions about whether the "pie in the sky" product is really where they will end up. This is also a great time for engineers to raise any big picture concerns. At this point in the process it is all about discovery and having a very high-level understanding of what the business wants.

Pivotal's view on this can be found [here](https://blog.pivotal.io/labs/labs/agile-inception_knowing-what-to-build-and-where-to-start).

#### Step 1: Inception Goals

The specific goals of the Development Inception are to:

  1. Ensure the entire team understands the product goals.
  2. Understand the technical requirements and platforms.
  4. Identify user groups and proposed user flows.
  5. Review any previous work the team has done, including wireframes and research.
  6. Create a roadmap for next steps and populate a Pivotal Tacker project with actionable stories.

_source_: [Pivotal Labs](http://cargocollective.com/pivotallabs/No-7-Dev-Inception)

#### How it actually works

An inception should begin with deriving the following things:

  1. Goals - What are the business goals of this product/project?
  1. Anti-goals - What stands in the way of achieveing the goals?
  1. Risks - What puts this project at risk of failure? There are three areas of risk to focus on:
    1. Business risks - Is there a market for this product? Is there a contender who may take this line of business out of the picture?
    1. Technical risks - Does the project integrate with a third-party system? Is there a piece of technology trying to be developed that is novel/unique/creates uncertainty about its possibility of existing? Are there new libraries/languages/technologies being used that the team has little or no experience with?
    1. Schedule risks - Is there another team on which some of the work relies? Is there a hard date for release, for example, due to a hard deadline?

During each phase (Goals, Anti-goals, Risks) each participant should be writing on note cards that the facilitator gathers at the end of each section and then uses to derive common themes that the team can document and refer to throughout the project. The project manager should be in charge of mantaining the goals, anti-goals, and risks with the project. A good place to store these may be in the Epic for the associated work (in Pivotal Tracker).

#### Step 2: Roles, Workflows and Activities

Roles are the different types of users in a system. Workflows describe top level behaviors in that system. Activities are the different things that users can actually do, another way to think of this is that activities are composed into workflows. Suppose you were building an early version of Amazon; the goal is to build an online bookstore in which guest users can peruse offerings, registered users can make purchases and administrators can complete order fulfillment. In the initial phase roles for this project may be guest users, registered users, and administrators.

For example, the role of a registered user in our Amazon-like system is to purchase books. To see some contrast, the role of our guest user may be just to view books and not so much to purchase them. Looking at some activities of a registered user; one such is buying books, another may be storing favorites for future purchases. Meanwhile, for a guest user, the main activities may be to view books and to register as a user (at which point their persona changes).

Activities are what the roles can _do_. Statements of activities should include the role in them to take the form of "As a guest user, I would like to view an individual book" or "As a guest user, I would like to search for a book before registering".

But what does a workflow look like? In the example of Amazon a workflow could be: a user visits the site, registers, then finds a book and buys it. Another example would be an existing user visits a direct link to a book on the site, authenticates, is taken back to the book, adds it to their cart, and then is able to complete the purchase via the checkout flow. Each workflow is just a composition of smaller activities a user can do.

#### Step 3: Story Outline

Storying outlining involves taking each of the activities defined in the previous process and figuring out what components of that story are required. For instance, one of the activities defined above was that a guest user can register for the system. What are some of the pieces of guest registration? A few immediate ones come to mind:

  1. Links to a registration form from within site navigation
  1. A registration form
  1. A welcome email
  1. An email confirmation/human validation step
  1. Persistence of the user may be subject to regulatory concerns; what are those concerns and what work is required for them to be met?
  1. Behavior around what the user is (or isn't) able to do until their email has been confirmed.

#### Step 4: Estimation

After creating the story outline, prioritize each story as "High" (H), "Medium" (M), or "Low" (L). As you are doing this process, begin to weight the stories as well (described below). The goal is that the stories end up granular enough to be put in to Tracker directly, but that may not be possible at the time of inception. If the stories need to be coarse, it is something to consider when applying weights.

There are many ways of weighting stories, but for the purpose of this course we will use a 4-point scale (0,1,2,3). Here is a suggested interpretation of these weights:
  <ol start="0">
    <li>Very rare in the real world. A good example of a 0 point story is correcting a spelling error in a piece of text that is untested.</li>
    <li>Requirements are well formed and well understood, but story has some more significant work to it.</li>
    <li>Requirements are 50%-80% formed, that is, there are unknowns but they are not significant unknowns. Work is understood, but difficult, challenging, or uses unfamiliar technologies.</li>
    <li>Either: significant requirements are missing, or the story contains too large of a unit of work and can be broken down into multiple stories (deliverable units of work).</li>
  </ol>

In general, a team will not ever work on a three point story unless it is well-formed, requirements are clear, and it is just acknowledged to be a single unit of deliverable work, but of substantial difficulty. The goal should be to never work on a three point story; stories should be one or two points.

#### Step 5: Prioritization

Prioritization is an activity that will often be performed by Project Managers in conjunction with Product Owners. It is still important for developers to be a part of this workflow though, as shifts in priority may effect estimates. Items that are of highest priority should come before items of lower priority. Slack in scheduling is an important part of XP, so it might be a good idea to mix in a few medium or low priority items each week that are not strongly committed to and will not be of concern if they drop out of the current workflow.

Priorities may shift in a project, it is important for the Project Manager and Product Owner to communicate this with the developers and work together to make sure that the work in Current, Backlog, and Icebox best reflect this prioritization.

### Pre-IPM

An IPM, or Iteration Planning Meeting, is the time where a team looks at what it will work on in the upcoming cycle. In a pre-IPM, team leaders meet with the Project Manager and Product Owner to ensure that the work coming up in the backlog is ready to be worked on; that is, does each story contain sufficient detail and acceptance criteria such that a developer could pick it up and start working on it? In a small team setting, the entire team would attend the pre-IPM, but generally in a larger team setting only a team lead would attend these sessions. This session is lead by the Project Manager.

### IPM

The IPM (Iteration Planning Meeting) is where the entire team reviews the work for the upcoming iteration. This meeting will be run by the Project Manager and serves as a checkpoint to make sure that the most important things are at the top of the Backlog. This meeting is where the real Agile

First, begin by briefly going over work completed in the last iteration and any items that are still in flight as they impact what can be committed to in the upcoming iteration. [INVEST](https://en.wikipedia.org/wiki/INVEST_(mnemonic)) is a good way for PMs and developers alike to think about the work in a given iteration. The IPM is the last chance to make sure that the work is clear before the commitment is made; stories in a given iteration should not be changing in significant ways.

Go over each story for the iteration in detail reviewing any additional information like design comps, wireframes or other documents that inform how the system should behave. Additionally, make sure that it is clear from each story what constitutes the work being ***done***. One way to do this is by making sure that each story has a concrete list of Acceptance Criteria that the accepter down the line will use to make sure the delivered functionality meets the requested functionality.

During this meeting, Developers and the Project Manager may determine that a piece of work is "blocked" by an unmet dependency and one of two things should happen:

  1. If it is possible to meet the dependency within the iteration and still have sufficient time to work on the story, label it as blocked and include a comment on what will make it be unblocked. Assign the owner as the person who will follow up and unblock the work.
  1. If the story cannot be unblocked in the iteration, add a blocked label and move to either the backlog or, even better, the Icebox. Communicate with the business owner (using the Tracker story and an @-mention) why the work is blocked and what it will require to unblock it. It's also worth mentioning that because of the block it likely will not be worked on during the current iteration. Be clear and honest in this communication; it's a whole team effort to deliver a high-quality product.

Another concern in this iteration will be team strength; make sure before the meeting is out to ask the team if anybody will be on paid time off or otherwise absent during the iteration. While taking vacation is healthy and good for the team, it requires that the team adjust the "Team Strength" value in Tracker so that output can be accurately measured with respect to the consistency of velocity and that the team can adjust accordingly with respect to pair rotations. One way to accurately compute team strength is to take the number of working hours in the day and divide out the missing time. The formula for this looks like:

```
Team Strength Percentage = 100*(1 - (Missing Developer Hours / Total Developer Hours))
```

For instance, if nobody has time off during the iteration, team strength is 100%, whereas if everybody has off it is 0%.

This [article](https://blog.pivotal.io/labs/labs/running-an-ipm) from Pivotal Labs does a good job of highlighting the important parts of an IPM.

### Retrospective

At the end of each iteration, the team should complete a retrospective to discuss how the iteration went. The three areas of interest are:

  1. Smiley - Things that went well this iteration or improved from another iteration. These are practices the team wants to keep doing.
  1. Meh - Things that were neither good nor bad, or that the team is indifferent towards. You could decide to "give this thing another chance" or, potentially, experiment with a new technique to see if it can get into the Smiley column.
  1. Frowney - Things that did not go well in this iteration or require a behavior modification from the team. This is not designed to complain about an individual member of the team, but instead to focus on potential areas of improvement for the team.

If the team is looking to change anything from the previous iteration into the next, create a list of "Action Items" and assign each an owner. These can be entered into Tracker as Chores with a label like "retrospective AI".

To facilitate a retro, hand out a pen/marker and pad of sticky notes to each member of the team and have them work individually on Smiley/Meh/Frowney points (note: some teams may use "Questions" as opposed to "Meh" in their retrospectives). Ensure that the team is focusing on the iteration that just occurred. It may be helpful to project Pivotal Tracker during this session in case people forget what happened in a given iteration.

On a central whiteboard create three columns corresponding to the areas of interest listed above. Each team member should come up to the board and place their sticky notes in the appropriate column.

Finally, the PM should work across the board looking for themes in the sticky notes and grouping them into those themes (where appropriate). Review should go in order of "Smiley -> Meh -> Frowney" and then repeat until all items have been addressed. The PM should make sure that the conversation stays focused, direct, and does not become a complaint session but is instead focused on the ways in which the team can repair its process via Action Items and committing to new experiments or behavior changes.

A suggested set of timings for these activities in a one-hour retrospective is 25 minutes of Brainstorming, 5 minutes of grouping and 30 minutes of reviewing and generating action items.
