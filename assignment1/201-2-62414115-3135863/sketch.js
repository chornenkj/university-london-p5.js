/*
201 - The case of Judge Hopper
Stage 3 - The dressing room

Officer: 3135863
CaseNum: 201-2-62414115-3135863

No sooner do you enter the lobby of the Cobol Theatre than the sound of gunshots leads you running towards the backstage area. You head towards a swinging door, the star dressing room. Sure enough you find a series of bullet holes peppered across the mirror. You are about to turn round and resume your chase when you notice a familiar pattern in the holes. Frantically you grab some lipstick from the dresser and draw on the mirror.

Use the vertex function to complete the pattern.


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

    // write the code to join the bullet holes below
    beginShape();
    vertex(592,157);
    vertex(522,143);
    vertex(419,122);
    vertex(355,184);
    vertex(447,207);
    vertex(577,103);
    
//    vertex(522,143);
//    vertex(447,207);
//    vertex(355,184);
//    vertex(419,122);
//    vertex(522,143);
//    vertex(592,157);
//    vertex(577,103);
//    vertex(522,143);
    endShape();

}
