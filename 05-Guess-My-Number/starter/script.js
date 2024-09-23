'use strict';
        
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore=0;

const displayMessage = function(message){

    document.querySelector('.message').textContent=message;

}
   

document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value='';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = 20;

});

document.querySelector('.check').addEventListener(
    'click', function () {

        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        if (!guess) {

            // document.querySelector('.message').textContent = '...No number';
            displayMessage('No number!');

        } else if (secretNumber === guess) {

            document.querySelector('.number').textContent = secretNumber;
            // document.querySelector('.message').textContent = `Hurrah Correct Guess`;
            displayMessage('Hurrah Correct Guess');
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if(score > highScore){
            
                highScore = score;
                document.querySelector('.highscore').textContent=highScore;


            }


        } else if(guess !== secretNumber){
           
            if (score > 1) {

                // document.querySelector('.message').textContent = guess> secretNumber ?'Too high!' : 'Too low!';

                displayMessage(guess> secretNumber ? 'Too high!' : 'Too low!');
                score--;
                document.querySelector('.score').textContent = score;
                

            } else {

                // document.querySelector('.message').textContent = `You loose the Game`;
                displayMessage(`You loose the Game`);
                document.querySelector('.score').textContent = 0;

            }

        }
        

    }
)