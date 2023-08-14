# void-list
Add Java Style List to Javascript
## Instalation
`npm install void-list`
## Example
```js
// or import { List } from 'void-list'
const { List, ImmutableList } = require('void-list');

let list = new List();
list.add("Lazy");
list.add("Foxes");
list.add("Over");
list.add("Rainbow");
list.addAll('Not', 'J');

// Over
console.log(list.get(2));

// return the removed element
console.log(list.remove(2));

// Rainbow
console.log(list.get(2));

// shuffle the list
list.shuffle();
console.log(list.toString());

// get the index for Lazy
console.log(list.indexOf("Lazy"));

// create a list from an array
let l = List.fromArray(["Lazy", "Foxes", "Over", "Rainbow"]);

// non modifiable list
let immune = new ImmutableList(l);
```