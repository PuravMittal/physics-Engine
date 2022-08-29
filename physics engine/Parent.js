class Parent {
    /*role of constructor is to create a new object and prepares new object for intialising*/
    constructor(x,y,w,h,a){
        //properties
        var options = {
            restitution:0.5,
            density : 1,
            friction : 1,
        }
        //used for creating body model with body like rectangle,crlce etc
        this.body = Bodies.rectangle(x,y,w,h,a,options);
        //loads image
        this.image = loadImage("sprites/base.png");
        //declares value of height and width
        this.height = h;
        this.width = w;
        //adds the physics body we created above to physics world
        World.add(myWorld,this.body);
    }
    display(){
        //calls the physics body's position 
        var pos = this.body.position;
        //calls physics body's angle
        var angle = this.body.angle;
        //saves the new setting
        push();
        imageMode(CENTER);
        /*translate is used to translate the origin to the points declared . In the below code origin
        is transfered to bodies x and y position*/
        translate(pos.x,pos.y);
        /*the body rotated when it touches the another body rotates due to angle and angle mode is used to 
        set the unit of angle in radians*/
        angleMode(RADIANS);
        //rotates the body to angle 
        rotate(angle);
        /*it is used to apply image on the body ,image is declared above then its x and y position and its
        width and height*/
        image(this.image,0,0,this.width,this.height);
        //reverts the all setting
        pop();
    }
}

