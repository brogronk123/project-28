class Tree extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,200,height,angle);
      Matter.Body.setStatic(this.body, false);
      this.image = loadImage("images/tree.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }