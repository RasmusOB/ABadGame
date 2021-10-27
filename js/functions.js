// ALL THE GRAPHICS IN THE GAME
function graphics() {
    fill(BG_COLOR);

    player1.graphics();
    player2.graphics();

    enemy1.graphics();
    enemy2.graphics();
    enemy3.graphics();

    enemy1.kill();
    enemy2.kill();
    enemy3.kill();
}

// THE FUNCTION THAT IS CALLED WHEN YOU DIE
function death() {
    let randomMessage = random(1, 10);
    let txtSize = 100;
    let deathMessage = '';

    switch (randomMessage) {
        case 1:
            deathMessage = "you know you should'nt die right?";
            break;
        case 2:
            deathMessage = 'you guys are losers';
            break;
        case 3:
            deathMessage = 'what how bad can you be?';
            break;
        case 4:
            deathMessage = 'this is too easy for me';
            break;
        case 5:
            deathMessage = 'you guys is just bad';
            break;
        case 6:
            deathMessage = 'i am sorry but.. HOW?';
            break;
        case 7:
            deathMessage = 'you got no excuses now';
            break;
        case 8:
            deathMessage = 'are you serious?';
            break;
        case 9:
            deathMessage = 'the goal is not to die';
            break;
        case 10:
            deathMessage = 'this is just sad';
            break;
        default:
            deathMessage =
                'if you find this comment you is AWESOME, please tell me if you liked the game. THE MAKER IS RasmusOB';
    }

    fill('red');
    text(100, txtSize + txtSize, txtSize, deathMessage, '#000');

    stopUpdate();
}

// OTHER LOGIC
function logic() {
    player1.movement(keyboard.w, keyboard.a, keyboard.s, keyboard.d);

    player2.movement(keyboard.up, keyboard.left, keyboard.down, keyboard.right);

    enemy1.movement();
    enemy2.movement();
    enemy3.movement();

    enemy1.movement();
    enemy2.movement();
    enemy3.movement();
}
