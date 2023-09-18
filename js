'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;

let score=20;

let highScore=0;

const displayMessage=function (message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.again').addEventListener('click',function (){
    score=20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=score;
    displayMessage('Start Guessing...');
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';

    document.querySelector('.number').style.width='15rem';
    document.querySelector('body').style.backgroundColor='#CC4444'
})


document.querySelector('.check').addEventListener('click',function (){
    const guess =Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    if (!guess) {
        displayMessage('💔 No Number');

    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '👇🏻 Go low!' : '👆🏻 UpUpUp!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('Lost the Game 👮🏻');
            document.querySelector('.score').textContent = 0;
        }
    }
})
