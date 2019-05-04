let capture;
let poseNet;
let poses = [];
let skeletons = [];
let ball;

function setup() {
    createCanvas(1920, 1080);
    capture = createCapture(VIDEO);
    capture.size(1280, 720);
    capture.hide();
    ball = new Ball();
    poseNet = ml5.poseNet(capture)
    poseNet.on('pose', function (results) {
        poses = results;
    });
}

function draw() {
    background(255);
    translate(width,0);
    scale(-1.0,1.0);
    ball.update();
    image(capture, 0, 0, width, height);
    ball.display();
    drawArms();
}


function drawArms() {
    for(let i = 0; i < poses.length; i++) {
        stroke(112, 14, 87);
        strokeWeight(5);
        let poseMultiplier = 1.5; 
        let pose = poses[i].pose;
        let leftShoulder, rightShoulder, leftElbow, rightElbow, leftWrist, rightWrist;
        if(pose.keypoints[5].score > 0.2){leftShoulder = pose.keypoints[5];}
        if(pose.keypoints[6].score > 0.2){rightShoulder = pose.keypoints[6];}
        if(pose.keypoints[7].score > 0.2){leftElbow = pose.keypoints[7];}
        if(pose.keypoints[8].score > 0.2){rightElbow = pose.keypoints[8];}
        if(pose.keypoints[9].score > 0.2){leftWrist = pose.keypoints[9];}
        if(pose.keypoints[10].score > 0.2){rightWrist = pose.keypoints[10];}
        if(leftShoulder && leftElbow) {
            line(leftShoulder.position.x*poseMultiplier, leftShoulder.position.y*poseMultiplier, leftElbow.position.x*poseMultiplier, leftElbow.position.y*poseMultiplier);
        } if(rightShoulder && rightElbow) {
            line(rightShoulder.position.x*poseMultiplier, rightShoulder.position.y*poseMultiplier, rightElbow.position.x*poseMultiplier, rightElbow.position.y*poseMultiplier);
        } if(leftElbow && leftWrist) {
            line(leftElbow.position.x*poseMultiplier, leftElbow.position.y*poseMultiplier, leftWrist.position.x*poseMultiplier, leftWrist.position.y*poseMultiplier);
        } if(rightElbow && rightWrist) {
            line(rightElbow.position.x*poseMultiplier, rightElbow.position.y*poseMultiplier, rightWrist.position.x*poseMultiplier, rightWrist.position.y*poseMultiplier);
        }
    }
}