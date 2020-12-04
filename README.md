# Where's DigitalCrafts?

This program displays the states which have cities named "Atlanta", "Houston", "Tampa".

# Bugs to fix

- [ ] After lots of debugging, code stopped running. `node index.js` does nothing
- [ ] Started crashing after adding "tampa" search
- [ ] Prints "Atlanta" locations twice (instead of Houston)

For each bug you fix, add documentation to this README about how you fixed it (include before/after code samples).

# Solutions
- The first problem is that we are trying to find data without an object, fixed by adding 'db.' in from of the statesWithCity function
Before:
```javascript
    const statesWithATampa = statesWithCity('tampa');
    console.log('\n\nThere is a Tampa in these states:')
    for (st of statesWithATampa) {
        console.log(st);
    }
```
After:
```javascript
    const statesWithATampa = db.statesWithCity('tampa');
    console.log('\n\nThere is a Tampa in these states:')
    for (st of statesWithATampa) {
        console.log(st);
    }

```

- The second problem uses a for of loop with the wrong variable: 
Before
```javascript
    const statesWithAHouston = db.statesWithCity('houston');
    console.log('\n\nThere is a Houston in these states:')
    for (let st of statesWithAnAtlanta) {
        console.log(st);
    }
```
After
```javascript
    const statesWithAHouston = db.statesWithCity('houston');
    console.log('\n\nThere is a Houston in these states:')
    for (let st of statesWithAHouston) {
        console.log(st);
    }
```


# For the more curious:

`db.js` includes more functions that you can try out. In `index.js`, try to `console.log()` the results of the following function calls:

- `getByAbbreviation('ak')`
- `searchByName('dakota')`
  - Why does this only return results for North Dakota (and not South Dakota)?
