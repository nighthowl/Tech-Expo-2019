const ballSize = 70;

class Ball {
    constructor() {
        this.location = createVector(width/2, height/2);
        this.speed = createVector(10, 5);
    }

    display() {
        fill(127);
        stroke(127);
        strokeWeight(1);
        ellipse(this.location.x, this.location.y, ballSize);
        console.log(this.location);
    }

    update() {
        this.location.add(this.speed);
        if(this.location.x <= ballSize/2 || this.location.x >= width - ballSize/2) {
            this.speed.x = -this.speed.x;
        }
        if(this.location.y <= ballSize/2 || this.location.y >= height - ballSize/2) {
            this.speed.y = -this.speed.y;
        }
    }
}