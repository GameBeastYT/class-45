class Player{
    constructor(x,y,width,height){
this.body = Bodies.rectangle(x,y,width,height);
this.image = "images/hero1-removebg-preview.png";
World.add(world,this.body);
this.width = width;
this.height = height;
    }


    display(){
        imageMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
