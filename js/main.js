// SETS THE FRAMERATE
updatesPerSecond = 60;

// CREATING VARIABLES
let BG_COLOR = '#333';

let playerCount = 0;

let pName1 = prompt('Ange ett namn till spelare 1: ');
let pName2 = prompt('Ange ett namn till spelare 2: ');

let enemy1 = new Enemy(500, 300);
let enemy2 = new Enemy(500, 100);
let enemy3 = new Enemy(500, 200);

let player1 = new Player(500 - 400, 100, 'blue', pName1);
let player2 = new Player(500 + 400, 100, 'purple', pName2);

let time = 0;

// FUNCTION THAT RUNS LIKE A LOOP THROUGH THE PROGRAM
function update() {
  logic();

  graphics();
}
