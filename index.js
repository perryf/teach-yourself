var express = require('express')
var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

http.lastPlayderID = 0

io.on('connection', function(socket) {
  console.log('a user connected')

  socket.on('newPlayer', () => {
    socket.player = {
      id: http.lastPlayerID++,
      x: randomInt(100, 400),
      y: randomInt(100, 400)
    }
    io.emit('newPlayer', getAllPlayers())

    socket.on('move', function(data) {
      console.log('x: ' + x + ', y: ' + y)
      socket.player.x = data.x
      socket.player.y = data.y
      io.emit('move', socket.player)
    })

    socket.on('disconnect', function() {
      io.emit('remove', socket.player.id)
      console.log('a user disconnected')
    })
  })
})

function getAllPlayers () {
  var players = []
  Object.keys(io.sockets.connected).forEach((socketID) => {
    var player = io.sockets.connected[socketID].player
    if(player) players.push(player)
  })
  return players
}

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low)
}

http.listen(6969, function() {
  console.log('breaker breaker over--' + http.address().port)
})
