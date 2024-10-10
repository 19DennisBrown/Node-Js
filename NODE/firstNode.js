


const http = require("http")
const dt =  require("./time.js")

http.createServer((req,res)=>{
  res.writeHead(200, {'Content-type': 'text/html'})
  res.write(dt.currentDatetime)
  res.end()
}).listen(8000)