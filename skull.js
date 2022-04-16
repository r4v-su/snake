/*function Skull() {
ctx.fillStyle = "rgb(255,255,255";
this.top = () => {ctx.fillRect( 6 * scale, 3 * scale, 5 * scale, 1 * scale )};
this.lefSide = () => {ctx.fillRect( 4 * scale, 5 * scale, 1 * scale, 4 * scale )};
this.leftCornerTop = () => {ctx.fillRect( 5 * scale, 4 * scale, 1 * scale, 1 * scale)};
this.leftCornerBottom = () => {ctx.fillRect( 5 * scale, 9 * scale, 1 * scale, 2 * scale)};
this.middle1 = () => {ctx.fillRect( 7 * scale, 10 * scale, 1 * scale, 1 * scale)};
this.middle2 = () => {ctx.fillRect( 9 * scale, 10 * scale, 1 * scale, 1 * scale)};
this.middleBottom = () => {ctx.fillRect( 6 * scale, 11 * scale, 5 * scale, 1 * scale)};
this.rightSide = () => {ctx.fillRect( 12 * scale, 5 * scale, 1 * scale, 4 * scale )};
this.rightCornerTop = () => {ctx.fillRect( 11 * scale, 4 * scale, 1 * scale, 1 * scale )}; 
this.rightCornerBottom = () => {ctx.fillRect( 11 * scale, 9 * scale, 1 * scale, 2 * scale)};
this.leftEye = () => {ctx.fillRect(6 * scale, 7 * scale, 2 * scale, 1.5 * scale )};
this.rightEye = () => {ctx.fillRect(9 * scale, 7 * scale, 2 * scale, 1.7 * scale )};
}
*/



//skull powinien dostac ctx jako parametr lub go stworzyc.
function Skull (){
ctx.fillStyle = "rgb(255,255,255";
    //               X            Y            Sx          Sy
    ctx.fillRect(   28 *  scale,  7  * scale,  5 * scale,  1   * scale); //top
    ctx.fillRect(   26 *  scale,  9  * scale,  1 * scale,  4   * scale); //left side
    ctx.fillRect(   27 *  scale,  8  * scale,  1 * scale,  1   * scale); //left corner top
    ctx.fillRect(   27 *  scale,  13  * scale,  1 * scale,  2   * scale); //left corner top
    ctx.fillRect(   29 *  scale,  14 * scale,  1 * scale,  1   * scale); //middle
    ctx.fillRect(  31 *  scale,  14 * scale,  1 * scale,  1   * scale); //middle
    ctx.fillRect(   28 *  scale,  15 * scale,  5 * scale,  1   * scale); //middle bottom
    ctx.fillRect(  34 *  scale,  9  * scale,  1 * scale,  4   * scale); //right side
    ctx.fillRect(  33 *  scale,  8  * scale,  1 * scale,  1   * scale); //right corner top
    ctx.fillRect(  33 *  scale,  13  * scale,  1 * scale,  2   * scale); //right corner t op
    ctx.fillRect(  28  *  scale,  11  * scale,  2 * scale,  1.5 * scale); //l ey e
    ctx.fillRect(  31 *  scale,  11  * scale,  2 * scale,  1.7 * scale); //r eye
    };
/*
function Skull (){
    ctx.fillStyle = "rgb(255,255,255";
        //         X           Y          Sx          Sy
    ctx.fillRect(   6 *  scale,  3  * scale,  5 * scale,  1   * scale); //top
    ctx.fillRect(   4 *  scale,  5  * scale,  1 * scale,  4   * scale); //left side
    ctx.fillRect(   5 *  scale,  4  * scale,  1 * scale,  1   * scale); //left corner top
    ctx.fillRect(   5 *  scale,  9  * scale,  1 * scale,  2   * scale); //left corner top
    ctx.fillRect(   7 *  scale,  10 * scale,  1 * scale,  1   * scale); //middle
    ctx.fillRect(   9 *  scale,  10 * scale,  1 * scale,  1   * scale); //middle
    ctx.fillRect(   6 *  scale,  11 * scale,  5 * scale,  1   * scale); //middle bottom
    ctx.fillRect(  12 *  scale,  5  * scale,  1 * scale,  4   * scale); //right side
    ctx.fillRect(  11 *  scale,  4  * scale,  1 * scale,  1   * scale); //right corner top
    ctx.fillRect(  11 *  scale,  9  * scale,  1 * scale,  2   * scale); //right corner t op
    ctx.fillRect(  6  *  scale,  7  * scale,  2 * scale,  1.5 * scale); //l ey e
    ctx.fillRect(  9  *  scale,  7  * scale,  2 * scale,  1.7 * scale); //r eye
    };
    ?*/