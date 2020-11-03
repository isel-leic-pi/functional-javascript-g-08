
const http = require('http')

const { argv } = require('process')

const server = http.createServer(function (req, res) 
{
    const map = require('through2-map')
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)
})

console.log("listening on " + argv[2])
server.listen(argv[2])