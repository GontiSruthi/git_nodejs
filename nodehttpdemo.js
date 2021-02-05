const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(201,{'Content-Type':'text/html'})//http status codes(201....)
    res.write('<h2>welcome to node js</h2>')
    res.end()
})
server.listen(8070,"localhost",()=>{
    console.log("server is ready")
})

//http module
