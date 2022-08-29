class Ground{
    constructor(x,y,w,h){

        var options = {
            //keeps ground immovable
            isStatic: true
        }
        //physics body
        this.body = Bodies.rectangle(x,y,w,h,options);
        //loads image
        this.image = loadImage("sprites/ground.png");
        //dimensions
        this.width = w;
        this.height = h;
        //adds body to physics world
        World.add(myWorld,this.body);

    }
    display(){

        var pos=  this.body.position ;
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}