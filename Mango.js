class Mango{
    constructor(x,y,r){
     var options = {
     isStatic : true,
     restitution : 0,
     friction : 1
    }
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(x,y,this.r,options);
    this.image = loadImage("mango.png");
    World.add(world,this.body);
   }
 
  display(){
    var paperpos = this.body.position;
    push();
    translate(paperpos.x,paperpos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, 85, 75);
    pop();
   }
 }