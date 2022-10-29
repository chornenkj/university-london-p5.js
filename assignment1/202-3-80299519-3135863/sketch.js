/*

Officer: 3135863
CaseNum: 202-3-80299519-3135863

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce pink filled text with magenta outline in RonsFont font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(617,443);
	textSize(28);
}

function draw()
{
	background(255);

	fill(255,192,203);
	stroke(255,0,255);
	textFont(RonsFont);
	text("ignore", 171,84);
	text("for", 320,146);
	text("safe", 247,174);
	push();
	stroke(255,0,0);
//	text("out.", 40,174);
//	text("?", 522,114);
//	text("?", 89,114);
	pop();
	textFont(Diggity);
//	text("I", 163,114);
	stroke(255,0,0);
	textFont(Ballpointprint);
//	text("much", 277,202);
	fill(255,255,0);
	stroke(0,255,0);
	textFont(Melissa);
//	text("Forev", 15,291);
	fill(255,165,0);
	stroke(255,0,255);
	textFont(RonsFont);
//	text("Perhaps", 14,146);
	push();
	fill(255,192,203);
	stroke(0,0,0);
	textFont(Melissa);
//	text("Are", 321,114);
	pop();
	textFont(Ballpointprint);
//	text("the", 112,235);
	textFont(Melissa);
//	text("break", 391,146);
	fill(0,255,255);
	textFont(RonsFont);
//	text("we", 103,146);
	fill(255,192,203);
	stroke(0,0,0);
	textFont(Diggity);
//	text("Bob,", 124,28);
	push();
	textFont(RonsFont);
//	text("a", 369,146);
//	text("You", 324,174);
	pop();
	textFont(Ballpointprint);
//	text("secrets,", 22,235);
	push();
	stroke(255,0,255);
	textFont(RonsFont);
	text("money", 14,114);
	pop();
	stroke(0,255,0);
	textFont(RonsFont);
//	text("not", 154,202);
//	text("can", 429,202);
	push();
	stroke(255,0,255);
	textFont(Ballpointprint);
//	text("I", 395,202);
	pop();
	textFont(Melissa);
//	text("are", 374,174);
//	text("The", 555,202);
	fill(255,165,0);
	textFont(Diggity);
//	text("sometimes.", 18,202);
//	text("these", 249,84);
//	text("x", 67,347);
	stroke(0,0,255);
	textFont(Ballpointprint);
//	text("can", 26,84);
	textFont(Melissa);
//	text("er", 57,291);
//	text("so,", 132,114);
	fill(0,255,255);
	stroke(255,0,255);
//	text("of", 572,84);
//	text("how", 240,202);
	fill(255,255,0);
//	text("Is", 89,174);
	stroke(0,0,255);
	textFont(Diggity);
//	text("rling", 81,28);
	fill(255,192,203);
	textFont(Ballpointprint);
//	text("silence.", 161,235);
	push();
	stroke(255,0,255);
	textFont(Diggity);
//	text("guarded", 435,174);
	pop();
	textFont(Melissa);
//	text("can", 177,114);
//	text("relationship", 153,174);
	stroke(255,0,255);
	textFont(RonsFont);
	text("go", 227,146);
	fill(255,255,0);
	textFont(Diggity);
//	text("all", 13,174);
	stroke(255,0,0);
//	text("so", 405,174);
	fill(0,255,255);
	stroke(0,0,0);
	textFont(Melissa);
//	text("this", 553,146);
//	text("contin", 310,84);
//	text("sure", 201,202);
	fill(255,165,0);
	textFont(RonsFont);
//	text("should", 144,146);
	stroke(0,255,0);
	textFont(Melissa);
//	text("If", 109,114);
//	text("ual", 355,84);
	stroke(255,0,0);
//	text("cash.", 274,114);
//	text("I'm", 123,202);
	fill(0,255,255);
	stroke(0,0,0);
	textFont(Diggity);
//	text("da", 59,28);
	textFont(RonsFont);
//	text("you", 355,114);
	stroke(255,0,0);
	textFont(Ballpointprint);
//	text("My", 15,28);
	fill(255,255,0);
	textFont(Melissa);
//	text("delays.", 381,84);
//	text("Are", 439,84);
	fill(255,165,0);
	textFont(Diggity);
//	text("Daisy", 10,347);
	push();
	fill(255,255,0);
	stroke(0,0,255);
	textFont(RonsFont);
//	text("yours,", 79,291);
	pop();
	textFont(RonsFont);
//	text("longer", 94,84);
	fill(0,255,255);
	stroke(0,255,0);
	textFont(Ballpointprint);
//	text("our", 114,174);
	stroke(0,0,255);
	textFont(RonsFont);
//	text("send", 210,114);
	fill(255,165,0);
	stroke(0,0,0);
//	text("and", 439,146);
	stroke(255,0,255);
	textFont(Diggity);
//	text("?", 302,174);
	fill(0,255,255);
	stroke(0,255,0);
//	text("avoiding", 404,114);
	fill(255,165,0);
	stroke(0,0,0);
	textFont(Melissa);
//	text("no", 70,84);
	fill(255,255,0);
	textFont(RonsFont);
//	text("you", 473,84);
	stroke(0,0,255);
	textFont(Melissa);
//	text("short", 522,84);
	stroke(255,0,255);
	textFont(Ballpointprint);
//	text("more", 336,202);
	fill(255,165,0);
	stroke(0,255,0);
	textFont(Diggity);
//	text("I", 12,84);
	textFont(RonsFont);
//	text("me", 480,114);
	textFont(Ballpointprint);
//	text("take", 477,202);
//	text("away", 260,146);
	fill(255,255,0);
	stroke(0,0,255);
	textFont(RonsFont);
//	text("sort", 494,146);
//	text("?", 535,202);



}
