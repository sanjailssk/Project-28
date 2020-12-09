class Constrains{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.015,
            length: 10
        }
        this.pointB = pointB;
        this.constrain = Constraint.create(options);
        World.add(world, this.constrain);
    }

    attach(body){
       this.constrain.bodyA = body;
    }

    display(){
        if(this.constrain.bodyA){
        var pointA = this.constrain.bodyA.position;
        var pointB = this.pointB;
        stroke("black")
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }}

    fly(){
        this.constrain.bodyA = null
      }
}