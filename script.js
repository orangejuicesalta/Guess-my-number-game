'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (number) {
  document.querySelector('.score').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is n0 input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!⛔';
    displayMessage('No Number!⛔');

    //when guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    //backcolor changes, width, and text color
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('body').style.color = '#eee';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥You lost the game!');
      displayScore(0);
      document.querySelector('.check').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.check').disabled = false;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'rgb(39, 36, 46)';
  document.querySelector('.number').style.width = '15rem';
});
