# Intermediate CSS

[slides here](https://docs.google.com/presentation/d/1omsUSz7UPV9mf-yPNMrhA99K1shQjvcxTvHN94xvu3k/edit?usp=sharing)

Today we will be expanding on our understanding of CSS.

## Objectives

  Students should be able to:

  - Know what a CSS reset does.
  - Know what a CSS normalizer does.
  - Explain the 4 CSS positions.
  - Use an attribute selector.
  - Understand what a psuedo-class does.
  - Be able to manipulate fonts
  - Understand the different types of colors.


## CSS Resets & Normalizers

The browser has its own stylesheet (called the *user agent stylesheet*) that it tries to apply before any of your stylesheets. This is why, for example, h1 tags are bigger than paragraph text by default.

Each browser's user agent stylesheet is different. There are two popular approaches to addressing these inconsistencies:

### Normalizers

A normalizer maintains some default styling, but keeps it consistent between browsers. The most popular implementation of this is [normalize.css](https://necolas.github.io/normalize.css/).

**You Try**:

  - Copy the website you have been working on
  - Add a normalizer to the copy of your website
  - Compare the copy with the normalizer and your normal website to see if you can spot any changes

### Resets

A CSS reset removes all default styling from a browser, maintaining only the distinctions between inline and block elements. This means `<h1>` will look exactly like `<code>` or `<p>` and nothing will have any padding or margins unless you explicitly write something otherwise. The most popular CSS reset is the [Meyer reset](http://meyerweb.com/eric/tools/css/reset/).

Most projects should use one of these, but not both. It is up to you to decide whether "useful defaults" or "completely unstyled" is more useful to your project. Either way, they should be `<link>`ed to before any of your other stylesheets, so that any overrides you make will take precedence.

**You Try**:

  - Copy the website you have been working on
  - Add a CSS reset to the copy of your website
  - Compare the copy with the normalizer and your normal website to see if you can spot any changes


## CSS Positioning

CSS positions change the *flow* of a document.

* **`position: static;`**: This is the default for all elements. Normal document flow, will not accept top/right/bottom/left values.
* **`position: relative;`**: Creates a new positioning context for any `absolute`ly positioned children, and itself.
* **`position: absolute;`**: Positions relative to the nearest `relative`ly positioned parent, or the `<body>` if it doesn't have any. Absolutely positioned elements are removed from the document flow.
* **`position: fixed`**: Positions relative to the *viewport* (display area of the browser window), and is not in the document flow.

Some notes on positioned (relative, absolute, or fixed) elements:

* Margins for positioned elements are inside of their positioning contexts
* Absolutely positioned elements can be stretched with the top/right/bottom/left properties

**You Try**:

  NOTE: Only run through the linked exercise on each

  - [Relative Practice](https://www.codecademy.com/courses/advanced-css-positioning/0/4)
  - [Absolute Practice](https://www.codecademy.com/courses/advanced-css-positioning/1/3)
  - [Fixed Practice](https://www.codecademy.com/courses/advanced-css-positioning/3/2?)


## CSS Selectors

### Standard Selector Review

* `tagname`
* `.class`
* `#id`
* `several, selectors`
* `all children`
* `*` (universal)
* `+` (next sibling)
* `~` (all siblings)
* `>` (all direct children)

### Attribute Selectors

* `tag[attribute]`
* `tag[attribute="value"]`
* `tag[attribute^="starts-with-value"]`
* `tag[attribute$="ends-with-value"]`
* `tag[attribute*="contains-value"]`

**You Try**:

- Go to codepen.io and create a new pen
- create a selector for the following html that hides checked input.

```html
<input type="checkbox"> I am unchecked
<input type="checkbox" checked> I am checked
<input type="checkbox"> I am unchecked
```

### Pseudo Classes

#### Link-based

* `:link`
* `:visited`
* `:hover`
* `:active`

**You Try**:

  - On codepen.io create a button
  - Add a link-based psuedo-class that changes the background on hover.

#### Text-based

* `:first-line`
* `:first-letter`
* `:before {content: "..."}`
* `:after {content: "..."}`

**You Try**:

  - On codepen.io
  - Create a paragraph element and fill it with dummy text.
  - Add a style using :first-letter to make the first letter capital, bold and massive

#### Interaction-based

* `:focus`
* `::selection`

#### Other

* `:not(.other-selector)`

**You Try**:

  - On codepen.io create a div with the class `foo`
  - create another div with the classes `foo` and `bar`.
  - Create a style using `not` that changes the background of the `foo` div that doesn't have the class `bar`

#### Child Selectors

* `:first-child`
* `:last-child`
* `:nth-child(odd | even | 3 | 3n + 4 ← start counting at fourth)`
* `:first-of-type`
* `:last-of-type`
* `:nth-of-type(odd | even | 3 | 3n + 4)`

**You Try**:

- On codepen.io create a list with 5 items
- Use `:first-child` to bold the first list item.

## More Box Model

* The box model consists of content > padding > border > margin
* All box-model percentages calculate based on the width of the containing element
* If margins collide, it only uses the larger of the two (“collapsing” them)
  - This does not apply to: inline-block, floated, absolute elements, elements who's overflow is not visible, cleared elements, the root element.
* Negative margins remove space
* Box model applies to block and inline-block elements (only horizontal for inline-block)
* border: width style color
* solid | dotted | dashed | double | groove | ridge | inset | outset | none | hidden
* border-radius: top-left top-right bottom-right bottom-left
* Can do height / width for elliptical shape
* box-shadow: h-offset v-offset radius spread color
* box-sizing: content-box | padding-box | border-box (what do h/w refer to)
* overflow: visible | scroll | auto | hidden
* min-height max-height
* Don’t set height for text areas. Set rows and use height: auto.

## Fonts

```css
@font-face {
	font-family: “...”;
	src: url(...);
	src: url(...) format(“woff”),
		url(...) format(“svg”);
	font-weight: normal;
	font-style: normal;
}
```

* strong and em use bold and italic style/weight

### Font properties

* `font-family`
* `font-style: normal | italic`
* `font-weight: normal | bold | 100-900`
* `font-variant: small-caps`
* `font-size: px | em | rem | %`
* `font: style variant weight size/line-height font-family`

* `text-transform: uppercase | lowercase | none`
* `text-shadow: right down blue color`
* `text-align: left | right | justify | center`
* `text-indent: 5rem (first line)`

* `line-height`
* `letter-spacing`
* `word-spacing`

**You Try**:

  - On codepen.io add a paragraph filled with [dummy content](http://lipsum.com/)
  - Add a style that sets the font to helvetica, size 500, lowercase justified.

## Lists

* `list-style-type: disc | circle | square | none | decimal | decimal-leading-zero | upper-alpha | upper-roman | lower-alpha | lower-roman`
* `list-style-position: inside | outside`
* `list-style-image: url(...)`

**You Try**:

  - On codepen.io create a list of 5 items
  - try both of the list-style-positions
  - change the style type to none.

## Colors

* Hexadecimal / Hex `#FFBBCC`
  - Short for hexadecimal, a base 16 number system. A hexadecimal character is represented with 0-9 and A-F (A=10,F = 16).
  - A hexadecimal color is composed of three bytes.
  - Each byte is represented by two hexadecimal characters.
  - The first byte `FF` is the red value
  - The second byte `BB` is the green value
  - The third byte `CC` is the blue value
  - 0 For all values is black
  - F for all values is white

* RGB & RGBA `rgb(255, 0, 0)`,`rgba(255, 0, 0, 0.5)`
  - The first three arguments are for the red value, the green and the blue value
    - Color values can be between an integer between 0 and 255
    - Color values can also be a float percentage between 0 and 100, ex: `50.15%`
  - The last argument in `rgba` is for alpha, think transparency
    - This value is between 0 and 1, ex: `0.25`

* HSL & HSLA:  `hsl(360, 100%, 50%)`, `hsla(360,100%,50%,0.5)`
  - first number is color hues: 0/360 = red, 120 = green, 240 = blue
  - second number is a percentage of saturation
  - third number is a percentage of brightness
  - If using HSLA the last number is Alpha (transparency) values 0-1
  - https://www.w3.org/Talks/2013/0516-CSS-WWW2013/color-wheel.png - HSL color wheel

## CSS Inheritance Notes

Most properties, such as fonts, will be inherited by children. The following properties *are not* inherited:

* Padding
* Margins
* Any kind of positioning
* Backgrounds
* Borders

## Resources

- http://flukeout.github.io/ - CSS diner
- http://www.mezzoblue.com/zengarden/alldesigns/ - CSS zen garden
- http://www.colors.commutercreative.com/grid/ - Standard CSS colors
- http://overapi.com/css - CSS cheatsheet
- https://www.fontsquirrel.com/tools/webfont-generator - webfont generator
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/ - flexbox guide
- http://flexboxfroggy.com/ - fun flexbox game
- [Relative Practice](https://www.codecademy.com/courses/advanced-css-positioning/0/4)
- [Absolute Practice](https://www.codecademy.com/courses/advanced-css-positioning/1/3)
- [Fixed Practice](https://www.codecademy.com/courses/advanced-css-positioning/3/2?)
- [Grid Building](https://github.com/gSchool/css-grid-building)
- [Grids](http://gridbyexample.com/what/)
- [CSS Animations]( https://github.com/gSchool/css-animations)

## Slides

* [Slides 1](https://docs.google.com/presentation/d/1omsUSz7UPV9mf-yPNMrhA99K1shQjvcxTvHN94xvu3k/edit?usp=sharing)
* [Slides 2](https://docs.google.com/presentation/d/15ltKkQWmG1e6ns8RwX1QJ_4yTBYza_XyXZsE4W7txOs/edit?usp=sharing)
