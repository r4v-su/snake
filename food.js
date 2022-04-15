function Food () {
    this.x;
    this.y;
    
    this.randomLocation = function() {
        this.x = (Math.floor(Math.random() * cols - 1) + 1 ) * scale;
        this.y = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        if(debugFlag == true){console.log(this)};
    }
    this.draw = function() {
        ctx.fillStyle = "#FF4444";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}