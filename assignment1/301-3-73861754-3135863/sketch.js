/*
The case of the Python Syndicate
Stage 4

Officer: 3135863
CaseNum: 301-3-73861754-3135863

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var countess_hamilton_img;
var robbie_kray_img;
var bones_karpinski_img;
var rocky_kray_img;
var cecil_karpinski_img;
var pawel_karpinski_img;

var cecil_karpinski_object;


//declare your new objects below

var countess_hamilton_object;
var robbie_kray_object;
var bones_karpinski_object;
var rocky_kray_object;
var pawel_karpinski_object;

//var countess_hamilton_pos_x = 115;
//var countess_hamilton_pos_y = 40;
//var robbie_kray_pos_x = 408;
//var robbie_kray_pos_y = 40;
//var bones_karpinski_pos_x = 701;
//var bones_karpinski_pos_y = 40;
//var rocky_kray_pos_x = 115;
//var rocky_kray_pos_y = 309;
//var pawel_karpinski_pos_x = 701;
//var pawel_karpinski_pos_y = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countess_hamilton_img = loadImage("countessHamilton.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	cecil_karpinski_object = {
		x: 408,
		y: 309,
		image: cecil_karpinski_img
	};

    countess_hamilton_object = {
		x: 115,
		y: 40,
		image: countess_hamilton_img
	};

    robbie_kray_object = {
		x: 408,
		y: 40,
		image: robbie_kray_img
	};

    bones_karpinski_object = {
		x: 701,
		y: 40,
		image: bones_karpinski_img
	};

    rocky_kray_object = {
		x: 115,
		y: 309,
		image: rocky_kray_img
	};

    pawel_karpinski_object = {
		x: 701,
		y: 309,
		image: pawel_karpinski_img
	};




	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(countess_hamilton_object.image, countess_hamilton_object.x, countess_hamilton_object.y);
	image(robbie_kray_object.image, robbie_kray_object.x, robbie_kray_object.y);
	image(bones_karpinski_object.image, bones_karpinski_object.x, bones_karpinski_object.y);
	image(rocky_kray_object.image, rocky_kray_object.x, rocky_kray_object.y);
	image(cecil_karpinski_object.image, cecil_karpinski_object.x, cecil_karpinski_object.y);
	image(pawel_karpinski_object.image, pawel_karpinski_object.x, pawel_karpinski_object.y);


}