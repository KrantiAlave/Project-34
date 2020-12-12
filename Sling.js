class Sling{
    constructor(bodyA,bodyB,offsetX,offsetY){

   this.offsetX = offsetX;
   this.offsetY = offsetY; 
    
    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
       pointB:{x:this.offsetX,y:this.offsetY}
    }
    this.sling = Constraint.create(options);
    World.add(world,this.dling);
  }
   display(){
       strokeWeight(2);
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x+this.sling.pointB.x,this.sling.bodyB.position.y+this.sling.pointB.y);
    }
}