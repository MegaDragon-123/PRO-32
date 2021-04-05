class Box{
  constructor(x, y, width, height) {
      var options = {
          'density':1.0,
          'friction':1.0,
          'restitution':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER)
      fill("red")
      stroke("black")
      rect(0, 0, this.width, this.height)
      pop();
    }
}
