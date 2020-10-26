const fs = require('fs')

module.exports = function filter(directory,file_extension, callback){
    fs.readdir(directory,(err,data) => {
        if(err) return callback(err)        

        let files = [];
        data.forEach((file) => {
            if(file.split('.')[1] == file_extension){
                files.push(file)
            }
        })
        callback(null, files)
    })
}
