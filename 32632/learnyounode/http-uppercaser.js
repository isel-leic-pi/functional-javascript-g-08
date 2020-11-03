
const http = require('http')
const { argv } = require('process')
const map = require('through2-map')

const server = http.createServer(function (req, res) 
{
    
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)
})

console.log("listening on " + argv[2])
server.listen(argv[2])