class Mango 
{
    constructor(x,y)
    {
        var options= 
        { 
            isStatic : true,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
        this.radius = 30;
        this.body = Bodies.circle(x,y, 15, options);
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }

    display()
    {
       image(this.image, this.body.position.x,this.body.position.y, 20,20);
       
    }

    detectCollision(Stone, Mango)
    {
        var mangoBodyPosition = Mango.body.position;
        var stoneBodyPosition = Stone.body.position;

        var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y)
           if(distance<=Mango.r+Stone.r)
           {
               Matter.body.setStatic(Mango.body,false);
           }
    }

}