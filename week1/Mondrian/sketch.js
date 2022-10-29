function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{

	//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the red rectangle 
	rect(100, 50, 600, 600);
    
    //drawing blue rectangle
    fill(0,0,255);
    rect(170,350,600,600)
    
    //drawing yellow rectangle
    fill(255,255,0)
    rect(520,-10,600,360)
    
    //drawing another yellow rectangle
    rect(-10,650,180,600)
    
    //drawing black lines
    noFill()
    rect(-10,-10,270,360)

}