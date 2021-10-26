updatesPerSecond = 60

let BG_COLOR = '#333'

class Player{
  constructor(x, y, color){

    this.x = x
    this.y = y
    this.R = 30

    this.COLOR = color;
    this.VEL = 6
  }

  movement(up, left, down, right){

    if(up){
      this.y -= this.VEL
    }

    if(left) {
      this.x -= this.VEL
    }

    if(down) {
      this.y += this.VEL
    }

    if(right) {
      this.x += this.VEL
    }

  }

  graphics() {

    circle(this.x, this.y, this.R, this.COLOR)

  }

}

let player1 = new Player(100, 100, 'blue')

let player2 = new Player(100, 100, 'red')


function graphics() {

  fill(BG_COLOR)

  player1.graphics()
  player2.graphics()

}

function logic() {

  player1.movement(keyboard.w, keyboard.a, keyboard.s, keyboard.d)

  player2.movement(keyboard.up, keyboard.left, keyboard.down, keyboard.right)

}

function update(){

  logic()

  graphics()
  
}

