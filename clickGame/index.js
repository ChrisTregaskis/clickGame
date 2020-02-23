
let clickToPlay = document.getElementById('click-to-play');
let clickBtn = document.getElementById('record-click');
let scoreTotal = document.getElementById('score');
let timer = document.getElementById('timer');
let endGameBox = document.getElementById('end-game-box');
let leaderBoard = document.getElementById('leader-board');

//if clicked, display press me button
clickToPlay.addEventListener('click', () => {
    if(document.getElementById('name').value.length !== 0) {
        clickBtn.classList.add('record-click');
        clickBtn.classList.remove('preClick');
        endGameBox.classList.remove('end-game-box');
        endGameBox.classList.add('end-game-box-start');
        endGameBox.classList.remove('page-load-gif');
    } else {
        alert('Please enter your player name!')
    }
});

//create event listener to listen to clicks and + 1 each click
var counter = 0;
function recordClick() {
    counter++;
    scoreTotal.textContent = counter;
}

clickBtn.addEventListener('click', recordClick);

//create function to count down time and handle end round logic
var seconds = 6;
var interval;

if(seconds === 0) {
    seconds = 6;
}

function timerFunction() {
    interval = setInterval(() => {
        seconds --;
        timer.textContent = seconds;
        if(!seconds){
            clearInterval(interval);
            clickBtn.removeEventListener('click', recordClick);
            clickBtn.classList.add('preClick');
            clickBtn.classList.remove('record-click');
            seconds = 6;
            // scoreTotal.textContent = 'finished!';
            counter = 0;
            clickBtn.addEventListener('click', recordClick);
            endGameBox.classList.remove('end-game-box-start');
            endGameBox.classList.add('end-game-box');
            leaderBoard.dispatchEvent(gameOver)
        }
    }, 1000)
}

//when record-click pressed, start timer & display live score

let timerFun = clickToPlay.addEventListener('click', () => {
    if(document.getElementById('name').value.length !== 0) {
        timerFunction();
        document.getElementById('click-to-play').removeEventListener('click', timerFun)
    }
});

//when timer reaches 0, display name and score in leader-board
var gameOver = new CustomEvent('roundOver', {
    bubbles: true,
    cancelable: true
});

leaderBoard.addEventListener('roundOver', () => {
    var name = document.getElementById('name').value;
    var score = scoreTotal.textContent;
    var recordScore = document.createElement('p');
    recordScore.textContent = name + ': ' + score;
    leaderBoard.appendChild(recordScore);
});


