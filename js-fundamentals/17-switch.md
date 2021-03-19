# Switch

## Learning Objectives

By the end of this lesson you will be able to:

* Use switch statements to handle multiple possible values to control the flow of programs

### Switch Statements

Switch statements are another way to express a very common structure:

```
if () {
} else if () {
} else if () {
} else {
}
```

Here is the syntax for a switch statement which would replace our if, else if, else construct:

```
switch (/* our expression */ ) {
   case /*value 1*/:
       // some code
       break;
   case /*another value*/:
       // some code
       break;
   default:
       // the default code, just like the else block
       break;
}
```

As you can see, `switch` statements cover many possible values for a *single* expression. If you want to test several expressions in combination, a switch statement won't help you there.

Here is a code example. Note that `typeOfPet` can have many different values. The value of `typeOfPet` is compared with the expression after `case`.

```
var typeOfPet = prompt("Please name an animal");
switch (typeOfPet) {
	case "dog":
	   console.log(typeOfPet + " goes woof.");
	   break;
	case "cat":
	   console.log(typeOfPet + " goes meow.");
	   break;
	case "bird":
	   console.log(typeOfPet + " goes tweet");
	   break;
	case "mouse":
	   console.log(typeOfPet + " goes squeak");
	   break;
	case "fox":
	   console.log(typeOfPet + " goes Ring-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding");
	   break;
	default:
	   console.log("Sorry, I don't know what noise that animal makes.");
	   break;
}
```

The equivalent syntax with an if statement would be:

```
var typeOfPet = prompt("Please name an animal");
if (typeOfPet === "dog") {
  console.log(typeOfPet + " goes woof.");
} else if (typeOfPet === "cat") {
  console.log(typeOfPet + " goes meow.");
} // et cetera
```

## Challenges
### !challenge

* type: code-snippet
* language: javascript
* id: aef4e401-b3d9-11e8-92ed-57e3f4477ba5
* title: Switch Statements

### !question

Rewrite your code from the last challenge to use switch statements.

### !end-question

### !placeholder

```js
function studentCode(console) {
  var number = 10
  // your code here
}
```

### !end-placeholder

### !tests

```js
describe('studentCode', function() {
    it("logs the correct value", function() {
      let c = {
        values: [],
        log(x) {
          this.values.push(x)
        }
      }
      studentCode(c)
      expect(c.values).to.eql(['the value is 10'])
    })
    it("uses only switch", function() {
      let src = studentCode.toString()
      expect(src.includes('if')).to.equal(false)
      expect(src.includes('else')).to.equal(false)
      expect(src.includes('switch')).to.equal(true)
    })
})
```
### !end-tests

### !end-challenge
