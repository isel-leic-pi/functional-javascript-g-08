'use strict'

const fs = require('fs')

const filename = process.argv[2]

const contents = fs.readFile(filename, 'utf8', (err, str) => {
    if(err) console.log(err)
    else
    console.log(str.split('\n').length - 1)
})

/* 
Solução dada

    'use strict'
    const fs = require('fs')
    const file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      const lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })

*/