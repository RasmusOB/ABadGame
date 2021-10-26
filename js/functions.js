
function graphics() {

  fill(BG_COLOR)

  player1.graphics()
  player2.graphics()

}


function logic() {

  player1.movement(keyboard.w, keyboard.a, keyboard.s, keyboard.d)

  player2.movement(keyboard.up, keyboard.left, keyboard.down, keyboard.right)

}