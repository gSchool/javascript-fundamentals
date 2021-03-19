# Exercise

This exercise will require you to use what you've learned from the previous lessons.
## Questions

<!-- Question -->

### !challenge

* type: code-snippet
* language: javascript
* id: aef46ed0-b3d9-11e8-92ed-57e3f4477ba5
* title: Data Structures Exercise

### !question

Your friends are ordering some food, so why not use your new found knowledge
of JavaScript datatypes to structure it? Given the foods, people, and orders
arrays, use native array methods to fully populate the orders array.

To start you off, we've shown you how to record Milly is ordering pizza, and ice cream.

*Note* the order property should always be an array, even if the person is ordering one thing.

Add the following orders - in this order - to the orders array

1. George orders sushi
1. Sally orders steak and sushi
1. Ken orders steak and ice cream

### !end-question

### !placeholder

```js
var foods = ['pizza', 'sushi', 'steak', 'ice cream']
var people = ['Milly', 'George', 'Sally', 'Ken']
var orders = []

orders.push({ name: people[0], order: [foods[0], foods[3]] })
```

### !end-placeholder

### !tests

```js
describe('orders array', function() {

  it('has Milly\'s order', function() {
    expect(orders[0]).to.eql({ name: 'Milly', order: ['pizza', 'ice cream'] })
  })

  it('has George\'s order', function() {
    expect(orders[1]).to.eql({ name: 'George', order: ['sushi'] })
  })

  it('has Sally\'s order', function() {
    expect(orders[2]).to.eql({ name: 'Sally', order: ['steak', 'sushi'] })
  })

  it('has Ken\'s order', function() {
    expect(orders[3]).to.eql({ name: 'Ken', order: ['steak', 'ice cream'] })
  })

  it('has all of the correct orders', function() {
    expect(orders).to.eql([
      { name: 'Milly', order: ['pizza', 'ice cream'] },
      { name: 'George', order: ['sushi'] },
      { name: 'Sally', order: ['steak', 'sushi'] },
      { name: 'Ken', order: ['steak', 'ice cream'] }
    ])
  })

})
```

### !end-tests

### !end-challenge
