/*
The case of the Python Syndicate
Stage 1

Officer: 3135863
CaseNum: 301-0-34107702-3135863

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var rockyKrayImg;
var annaKarpinskiImg;
var pawelKarpinskiImg;
var robbieKrayImg;
var countessHamiltonImg;
var cecilKarpinskiImg;



//declare your new variables below
var annaKarpinskiXPosition = 408;
var annaKarpinskiYPosition = 40;
var rockyKrayXPosition = 115;
var rockyKrayYPosition = 40;
var pawelKarpinskiXPosition = 701; 
var pawelKarpinskiYPosition = 40;
var robbieKrayXPosition = 115; 
var robbieKrayYPosition = 309;
var countessHamiltonXPosition = 408; 
var countessHamiltonYPosition = 309;
var cecilKarpinskiXPosition = 701;
var cecilKarpinskiYPosition = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rockyKrayImg = loadImage("krayBrothers1.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(annaKarpinskiImg, annaKarpinskiXPosition, annaKarpinskiYPosition);

	image(rockyKrayImg, rockyKrayXPosition, rockyKrayYPosition);
    image(pawelKarpinskiImg, pawelKarpinskiXPosition,
          pawelKarpinskiYPosition);
	image(robbieKrayImg, robbieKrayXPosition,
          robbieKrayYPosition);
	image(countessHamiltonImg, countessHamiltonXPosition,
          countessHamiltonYPosition);
	image(cecilKarpinskiImg, cecilKarpinskiXPosition,
          cecilKarpinskiYPosition);

}