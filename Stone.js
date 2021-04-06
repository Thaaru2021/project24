class stone{
	constructor(x,y,r)
	{
		var options = {
			'density':12,
			'friction': 0.9,
			'restitution':0.8
		  };
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.width,this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			

			pop()
	}

}