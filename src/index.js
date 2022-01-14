  //TASK 2
  // 'use strict';
  // const min = 1;
  // const max  = 100;
  // const maxGuess = 10;
  // let startTime = Date.now();

  // let randomNumber = Math.floor(Math.random() * max) + min;
  // const guesses = document.querySelector('.guesses');
  // const lastResult = document.querySelector('.lastResult');
  // const lowOrHi = document.querySelector('.lowOrHi');
  // const guessSubmit = document.querySelector('.guessSubmit');
  // const guessField = document.querySelector('.guessField');
  // const timeField = document.querySelector('.time');

  // let guessCount = 1;
  // let resetButton;

  // const checkGuess = () => {
  //   const userGuess = Number(guessField.value);
  //   if (guessCount === 1) {
  //     guesses.textContent = 'Previous guesses: ';
  //   }

  //   guesses.textContent += userGuess + ' ';

  //   if (userGuess === randomNumber) {
  //     lastResult.textContent = 'Congratulations! You got it right!';
  //     lastResult.style.backgroundColor = 'green';
  //     lowOrHi.textContent = '';
  //     stopTimer();
  //     setGameOver();
  //   } else if (guessCount === maxGuess) {
  //     lastResult.textContent = '!!!GAME OVER!!!';
  //     lowOrHi.textContent = '';
  //     stopTimer();
  //     setGameOver();
  //   } else {
  //     lastResult.textContent = 'Wrong!';
  //     lastResult.style.backgroundColor = 'red';
  //     if(userGuess < randomNumber) {
  //       lowOrHi.textContent = 'Last guess was too low!' ;
  //     } else if(userGuess > randomNumber) {
  //       lowOrHi.textContent = 'Last guess was too high!';
  //     }
  //   }

  //   guessCount++;
  //   guessField.value = '';
  //   guessField.focus();
  // };

  // guessSubmit.addEventListener('click', checkGuess);

  // const setGameOver = () => {
  //   guessField.disabled = true;
  //   guessSubmit.disabled = true;
  //   resetButton = document.createElement('button');
  //   resetButton.textContent = 'Start new game';
  //   document.body.appendChild(resetButton);
  //   resetButton.addEventListener('click', resetGame);
  // };

  // const resetGame = () => {
  //   guessCount = 1;
  //   startTime = Date.now();
  //   const resetParas = document.querySelectorAll('.resultParas p');
  //   for (const resetPara of resetParas) {
  //     resetPara.textContent = '';
  //   }

  //   timeField.textContent = '';

  //   resetButton.parentNode.removeChild(resetButton);
  //   guessField.disabled = false;
  //   guessSubmit.disabled = false;
  //   guessField.value = '';
  //   guessField.focus();
  //   lastResult.style.backgroundColor = 'white';
  //   randomNumber = Math.floor(Math.random() * max) + min;
  // };

  // const stopTimer = () => {
  //   const stopTime = Date.now() - startTime;

  //   if (guessCount === maxGuess)  {
  //     timeField.textContent += 'Your time: ' + Math.floor(stopTime / 1000) + ' seconds!';
  //   }
  //   else {
  //     timeField.textContent += 'Your time: ' + Math.floor(stopTime / 1000) + ' seconds! It took you ' + guessCount + ' guesses.';
  //   }
  // };

  //TASK 3

  'use strict';

  const coursesEn = [
    "Hamburger, cream sauce and poiled potates",
    "Goan style fish curry and whole grain rice",
    "Vegan Chili sin carne and whole grain rice",
    "Broccoli puree soup, side salad with two napas",
    "Lunch baguette with BBQ-turkey filling",
    "Cheese / Chicken / Vege / Halloum burger and french fries"
  ];

  const mainElem = document.querySelector(".container");

  let htmlKoodi = ``;

  for (let i = 0; i < coursesEn.length; i++) {
    htmlKoodi +=
      `<div class="lista">
          <li>${coursesEn[i]}</li>
        </div>`;
  }

  mainElem.innerHTML = htmlKoodi;

