const http = require('http')


// const server = createServer((req, ser) => {
//     res.end('Welcome!')
// })




// Using event Emmiter API

const server = http.createServer()

server.on('request', (req, res) => {
    res.end('Welcome!')
})


const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server listening on ... ${PORT}`))