# Exercise

This exercise will require you to use what you've learned from the previous lessons.

## Questions

<!-- Question -->

### !challenge

* type: short-answer
* id: 26aedfb0-b3d9-11e8-89b8-f32133e66ea3
* title: CSS Exercise A

### !question

Given the following CSS, what is the computed background color for elements with the `.post` class?

```css
.post {
  background: green;
}

.post {
  background: black;
}
```

### !end-question

### !answer

black

### !end-answer

### !explanation

Correct! Since the second rule came last, it will take precedence over the `green` background.

### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: 26aedfb1-b3d9-11e8-89b8-f32133e66ea3
* title: CSS Exercise B

### !question

Given the following markup and CSS, what is the computed background color?

```css
.btn.btn-primary {
  background: blue;
}

.btn {
  background: grey;
}
```

```html
<button class="btn btn-primary">
    Button!
</button>
```

### !end-question

### !answer

blue

### !end-answer

### !explanation

Congrats! This one is tricky. Even though the `blue` background came first, it holds more weight because there are two classes instead of one.

### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: 26aedfb2-b3d9-11e8-89b8-f32133e66ea3
* title: CSS Exercise C

### !question

Provide a CSS selector that styles the unordered list items inside of `.unicorn`:

```html
  <html>
    <body>
      <div class="unicorn">
        <ul>
          <li>Hello There</li>
          <li>Friends!</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Hi There</li>
          <li>Friendzies!</li>
        </ul>
      </div>
    </body>
  </html>
```

### !end-question

### !answer

/(\.unicorn li|div\.unicorn li|\.unicorn ul li|div\.unicorn ul li)/

### !end-answer

### !explanation

Great! There are several answers to this depending on how many elements you include. Generally, use as few as possible so they are easier to override later. Preferred answer would be `.unicorn li`.

### !end-explanation

### !end-challenge

<!-- Question -->

### !challenge

* type: short-answer
* id: 26aedfb3-b3d9-11e8-89b8-f32133e66ea3
* title: CSS Exercise D

### !question

Provide a CSS selector that styles the list items using group selectors for `people` and `colors`:

```html
  <html>
    <body>
      <div class="people">
        <ul>
          <li>George</li>
          <li>Bart</li>
        </ul>
      </div>
      <div class="colors">
        <ul>
          <li>Orange</li>
          <li>Green</li>
        </ul>
      </div>
    </body>
  </html>
```

### !end-question

### !answer

/(\.people li, \.colors li|div\.people li, div\.colors li)/

### !end-answer

### !explanation

Excellent! We can group multiple selectors together using a comma. This may happen when two items look very similar but share one or more differences that can be overridden with another rule set. Preferred answer would be `.people li, .colors li`. We don't need to include the `div` selector unless we are trying to override a prior style.

### !end-explanation

### !end-challenge
