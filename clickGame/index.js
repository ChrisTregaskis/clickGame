
    let clickToPlay = document.getElementById('click-to-play');
    let clickBtn = document.getElementById('record-click');
    let scoreTotal = document.getElementById('score');
    let timer = document.getElementById('timer');
    let endGameBox = document.getElementById('end-game-box');
    let leaderBoard = document.getElementById('leader-board');

    //if clicked, display press me button
    clickToPlay.addEventListener('click', () => {
        clickBtn.classList.add('record-click');
        clickBtn.classList.remove('preClick');
        endGameBox.classList.remove('end-game-box');
        endGameBox.classList.add('end-game-box-start');
        endGameBox.classList.remove('page-load-gif');
    });

    //create event listener to listen to clicks and + 1 each click

    var counter = 0;
    function recordClick() {
            counter++;
            scoreTotal.innerHTML = `<p>SCORE</p><p>${counter}</p>`;
        }
    clickBtn.addEventListener('click', recordClick);

    var seconds = 6;
    var interval;

    if(seconds === 0) {
        seconds = 6;
    }

    function timerFunction() {
        interval = setInterval(() => {
            seconds --;
            timer.innerHTML = `<p>TIMER</p><p>${seconds}</p>`;
            if(!seconds){
                clearInterval(interval);
                clickBtn.removeEventListener('click', recordClick);
                clickBtn.classList.add('preClick');
                clickBtn.classList.remove('record-click');
                seconds = 6;
                scoreTotal.innerHTML = `<p>SCORE</p><p>finished!</p>`;
                counter = 0;
                clickBtn.addEventListener('click', recordClick);
                endGameBox.classList.remove('end-game-box-start');
                endGameBox.classList.add('end-game-box');
                leaderBoard.dispatchEvent(roundOver)
            }
        }, 1000)
    }

    //when record-click pressed, start timer & display live score
    let timerFun = clickToPlay.addEventListener('click', () => {
        timerFunction();
        document.getElementById('click-to-play').removeEventListener('click', timerFun)
    });

    //when timer reaches 0, display name and score in leader-board
    var roundOver = new CustomEvent('roundOver', {
        bubbles: true,
        cancelable: true,
    });

    leaderBoard.addEventListener('roundOver', () => {
        var name = document.getElementById('name').value;
        var score = counter
        var recordScore = document.createElement('p');
        recordScore.textContent = name + ': ' + score;
        leaderBoard.appendChild(recordScore);
    });

