const fs = require('fs')

const directory =  process.argv[2]
const file_extension =  process.argv[3]

fs.readdir(directory,(err,data) => {
    data.forEach((file) => {
        if(file.split('.')[1] == file_extension)
            console.log(file)
    })
})

