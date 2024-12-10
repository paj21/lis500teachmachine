// LIS 500 - Teachable Machine Code
// Adapted from https://thecodingtrain.com/tracks/teachable-machine/teachable-machine/1-image-classification
// Parker Johnston, Minh Vu, Janet Seidl

// Video
let video;

// Setup
let modelURL = 'https://teachablemachine.withgoogle.com/models/Rl2QP6nX5/';
let label = 'Waiting...';
let classifier;


// STEP 1: Load the model!

function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
  let canvas = createCanvas(640, 520);
  canvas.parent('sketch-container');
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyVideo();
}

function classifyVideo() {
  classifier.classify(video, gotResults);
}

// STEP 2 classify!

function draw() {
  background(0);
  
  // Draw the video
  image(video, 0, 0, width, height*0.9);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width/2, height-24);
}


// STEP 3: Get the classification!
function gotResults(error, results) {
  if (error) {
    console.log("Error in gotResults:");
    console.log(error);
    return;
  }
  //If here, no error
  label = results[0].label;
  classifyVideo();
}
