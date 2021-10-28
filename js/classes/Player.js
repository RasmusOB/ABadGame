class Player{
  constructor(x, y, color, name){

    playerCount++

    this.x = x
    this.y = y
    this.R = 30
    if(name.length > 0) {
      this.name = name
    } else {
      this.name = playerCount.toString()
    }

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

  limitArea() {

    if(this.y > totalHeight || this.y < 0 || this.x > totalWidth || this.x < 0) {
      death()
    } 
  }

}