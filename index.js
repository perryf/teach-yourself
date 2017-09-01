var express = require('express')
var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket) {
  socket.on('newplayer', (msg) => {
    io.emit('newplayer', msg)
  })
})

http.listen(6969, function() {
  console.log('breaker breaker over--' + http.address().port)
})
