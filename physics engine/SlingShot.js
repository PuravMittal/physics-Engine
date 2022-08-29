class SlingShot{
    constructor(b1,p2){
        //properties
        var options = {
            bodyA : b1,
            pointB : p2,
            length : 20,
            stiffness : 0.05
        }
        //creates constraint
        this.body = Constraint.create(options);
        //images
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        //points
        this.pointB = p2;
        //adds body to world
        World.add(myWorld,this.body);
    }
    display(){
        //images
        image(this.sling1,140,150);
        image(this.sling2,110,113);

        if(this.body.bodyA){   
            //position
            var p1 = this.body.bodyA.position;
            var p2 = this.pointB;
            
            push();
            //back of bird
            strokeWeight(5);
            stroke("#301608");
            //line(p1.x,p1.y,p2.x,p2.y);
            if(p1.x< 110){
                line(p1.x-20,p1.y,p2.x+20,p2.y);
                line(p1.x-20,p1.y,p2.x-20,p2.y);
                image(this.sling3,p1.x-20,p1.y,10,20);
            }else{
                line(p1.x+20,p1.y,p2.x+20,p2.y);
                line(p1.x+20,p1.y,p2.x-20,p2.y);
                image(this.sling3,p1.x+20,p1.y,10,20);
            }
            pop();
        }
    }
    //sets all the properties of bird to false
    fly(){
        this.body.bodyA = null;
    }
    //attaches and sets all properties to true
    attach(b){
        this.body.bodyA = b;
    }
}