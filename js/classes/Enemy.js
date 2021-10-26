class Enemy {

  constructor(){
  
    this.x = random(1, totalWidth)
    this.y = random(1, totalHeight)
    this.r = 30
    this.c = 'red'
    this.vel = 2
    
  }
  
  movement() {
    
    circle(this.x, this.y, this.r, this.c)
    
    let d = distance(this.x, this.y, player.x, player.y) 
    
    if(d < player.r) {
      death()
      stopUpdate()
    }
  
    if(player.x > this.x) {
      this.x += this.vel
    } else {
      this.x -= this.vel
    }
    
    if(player.y > this.y) {
      this.y += this.vel
    } else {
      this.y -= this.vel
    }
    
  }
}