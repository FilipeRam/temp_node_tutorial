// HTTP Module

const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to Home Page')
    }
   if(req.url === '/about'){
       res.end('Here is our short history')
   }
   res.end(`
   <h1> Oops</h1>
   <p> We can't seem to find the page you're looking for---</p>
   <a href="/">back Home</a>`)
})



server.listen(5000)