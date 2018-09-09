# Form Basics

## Learning Objectives

By the end of this lesson, you will be able to:

* Forms are valid and includes labels with inputs, ids, and names

## Building your first form

To write a form you, unsurprisingly, use a `form` element!

```html
<form></form>
```

You will typically want to submit a form, which means you need a submit button. There are two types of submit buttons:

```html
<input type="submit" value="Submit">
<button type="submit">Submit</button>
```

Both above the above work just fine! Your submit button will have to be inside a form for the form to be submitted.

```html
<form>
  <button type="submit">Submit</button>
</form>
```

Right now though, there's nothing inside this form. Most forms allow you to enter in some information about yourself. The element we will typically use is the `input` element.

```html
<form>
  <input type="text" name="first" value="" placeholder="Put your first name here...">
  <input type="text" name="last" value="" placeholder="Put your last name here...">
  <button type="submit">Submit</button>
</form>
```

There are many different [types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) of inputs you can use to make it easier for your users to interact with your form.

There are also a few attributes up above that are crucial for writing forms:

* **name**: This is the name of the particular input which will be used when form data is actually submitted. This attribute is very important but we won't use it until later in the course.
* **value**: This is the current value of the input. For example, if we put `value="Galvanize"` in one of the above inputs when the page is loaded the text "Galvanize" would appear inside it.
* **placeholder**: This is just what it sounds like. The text will be grey to start and will disappear as soon as someone starts typing in it.

It's helpful for us to label our inputs to make sure the form is easy to read. It also helps out people using screen readers or working with different kinds of devices. There are two ways you can use labels:

```html
<label>
  Album
  <input type="text" name="album">
</label>
```

```html
<label for="album">Album</label>
<input id="album" type="text" name="album">
```

A neat effect of correctly implementing labels is that when you click on the label text, the text box will be select for the user!

## Challenges

<!-- Question -->

### !challenge

* type: project
* id: d6a1f901-b9d0-4a75-bd8e-33e255873a73
* title: Basic Forms

##### !question

### Basic Forms

* [JSFiddle](https://jsfiddle.net/gh/get/library/pure/gSchool/g67_fiddles/tree/master/basic-forms)

1. Go to the above JSFiddle and fill in the form with the described tags.
1. **Make sure you are logged in!** Once you've finished, hit "Save" and paste the new URL below.

##### !end-question

##### !placeholder

https://jsfiddle.net/<username>/<fiddle-id>

##### !end-placeholder

### !end-challenge
