class Player{
    constructor(x,y){


      var options = {
        isStatic:false,
        restitution:0,
        density:1,
        friction:1.2
      }

       this.x = x;
       this.y = y;
       this.r = 20;
       this.body = Bodies.circle(x,y,20,options)
       World.add(world,this.body)
    }
    display(){
      var playerpos = this.body.position
      push()
      translate(playerpos.x,playerpos.y)
      ellipseMode(RADIUS)
      ellipse(0,0,20,20)
      pop()
    }
}