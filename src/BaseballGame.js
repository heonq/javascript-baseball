const MissionUtils = require('@woowacourse/mission-utils');
const CONSTANTS = require('../utils/Constants');

class BaseballGame {
  #computer;
  #ball;
  #strike;

  constructor() {
    this.#computer = [];
    this.#ball = 0;
    this.#strike = 0;
  }

  generateRandomNumber() {
    const computer = [];
    while (computer.length < CONSTANTS.validLength) {
      const number = MissionUtils.Random.pickNumberInRange(
        CONSTANTS.minNumber,
        CONSTANTS.maxNumber,
      );
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.#computer = computer;
  }

  countBallAndStrike(numbers) {
    numbers = [...numbers].map(Number);
    this.checkStrike(numbers);
    this.checkBall(numbers);
  }

  checkStrike(numbers) {
    this.#strike = numbers.filter((n, index) => {
      return n === this.#computer[index];
    }).length;
  }

  checkBall(numbers) {
    this.#ball = numbers.filter((n, index) => {
      return n !== this.#computer[index] && this.#computer.includes(n);
    }).length;
  }

  getMessage() {
    if (this.#strike === 0 && this.#ball === 0) return CONSTANTS.nothing;
    if (this.#strike === 0) return this.#ball + CONSTANTS.ball;
    if (this.#ball === 0) return this.#strike + CONSTANTS.strike;
    return `${this.#ball + CONSTANTS.ball} ${this.#strike + CONSTANTS.strike}`;
  }

  checkWinning() {
    if (this.#strike === CONSTANTS.winningStrike) return true;
    return false;
  }
}

module.exports = BaseballGame;
