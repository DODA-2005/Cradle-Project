class Rod{
  constructor(x, y,height,angle) {
    var options = {
        'density':7000,
        'friction':0.6,
        'restitution':0.5,
        'mass':50,
        'isStatic':true
    };
    this.body = Bodies.rectangle(x, y, 50, 80, options);
    this.width = 800;
    this.height = 50;
    
   
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle =this.body.angle;
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER);
    strokeWeight("red");
    stroke("red");
    fill("orange");
    rect(0, 0, this.width, this.height);
    pop()
  }
}
