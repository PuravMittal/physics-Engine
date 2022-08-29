class Pig extends Parent{
    constructor(x,y){
        super(x,y,50,50);
        //images
        this.image = loadImage("sprites/enemy.png");
        this.visibility = 255;
        
    }
    display(){
        //console.log(this.body.speed);
        //if speed of body is greater than 1
        if(this.body.speed < 1){
            super.display();
        }else{
            push ()
            //removes physics body from world
            World.remove(myWorld,this.body);
            //visibilty reduces by 5
            this.visibility = this.visibility - 5;
            tint(255,this.visibility);
            image(this.image , this.body.position.x , this.body.position.y ,50,50);
            pop ();
        }
    }
    
    score(){
        if(this.visibility >= -500 && this.visibility<= 0){
            score ++ ;
        }
    }
}   
    