const List = require('./index')

/**
 * @type {List<string>}
 */
let list = new List()
list.add("Lazy")
list.add("Foxes")
list.add("Over")
list.add("Rainbow")
console.log(list.get(2))
console.log(list.remove(2))
console.log(list.get(2))
console.log(List.fromArray(["Lazy", "Foxes", "Over", "Rainbow"]).toString())