
//developer mode :)
var debugFlag = false;
var debugInput = document.querySelector('#debugging');
debugInput.addEventListener('input', () => {
    debugFlag = true;
    debugInput.setAttribute('value', 'true');
    console.log(`let's have some fun!`)
}
)
if(debugFlag == true){console.log("'Hello, Snake!")};

//welcomescreen
var welcomeScreen = document.querySelector('.welcomeScreen');
var startBtn = document.querySelector('.startButton');

var canvas = document.querySelector('.board');
var game = document.querySelector('.game');
var scoreBoard = document.querySelector('.scoreBoard');
var score = document.querySelector('.score');
var ctx = canvas.getContext('2d');

//sizing
var scale = 5;
var rows = canvas.height / scale;
var cols = canvas.width / scale;

//obejcts variables
var snake = Object;
var food = Object;
var skull = Object;


//make game
function start(){   
    snake = new Snake(); //snake.js
    food = new Food(); //food.js
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

