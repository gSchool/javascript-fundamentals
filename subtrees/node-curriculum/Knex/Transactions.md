# Transactions

Transactions allow correct recovery and keep database consistent.

Imagine inserting a new user to the database and the information needs to be included in multiple tables. The first insertion goes well, but while inserting to the next table, the server crashes.

The insertion was incomplete and the database is now inconsistent. That's not good. Transactions prevent this from happening. If there is an error in the process of a transaction, the process will be rolled back like nothing happened. If there isn't an error, the process is commited and the database is modified.

### Steps

- Begin transaction
- Execute data manipulation
- If no errors, commit and end transaction
- If error, rollback and end transaction

### ACID

A - atomicity

A transaction is "all or nothing". Either all of the modifications are performed or none at all.

C - consistency

When a transaction is completed, all data must maintain integrity.

I - isolation

Each transaction should take place independently from other transactions.

D - durability

All transactions modify the Database permanently.

### Transactions with Knex

```js
router.post('/', function(req, res, next) {
  knex.transaction(function (trx) {
    knex('table').transacting(trx)
    .insert({
      name: req.body.name,
    }, 'id').then(function (user) {
      return knex('join_table').transacting(trx)
      .insert({
        join_id: req.body.join_id
      })
    })
    .then(trx.commit)
    .catch(trx.rollback);
  }).then(function (result) {
    res.json(result)
  }).catch(function (err) {
    handleError(err, res)
  })
});
```

References to Steps

- Begin transaction - knex.transaction(function (trx) {})
- Execute data manipulation - keep track with .transacting(trx)
- If no errors, commit and end transaction - .then(trx.commit)
- If error, rollback and end transaction - .catch(trx.rollback)

## Slides

* [Slides](https://docs.google.com/presentation/d/1frR5JltuT3_Wpt1IfPXrbu-rVqq4zB5RvqeNc0tIAp4/edit)
