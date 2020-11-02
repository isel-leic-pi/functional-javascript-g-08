const http = require('http')
const { argv } = require('process')

let results=[]
let processed = 0

for(let i = 2; i < argv.length;++i)
{
    http.get(argv[i], (response) => {
        response.setEncoding('utf8').on('data', (data) => {
            if(!results[i]) results[i] = ''
            results[i] += data
        }).on('end', (data)=>
        {
            processed++
            if(processed == argv.length-2)
                results.forEach(x => console.log(x))
        })
    })
}