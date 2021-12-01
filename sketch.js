let video;
let poseNet;
let poses = [];
var r;
var words = ["lust", "connect", "touch", "hurt","out","away"];

function setup() {
  createCanvas(400, 250);
  video = createCapture(VIDEO);
  video.size(400, 250);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
  
}

function modelReady() {
  select('#status');
}

function draw() {
  //if u comment from line 29 to line 42 out, also looks cool
   
  
  image(video, 0, 0, 400, 250);
  
  //edited Gene Kogan Perlin Noise https://genekogan.com/code/p5js-perlin-noise/
 
 
  drawKeypoints();
  drawSkeleton();
}

function drawKeypoints()  {
  
  for (let i = 0; i < poses.length; i++) {

    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
     
      let keypoint = pose.keypoints[j];
     
      if (keypoint.score > 0.2) {
        r = random(50,150);
        fill(r, 0, 255);
        noStroke();
        textSize(20);
        let word = random(words);
        text(word,keypoint.position.x, keypoint.position.y);
      }
    }
  }
}


function drawSkeleton() {
  
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
   
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(255, 0, 0);
    
    }
  }
}
