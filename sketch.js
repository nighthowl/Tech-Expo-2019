let capture;

function setup() {
    createCanvas(1280, 720);
    capture = createCapture(VIDEO);
    capture.size(1280, 720);
    capture.hide();
}

function draw() {
    background(255);
    image(capture, 0, 0, 1920, 1080);
}