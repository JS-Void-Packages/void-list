const List = require('./index')

let list = new List()
list.add("Lazy")
list.add("Foxes")
list.add("Over")
list.add("Rainbow")
console.log(list.get(2))
console.log(list.remove("Over"))
console.log(list.get(2))
console.log(List.fromArray(["Lazy", "Foxes", "Over", "Rainbow"]))