const fs = require('fs')

const file = fs.readFile(process.argv[2],(err,file) => {
    const lines = file.toString().split('\n').length - 1 //Counter zero based index
    console.log(lines)
})

