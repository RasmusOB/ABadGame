updatesPerSecond = 60

let BG_COLOR = '#333'

let playerCount = 0

let pName1 = prompt('Ange ett namn till spelare 1: ')
let pName2 = prompt('Ange ett namn till spelare 2: ')

let enemy1 = new Enemy(100, 300)
let enemy2 = new Enemy(300, 100)
let enemy3 = new Enemy(150, 150)

let player1 = new Player(100, 100, 'blue', pName1)
let player2 = new Player(100, 100, 'purple', pName2)

function update(){

  logic()

  graphics()
  
}