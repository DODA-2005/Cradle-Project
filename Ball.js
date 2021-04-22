class Ball {
  constructor(x, y) {
    var options = {
        'density':35,
        'mass':400,
        'friction':1.0,
        'restitution':1.25
    };
    this.body = Bodies.circle(x, y, 20, options);
    this.radius = 70;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle =this.body.angle;
    push()
    translate(pos.x,pos.y)
    rotate(angle)
   
    strokeWeight("darkblue");
    stroke("skyblue");
    fill("lightblue");
    
    circle(0, 0, this.radius);
    pop();
  }
}
