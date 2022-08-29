class Log extends Parent{
    constructor(x,y,h,angle){
       super(x,y,15,h,angle),
        //angles
        Matter.Body.setAngle(this.body,angle);
        //images
        this.image = loadImage("sprites/wood2.png");
    }

}