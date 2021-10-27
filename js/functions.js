function graphics() {

  fill(BG_COLOR)

  player1.graphics()
  player2.graphics()

  enemy1.graphics()
  enemy2.graphics()
  enemy3.graphics()

}


function logic() {

  player1.movement(keyboard.w, keyboard.a, keyboard.s, keyboard.d)

  player2.movement(keyboard.up, keyboard.left, keyboard.down, keyboard.right)

  enemy1.movement()
  enemy2.movement()
  enemy3.movement()

  enemy1.movement()
  enemy2.movement()
  enemy3.movement()

}

function death() {
  fill('red')
  stopUpdate()
}