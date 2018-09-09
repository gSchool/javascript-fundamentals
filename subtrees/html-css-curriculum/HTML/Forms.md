# Complex Forms

## Learning Objectives

By the end of this lesson, you will be able to:

* Explain what a web form is.
* Explain what control tags are.
* Build a web form with various controls tags.
* Checkboxes and radio buttons are grouped and labeled

## What's a web form?

We built a simple form but there is so much more we can do with forms.

If you've ever given your credit card information to a website, performed a search on Google, or logged into Facebook then you've used a web form. **Web forms** (or just forms) are the main way of getting information from your user into your application. Sometimes this information never leaves the browser and sometimes it's sent to a web server.

At it's core, Google's search page is a simple web form with one input and two buttons.

![](http://i.imgur.com/hcP92bJ.png)

With a little code, we can easily recreate their form.

```html
<form>
	<input type="text">

	<div>
		<button>Google Search</button>
		<button>I'm Feeling Lucky</button>
	</div>
</form>
```

Like all forms, this one contains a few control tags.

## What's a control tag?

The following HTML tags are **control tags**—tags that build elements which a user can control to give information.

- `<input>`
- `<select>`
- `<textarea>`
- `<button>`

Before the rise of JavaScript, control tags were always nested within a `<form>` tag. That's because control tags have a predefined behavior when nested inside of a `<form>` tag. Nowadays, the `<form>` element isn't needed anymore. Fortunately for you, we'll be teaching you both techniques.

## The `<input>` tag

There are [many ways](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) the `<input>` control tag can be used. But the most common (and default) way is as a single-line text field.

```html
<input type="text">
```

Remember when we talked about semantic HTML? We also have semantic `<input>` types that help describe the nature of the input. Aside from `type="text"`, there's also the following textual controls.

```html
<input type="email">
<input type="search">
<input type="password">
<input type="tel">
<input type="url">
```

These control types provides some basic input validation, data formatting, and/or special keyboard types on mobile.

Additionally, there are the following non-textual controls.

```html
<input type="color">
<input type="date">
<input type="file">
<input type="number">
<input type="range">
```

### Radios and Checkboxes

The `<input>` control also has a `radio` and `checkbox` type for displaying both radio buttons and checkboxes respectively. Both of these types allow the user to select options from a set of choices. The key difference is that radio buttons only allow one choice.

```html
<input type="radio" name="rappers" value="Biggie"> Biggie
<input type="radio" name="rappers" value="Dre"> Dre
<input type="radio" name="rappers" value="Snoop" checked> Snoop
```

As you can see, each radio button must belong to a **group** which is defined by setting the `name` attribute to the same value. This forces one radio button to be selected per group.

On the other hand, checkboxes use `type="checkbox"` and its `name` must be different per `<input>` control.

```html
<input type="checkbox" name="rapper1" value="Ice Cube"> Ice Cube
<input type="checkbox" name="rapper2" value="Kanye" checked> Kanye
<input type="checkbox" name="rapper3" value="Eminem"> Eminem
```

### Hidden fields

Hidden fields are as described -- hidden. There is no visual for the user to see. These have been quite useful in passing data in through the form that the user does not need to enter specifically (e.g. An item ID).

```html
<input type="hidden" name="secret" value="Tupac is alive">
```

## The `<label>` tag

Each control tag will usually have some sort of caption that instructs the user on what type of input to give. For example, next to a text box with a caption "Name", you are then expected to type your name in. We use the `<label>` element to specify the text that describes the expected input. For example:

```html
<label>
	Album
  <input type="text" name="album">
</label>
```

You can also connect a `<label>` tag to an `<input>` tag with the `for` and `id` attributes respectively.

```html
<label for="album">Album</label>
<input id="album" type="text" name="album">
```

## The `<select>` tag

You can create select boxes that allow the user to choose from a set of options. You have the ability to allow users to select multiple options by using the `multiple` attribute.

```html
<!-- The second option will be initially selected. -->
<select name="vh1_show">
  <option value="basketball_wives_la">Basketball Wives LA</option>
  <option value="get_rich_or_die_tryin" selected>Get Rich or Die Tryin'</option>
  <option value="black_ink_crew">Black Ink Crew</option>
</select>
```

Multiple choice select boxes.

```html
<!-- The second and third option will be initially selected. -->
<select name="vh1_show" multiple>
  <option value="the_jame_foxx_show">The Jamie Foxx Show</option>
  <option value="fresh_prince_of_bel_air" selected>Fresh Prince of Bel-Air</option>
  <option value="love_and_hip_hop_atlanta">Love and Hip Hop Atlanta</option>
</select>
```

## Buttons

We've seen plenty of buttons before, but let's dig a little bit deeper.

```html
<button name="button">Belly</button>
```

Buttons contain a `type` attribute with three options.

* `button` (default)
* `submit` (default when in a form)
* `reset`

```html
<button type="button">This an anonymous button</button>
<button type="submit">This a submit button</button>
<button type="reset">This a reset button</button>
```

## Assignment

There are more challenges in [this repository](https://github.com/gSchool/html-forms) where you can experiment with the basic control tags. Knowing what types of inputs are available is essential to designing a form that is simple and easy to use. When you encounter a new type ask yourself "what would I use this for?"

## Common Attributes

With control tags, there are a variety of attributes available. Many attributes vary by tag and some are nonstandard but highly recommended. Take a look at [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) and let's discuss.

- autocapitalize
- autocomplete
- autofocus
- checked
- disabled
- maxlength
- minlength
- multiple
- name
- placeholder
- pattern
- required
- readonly
- size
- spellcheck
- tabindex
- value

## Styling Forms with CSS Frameworks

- [Bootstrap Forms](http://getbootstrap.com/css/#forms)
- [Materialize Forms](http://materializecss.com/forms.html)

## Additional Resources on Forms

- https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/My_first_HTML_form
- https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input
- http://diveintohtml5.info/forms.html
- http://www.wufoo.com/html5/
- http://morgancarter.com.au/design-solutions/which-input-when

Some more complex form elements, such as checkboxes and radio buttons, require you to tie the items together in some way. Building forms with lots of elements can get confusing, but remember that it's just HTML. You can use non-form elements inside of forms such as `div` elements. There's also the [fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) element which allows you to group several control elements and labels in a form in a more semantic way.

## Slides

* [Slides](https://docs.google.com/presentation/d/1BeonEGxHl0uQUWQJc_1XJFKS794T4zZnJAIUUoUBy4M/edit#slide=id.p)

## Challenges

<!-- Question -->

### !challenge

* type: project
* id: 79225f59-643c-4047-ae2e-73b1424327f5
* title: Checkboxes & Radio Buttons

##### !question

### Checkboxes & Radio Buttons

* [JSFiddle](https://jsfiddle.net/gh/get/library/pure/gSchool/g67_fiddles/tree/master/checkboxes-and-radio-buttons)

1. Go to the above JSFiddle and fix the errors in the form.
1. **Make sure you are logged in!** Once you've finished, hit "Save" and paste the new URL below.

##### !end-question

##### !placeholder

https://jsfiddle.net/<username>/<fiddle-id>

##### !end-placeholder

### !end-challenge
