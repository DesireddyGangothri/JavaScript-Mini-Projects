'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('No Number!');

    // When the guess is out of range (less than 1 or more than 20)
    } else if (guess < 1 || guess > 20) {
        displayMessage('Type a number between 1 and 20!');

    // When player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        // Change background color of the whole body and number background to white
        document.querySelector('body').style.backgroundColor = 'lightgreen';
        document.querySelector('.number').style.backgroundColor = 'white';
        document.querySelector('.number').style.color = 'black'; // Change text color to black for contrast
        document.querySelector('.number').style.width = '30rem';

        // Check if high score needs to be updated
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // Determine how far the guess is from the secret number
            if (guess > secretNumber) {
                if (guess - secretNumber > 5) {
                    displayMessage('Too High!');
                } else {
                    displayMessage('High');
                }
            } else {
                if (secretNumber - guess > 5) {
                    displayMessage('Too Low!');
                } else {
                    displayMessage('Low');
                }
            }

            // Decrease score
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // Reset styles back to original state
    document.querySelector('body').style.backgroundColor = '#222';
    // document.querySelector('.number').style.backgroundColor = 'rgb(238, 40, 40)';
    // document.querySelector('.number').style.color = 'white';
    document.querySelector('.number').style.width = '15rem';
});

