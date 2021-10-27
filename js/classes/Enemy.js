class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.R = 30;
        this.COLOR = 'red';
        this.VEL = 2;
    }

    kill() {
        let dP1 = distance(this.x, this.y, player1.x, player1.y);
        let dP2 = distance(this.x, this.y, player2.x, player2.y);

        if (dP1 < player1.R) {
            death();
        }

        if (dP2 < player2.R) {
            death();
        }
    }

    movement() {
        let dP1 = distance(this.x, this.y, player1.x, player1.y);
        let dP2 = distance(this.x, this.y, player2.x, player2.y);

        if (dP1 < dP2) {
            if (player1.x > this.x) {
                this.x += this.VEL;
            } else {
                this.x -= this.VEL;
            }

            if (player1.y > this.y) {
                this.y += this.VEL;
            } else {
                this.y -= this.VEL;
            }
        } else {
            if (player2.x > this.x) {
                this.x += this.VEL;
            } else {
                this.x -= this.VEL;
            }

            if (player2.y > this.y) {
                this.y += this.VEL;
            } else {
                this.y -= this.VEL;
            }
        }
    }

    graphics() {
        circle(this.x, this.y, this.R, this.COLOR);
    }
}
