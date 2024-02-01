'use strict';

//Set initial game secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.check').disabled = true;
    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      gameLoss();
    }
    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      gameLoss();
    }
  }
});

//Game lose screen
function gameLoss() {
  document.querySelector('.message').textContent = '💥 You Lose!';
  document.querySelector('.score').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#FF0606';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.check').disabled = true;
}

//Restart game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.check').disabled = false;
});
