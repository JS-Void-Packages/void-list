const List = require('./index')

/**
 * @type {List<string>}
 */
let list = new List()
list.add("Lazy")
list.add("Foxes")
list.add("Over")
list.add("Rainbow")
// shuffle
console.log(list.toString())
list.shuffle()
console.log(list.toString())
// remove elemnts from the array
console.log(list.get(2))
console.log(list.remove(2))
console.log(list.get(2))
console.log(list.indexOf("Lazy"))