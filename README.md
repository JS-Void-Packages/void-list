# void-list
Add Java Style List to Javascript
## Does it work like Java lists?
Absolutely! the same methods you use in java also exists in this(add, remove, empty, etc...).
## Instalation
`npm install void-list`
## Example
```js
// or import List from 'void-list'
const List = require('void-list')

let list = new List()
list.add("Lazy")
list.add("Foxes")
list.add("Over")
list.add("Rainbow")

// Over
console.log(list.get(2))

// return true because Over was removed
console.log(list.remove("Over"))

// Rainbow
console.log(list.get(2))

// create a list from an array
let l = List.fromArray(["Lazy", "Foxes", "Over", "Rainbow"])
```