
// GLOBALS - NO WINDOW

// __dirname - path to current directory
// __filename - file name
//  require - function to use modules (common JS)
//  module - info about current module (file)
//  process - indo about env where the program is beeing executed


console.log('this is  dirname' , __dirname)
console.log('this is the filename' , __filename)
console.log('this is the function require' ,require)
console.log('this is the module', module)
console.log('this is the global process', process)

setInterval(() => {
    console.log( 'Hello World!')
}, 2000)