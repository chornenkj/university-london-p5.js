function setup()
{
	createCanvas(800, 600);
    fill(0);
    stroke(0);
    strokeWeight(5);
}



function draw()
{

}

function mousePressed()
{
    point(mouseX,mouseY);
    curX = mouseX;
    curY = mouseY;
}

function mouseDragged()
{
//    point(mouseX,mouseY);
//    line(curX,curY,mouseX,mouseY);
}

function mouseReleased()
{
    line(curX,curY,mouseX,mouseY);
}