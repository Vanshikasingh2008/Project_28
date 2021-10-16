class BaseClass{
    constructor(x, y, width, height, radius) {
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2 
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.body = Bodies.ellipse(x,y,radius,options);
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height, this.radius);
        pop();
      }
}