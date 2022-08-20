const List = require('../dist/index')

/**
 * @type {List<string>}
 */
let list = new List()
list.add("Lazy")
list.add("Foxes")
list.add("Over")
list.add("Rainbow")
list.addAll('Not', 'J')

console.log(list.get(2))
console.log(list.remove(2))
console.log(list.indexOf("Lazy"))

// shuffle
console.log(list.toString())
list.shuffle()
console.log(list.toString())

// reverse the list
list.reverse()
console.log(list.toString())
console.log(list.getAllIndexes().toString())

let copy = list.copy()
console.log(list.equals(copy))