/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 3135863
CaseNum: 201-3-61451231-3135863

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(426,575);
    vertex(430,490);
    vertex(395,440);
    vertex(400,360);
    vertex(500,310);
    vertex(470,280);
    vertex(500,250);
    vertex(580,300);
    vertex(560,350);
    vertex(780,420);
    vertex(810,480);
    vertex(790,560);
    vertex(510,490);
    vertex(470,575);
//    vertex();
//    vertex();
    endShape();

}
