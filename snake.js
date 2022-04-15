function Snake() {
this.x = 0;
this.y = 0;
this.xMove = scale * 1;
this.yMove = 0;
this.eaten = 0;
this.tail = [];

this.reset = function() {
    this.x = 0; this.y = 0;
    this.xMove = scale * 1;
    this.yMove = 0;
    this.eaten = 0;
    this.tail = [];
}
this.draw = function(){  //tail drawing
    ctx.fillStyle = "rgb(0,0,0";
    for(let i = 0 ; i < this.tail.length; i++){
        ctx.fillStyle = "#FF4FFF";
        ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }
    ctx.fillStyle = "#FFFFFF"; //head drawing
    ctx.fillRect(this.x, this.y, scale, scale)
}
this.eatFood = function(food){ //eating food, ofc
    if (this.x === food.x && this.y === food.y) {
        this.eaten++;
        return true;
        }
        return false;
}
this.selfBite = function() {
    for(let i = 0; i < this.tail.length; i++){
        if(this.x === this.tail[i].x && this.y === this.tail[i].y){
            this.xMove = 0; 
            this.yMove = 0;
            Skull();
            setTimeout(() => {
                this.reset();
            }, 1000);
            if(debugFlag == true){console.log('bite')};
    }
}
}
    
this.update = function(){
    for (let i = 0; i < this.tail.length -1; i++){
        this.tail[i] = this.tail[i+1]
    }
    this.tail[this.eaten - 1] = {x: this.x, y: this.y};

    if(debugFlag == true){console.log(this.tail.length)};

    this.x += this.xMove;
    this.y += this.yMove;

    if (this.x > canvas.width)
    {
        this.x = 0;
    }
    if (this.y > canvas.height)
    {
        this.y = 0;
    }
    if (this.x < 0){
        this.x = canvas.width
    }
    if (this.y < 0){
        this.y = canvas.height;
    }
}
this.changeDirection = function(direction) {
    switch(direction){
        case 'Right':
            this.xMove = scale * 1;
            this.yMove = 0;
            break;
        case 'Down':
            this.xMove = 0;
            this.yMove = scale * 1;
            break;
        case 'Up':
            this.xMove = 0;
            this.yMove = -scale * 1;
            break;
        case 'Left':
            this.xMove = -scale * 1;
            this.yMove = 0;
            break;
    }    
    }
}