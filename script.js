"use strict"

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const getRandomNumberInRange = function(start, end) {
  const range = Math.abs(end - start) + 1;
  const number = Math.floor(Math.random() * range + 1);

  return number
}

const isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
};

const game = function() {
  const randomNumber = getRandomNumberInRange(MIN_NUMBER, MAX_NUMBER);

  return function() {
    let userNumber = prompt(
      "Угадай число от " + MIN_NUMBER + " до " + MAX_NUMBER
    );

    if ( userNumber === null) {
      alert("Игра окончена");
      return
    }

    if (isNumber(userNumber)) {
      userNumber = parseFloat(userNumber);

      if (userNumber > randomNumber) {
        alert("Загаданное число меньше");
        startGame();
      } else if (userNumber < randomNumber) {
        alert("Загаданное число больше");
        startGame();
      } else {
        alert("Поздравляю, Вы угадали!!!");
      }

    } else {
      alert("Введи число!");
      startGame();
    }
  }  
}

const startGame = game();

startGame()

