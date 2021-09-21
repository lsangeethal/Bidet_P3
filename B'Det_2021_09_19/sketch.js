// let shadow rotate(angle)
let shadowAngle = 0;
let wall2Angle = 0;

//part01: grows and shrinks with scale
let part01_width =150;
let part01_Scale = 1;

//circle: dissappears
let circleColor = 255;
let colorChange = 1;
let bgColor = 0;

//ellip change alpha
let ellip_alpha = 255;
let ellip_alphaChange = 1;

//wall1: grows and shrinks
let wall1_width =150;
let wall1_Scale = 1;

//part03: ROTATES
let part03Angle = 0;
//part03: alpha change
let part03_alpha = 255;
let part03_alphaChange = 1;

//front:scale
let front_width =150;
let front_Scale = 1;

function setup() {
  createCanvas(600, 600);
  angleMode(degrees);
}

function draw() {
  background(254,254,254);

  //shadow
  push()
  fill(3,3,3)

  rotate(shadowAngle);
   beginShape();
  vertex(0, 508)
   bezierVertex(105, 445, 344, 554,335, 552)
  bezierVertex(360, 581, 316, 600, 134, 600)
  bezierVertex(29, 563, 48, 539, 0, 508, 0, 508)
   endShape();
  pop()

  shadowAngle = shadowAngle + 55;

//wall1
  push()
  if (wall1_width > 200 || wall1_width < 10) {
    wall1_Scale = wall1_Scale* -1 ;
  }
  wall1_width = wall1_width + wall1_Scale;
fill(53,53,53)
  quad(wall1_width, 508, 473, 405, 473, wall1_width, wall1_width,wall1_width)
  pop()
//wall2
  push()
  fill(209,149,90)
  translate(0,1)
  rotate(wall2Angle);
  quad(473, 292, 473, 0, 600, 0, 600, 341)
  pop()
wall2Angle = wall2Angle +55

  //part03
  push()
  if (part03_alpha > 255 || part03_alpha < 0) {
  part03_alphaChange = -part03_alphaChange;
}
part03_alpha = part03_alpha + part03_alphaChange;
  fill(159,ellip_alpha, 242)
translate(0, 0);
rotate(part03Angle)
  rect(103, 187, 154, 154);
  pop()
part03Angle += radians(1)

  //front
  push()
  fill(0,0,0)
  translate(325,100)
  if (front_width > 200 || front_width < 10) {
    front_Scale = front_Scale* -1 ;
  }
  front_width = front_width + front_Scale;
  beginShape();
  vertex(front_width , front_width );
  bezierVertex(234, 554, 252, 558, 276, 562);
  bezierVertex(288, 563, 315, 562, 324, 560);
  bezierVertex(374, 541, 337, 535, 335, 487);
  bezierVertex(front_width, front_width, front_width,front_width, 355, 431);
  bezierVertex(380, 404, 395, 376, 398, 356);
  bezierVertex(front_width, 343, 361, 330, 320, 318);
  bezierVertex(281, 314,front_width, 335, front_width, front_width);
  bezierVertex(front_width, 342, 225, 552);
 endShape();
 pop()

  //part01
  push()
  fill(228,228,228, 240)
  if (part01_width > 200 || part01_width < 10) {
    part01_Scale = part01_Scale* -1 ;
  }
  part01_width = part01_width + part01_Scale;

  beginShape();
  vertex(part01_width, part01_width);
  bezierVertex(part01_width, part01_width, part01_width, part01_width,part01_width,part01_width);
  bezierVertex(part01_width, part01_width, part01_width, part01_width, part01_width, part01_width);
  bezierVertex(90, 505, 94, 508, 137, 524);
  bezierVertex(185, 544, 213, 554, 248, 557);
  bezierVertex(261, 538, 265, 498, 264, 463);
  bezierVertex(279, 426, 301, 406, 331, 378);
  bezierVertex(part01_width, part01_width, part01_width, part01_width, part01_width, part01_width, part01_width);
  bezierVertex(165, 346, 130, 336, 114, 331);
  bezierVertex(108, 326, 105, 315, 107, 291);
  bezierVertex(110, 248, 111, 224, 109, 212);
  bezierVertex(106, 207, 85, 199, 52, 195);
  endShape();
  pop()

  // Part 4- Lid
  push()
  fill(191,191,191)
  beginShape();
  vertex(48, 195);
  bezierVertex(65, 196, 87, 201, 101, 207);
  bezierVertex(119, 205, 163, 197, 202, 193);
  bezierVertex(244, 191, 263, 188, 250, 175);
  bezierVertex(221, 162, 156, 153, 117, 157);
  bezierVertex(81, 164, 53, 184, 48, 195);
  endShape();
  pop()

  // Part 5- seat shape1
  push()
  fill(255,255,255)
  beginShape();
  vertex(134, 310);
  bezierVertex(193, 247, 258, 180, 312, 152);
  bezierVertex(350, 140, 378, 145, 390, 157);
  bezierVertex(395, 168, 377, 218, 355, 248);
  bezierVertex(316, 289, 238, 318, 134, 310);
  bezierVertex(134, 310);
  endShape();
  pop()

//circle
  push();
  if (circleColor > 255 || circleColor < bgColor) {
  colorChange = -colorChange;
}
circleColor = circleColor + colorChange;
noStroke();
fill(circleColor)

  translate(width / 3, height / 3);
  rotate(118.7);
  ellipse(55, 80, 210, 80);
  pop();

// ellip
  //Part 5_ seat shape2_ellipse
  push();
  if (ellip_alpha > 255 || ellip_alpha < 0) {
  ellip_alphaChange = -ellip_alphaChange;
}
ellip_alpha = ellip_alpha + ellip_alphaChange;
  fill(254,254, ellip_alpha)
  translate(width / 3, height / 3);
  rotate(119.54);
  ellipse(100, 129, 215, 40);
  pop();

  //Part 5- back
  push()
  fill(226,226,226)
  beginShape();
  vertex(140, 338);
  bezierVertex(174, 328, 219, 300, 290, 313);
  bezierVertex(319, 318, 274, 326, 197, 341);
  bezierVertex(134, 341, 122, 338);
  endShape();
  pop()

  //Part 5- seat shape2
  beginShape();
  vertex(159, 328);
  bezierVertex(179, 298, 228, 287, 251, 277);
  bezierVertex(328, 255, 383, 244, 401, 246);
  bezierVertex(409, 254, 406, 263, 360, 289);
  bezierVertex(328, 301, 280, 313, 197, 327);
  bezierVertex(197, 327, 177, 330, 159, 328);
  bezierVertex();
  endShape();

// ellip2
  //Part 5_ seat shape2_ellipse
  push();
fill(95,95,95)
  translate(width / 3, height / 3);
  rotate(119.13);
  ellipse(60, 110, 200, 35);
  pop();

  //curve finish
  bezier(340, 378, 346, 379, 400, 376, 394, 360);

 //shade 3
   beginShape();

  vertex(148, 310);
  bezierVertex(249, 182, 325, 148, 327, 148)
  bezierVertex(299, 150, 249, 196, 168, 269)
  bezierVertex(150, 301, 139, 250, 148, 310)
    endShape();

  // handle 2
  beginShape();
  vertex(128, 305);
  bezierVertex(174, 339, 198, 353, 213, 354);
  bezierVertex(240, 351, 226, 362, 195, 365);
  bezierVertex(185, 365, 138, 344, 128, 335);
  bezierVertex(126, 320, 125, 313, 128, 305);
  endShape();

  // handle 1

  beginShape();
  vertex(128, 306);
  bezierVertex(159, 290, 185, 322, 228, 354);
  bezierVertex(213, 356, 196, 354, 179, 347);
  bezierVertex(166, 337, 142, 319, 128, 306);
  endShape();

  //Shade1
    push()
  fill(0,0,0, 180)
  beginShape();
  vertex(324, 385);
  bezierVertex(300, 415, 344, 433, 335, 438);
  bezierVertex(312, 447, 260, 539, 261, 514);
  bezierVertex(265, 488, 260, 438, 265, 425);
  bezierVertex(284, 413, 298, 405, 324, 385);
  endShape();
  pop()

//shade2
  push()
  fill(0,0,0, 80)
  beginShape();
  vertex(78, 382);
  bezierVertex(97, 397, 141, 392, 178, 397);
  bezierVertex(100, 399, 98, 414, 78, 382);
  endShape();
  pop()

 //shade4
  push()
  fill(0,0,0)
  beginShape();
  vertex(95, 204)
  bezierVertex(236, 192, 296, 180, 121, 210)
  bezierVertex(108, 210, 100, 207, 95, 204)
  endShape();
  pop()
  //button
  rect(121, 159, 19, 5)
  ellipse(130, 159,20, 4 )
}
