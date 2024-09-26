'use strict';

const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El2 = document.querySelector('#score--1');

const current01 = document.getElementById('current--0');
const current02 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting condition
score0El.textContent = 0;
score1El2.textContent = 0;
diceEl.classList.add('hidden');

const array = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {

    // Generate a Random Number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true , switch to next player
    if (dice != 1) {

        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {

        // Switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        playerEl0.classList.toggle('player--active');
        playerEl1.classList.toggle('player--active');
    }

});

