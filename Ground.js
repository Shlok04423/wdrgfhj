class Ground{
constructor(){
var options={
    isStatic:true
}
this.object=Bodies.rectangle(400,680,800,20,options)
World.add(world,this.object)

}

display(){
rectMode(CENTER)
fill("yellow")
rect(this.object.position.x,this.object.position.y,800,20)
}

}