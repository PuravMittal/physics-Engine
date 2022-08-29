class Bird extends Parent{
    constructor(x,y){
        super(x,y,50,50);
      //images 
        this.image = loadImage("sprites/bird.png");
        this.smokeImage = loadImage("sprites/smoke.png");
        //array trajectory
        this.trajectory = []
        
    }
    display(){
    
      //var pos = this.body.position;
      //pos.x = mouseX;
      // pos.y = mouseY;
      super.display();
      // console.log(this.body.velocity.x);        
      //birds x position
      
      //if x velocity and position of bird crosses the limit
      if( this.body.velocity.x >10 && this.body.position.x > 200){
          //new array x is created and birds x and y iposition is pushed into bird 
          var x = [this.body.position.x, this.body.position.y];
          //array x is pushed in trajectory array
          this.trajectory.push(x);
      }
        
      //creates cloud at intervals till trajectory array
     
      for(var i=0; i<this.trajectory.length; i++){
        push();
        //displays trajectory's image first and second element
        image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        pop();
      }
      
    }
}
