'use strict'

const fs = require('fs')

const filename = process.argv[2]

const buf = fs.readFileSync(filename)

const bufStr = buf.toString()

const strArray = bufStr.split('\n')

if(strArray.length > 1)
{
	console.log(strArray.length - 1);
}
else {
	console.log(0);
}

/* 
Solução dada

	const fs = require('fs')

    const contents = fs.readFileSync(process.argv[2])
    const lines = contents.toString().split('\n').length - 1
    console.log(lines)

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

*/