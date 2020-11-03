const http = require('http')
const { argv } = require('process')
const map = require('through2-map')

const server = http.createServer(function (req, res) 
{
    console.log('URL is ' + req.url)
    const url = new URL('http://localhost:' + argv[2] + req.url);

    res.writeHead(200, {'Content-Type': 'application/json'})
    
    let time;
    const date = new Date(url.searchParams.get("iso"));

    switch(url.pathname) {
        case '/api/parsetime':
            time = {
                'hour': date.getHours(),
                'minute': date.getMinutes(),
                'second' : date.getSeconds()
            }
        break
            
        case '/api/unixtime':
            time = { "unixtime": date.getTime() }
        break
        default:
            console.log("Couldnt read: " + url.pathname)
    }

    res.write(JSON.stringify(time))
    res.end();
})

console.log("listening on " + argv[2])
server.listen(argv[2])