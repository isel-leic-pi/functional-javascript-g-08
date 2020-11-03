const http = require('http')

//const argv = require('process') Porque é que o argv quando é declarado assim não funciona e dá undefined?

const {argv } = require('process')
const fs = require('fs')

const server = http.createServer(function (req, res) 
{
  let file_stream = fs.createReadStream(argv[3])

  file_stream.on('open', () => {
    file_stream.pipe(res);
  });
})

console.log("listening on " + argv[2])
server.listen(argv[2])