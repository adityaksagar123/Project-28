class Stone 
{
    constructor(x,y)
    {
        var options= 
        { 
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
        this.radius = 30;
        this.body = Bodies.circle(x,y, 15, options);
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }

    display()
    {
       image(this.image, this.body.position.x,this.body.position.y, 20,20);
       
    }
}