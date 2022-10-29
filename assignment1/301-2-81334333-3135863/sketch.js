/*
The case of the Python Syndicate
Stage 3


Officer: 3135863
CaseNum: 301-2-81334333-3135863

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Countess hamilton has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Countess hamilton object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var rocky_kray_image;
var cecil_karpinski_image;
var pawel_karpinski_image;
var countess_hamilton_image;
var bones_karpinski_image;
var lina_lovelace_image;

var countess_hamilton_object;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rocky_kray_image = loadImage("krayBrothers1.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	lina_lovelace_image = loadImage("lina.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	countess_hamilton_object = {
		x: 115,
		y: 309,
		image: countess_hamilton_image
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(countess_hamilton_object.image, countess_hamilton_object.x, countess_hamilton_object.y);

	image(rocky_kray_image, countess_hamilton_object.x, countess_hamilton_object.y-269);
	image(cecil_karpinski_image, countess_hamilton_object.x+293, countess_hamilton_object.y-269);
	image(pawel_karpinski_image, countess_hamilton_object.x+586, countess_hamilton_object.y-269);
	image(bones_karpinski_image, countess_hamilton_object.x+293, countess_hamilton_object.y);
	image(lina_lovelace_image, countess_hamilton_object.x+586, countess_hamilton_object.y);

}