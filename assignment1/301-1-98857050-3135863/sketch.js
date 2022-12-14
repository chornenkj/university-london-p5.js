/*
The case of the Python Syndicate
Stage 2


Officer: 3135863
CaseNum: 301-1-98857050-3135863

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Pawel karpinski

- The variables for Pawel karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Pawel karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var robbie_kray_image;
var lina_lovelace_image;
var pawel_karpinski_image;
var anna_karpinski_image;
var bones_karpinski_image;
var cecil_karpinski_image;


var pawel_karpinski_x_coordinate = 701;
var pawel_karpinski_y_coordinate = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbie_kray_image = loadImage("krayBrothers2.png");
	lina_lovelace_image = loadImage("lina.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawel_karpinski_image, pawel_karpinski_x_coordinate, pawel_karpinski_y_coordinate);

	image(robbie_kray_image, pawel_karpinski_x_coordinate-586, pawel_karpinski_y_coordinate);
	image(lina_lovelace_image, pawel_karpinski_x_coordinate-293, pawel_karpinski_y_coordinate);
	image(anna_karpinski_image, pawel_karpinski_x_coordinate-586, pawel_karpinski_y_coordinate+269);
	image(bones_karpinski_image, pawel_karpinski_x_coordinate-293, pawel_karpinski_y_coordinate+269);
	image(cecil_karpinski_image, pawel_karpinski_x_coordinate, pawel_karpinski_y_coordinate+269);

}