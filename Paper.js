class Paper{

constructor(){
  var options={
      restitution:0,
      friction:0,
      density:1.0
    }  
    this.object=Bodies.circle(100,600,10,options)
    World.add(world,this.object)
}

display(){
    var pos = this.object.position;
     var angle = this.object.angle; 
     fill("white"); rotate(angle);
      ellipseMode(RADIUS) ; 
      ellipse(pos.x,pos.y,20,20)
}



}