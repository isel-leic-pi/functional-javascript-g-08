const net = require('net')
const { argv } = require('process')

const server = net.createServer(function (socket) {
    let date = new Date()
    let response = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate() < 10 ? '0'+date.getDate() : date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`
    socket.end(response)
})
server.listen(argv[2])