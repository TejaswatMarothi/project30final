class Box{
    constructor(x,y){
      this.x = x;
      this.y = y;
      this.width = 30;
      this.height = 40;
      this.Visibility = 255;
      this.body = Bodies.rectangle(x,y,30,40,{isStatic:false,density:1.2})
      World.add(world,this.body)
    }
    display(){
       var boxpos = this.body.position
      //  console.log(this.body.speed)
       if (this.body.speed<5){
       rectMode(CENTER)
       rect(boxpos.x,boxpos.y,30,40)
    }else{
        World.remove(world,this.body)
        push()
        this.Visibility = this.Visibility -5
        pop()
}
    }
}