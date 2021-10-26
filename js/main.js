updatesPerSecond = 60

let BG_COLOR = '#333'

let playerCount = 0

let pName1 = prompt('Ange ett namn till spelare 1: ')
let pName2 = prompt('Ange ett namn till spelare 2: ')

let player1 = new Player(100, 100, 'blue', pName1)

let player2 = new Player(100, 100, 'red', pName2)

function update(){

  logic()

  graphics()
  
}

