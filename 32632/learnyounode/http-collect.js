const http = require('http')
const { argv } = require('process')

http.get(argv[2], (response) => {
    response.setEncoding('utf8').on('data', (data) => {
        console.log(data)
    })
})