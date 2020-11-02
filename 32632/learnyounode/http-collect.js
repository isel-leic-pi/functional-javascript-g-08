const http = require('http')
const { argv } = require('process')

http.get(argv[2], (response) => {
    let full_string = ''
    response.setEncoding('utf8').on('data', (data) => {
        full_string += data
    }).on('end', (data)=>{
        console.log(full_string.length)
        console.log(full_string)
    })
})