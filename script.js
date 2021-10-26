updatesPerSecond = 60

let BG_COLOR = '#333'

class Player{
  constructor(x, y, color, name){

    this.x = x
    this.y = y
    this.R = 30
    this.name = name

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
    text(this.x + 5 - this.name.length/2 * 10, this.y - this.R - 10, 10, this.name, '#fff')
  }

}

let pName1 = prompt('Ange ett namn till spelare 1: ')
let pName2 = prompt('Ange ett namn till spelare 2: ')

let player1 = new Player(100, 100, 'blue', pName1)

let player2 = new Player(100, 100, 'red', pName2)


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

