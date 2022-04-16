export default class Snake {

    constructor({scale, cols, rows, debugFlag, canvas, ctx}) {
        this.scale = scale;
        this.cols = cols;
        this.rows = rows;
        this.debugFlag = debugFlag;
        this.canvas = canvas;
        this.ctx = ctx;

        this.x = 0;
        this.y = 0;
        this.xMove = scale * 1;
        this.yMove = 0;
        this.eaten = 0;
        this.tail = [];
    }

reset() {
    this.x = 0; this.y = 0;
    this.xMove = this.scale * 1;
    this.yMove = 0;
    this.eaten = 0;
    this.tail = [];
}

draw(){  //tail drawing
    this.ctx.fillStyle = "rgb(0,0,0";
    for(let i = 0 ; i < this.tail.length; i++){
        this.ctx.fillStyle = "#FF4FFF";
        this.ctx.fillRect(this.tail[i].x, this.tail[i].y, this.scale, this.scale);
    }
    this.ctx.fillStyle = "#FFFFFF"; //head drawing
    this.ctx.fillRect(this.x, this.y, this.scale, this.scale)
}

eatFood(food){ //eating food, ofc
    if (this.x === food.x && this.y === food.y) {
        this.eaten++;
        return true;
        }
        return false;
}
selfBite() {
    for(let i = 0; i < this.tail.length; i++){
        if(this.x === this.tail[i].x && this.y === this.tail[i].y){
            this.xMove = 0; 
            this.yMove = 0;
            Skull();
            setTimeout(() => {
                this.reset();
            }, 1000);
            if(this.debugFlag == true){console.log('bite')};
    }
}
}
    
update(){ //var 
    //this.tail.length
    for (let i = 0; i < this.tail.length -1; i++){
        this.tail[i] = this.tail[i+1]
    }
    this.tail[this.eaten - 1] = {x: this.x, y: this.y};
    if(this.debugFlag == true){console.log(this.tail.length)};

    this.x += this.xMove;
    this.y += this.yMove;

    if (this.x > this.canvas.width)
    {
        this.x = 0;
    }
    if (this.y > this.canvas.height)
    {
        this.y = 0;
    }
    if (this.x < 0){
        this.x = this.canvas.width
    }
    if (this.y < 0){
        this.y = this.canvas.height;
    }
}

changeDirection(direction) {
    switch(direction){
        case 'Right':
            this.xMove = this.scale * 1;
            this.yMove = 0;
            break;
        case 'Down':
            this.xMove = 0;
            this.yMove = this.scale * 1;
            break;
        case 'Up':
            this.xMove = 0;
            this.yMove = -this.scale * 1;
            break;
        case 'Left':
            this.xMove = -this.scale * 1;
            this.yMove = 0;
            break;
        }    
    }
}