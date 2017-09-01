var myGamePiece

function startGame () {
  myGamePiece = new component(30, 'green', 50, 120)
  myGameArea.start()
}

var myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 480
    this.canvas.height = 270
    this.context = this.canvas.getContext('2d')
    document.body.insertBefore(this.canvas, document.body.childNodes[0])
    this.interval = setInterval(updateGameArea, 40)
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

function component (radius, color, x, y) {
  this.radius = radius
  this.color = color
  this.speedX = 0
  this.speedY = 0
  this.x = x
  this.y = y
  this.randomColor = function () {
    this.red = Math.round(Math.random() * 255)
    this.green = Math.round(Math.random() * 255)
    this.blue = Math.round(Math.random() * 255)
  }
  this.randomColor()
  this.update = function () {
    this.color = `rgb(${this.red}, ${this.green}, ${this.blue})`
    ctx = myGameArea.context
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.fill()
  }
  this.newPos = function () {
    this.x += this.speedX
    this.y += this.speedY
  }
}

function updateGameArea () {
  myGameArea.clear()
  myGamePiece.newPos()
  myGamePiece.update()
}

function moveUp () {
  myGamePiece.speedY = -1
  myGamePiece.randomColor()
}

function moveDown () {
  myGamePiece.speedY = 1
  myGamePiece.randomColor()
}

function moveLeft () {
  myGamePiece.speedX = -1
  myGamePiece.randomColor()
}

function moveRight () {
  myGamePiece.speedX = 1
  myGamePiece.randomColor()
}

$(document).keydown(function (e) {
  switch (e.key) {
    case 'ArrowUp':
      console.log('up')
      moveUp()
      break

    case 'ArrowRight':
      console.log('right')
      moveRight()
      break

    case 'ArrowDown':
      console.log('down')
      moveDown()
      break

    case 'ArrowLeft':
      console.log('left')
      moveLeft()
      break

    default: return // exit this handler for other keys
  }
  e.preventDefault() // prevent the default action (scroll / move caret)
})
