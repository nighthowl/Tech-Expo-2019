const size = 70;

class Ball {
    constructor() {
        this.location = createVector(width/2, height/2);
        this.speed = createVector(2, 0);
    }

    display() {
        fill(127);
        stroke(127);
        strokeWeight(1);
        console.log(this.location);
        ellipse(this.location.x, this.location.y, size);
    }

    update() {
        this.location.add(this.speed);
    }
}