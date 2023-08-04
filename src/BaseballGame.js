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

  compareWithUser(numbers) {
    numbers = [...numbers].map(Number);
    this.#strike = this.checkStrike(numbers);
    this.#ball = this.checkBall(numbers) - this.#strike;
  }

  getBall() {
    return this.#ball;
  }

  getStrike() {
    return this.#strike;
  }

  checkStrike(numbers) {
    return numbers.filter((n, index) => {
      return n === this.#computer[index];
    }).length;
  }
  checkBall(numbers) {
    return CONSTANTS.validLength * 2 - new Set([...this.#computer, ...numbers]).size;
  }
}

module.exports = BaseballGame;
