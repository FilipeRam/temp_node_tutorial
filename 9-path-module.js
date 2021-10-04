// FS module

const path = require('path')

console.log(path.sep)


const file = path.join('/content', 'subfolder', 'text.txt')

console.log(file)

const base = path.basename(file)
console.log(base)

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')

console.log(absolutePath)
