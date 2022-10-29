/*

Officer: 3135863
CaseNum: 303-2-39112863-3135863

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is being dragged:
	- Make Cryptic_Vault_Value0 equal to the value of mouseY
	- Use the 'max' function to prevent Cryptic_Vault_Value0 from falling below 1

	When any key is pressed:
	- Increment Cryptic_Vault_Value1 by 2
	- Use the 'min' function to prevent Cryptic_Vault_Value1 from going above 18

	Whilst the mouse is moving:
	- Make Cryptic_Vault_Value2 equal to the value of mouseY
	- Use the 'constrain' function to prevent Cryptic_Vault_Value2 from falling below 1 and going above 11

	When the mouse button is released:
	- Increment Cryptic_Vault_Value3 by 2
	- Use the 'min' function to prevent Cryptic_Vault_Value3 from going above 17

	When the mouse button is pressed:
	- Make Cryptic_Vault_Value4 equal to the value of mouseX
	- Use the 'min' function to prevent Cryptic_Vault_Value4 from going above 70



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var Cryptic_Vault_Value0;
var Cryptic_Vault_Value1;
var Cryptic_Vault_Value2;
var Cryptic_Vault_Value3;
var Cryptic_Vault_Value4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	Cryptic_Vault_Value0 = 0;
	Cryptic_Vault_Value1 = 0;
	Cryptic_Vault_Value2 = 0;
	Cryptic_Vault_Value3 = 0;
	Cryptic_Vault_Value4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...


function mouseDragged()
{
    console.log('mouseDragged',mouseX,mouseY)
//    Whilst the mouse is being dragged:
//	- Make Cryptic_Vault_Value0 equal to the value of mouseY
//	- Use the 'max' function to prevent Cryptic_Vault_Value0 from falling below 1
//
    Cryptic_Vault_Value0 = mouseY;
    Cryptic_Vault_Value0 = max(Cryptic_Vault_Value0,1);
}

function keyPressed()
{
    console.log('keyPressed',key)
//	When any key is pressed:
//	- Increment Cryptic_Vault_Value1 by 2
//	- Use the 'min' function to prevent Cryptic_Vault_Value1 from going above 18
//
    Cryptic_Vault_Value1 +=2;
    Cryptic_Vault_Value1 = min(Cryptic_Vault_Value1,18);
}

function mouseMoved()
{
    console.log('mouseMoved',mouseX,mouseY)
    
//	Whilst the mouse is moving:
//	- Make Cryptic_Vault_Value2 equal to the value of mouseY
//	- Use the 'constrain' function to prevent Cryptic_Vault_Value2 from falling below 1 and going above 11
//
    Cryptic_Vault_Value2 = mouseY;
    Cryptic_Vault_Value2 = constrain(Cryptic_Vault_Value2,1,11);
}

function mouseReleased()
{
    console.log('mouseReleased',mouseX,mouseY)
    
//	When the mouse button is released:
//	- Increment Cryptic_Vault_Value3 by 2
//	- Use the 'min' function to prevent Cryptic_Vault_Value3 from going above 17
//
    Cryptic_Vault_Value3 += 2;
    Cryptic_Vault_Value3 = min(Cryptic_Vault_Value3,17);
}

function mousePressed()
{
    console.log('mousePressed',mouseX,mouseY)
    
//	When the mouse button is pressed:
//	- Make Cryptic_Vault_Value4 equal to the value of mouseX
//	- Use the 'min' function to prevent Cryptic_Vault_Value4 from going above 70
    Cryptic_Vault_Value4 = mouseX;
    Cryptic_Vault_Value4 = min(Cryptic_Vault_Value4,70)
}



///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,Cryptic_Vault_Value0, 17);
	pop();

	push();
	translate(120,380);
	drawDial(140,Cryptic_Vault_Value1, 23);
	pop();

	push();
	translate(280,170);
	drawDial(140,Cryptic_Vault_Value2, 16);
	pop();

	push();
	translate(280,380);
	drawDial(140,Cryptic_Vault_Value3, 21);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(Cryptic_Vault_Value4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
