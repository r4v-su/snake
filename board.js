import Snake from './snake.js';
import Food from './food.js';

//developer mode :)
var debugFlag = false; //powinno byc const

var debugInput = document.querySelector('#debugging'); 
debugInput.addEventListener('input', () => {
    debugFlag = true;
    debugInput.setAttribute('value', 'true');
    console.log(`let's have some fun!`)
}
)
if(debugFlag == true){console.log("'Hello, Snake!")};

//welcomescreen
var welcomeScreen = document.querySelector('.welcomeScreen'); //const fragment obiektu game
var startBtn = document.querySelector('.startButton');

var canvas = document.querySelector('.board');
var game = document.querySelector('.game');
var scoreBoard = document.querySelector('.scoreBoard');
var score = document.querySelector('.score');
var ctx = canvas.getContext('2d');

//sizing
// window.scale = 5; //const stala dla jednej gry
const scale = 5;
const rows = canvas.height / scale;
const cols = canvas.width / scale;

const snake = new Snake({scale, cols, rows, canvas, ctx}); //snake.js
const food = new Food({scale, cols, rows, ctx, debugFlag: false}); //food.js

//obejcts variables
// var snake = Object;
// var food = Object;
// var skull = Object;

//make game
function start(){   
    food.randomLocation(); //food.js
    let gameSpeed = 200; 
    window.setInterval(() => { //refreshing every
        let gameSpeed = 200; 
        ctx.clearRect(0, 0, canvas.width, canvas.height)
            snake.update();
            snake.draw();
            food.draw();
        if(snake.selfBite()){
                score.innerHTML = 0;
        }
        if (snake.eatFood(food)){
            if(debugFlag == true){console.log("YUM!")};
                score.innerHTML = snake.tail.length + 1;
                if(snake.tail.length % 2 == 0){
                    gameSpeed -= 20;
                }
                food.randomLocation();
        }
    }, gameSpeed);

};

//launch
startBtn.addEventListener('click', () => 
{
    welcomeScreen.style.display = 'none';
    scoreBoard.style.display = 'flex';
    canvas.style.display = 'block';
    start();
})

//setup controls
window.addEventListener('keydown', ((event)=> {
    var direction = event.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))

