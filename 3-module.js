// Common JS, every file is module (by degault)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')

console.log(names)

sayHi('Filipe')
sayHi(names.john)
sayHi(names.peter)