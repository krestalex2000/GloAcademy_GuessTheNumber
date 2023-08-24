"use strict"

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const ATTEMPS = 10;

const getRandomNumberInRange = function(start, end) {
  const range = Math.abs(end - start) + 1;
  const number = Math.floor(Math.random() * range + 1);

  return number
}

const countAttempts = function(num) {
  return num--
}

const isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
};

const game = function() {
  const randomNumber = getRandomNumberInRange(MIN_NUMBER, MAX_NUMBER);
  let countAttemps = countAttempts(ATTEMPS)

  return function() {
    let userNumber = prompt(
      "Угадай число от " + MIN_NUMBER + " до " + MAX_NUMBER
    );

    if (countAttemps > 0){

      if ( userNumber === null) {
      alert("Игра окончена");
      return
      }

      if (isNumber(userNumber)) {
        userNumber = parseFloat(userNumber);
        
        if (userNumber > randomNumber) {
          alert("Загаданное число меньше");
          countAttempts(ATTEMPS);
          startGame();
        } else if (userNumber < randomNumber) {
          alert("Загаданное число больше");
          countAttempts(ATTEMPS);
          startGame();
        } else {
          alert("Поздравляю, Вы угадали!!!");
          if (confirm("Попытки закончились, хотите сыграть еще?")) {
            game();
            startGame();
          } else {
            alert("Игра окончена");
          }
        }
        
      } else {
        alert("Введи число!");
        startGame();
      }
    } else {
      if (confirm("Попытки закончились, хотите сыграть еще?")) {
        game();
        startGame();
      } else {
        alert("Игра окончена");
      }
    }
  }  
}

const startGame = game();

startGame()

