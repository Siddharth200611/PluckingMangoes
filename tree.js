class tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("tree.png");
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("lightblue");
      rect(pos.x, pos.y, this.width, this.height);
      //image(this.image,this.body.position.x,this.body.position.y,270,290)
      image(this.image,400,230,450,450)
    }
  };