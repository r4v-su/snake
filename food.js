export default class Food {

    constructor({scale, cols, rows, debugFlag, ctx}) {
        this.scale = scale;
        this.cols = cols;
        this.rows = rows;
        this.debugFlag = debugFlag;
        this.ctx = ctx;
        this.x;
        this.y;
    }
    
    randomLocation() {
        this.x = (Math.floor(Math.random() * this.cols - 1) + 1 ) * this.scale;
        this.y = (Math.floor(Math.random() * this.rows - 1) + 1) * this.scale;
        if(this.debugFlag == true){console.log(this)};
    }

    draw() {
        this.ctx.fillStyle = "#FF4444";
        this.ctx.fillRect(this.x, this.y, this.scale, this.scale);
    }
}