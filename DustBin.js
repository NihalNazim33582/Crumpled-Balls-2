class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
		
		this.image=loadImage("dustbingreen.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			rectMode(CENTER)
			strokeWeight(0);
			stroke(230)
			fill("white")
			rect(posLeft.x, posLeft.y,this.wallThickness, this.dustbinHeight);
			pop()

			push();
			rectMode(CENTER)
			strokeWeight(0);
			fill("white")
			rect(posRight.x, posRight.y,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			rectMode(CENTER)
			strokeWeight(0);
			fill("white")
			image(this.image, posBottom.x-100,posBottom.y-this.dustbinHeight/2-100,this.dustbinWidth, this.dustbinHeight)
			pop()
			
	}

}