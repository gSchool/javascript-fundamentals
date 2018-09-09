# Exercise

This exercise will require you to use what you've learned from the previous lessons.

## Questions

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 26b7e060-b3d9-11e8-89b8-f32133e66ea3
* title: Primitive Types Exercise A

### !question

Assign the correct values to the following variables to build a Madlib! For hints (and the final Madlib), check the test output.

### !end-question

### !placeholder

```js
var madeUpName; // Make sure to include a space. (e.g. 'James Bond')
var personInPositionOfPower; // a string
var nationality; // e.g. 'American'
var countryName;
var preciousItem;
var vehicleName;
var aCelebrity;
var occupationName;
var numberA; // a number
var numberB; // a number
var adverbA;
var adverbB;
var verbBaseForm;
var verbPastTenseA;
var verbPastTenseB;
var verbPastTenseC;
var verbPastTenseD;
var adjectiveA;
var adjectiveB;
var adjectiveC;
var color;
var liquidBeverage;
var travelRelatedNounPlural;
var numberLessThanSix; // a number less than six but greater than 0
var numberBetween1And60; // a number less than 60 but greater than 0
var partOfBody;
var partOfBodyPlural;
```

### !end-placeholder

### !tests

```js
describe('Madlib Game A', function () {
  const name = madeUpName.split(' ')
    .map(el => el[0].toUpperCase() + el.slice(1).toLowerCase())
    .join(' ')
  const pseudonym = madeUpName.split(' ')
    .map(el => el.toLowerCase().split('').reverse().join(''))
    .map(el => el[0].toUpperCase() + el.slice(1).toLowerCase())
    .join(' ')

  console.log(`
    Hello. The name's ${name}.

    I'm ${nationality} at heart, but my ${personInPositionOfPower} has sent me to the Americas before. I noticed ${numberA} things about the Americas. One, they are ambitious. Two, they are ${adverbA} rude. ${numberB}, they are clever enough to ${verbBaseForm} even my tricks and plans. ${adverbB}, I managed to smuggle the ${preciousItem} I needed from the Americas. Now the SISMI has sent me to a desert. Not just any desert.

    The ${countryName} Desert.

    I ${verbPastTenseA} the brick wall as I slid toward the ${adjectiveA} building. My private ${vehicleName} had landed me half a mile away and now I was running into the airport. I noticed a ${color} blur run past at a ${adjectiveB} pace. I ${verbPastTenseB} and quickly turned in my passport and ${travelRelatedNounPlural}. The passport said my name was ${pseudonym}. My disguise.

    Now I was on the plane. To look ${adjectiveC}, I picked up a magazine from the seat pocket in front of me. I pretended to be ${aCelebrity}, and I buried my ${partOfBody} in the pages so that the ${occupationName} next to me would get ${liquidBeverage}. He did, and I chuckled. They fall for it every time.

    I put down the magazine. The ${occupationName} next to me with the bowler hat was asleep. ${liquidBeverage} dripped from the corner of his mouth. I cringed and ${verbPastTenseC} my watch. ${numberLessThanSix} 'til six. I had an hour and ${numberBetween1And60} minutes until my landing. I laid back and closed my ${partOfBodyPlural}. An hour. I chuckled again and ${verbPastTenseD} in my seat. My adventure was already unraveling.`
  )

  it('should appropriately assign values to variables', function () {
    const err = `You must assign values to all of the above variables.`
    const values = [madeUpName, personInPositionOfPower, nationality, countryName, preciousItem, vehicleName, aCelebrity, occupationName, numberA, numberB, adverbA, adverbB, verbBaseForm, verbPastTenseA, verbPastTenseB, verbPastTenseC, verbPastTenseD, adjectiveA, adjectiveB, adjectiveC, color, liquidBeverage, travelRelatedNounPlural, numberLessThanSix, numberBetween1And60, partOfBody, partOfBodyPlural]

    values.forEach(value => expect(typeof value, err).to.not.be.undefined)
  })

  it('should have a complete madeUpName', function () {
    const err = `Your madeUpName must include at least one space.`
    expect(madeUpName.split(' ').length, err).to.be.above(1)
  })

  it('should have numbers where specified', function () {
    const err = `The following variables must be numbers: numberA, numberB, numberLessThanSix, numberBetween1And60`
    const values = [numberA, numberB, numberLessThanSix, numberBetween1And60]

    values.forEach(value => expect(value, err).to.be.a('number'))
  })

  it('numberLessThanSix and numberBetween1And60 should fit their constraints', function () {
    expect(numberLessThanSix, `numberLessThanSix should be less than six but greater than 0`).to.be.above(0)
    expect(numberLessThanSix, `numberLessThanSix should be less than six but greater than 0`).to.be.below(6)

    expect(numberBetween1And60, `numberBetween1And60 should be less than sixty but greater than one`).to.be.above(0)
    expect(numberBetween1And60, `numberBetween1And60 should be less than sixty but greater than one`).to.be.below(60)
  })
})
```

### !end-tests

### !end-challenge

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: 26b80770-b3d9-11e8-89b8-f32133e66ea3
* title: Primitive Types Exercise B

### !question

Assign the variables to values so that the following statements evaluate as described:

```js
// Expression A
(x + y) > z || a == b || ((l || m) && n) // resolves to true

// Expression B
!!n && (x + y + z) && a // resolves to false

// Expression C
m[n].length + n === 1 // resolves to true
```

### !end-question

### !placeholder

```js
var a;
var b;
var l;
var m;
var n;
var x;
var y;
var z;
```

### !end-placeholder

### !tests

```js
describe('Complex Comparisons', function () {
  describe('Expression A', function () {
    it('should resolve to true', function () {
      const actual = ((x + y) > z || a == b || ((l || m) && n))
      expect(actual, 'Expression A is currently false!').to.be.ok
    })

    it('should resolve to false', function () {
      const actual = (!!n && (x + y + z) && a)
      expect(actual, 'Expression B is currently false!').to.not.be.ok
    })

    it('should resolve to true', function () {
      const actual = (m[n].length + n === 1)
      expect(actual, 'Expression C is currently false!').to.be.ok
    })
  })
})
```

### !end-tests

### !end-challenge
